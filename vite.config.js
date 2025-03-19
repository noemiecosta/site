import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "vue-leaflet": "vue-leaflet/dist/vue-leaflet.es.js",
    },
  },
});
