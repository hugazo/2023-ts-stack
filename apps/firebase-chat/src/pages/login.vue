<template lang="pug">
.row
  .column
    .section
      template(v-if="authStore.user")
        q-btn(@click.prevent="authStore.logout")
          | Logout
        pre {{ authStore.user }}
      p(v-else-if="authStore.user === undefined")
        | Loading...
      q-btn(v-else @click.prevent="authStore.googleSignIn")
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
