<template lang="pug">
q-layout
  router-view
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRouter } from 'vue-router';
import { useRouteQuery } from '@vueuse/router';
import useAuthStore from '@store/auth';

const store = useAuthStore();

const router = useRouter();

const redirection = useRouteQuery('redirection', '/');

watch(store, (newStore) => {
  if (newStore.user) {
    router.push(redirection.value);
  }
});
await store.handleAuthEmailLink();
</script>
