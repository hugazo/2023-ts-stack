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

- [x] dev
- [x] build
- [x] preview

### firebase-auth-admin-cli

- [x] build
- [x] clean
- [x] serve
- [x] build:dev
- [x] serve:dev
- [x] dev
  - Has an issue where nodemon does not receive user input on dev

### firebase-chat

- [x] dev
- [x] dev:front
- [x] dev:firebase
- [x] build
- [x] deploy
- [x] preview

## Notes

- If two commands are sent by a & (e.g. `yarn dev:front & yarn dev:firebase`), the second command needs to be closed again with `Crtl + C`
