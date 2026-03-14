import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://costin10-ten.github.io',
  base: '/strings',
  output: 'static',
  build: {
    assets: '_assets',
  },
  compressHTML: true,
});
