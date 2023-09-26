<template lang="pug">
div
  slot
</template>

<script lang="ts" setup>
import { useCurrentUser } from 'vuefire';
import { useRouter, watch, navigateTo } from '#imports';

const router = useRouter();
const user = useCurrentUser();

watch(user, (updatedUser) => {
  if (!updatedUser) {
    navigateTo({
      path: '/login',
      query: {
        redirect: router.currentRoute.value.fullPath,
      },
    });
  }
});
</script>
