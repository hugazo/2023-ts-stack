# Firebase Chat Demo

This one uses the stack i prefer for Vue 3 apps.

## Dev environment

Need to create the following files:

`.env`

```bash
MODE="development"
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
  [ ] Libraries
  [ ] Services
  [ ] Models
[ ] Type Checking
