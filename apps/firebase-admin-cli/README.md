# Firebase Auth Admin CLI

## 🏁 Objective

To create a tool for plattform admins to handle auth info without having to build a whole UI locally using firebase credentials.

## 📚 How-to

- Create a credentials file on Firebase Console => Project Setup => Account Services => Create New Private Key
- Put this file in the root of your project
- Create a .env file with the following variables:

```bash
GOOGLE_APPLICATION_CREDENTIALS="path/to/your/credentials.json"
```

## ✅ TO:DO

- [x] CLI
  - [x] List Options
- [x] Firebase Admin
  - [x] Install library
    - [ ] Local Environment
    - [x] Remote Environment
  - [ ] Handle Users
    - [ ] Create
    - [x] Read
    - [ ] Update
      - [ ] Roles
      - [ ] User Information
    - [ ] Delete

## Features

- 🔥 Local hot reload
- 🚛 Node 18 compilation
- ✅ Airbnb Eslint Guide

## Node version

The node required version is `18`.

### `.nvmrc`

If you are using nvm for handling your node versions, it will be autoinstalled if you have enabled the nvm hooks.

If don't, you can run:

```bash
nvm use
```

## Installation

```bash
yarn install
```

## Development

```bash
yarn dev
```

## Build

```bash
yarn build
```
