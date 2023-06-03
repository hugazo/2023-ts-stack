import { firebaseInstance, initializeFirebaseApp } from './services/firebase.js';
import * as Auth from './services/auth.js';

export { firebaseInstance, initializeFirebaseApp, Auth };

export const message = 'Hello World!';

export default {
  firebaseInstance,
  message,
  initializeFirebaseApp,
};
