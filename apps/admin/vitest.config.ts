/// <reference types="vitest" />
import { defineConfig, mergeConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const viteConfig = defineConfig({
  plugins: [vue()],
});

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
}));
