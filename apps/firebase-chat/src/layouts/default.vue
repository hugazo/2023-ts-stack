<template lang="pug">
q-layout
  RouterView
</template>

<script async setup lang="ts">
import { watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { getCurrentUser } from 'vuefire';
import useAuthStore from '@store/auth';

const router = useRouter();
const currentRoute = useRoute();
const store = useAuthStore();

await getCurrentUser();

watch(store, (newStore) => {
  if (!newStore.user) {
    router.push({
      name: 'LoginPage',
      query: {
        redirection: currentRoute.fullPath,
      },
    });
  }
}, {
  immediate: true,
});
</script>
