/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />
/// <reference types="vite-plugin-vue-layouts/client"/>

interface ImportMetaEnv {
  readonly FIREBASE_API_KEY: string,
  readonly FIREBASE_AUTH_DOMAIN: string,
  readonly FIREBASE_PROJECT_ID: string,
  readonly FIREBASE_STORAGE_BUCKET: string,
  readonly FIREBASE_MESSAGING_SENDER_ID: string,
  readonly FIREBASE_APP_ID: string,
  readonly FIREBASE_RECAPTCHA_KEY: string,
  readonly FIREBASE_RECAPTCHA_KEY: string,
  readonly MODE: string,
}

// Env import
interface ImportMeta {
  readonly env: ImportMetaEnv,
}

// Route meta
interface RouteMeta {
  name?: string,
  requiresAuth?: boolean,
  layout?: string,
}

export { };
