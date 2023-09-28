import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/',

  build: {
    outDir: '../dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        client: resolve(__dirname, 'src/client/index.html'),
        education: resolve(__dirname, 'src/education/index.html')
      },
    },
  },
});
