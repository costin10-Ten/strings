import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // 1. 這裡一定要填你的 GitHub 網址，結尾不要有斜線
  site: 'https://costin10-ten.github.io',
  
  // 2. 這裡填你的 Repository 名字，前後都要有斜線
  base: '/strings', 
  
  integrations: [sitemap()],
});
