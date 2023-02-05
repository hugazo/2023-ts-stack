import { initializeApp } from 'firebase/app';
import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
// import {
//   getFirestore, collection, connectFirestoreEmulator,
// } from 'firebase/firestore';
// import { getStorage, connectStorageEmulator } from 'firebase/storage';

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

declare global {
  interface Window {
    FIREBASE_APPCHECK_DEBUG_TOKEN?: string,
  }
}

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

const firebaseInstance = initializeApp(firebaseConfig);

initializeAppCheck(firebaseInstance, {
  provider: new ReCaptchaV3Provider(FIREBASE_RECAPTCHA_KEY),
  isTokenAutoRefreshEnabled: true,
});

if (MODE === 'development') {
  // eslint-disable-next-line no-console
  console.log('Firebase App Initialized with Appcheck Debug Token');
  const { FIREBASE_APPCHECK_DEBUG_TOKEN } = import.meta.env;
  // eslint-disable-next-line no-restricted-globals
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = FIREBASE_APPCHECK_DEBUG_TOKEN;
}

export default firebaseInstance;
