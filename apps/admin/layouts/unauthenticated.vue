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

watch(user, (newUser) => {
  if (newUser) {
    if (typeof params.redirect === 'string' && params.redirect) {
      router.push(params.redirect);
    } else {
      router.push('/');
    }
  }
});
</script>
