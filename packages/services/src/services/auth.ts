import {
  // Auth Main Object
  getAuth as getFirebaseAuth,
  // Signin Methods
  signInWithRedirect,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut as signOutHandler,
  // Email Link
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signInWithEmailLink,
  // Types
  AuthProvider,
  Auth,
  connectAuthEmulator,
} from 'firebase/auth';
import { getFirebaseInstance } from './firebase.js';

export type AuthInitializationSettings = {
  MODE?: string;
  FIREBASE_EMULATOR_HOST?: string;
  FIREBASE_AUTH_PORT?: string;
};

let authInstance: Auth;

// initialize auth instance
export const initializeAuthInstance = (settings: AuthInitializationSettings) => {
  // Checks if Firebase app is initialized
  const firebaseInstance = getFirebaseInstance();
  if (!firebaseInstance) {
    throw new Error('Firebase app is not initialized');
  }
  // Connects to Firebase Auth emulator if in development mode
  const auth = getFirebaseAuth(firebaseInstance);
  authInstance = auth;
  if (settings.MODE === 'development') {
    const { FIREBASE_EMULATOR_HOST, FIREBASE_AUTH_PORT } = settings;
    if (!FIREBASE_EMULATOR_HOST || !FIREBASE_AUTH_PORT) {
      throw new Error('Missing required Firebase Auth emulator config');
    }
    const authUrl = `http://${FIREBASE_EMULATOR_HOST}:${FIREBASE_AUTH_PORT}`;
    connectAuthEmulator(auth, authUrl);
    // eslint-disable-next-line no-console
    console.log('Auth Connected To Firebase Local Emulator');
  }
  return auth;
};

// Helper function to check if auth instance is initialized
const checkAuthInstance = () => {
  if (!authInstance) {
    throw new Error('Auth not initialized');
  }
};

// Auth instance
export const getAuth = () => {
  checkAuthInstance();
  return authInstance;
};

// Common third party logic
const handleRedirectSignIn = async (provider: AuthProvider) => {
  checkAuthInstance();
  await signInWithRedirect(authInstance, provider);
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await handleRedirectSignIn(provider);
};

export const signInWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  await handleRedirectSignIn(provider);
};

export const signInWithGithub = async () => {
  const provider = new GithubAuthProvider();
  await handleRedirectSignIn(provider);
};

export const signOut = async () => {
  checkAuthInstance();
  await signOutHandler(authInstance);
};

export const sendAuthMail = async (email: string) => {
  const settings = {
    url: window.location.href,
    handleCodeInApp: true,
  };
  checkAuthInstance();
  await sendSignInLinkToEmail(authInstance, email, settings);
};

export const validateMagicLink = (emailLink: string) => {
  checkAuthInstance();
  const isMagicLink = isSignInWithEmailLink(authInstance, emailLink);
  return isMagicLink;
};

export const signInEmail = async (email: string): Promise<void> => {
  checkAuthInstance();
  await signInWithEmailLink(authInstance, email, window.location.href);
};

export default getAuth;
