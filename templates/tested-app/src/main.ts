import { createApp } from 'vue';
import { Quasar } from 'quasar';

import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/mdi-v7/mdi-v7.css';

import 'quasar/src/css/index.sass';

import App from './App.vue';

const app = createApp(App);

app.use(
  Quasar,
  {
    config:
    {
      extras: [
        'roboto-font',
      ],
    },
  },
);

app.mount('#app');
