import { defineConfig } from 'astro/config'

import robotsTxt from "astro-robots-txt"

import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";




// https://astro.build/config
export default defineConfig({
  integrations: [robotsTxt(), react(), tailwind({ applyBaseStyles: false })],
  site: 'https://porfolio.dev/',

  vite: {
    plugins: []
  }
})