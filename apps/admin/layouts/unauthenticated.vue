<template lang="pug">
q-layout
  q-page-container
    nuxt-page
  slot
</template>

<script lang="ts" setup>
import { useCurrentUser } from 'vuefire';
import { useRouter, watch, useUrlSearchParams } from '#imports';

const router = useRouter();
const user = useCurrentUser();
const params = useUrlSearchParams('history');

watch(user, () => {
  if (user) {
    if (params.redirect) {
      router.push(params.redirect as string);
    } else {
      router.push('/');
    }
  }
});
</script>
