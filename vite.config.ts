import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Example how to copy files to dist folder that vite doesn't catch (like from index.html)
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/image/logo_small.webp',
          dest: 'assets',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@src': "/src",
      '@type': "/src/@type",
      '@context': "/src/@context",
      '@page': "/src/@page",
      '@util': "/src/@util",
      "@component": ["/src/@component"],
    },
  },
  server: {
    proxy: {
      // Example of proxy for any local setup
      '/_/':{
        target: 'http://url.local/',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
