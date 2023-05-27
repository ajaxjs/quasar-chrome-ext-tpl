import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { resolve } from "path"
import webExtension from '@samrum/vite-plugin-web-extension'
import manifest from './src/manifest.js'

import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

const outDir = resolve(__dirname, "dist")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({template: { transformAssetUrls }}), 
    vueJsx(), 
    webExtension({manifest}),
    quasar({sassVariables: 'src/quasar-variables.sass'})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    outDir,
    rollupOptions: {
      input: {
        option: resolve(__dirname, 'option.html'),
        popup: resolve(__dirname, 'popup.html'),
      },
      output: {
        entryFileNames: "assets/[name].js",
        chunkFileNames: 'assets/[name].js'
      }
    }
  }
})
