<template>
  <div>
    <p>Hi</p>
    <q-btn @click="updateColor">
      Hi!
    </q-btn>
    <q-spinner-hourglass
      :color="myColor"
      size="2em"
    />
  </div>
</template>

<script setup lang="ts">
import type { FirebaseInitConfig } from '@services/firebase';
import { initializeFirebaseApp } from '@services/firebase';
import { ref, computed, useRuntimeConfig } from '#imports';

const config = useRuntimeConfig();

const publicConfig: FirebaseInitConfig = config.public;

const firebaseApp = initializeFirebaseApp(publicConfig);

// eslint-disable-next-line no-console
console.log(firebaseApp);

// This is the color handling logic
const possibleColors = ['red', 'green', 'blue', 'purple', 'orange'];
const colorSelection = ref(0);

const myColor = computed(() => possibleColors[colorSelection.value]);

const updateColor = () => {
  if (colorSelection.value >= possibleColors.length - 1) {
    colorSelection.value = 0;
  } else {
    colorSelection.value += 1;
  }
};
</script>
