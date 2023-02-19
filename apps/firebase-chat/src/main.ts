// Vue main app
import { createApp } from 'vue';
// Firebase plugin
import { VueFire, VueFireAuth } from 'vuefire';
import firebaseApp from '@services/firebase';
// State management
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
// Ui Library
import { Quasar, Notify } from 'quasar';
import quasarIconSet from 'quasar/icon-set/mdi-v6';
import '@quasar/extras/mdi-v6/mdi-v6.css';
import 'quasar/src/css/index.sass';
// Router
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from '~pages';

import App from './App.vue';

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
app.use(pinia);

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes,
});
app.use(router);

app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireAuth(),
  ],
});

app.use(Quasar, {
  plugins: {
    Notify,
  },
  iconSet: quasarIconSet,
});

app.mount('#app');
