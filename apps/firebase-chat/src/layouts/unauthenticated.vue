<template lang="pug">
q-layout
  router-view
</template>

<script async setup lang="ts">
import { watch } from 'vue';
import {
  useRouter,
  useRoute,
} from 'vue-router';
import useAuthStore from '@store/auth';

const store = useAuthStore();

store.handleAuthEmailLink();

const router = useRouter();
const currentRoute = useRoute();

watch(store, (newStore) => {
  if (newStore.user) {
    const { redirection } = currentRoute.query;
    const to = redirection && typeof redirection === 'string'
      ? redirection
      : '/';
    router.push(to);
  }
});
</script>
