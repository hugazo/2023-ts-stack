<template lang="pug">
q-layout
  RouterView
</template>

<script setup lang="ts">
// import useAuthStore from '@store/auth';
import { useRoute } from 'vue-router';
import useAuthStore from '@store/auth';

const route = useRoute();
route.meta.requiresAuth = true;

const authStore = useAuthStore();
await authStore.userLoad();
</script>
