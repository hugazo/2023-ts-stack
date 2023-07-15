import type { FirebaseInitConfig } from '@services/firebase';
import { initializeFirebaseApp } from '@services/firebase';
import { useRuntimeConfig } from '#imports';

export default defineNuxtRouteMiddleware(() => {
  const { public: firebaseConfig } = useRuntimeConfig();

  const firebaseApp = initializeFirebaseApp(firebaseConfig as FirebaseInitConfig);

  // eslint-disable-next-line no-console
  console.log('Firebase App Initialized', firebaseApp);
});
