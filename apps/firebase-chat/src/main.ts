import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';

const app = createApp(App);
// Pinia store logic
const pinia = createPinia();
app.use(pinia);

app.mount('#app');
