<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
div
  p Hi i am the index page
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
  middleware: [
    'firebase',
  ],
});
</script>
