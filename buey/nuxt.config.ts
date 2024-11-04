// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-04',

  devtools: { enabled: true },
  css: [
    "bootstrap/dist/css/bootstrap.min.css",
    '@/public/acssories.css',
  ],
  modules: ["@nuxt/ui", "@nuxt/image", 'nuxt-parallax', 'nuxt-aos'],

  experimental: {
    renderJsonPayloads: false
    }

  

})

