import react from '@astrojs/react';

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
  buildOptions: {
    site: 'https://renewware.netlify.app/', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
    sitemap: true, // Generate sitemap (set to "false" to disable)
  },
  integrations: [react()],
});
