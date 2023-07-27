// Vue main app
import { createApp } from 'vue';
// Firebase plugin
import { VueFire, VueFireAuth } from 'vuefire';
import { initializeFirebaseApp } from '@services/firebase';

// State management
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
// Ui Library
import { Quasar, Notify } from 'quasar';
import quasarIconSet from 'quasar/icon-set/mdi-v6';
import '@quasar/extras/mdi-v6/mdi-v6.css';
import 'quasar/src/css/index.sass';
// Animations
import '@quasar/extras/animate/fadeIn.css';
import '@quasar/extras/animate/fadeOut.css';

// Router
import { createRouter, createWebHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from '~pages';

import App from './App.vue';

const app = createApp(App);

const pinia = createPinia();
pinia.use(piniaPluginPersistedState);
app.use(pinia);
// Firebase initialization
const {
  // FIREBASE ENV CONFIG
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID,
  FIREBASE_APP_ID,
  // LOCAL APPCHECK CONFIG
  FIREBASE_RECAPTCHA_KEY,
  MODE,
} = import.meta.env;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  firebaseRecaptchaKey: FIREBASE_RECAPTCHA_KEY,
  mode: MODE,
};

const firebaseApp = initializeFirebaseApp(firebaseConfig);

// esilnt-disable-next-line
console.log('Firebase Initialized: ', firebaseApp);

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
