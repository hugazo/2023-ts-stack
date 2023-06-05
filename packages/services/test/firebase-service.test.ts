import type { FirebaseApp } from 'firebase/app';
import { initializeFirebaseApp, getAppCheckInstance, FirebaseInitConfig } from '../src/services/firebase';

describe('Firebase App Intialization', () => {
  let firebaseConfig: FirebaseInitConfig;
  let firebaseApp: FirebaseApp;

  beforeEach(() => {
    firebaseConfig = {
      apiKey: 'test-api-key',
      authDomain: 'test-auth-domain',
      projectId: 'test-project-id',
      storageBucket: 'test-storage-bucket',
      messagingSenderId: 'test-messaging-sender-id',
      appId: 'test-app-id',
      firebaseRecaptchaKey: 'test-recaptcha-key',
    };
  });

  // Not yet initialized;
  it('should throw an error if required Firebase config is not provided', () => {
    // @ts-expect-error
    expect(() => initializeFirebaseApp({})).toThrowError('Missing required Firebase config');
  });

  it('should throw an error if Firebase Appcheck Debug Token is not provided in development mode', () => {
    firebaseConfig.MODE = 'development';
    firebaseConfig.firebaseAppCheckDebugToken = undefined;
    expect(() => initializeFirebaseApp(firebaseConfig)).toThrowError('Firebase Appcheck Debug Token is required in development mode');
  });

  it('throws an error if appCheckInstance is not initialized', () => {
    expect(() => getAppCheckInstance()).toThrow('Firebase appcheck is not initialized');
  });

  // This should initialize Firebase App and AppCheck
  it('should initialize a Firebase app with the proper config', () => {
    firebaseApp = initializeFirebaseApp(firebaseConfig);
    expect(firebaseApp).toBeDefined();
    expect(firebaseApp.options.apiKey).toEqual(firebaseConfig.apiKey);
    expect(firebaseApp.options.authDomain).toEqual(firebaseConfig.authDomain);
    expect(firebaseApp.options.projectId).toEqual(firebaseConfig.projectId);
    expect(firebaseApp.options.storageBucket).toEqual(firebaseConfig.storageBucket);
    expect(firebaseApp.options.messagingSenderId).toEqual(firebaseConfig.messagingSenderId);
    expect(firebaseApp.options.appId).toEqual(firebaseConfig.appId);
  });

  it('returns the appCheckInstance if it is initialized', () => {
    expect(getAppCheckInstance()).toBeDefined();
  });

  it('should return the same Firebase app instance when called multiple times', () => {
    const firebaseApp2 = initializeFirebaseApp(firebaseConfig);
    expect(firebaseApp2).toBe(firebaseApp);
  });
});
