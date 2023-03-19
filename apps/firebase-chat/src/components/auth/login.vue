<template lang="pug">
div
  .row
    p Log in using your email
  email-sign-in
  template(v-if="!authStore.promptForEmail")
    .row
      p Or log in with a third provider
    social-auth
</template>

<script async setup lang="ts">
import useAuthStore from '@store/auth';
import SocialAuth from '@components/auth/social-auth.vue';
import EmailSignIn from '@/components/auth/email-sign-in.vue';

const authStore = useAuthStore();
</script>
