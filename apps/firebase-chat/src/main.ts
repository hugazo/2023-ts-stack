import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';

import App from './App.vue';

const app = createApp(App);
// Pinia store logic
const pinia = createPinia();

const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(pinia);

app.use(router);

app.mount('#app');
