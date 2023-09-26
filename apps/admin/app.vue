<template lang="pug">
q-layout
  nuxt-layout
    q-page-container
      nuxt-page
</template>

<script setup lang="ts">
import { useHead, useRoute } from '#imports';

const route = useRoute();

useHead({
  titleTemplate: () => (route.meta.title ? `${route.meta.title} - Admin Site` : 'Admin Site'),
});
</script>
