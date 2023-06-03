import { FirebaseApp } from 'firebase/app';
import type { FirebaseInitConfig } from './services/firebase';

declare module '@services/firebase' {
  export interface FirebaseService {
    firebaseInstance: FirebaseApp | null;
    initializeFirebaseApp: (firebaseConfig: FirebaseInitConfig) => FirebaseApp;
    message: string;
  }
}
