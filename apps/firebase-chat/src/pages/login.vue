<template lang="pug">
q-page.window-height.window-width.row.justify-center.items-center
  .column
    .row.justify-center
      h5 Welcome
    .row
      .card.q-pa-lg.shadow-2
        template(v-if="authStore.user")
          q-btn(@click.prevent="authStore.logout")
            | Logout
          pre {{ authStore.user }}
        p(v-else-if="authStore.user === undefined")
          | Loading...
        template(v-else)
          q-btn(@click.prevent="authStore.googleSignIn")
            | Sign in with Google
</template>

<script setup lang="ts">
import useAuthStore from '@store/auth';

const authStore = useAuthStore();
</script>

<route lang="yaml">
name: 'LoginPage'
meta:
  layout: 'unauthenticated'
</route>
