<template lang="pug">
q-form.full-width.q-gutter-y-md(
  @submit.prevent="authStore.emailSignIn(email)"
  )
  //- @submit.prevent="emailAuth"
  .row
    q-input.full-width(
      autofocus
      label="email"
      v-model="email"
      )
      //- :loading="auth.loadingStatus"
      //- :disable="auth.loadingStatus"
      template(v-slot:prepend)
        q-icon(name="mdi-email")
  .row
    q-btn.full-width(
      outline
      rounded
      icon="mdi-auto-fix"
      @click.prevent="authStore.emailSignIn(email)"
      )
      //- @click.prevent="emailAuth"
      //- :disabled="auth.loadingStatus"
      | Send me an email magic link
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthStore from '@store/auth';

const authStore = useAuthStore();
const email = ref('');
</script>
