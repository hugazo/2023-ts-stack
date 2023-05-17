# Yarn to pnpm migration

## Why?

Solves an issue with Nuxt 3.5 on which needs a hostically installation.

## Projects and Status

| Project | Directory | Status |
|---------|-----------|--------|
| academy-front | apps/academy-front |  |
| firebase-auth-admin-cli | apps/firebase-admin-cli |  |
| firebase-chat | apps/firebase-chat |  |

## Status by Project

### academy-front

- [ ] dev
- [ ] build
- [ ] preview

### firebase-auth-admin-cli

- [ ] build
- [ ] clean
- [ ] serve
- [ ] build:dev
- [ ] serve:dev
- [ ] dev

### firebase-chat

- [x] dev
- [x] dev:front
- [x] dev:firebase
- [ ] build
- [ ] deploy
- [ ] preview

## Notes

- If two commands are sent by a & (e.g. `yarn dev:front & yarn dev:firebase`), the second command needs to be closed again with `Crtl + C`
