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
  connectAuthEmulator,
} from 'firebase/auth';
import { firebaseInstance } from './firebase.js';

// Auth instance
export const getAuth = () => {
  const auth = getFirebaseAuth(firebaseInstance);
  // TODO: Enable this
  // Development logic
  // if (process.env.MODE === 'development') {
  //   const { connectAuthEmulator } = import('firebase/auth');
  //   const { FIREBASE_EMULATOR_HOST, FIREBASE_AUTH_PORT } = process.env;
  //   const authUrl = `http://${FIREBASE_EMULATOR_HOST}:${FIREBASE_AUTH_PORT}`;
  //   const auth = getAuth();
  //   connectAuthEmulator(auth, authUrl);
  //   // eslint-disable-next-line no-console
  //   console.log('Auth Connected To Firebase Local Emulator');
  // }
  return auth;
}

// Common third party logic
const handleRedirectSignIn = async (provider: AuthProvider) => {
  const auth = getAuth();
  await signInWithRedirect(auth, provider);
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
  const auth = getAuth();
  await signOutHandler(auth);
};

export const sendAuthMail = async (email: string) => {
  const settings = {
    url: window.location.href,
    handleCodeInApp: true,
  };
  const auth = getAuth();
  await sendSignInLinkToEmail(auth, email, settings);
};

export const validateMagicLink = (emailLink: string) => {
  const auth = getAuth();
  const isMagicLink = isSignInWithEmailLink(auth, emailLink);
  return isMagicLink;
};

export const signInEmail = async (email: string): Promise<void> => {
  const auth = getAuth();
  await signInWithEmailLink(auth, email, window.location.href);
};

export default getAuth;
