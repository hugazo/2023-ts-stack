import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Pages from 'vite-plugin-pages';
import Layouts from 'vite-plugin-vue-layouts';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src',
      '@store': '/src/store',
      '@components': '/src/components',
    },
  },
  plugins: [
    Vue(),
    Pages(),
    Layouts(),
  ],
  server: {
    port: 3000,
  },
});
