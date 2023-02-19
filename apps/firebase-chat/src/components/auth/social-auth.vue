<template lang="pug">
.row
  q-btn-group(
    unelevated
    rounded
    outline
    push
  )
    q-btn(
      unelevated
      rounded
      outline
      icon="mdi-google"
      @click.prevent="authStore.googleSignIn()"
      ) Google
    q-btn(
      unelevated
      rounded
      outline
      icon="mdi-facebook"
      @click.prevent="authStore.facebookSignIn()"
      ) Facebook
    q-btn(
      unelevated
      rounded
      outline
      icon="mdi-github"
      @click.prevent="authStore.githubSignIn()"
      ) Github
</template>

<script setup lang="ts">
import useAuthStore from '@store/auth';

const authStore = useAuthStore();
</script>
