<!-- eslint-disable vue/multi-word-component-names -->
<template lang="pug">
div
  template(v-if="currentUser")
    q-btn(
      label="Sign Out"
      @click="signOut"
    )
    pre {{ currentUser }}
  template(v-else)
    q-btn(
      label="Sign In with Google"
      @click="signInWithGoogle"
    )
</template>

<script setup lang="ts">
import { useCurrentUser } from 'vuefire';
import { signInWithGoogle, signOut } from '@services/firebase';
import { definePageMeta } from '#imports';

definePageMeta({
  middleware: [
    'firebase',
  ],
});

const currentUser = useCurrentUser();
</script>
