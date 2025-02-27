// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from "@primevue/themes/aura";
import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  devServer: {
    port: 3000,
  },
  modules: ["@primevue/nuxt-module", "@nuxtjs/tailwindcss", "@nuxt/icon"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
});
