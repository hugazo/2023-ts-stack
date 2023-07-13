import { FirebaseApp, initializeApp } from 'firebase/app';
import { initializeAppCheck, AppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

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
};

let firebaseInstance: FirebaseApp;
let appCheckInstance: AppCheck;

export const initializeFirebaseApp = (firebaseConfig: FirebaseInitConfig): FirebaseApp => {
  // Check optional Firebase Appcheck Debug Token in Development Mode
  const {
    MODE,
    firebaseAppCheckDebugToken,
  } = firebaseConfig;
  if (MODE === 'development') {
    if (!firebaseAppCheckDebugToken) {
      throw new Error('Firebase Appcheck Debug Token is required in development mode');
    }
    // eslint-disable-next-line no-console
    console.log('Firebase App Initialized with Appcheck Debug Token From Firebase Service Library');
    // eslint-disable-next-line no-restricted-globals
    self.FIREBASE_APPCHECK_DEBUG_TOKEN = firebaseAppCheckDebugToken;
  }
  // Checks if required Firebase config is provided
  const {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
    firebaseRecaptchaKey,
  } = firebaseConfig;
  if (
    !apiKey
    || !authDomain
    || !projectId
    || !storageBucket
    || !messagingSenderId
    || !appId
    || !firebaseRecaptchaKey
  ) {
    throw new Error('Missing required Firebase config');
  }
  try {
    // Checks required Firebase config
    // Returns Firebase App if already initialized
    if (firebaseInstance) {
      return firebaseInstance;
    }
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
    const appCheck = initializeAppCheck(instance, {
      provider: new ReCaptchaV3Provider(firebaseRecaptchaKey),
      isTokenAutoRefreshEnabled: true,
    });
    appCheckInstance = appCheck;
    firebaseInstance = instance;
    return instance;
  } catch (e) {
    throw new Error('Error initializing firebase app');
  }
};

export const getFirebaseInstance = (): FirebaseApp => {
  if (!firebaseInstance) {
    throw new Error('Firebase app is not initialized');
  }
  return firebaseInstance;
};

export const getAppCheckInstance = (): AppCheck => {
  if (!appCheckInstance) {
    throw new Error('Firebase appcheck is not initialized');
  }
  return appCheckInstance;
};
