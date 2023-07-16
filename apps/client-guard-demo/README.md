# Nuxt 3 Auth App

SSO App with Nuxt 3 and Firebase. This is a demo app to show how to use Firebase with Nuxt 3 and how to use Firebase Authentication for a domain driven app.

- Nuxt as the Framework: [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.
- Custom Plugins for Loading Firebase
- Firebase for Authentication and Firestore
- Typescript Based

## Setup

Make sure to install the dependencies:

```bash
# pnpm
pnpm install
```

## Development

```bash
# .env
MODE="development" # Used for local development, enables the use of the Firebase Emulator

# Get these variables in the Firebase Console under Project Settings > General > Your Apps > Firebase SDK snippet > Config
FIREBASE_API_KEY="" # Firebase API Key
FIREBASE_AUTH_DOMAIN="" # Firebase Auth Domain
FIREBASE_PROJECT_ID="" # Firebase Project ID
FIREBASE_STORAGE_BUCKET="" # Firebase Storage Bucket
FIREBASE_MESSAGING_SENDER_ID="" # Firebase Messaging Sender ID
FIREBASE_APP_ID="" # Firebase App ID

# Get this variable in the Firebase Console under Project Settings > General > App Check > Debug Token
FIREBASE_RECAPTCHA_KEY="" # Firebase Recaptcha Key
FIREBASE_APPCHECK_DEBUG_TOKEN="" # Firebase App Check Debug Token
```

 Then run the project:

```bash
# pnpm
pnpm dev
```
