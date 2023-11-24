<template lang="pug">
div
  p This is the users page
  //- logout-button
  button(@click="getHelloWorld") Click me!
</template>

<script setup>
import { $fetch } from '#imports';

const getHelloWorld = async () => {
  const result = await $fetch('/hello-world');
  // eslint-disable-next-line no-console
  console.log(result);
};
</script>
