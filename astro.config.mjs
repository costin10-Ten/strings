import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ★ 部署前請修改 site 與 base：
//   - 個人根網域 (username.github.io)：site='https://username.github.io', base='/'
//   - 專案子目錄 (username.github.io/repo)：site='https://username.github.io', base='/repo'
export default defineConfig({
  site: 'https://costin10-Ten.github.io',
  base: '/strings',
  integrations: [sitemap()],
  output: 'static',
  build: {
    assets: '_assets',
  },
  compressHTML: true,
});
