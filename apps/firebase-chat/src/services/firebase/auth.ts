import { getAuth } from 'firebase/auth';
import firebaseInstance from '@services/firebase';

const auth = getAuth(firebaseInstance);

if (import.meta.env.MODE === 'development') {
  const firebaseConfig = await import('@/../firebase.json');
  const { port } = firebaseConfig.emulators.auth;
  const { FIREBASE_EMULATOR_HOST } = import.meta.env;
  const { connectAuthEmulator } = await import('firebase/auth');
  connectAuthEmulator(auth, `http://${FIREBASE_EMULATOR_HOST}:${port}`);
  // eslint-disable-next-line no-console
  console.log('Auth Connected To Firebase Local Emulator');
}

export default auth;
