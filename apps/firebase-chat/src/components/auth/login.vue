<template lang="pug">
div
  .row
    p Log in using your email
  email-link
  .row
    p Or log in with a third provider
  social-auth
</template>

<script async setup lang="ts">
import EmailLink from '@components/auth/email-link.vue';
import SocialAuth from '@components/auth/social-auth.vue';
import useAuthStore from '@store/auth';

const authStore = useAuthStore();

await authStore.userLoad();
</script>
