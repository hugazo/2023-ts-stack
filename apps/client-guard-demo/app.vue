<template>
  <div>
    <p>Hi</p>
  </div>
</template>

<script setup lang="ts">
import type { FirebaseInitConfig } from '@services/firebase';
import { initializeFirebaseApp } from '@services/firebase';
import { useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();

const publicConfig: FirebaseInitConfig = config.public;

const firebaseApp = initializeFirebaseApp(publicConfig);

// eslint-disable-next-line no-console
console.log(firebaseApp);
</script>
