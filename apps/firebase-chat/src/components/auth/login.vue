<template lang="pug">
div
  q-btn(v-if="authStore.user" @click.prevent="authStore.logout")
    | Logout
  q-btn(v-else @click.prevent="authStore.googleSignIn")
    | Sign in with Google
</template>

<script async setup lang="ts">
import useAuthStore from '@store/auth';

const authStore = useAuthStore();

await authStore.userLoad();
</script>
