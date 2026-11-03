// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321",
  fonts: [{
    provider: fontProviders.google(),
    name: "Exo 2",
    cssVariable: "--font-exo"
  }],
  integrations: [sitemap()]
});