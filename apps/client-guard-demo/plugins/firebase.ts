import { VueFire, VueFireAuth } from 'vuefire';
import {
  initializeFirebaseApp,
  initializeAuthInstance,
  FirebaseInitConfig,
  AuthInitializationSettings,
} from '@services/firebase';

export default defineNuxtPlugin(async (nuxtApp) => {
  const { public: firebaseConfig } = useRuntimeConfig();

  // Initialize Firebase app from monorepo library
  const firebaseApp = initializeFirebaseApp(firebaseConfig as FirebaseInitConfig);

  // Initialize Base auth config
  const authSettings: AuthInitializationSettings = {
    MODE: firebaseConfig.mode,
  };

  // Set auth emulator settings if in development mode
  if (firebaseConfig.mode === 'development') {
    // eslint-disable-next-line import/no-extraneous-dependencies
    const firebaseEmulatorSettings = await import('local-emulator/firebase.json');
    authSettings.FIREBASE_EMULATOR_HOST = 'localhost';
    authSettings.FIREBASE_AUTH_PORT = firebaseEmulatorSettings.emulators.auth.port.toString();
  }

  initializeAuthInstance(authSettings);

  nuxtApp.vueApp.use(VueFire, {
    firebaseApp,
    modules: [
      VueFireAuth(),
    ],
  });
});
