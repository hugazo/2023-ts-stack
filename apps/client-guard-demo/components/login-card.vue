<template lang="pug">
q-card(flat bordered rounded)
  q-card-section(class="row justify-center")
    q-form.q-gutter-md(
      full-width
      autofocus
      centered
      :loading="loading"
      @submit.prevent="handleLoginSubmit"
    )
      q-input(
        v-model="email"
        label="Email"
        type="email"
        outline
        rounded
      )
      q-btn(
        v-if="promptForEmail"
        type="submit"
        label="Confirm email for login"
        outline
        rounded
      )
      q-btn(
        v-else
        type="submit"
        label="Send Magic Link"
        outline
        rounded
      )
  q-card-section(class="row justify-center")
    p Or just login with
    q-btn-group(
      outline
      rounded
    )
      q-btn(
        icon="mdi-google"
        label="Google"
        outline
        rounded
        @click="signInWithGoogle"
      )
      q-btn(
        icon="mdi-microsoft"
        label="Microsoft"
        outline
        rounded
        @click="signInWithMicrosoft"
      )
      q-btn(
        icon="mdi-github"
        label="GitHub"
        outline
        rounded
        @click="signInWithGithub"
      )
</template>

<script setup lang="ts">
import {
  sendAuthMail,
  signInWithGoogle,
  signInWithMicrosoft,
  signInWithGithub,
  signInPromptedEmail,
} from '@services/firebase';
import { ref } from '#imports';

const email = ref('');
const loading = ref(false);
const promptForEmail = ref(Boolean(window.localStorage.getItem('promptForEmail')));

const handleLoginSubmit = async () => {
  loading.value = true;
  if (promptForEmail.value) {
    await signInPromptedEmail(email.value);
  } else {
    await sendAuthMail(email.value);
  }
  loading.value = false;
};
</script>

<style lang="sass" scoped>
.q-card
  max-width: 500px

.email-input
  width: 300px
</style>
