import {
  // Auth Main Object
  getAuth,
  // Signin Methods
  signInWithRedirect,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signOut as signOutHandler,
  // Types
  AuthProvider,
} from 'firebase/auth';
import firebaseInstance from '@services/firebase';

// Auth instance
const auth = getAuth(firebaseInstance);

// Development logic
if (import.meta.env.MODE === 'development') {
  const { connectAuthEmulator } = await import('firebase/auth');
  const { FIREBASE_EMULATOR_HOST, FIREBASE_AUTH_PORT } = import.meta.env;
  const authUrl = `http://${FIREBASE_EMULATOR_HOST}:${FIREBASE_AUTH_PORT}`;
  connectAuthEmulator(auth, authUrl);
  // eslint-disable-next-line no-console
  console.log('Auth Connected To Firebase Local Emulator');
}

// Common third party logic
const handleRedirectSignIn = async (provider: AuthProvider) => {
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
  await signOutHandler(auth);
};

/**
 * TODO: Auth methods
 * [x] Common logic
 * [ ] Facebook
 * [x] Google
 * [ ] Github
 * [ ] Email
 * [x] Signout
 */

export default auth;
