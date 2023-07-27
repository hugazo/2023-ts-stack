<template lang="pug">
div
  template(v-if="currentUser")
    q-btn(
      :label="`Sign Out ${ currentUser.email }`"
      @click="signOut"
    )
    //- pre {{ currentUser }}
  template(v-else)
    q-btn(
      label="Sign In with Google"
      @click="signInWithGoogle"
    )
</template>

<script setup lang="ts">
import { useCurrentUser } from 'vuefire';
import { signInWithGoogle, signOut } from '@services/firebase';

const currentUser = useCurrentUser();
</script>
