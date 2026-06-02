// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://kevinsptx.github.io/Manual/',
  base: '/Manual/',
  vite: {
    plugins: [tailwindcss()]
  }
});