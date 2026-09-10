// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://amnaalbasher.com',
  output: 'static',
  integrations: [sitemap(), mdx()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
  },
});
