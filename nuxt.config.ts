// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    '@use-wagmi/nuxt',
    [
      '@nuxtjs/google-fonts',
      {
        families: { 'League+Spartan': true },
      },
    ],
  ],
  css: ['@/assets/css/globals.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false
  },
})
