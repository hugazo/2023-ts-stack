<template lang="pug">
q-layout
  RouterView
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
route.meta.requiresAuth = true;
</script>
