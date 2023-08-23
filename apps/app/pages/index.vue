<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
q-page.row.justify-center.items-center
  .column
    template(v-if="!user")
      .row.justify-center
        p.text-h5 Welcome - Login
      .row
        login-card
    .row(v-else)
      login-logout-test
</template>

<script setup lang="ts">
import { useCurrentUser } from 'vuefire';
import { definePageMeta } from '#imports';

const user = useCurrentUser();

definePageMeta({
  middleware: [
    'firebase',
  ],
});
</script>
