<template>
  <div>
    <p>Hi</p>
  </div>
</template>

<script setup lang="ts">
import type { FirebaseInitConfig } from '@services/firebase';
import { initializeFirebaseApp } from '@services/firebase';

const config = useRuntimeConfig();

const publicConfig: FirebaseInitConfig = config.public;

const firebaseApp = initializeFirebaseApp(publicConfig);

console.log(firebaseApp);
</script>
