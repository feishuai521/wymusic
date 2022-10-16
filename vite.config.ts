import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      sass: {
        prependData: `@import "./src/minx/css/style.scss";`,
      },
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://cloud-music.pl-fe.cn/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
