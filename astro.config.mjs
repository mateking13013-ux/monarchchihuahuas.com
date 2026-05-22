import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://monarchchihuahuas.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});
