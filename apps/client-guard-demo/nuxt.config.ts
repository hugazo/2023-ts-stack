// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  runtimeConfig: {
    // Will be available in client
    public: {
      mode: process.env.MODE,
      apiKey: process.env.FIREBASE_API_KEY,
      authDomain: process.env.FIREBASE_AUTH_DOMAIN,
      projectId: process.env.FIREBASE_PROJECT_ID,
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.FIREBASE_APP_ID,
      firebaseRecaptchaKey: process.env.FIREBASE_RECAPTCHA_KEY,
      appCheckDebugToken: process.env.FIREBASE_APPCHECK_DEBUG_TOKEN,
    },
  },
  modules: [
    '@nuxtjs/eslint-module',
  ],
});
