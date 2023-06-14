<template>
  <div>
    <p>Hi</p>
  </div>
</template>

<script setup lang="ts">
import { initializeFirebaseApp, FirebaseInitConfig } from '@services/firebase/init';

const config = useRuntimeConfig();

const firebaseApp = initializeFirebaseApp(config.public as FirebaseInitConfig);

console.log(firebaseApp);
</script>
