<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
login-card
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
  middleware: [
    'firebase',
  ],
});
</script>
