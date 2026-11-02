// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SITE_URL and BASE_PATH are set by the deploy workflow.
// While the site lives at me565.github.io/laminelahouasnia.com the base is
// "/laminelahouasnia.com"; once the custom domain is live it becomes "/".
const site = process.env.SITE_URL ?? 'https://laminelahouasnia.com';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
