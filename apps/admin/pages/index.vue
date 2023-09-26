<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
q-page.row.justify-center.items-center
  .column
    p.text-h5 Welcome - Admin Site
    p {{ user?.displayName }}
    p {{ user?.email }}
    logout-button
</template>

<script setup lang="ts">
import { useCurrentUser } from 'vuefire';
import { definePageMeta } from '#imports';

const user = useCurrentUser();

definePageMeta({
  middleware: [
    'auth',
  ],
  layout: 'default',
  title: 'Index Page',
});
</script>
