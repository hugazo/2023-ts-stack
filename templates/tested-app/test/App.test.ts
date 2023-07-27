import { createApp } from 'vue';
import { test, expect } from 'vitest';
import App from '../src/App.vue';

test('app', () => {
  const app = createApp(App);

  expect(app).toBeTruthy();
});
