<template lang="pug">
q-page.row.justify-center.items-center
  .column
    .row
      p.text-h5 Welcome Admins - Please Login
    .row
      login-card
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';

definePageMeta({
  layout: 'unauthenticated',
  title: 'Login Page',
});
</script>
