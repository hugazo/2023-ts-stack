import { createApp } from 'vue';
import { test, expect, describe } from 'vitest';
import App from '../app.vue';

test('app', () => {
  const app = createApp(App);

  expect(app).toBeTruthy();
});
