<template lang="pug">
q-form.full-width.q-gutter-y-md(
  @submit.prevent="emailSignIn"
  )
  .row
    q-input.full-width(
      autofocus
      label="email"
      v-model="email"
      :loading="authStore.loading"
      :disabled="authStore.loading"
      )
      template(v-slot:prepend)
        q-icon(name="mdi-email")
  .row
    q-btn.full-width(
      outline
      rounded
      :icon="authStore.icon"
      @click.prevent="emailSignIn"
      :loading="authStore.loading"
      :disabled="authStore.loading"
      )
      | {{ authStore.buttonText }}
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useAuthStore from '@store/auth';

const authStore = useAuthStore();

const email = ref('');

const emailSignIn = async () => {
  try {
    authStore.emailSignIn(email.value);
  } finally {
    email.value = '';
  }
};
</script>
