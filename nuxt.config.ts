// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8080,
    url: "http://localhost:8080"
  },

  modules: [
    '@nuxt/devtools',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],

  i18n: {
    locales: [
      { code: 'en', iso: 'en-EN', file: 'en-EN.json', domain: 'https://arabia-meet.vercel.app' },
      { code: 'ar', iso: 'ar-AR', file: 'ar-AR.json', domain: 'https://ar.arabia-meet.vercel.app'}
    ],
    langDir: 'lang',
    lazy: true,
    defaultLocale: 'en',
    differentDomains: true,
    vueI18n: {
      legacy: false,
      locale: 'en',
      fallbackLocale: 'en',
    }
  },

  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER_ID: process.env.FIREBASE_MESSAGING_SENDER_ID,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID
    }
  },

  css: ['~/assets/scss/main.scss'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
