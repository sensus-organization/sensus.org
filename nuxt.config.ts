
const isProduction = process.env.NODE_ENV === 'production'
const strapiUrl =
  process.env.NUXT_PUBLIC_STRAPI_URL || (isProduction ? 'https://cms.sensus.org' : 'http://localhost:1337')

const RETRY_DELAYS = [500, 1000, 2000, 4000]

async function strapiList<T>(path: string): Promise<T[]> {
  const url = `${strapiUrl}/api/${path}`
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(url).catch((error) => {
      throw new Error(`[prerender] Strapi unreachable at ${url}: ${(error as Error)?.message}`)
    })
    if (res.ok) return ((await res.json()) as { data?: T[] }).data || []
    if (res.status === 429 && attempt < RETRY_DELAYS.length) {
      console.warn(`[prerender] Strapi rate limited ${url}, retrying in ${RETRY_DELAYS[attempt]}ms`)
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAYS[attempt]))
      continue
    }
    throw new Error(
      res.status === 429
        ? `[prerender] Strapi rate limit (429) for ${url} still hit after ${attempt + 1} attempts. Slow the build or retry later.`
        : `[prerender] Strapi responded ${res.status} for ${url}`
    )
  }
}

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*(?:\/[a-z0-9]+(?:-[a-z0-9]+)*)*$/

function safeSlug(slug: unknown, kind: string): string | null {
  if (typeof slug === 'string' && SLUG_PATTERN.test(slug)) return slug
  console.warn(`[prerender] skipping ${kind} with unsafe slug: ${JSON.stringify(slug)}`)
  return null
}

const SECURITY_HEADERS = {
  'content-security-policy': "frame-ancestors 'none'",
  'x-frame-options': 'DENY',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/fonts'],

  runtimeConfig: {
    public: {
      strapiUrl
    }
  },

  app: {
    head: {
      title: 'SensUs | The Global Competition for Biosensors',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'SensUs is the annual international student competition on sensors for health. Join students, industry, and healthcare professionals accelerating biosensor innovation.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: 'https://cdn.sensus.org/branding/logo-rgb.svg' }
      ]
    }
  },

  fonts: {
    families: [
      { name: 'Montserrat', provider: 'google', weights: [300, 400, 500, 600, 700, 800] }
    ]
  },

  css: ['~/assets/css/main.css'],

  nitro: {
    prerender: {
      failOnError: true
    },

    routeRules: {
      '/**': { headers: SECURITY_HEADERS }
    },

    hooks: {
      async 'prerender:routes'(routes) {
        routes.add('/')
        routes.add('/news')

        for (const page of await strapiList<{ slug?: string }>('pages?fields[0]=slug&pagination[pageSize]=100')) {
          const slug = safeSlug(page?.slug, 'page')
          if (slug) routes.add(`/${slug}`)
        }
        for (const edition of await strapiList<{ year?: number }>('editions?fields[0]=year&pagination[pageSize]=100')) {
          if (Number.isInteger(edition?.year)) routes.add(`/archive/${edition.year}`)
          else console.warn(`[prerender] skipping edition with unsafe year: ${JSON.stringify(edition?.year)}`)
        }
        for (const article of await strapiList<{ slug?: string }>('news-articles?fields[0]=slug&pagination[pageSize]=200')) {
          const slug = safeSlug(article?.slug, 'news article')
          if (slug) routes.add(`/news/${slug}`)
        }
      }
    }
  }
})
