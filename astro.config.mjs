import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://afterglowautomations.com',
  integrations: [sitemap({
    filter: (page) => !page.includes('/ad-start-card') && !page.includes('/ad-end-card'),
  })],
});
