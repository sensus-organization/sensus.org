
const isProduction = process.env.NODE_ENV === 'production'
const strapiUrl =
  process.env.NUXT_PUBLIC_STRAPI_URL || (isProduction ? 'https://cms.sensus.org' : 'http://localhost:1337')

const SECURITY_HEADERS = {
  'content-security-policy': "frame-ancestors 'none'",
  'x-frame-options': 'DENY',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'referrer-policy': 'strict-origin-when-cross-origin',
  'permissions-policy': 'camera=(), microphone=(), geolocation=(), interest-cohort=()'
}

const SWR_SECONDS = Number(process.env.NUXT_PAGE_SWR_SECONDS ?? 3600)

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/fonts'],

  runtimeConfig: {
    revalidateSecret: process.env.NUXT_REVALIDATE_SECRET || '',
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
    routeRules: {
      '/**': { headers: SECURITY_HEADERS, swr: SWR_SECONDS },
      '/api/revalidate': { headers: SECURITY_HEADERS, swr: false, cache: false },
      '/_nuxt/**': { headers: { ...SECURITY_HEADERS, 'cache-control': 'public, max-age=31536000, immutable' } }
    }
  }
})
