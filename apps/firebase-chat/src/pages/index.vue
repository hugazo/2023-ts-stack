<template lang="pug">
q-page-container
  .row
    p This is the homepage
  .row
    q-btn(@click.prevent="store.logout")
      | Logout
</template>

<script lang="ts" setup>
import useAuthStore from '@store/auth';

const store = useAuthStore();
</script>

<route lang="yaml">
name: 'IndexPage'
</route>
