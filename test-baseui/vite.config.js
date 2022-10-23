import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import Markdown from 'vite-plugin-md'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    include:[/\.md$/,/\.vue$/]
  }),Markdown()],

  build:{
    rollupOptions:{
      external:["vue"],
      output:{
        globals:{
          vue:"Vue"
        }
      }
    },
    lib:{
      entry:"./packages/index.js",
      name:"stre-baseui"
    }
  },
  resolve:{
    alias:{
      // vue:"vue/dist/vue.esm-bundler.js",
      '@':resolve(__dirname,'src')
    }
  },
  css:{
    preprocessorOptions:{
      scss:{
        additionalData:`@use "./src/assets/styles/style.scss" as *;`
      }
    }
  }
})
