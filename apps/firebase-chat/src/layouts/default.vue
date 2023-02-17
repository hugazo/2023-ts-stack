<template lang="pug">
div(position="absolute")
  RouterView
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
route.meta.requiresAuth = true;
</script>
