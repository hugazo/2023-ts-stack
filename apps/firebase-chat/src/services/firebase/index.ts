import { initializeApp } from 'firebase/app';
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
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
  apiKey: FIREBASE_API_KEY as string,
  authDomain: FIREBASE_AUTH_DOMAIN as string,
  projectId: FIREBASE_PROJECT_ID as string,
  storageBucket: FIREBASE_STORAGE_BUCKET as string,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID as string,
  appId: FIREBASE_APP_ID as string,
};

const firebaseInstance = initializeApp(firebaseConfig);

// initializeAppCheck(firebaseInstance, {
//   provider: new ReCaptchaV3Provider(FIREBASE_RECAPTCHA_KEY),
//   isTokenAutoRefreshEnabled: true,
// });

export default firebaseInstance;

// export const db = getFirestore(firebaseInstance);
// export const storage = getStorage(firebaseInstance);

// if (MODE === 'development') {
//   // eslint-disable-next-line no-console
//   console.log('Firebase App Initialized with Appcheck Debug Token');
//   const { FIREBASE_APPCHECK_DEBUG_TOKEN } = import.meta.env;
//   // eslint-disable-next-line no-restricted-globals
//   self.FIREBASE_APPCHECK_DEBUG_TOKEN = FIREBASE_APPCHECK_DEBUG_TOKEN;
//   connectFirestoreEmulator(db, 'localhost', 8080);
//   // connectStorageEmulator(storage, 'localhost', 9199);
// }

// export const plan = collection(db, 'plans');
// export const company = collection(db, 'companies');
// export const workspace = collection(db, 'workspaces');
// export const campaign = collection(db, 'campaigns');
// export const clients = collection(db, 'clients');
// export const task = collection(db, 'tasks');
// export const user = collection(db, 'users');
// export const video = collection(db, 'videos');
// export const project = collection(db, 'project');
