// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/color-mode', 
    '@nuxtjs/strapi',
    'nuxt-icon', 
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true
  },
  strapi: {
    url: process.env.API_BASE,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE
      // apiBase: "http://localhost:1337/api"
    }
  },
})
