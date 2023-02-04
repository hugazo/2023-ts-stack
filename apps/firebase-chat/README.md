# Firebase Chat Demo

This one uses the stack i prefer for Vue 3 apps.

## Dev environment

Need to create the following files:

`.env`

Get your config from Firebase Console

```bash
MODE="development"

FIREBASE_API_KEY=""
FIREBASE_AUTH_DOMAIN=""
FIREBASE_PROJECT_ID=""
FIREBASE_STORAGE_BUCKET=""
FIREBASE_MESSAGING_SENDER_ID=""
FIREBASE_APP_ID=""
FIREBASE_RECAPTCHA_KEY=""
```

`.firebaserc`

```JSON
{
  "projects": {
    "default": "my-firebase-project"
  }
}
```

### Checklist

[ ] Vue
  [x] Router
    [x] File based routing
  [x] App State
    [x] Persisted State
[x] Vite
  [x] Pages support
  [x] Layouts support
  [ ] Auto imports
[x] UI Library
  [x] Quasar
  [ ] Add Uno.css or Windi
[ ] Firebase
  [x] Dev environment
    [x] Auth
    [x] Firestore
    [x] UI
    [x] Vite Dev Frontend
  [x] Deployment
    [x] Vite build
    [x] Firestore rules
  [x] Libraries
  [ ] Services
    [x] Firebase Instance
    [ ] Auth
    [ ] Firestore
  [ ] Models
[ ] Type Checking
