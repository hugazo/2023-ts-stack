import { FirebaseApp, initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

declare global {
  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: string,
  }
}
export type FirebaseInitConfig = {
  apiKey: string,
  authDomain: string,
  projectId: string,
  storageBucket: string,
  messagingSenderId: string,
  appId: string,
  MODE?: string,
  firebaseRecaptchaKey: string,
  firebaseAppCheckDebugToken?: string,
}

export type FirebaseInstanceStatus = FirebaseApp | null;

export let firebaseInstance: FirebaseInstanceStatus = null;

export const initializeFirebaseApp = (firebaseConfig: FirebaseInitConfig): FirebaseApp => {
  try {
    // Gets Values
    const {
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
      MODE,
      firebaseRecaptchaKey,
      firebaseAppCheckDebugToken,
    } = firebaseConfig;
    // Initializes Firebase App
    const instance = initializeApp({
      apiKey,
      authDomain,
      projectId,
      storageBucket,
      messagingSenderId,
      appId,
    });
    // Initializes Firebase Appcheck
    initializeAppCheck(instance, {
      provider: new ReCaptchaV3Provider(firebaseRecaptchaKey),
      isTokenAutoRefreshEnabled: true,
    });
    // Initializes Firebase Appcheck Debug Token in Development Mode
    if (MODE === 'development') {
      if (!firebaseAppCheckDebugToken) {
        throw new Error('Firebase Appcheck Debug Token is required in development mode');
      }
      // eslint-disable-next-line no-console
      console.log('Firebase App Initialized with Appcheck Debug Token From Firebase Service Library');
      self.FIREBASE_APPCHECK_DEBUG_TOKEN = firebaseAppCheckDebugToken;
    }
    firebaseInstance = instance;
    return instance;
  } catch (e) {
    throw new Error('Error initializing firebase app');
  }
}

export default {
  initializeFirebaseApp,
  firebaseInstance,
};
