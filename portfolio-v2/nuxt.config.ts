import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/scripts", "motion-v/nuxt"],

  vite: {
    plugins: [tailwindcss()],
  },

  compatibilityDate: "2024-11-01",
});
