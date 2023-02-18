<template lang="pug">
q-page.window-height.window-width.row.justify-center.items-center
  .column
    .row.justify-center
      h5 Welcome
    .row
      .card.q-pa-lg.shadow-2
        Suspense
          template(#default)
            Login
          template(#fallback)
            p Loading...
</template>

<script setup lang="ts">
import { Suspense } from 'vue';
import Login from '@components/auth/login.vue';
</script>

<route lang="yaml">
name: 'LoginPage'
meta:
  layout: 'unauthenticated'
</route>
