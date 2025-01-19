// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module", "@nuxtjs/tailwindcss", "@nuxt/icon"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
});