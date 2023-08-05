import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy';



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
     legacy({
      targets: ['defaults','not IE 11'],
      
    }),
    vue(),
   
    
  ],
  base:'/BVTS/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
 
  build: {
    rollupOptions: {
      output: {
        
        manualChunks: {
          generateSitemap: ['generateSitemap.js'],
        },
      },
    },
  },

  scripts: [
    {
      src: './generateSitemap.js',
      type: 'module',
      async run() {},
    },
  ],



})

