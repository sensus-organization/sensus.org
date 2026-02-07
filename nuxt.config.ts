
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@nuxt/ui', '@nuxt/fonts'],

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

  css: ['~/assets/css/main.css']
})