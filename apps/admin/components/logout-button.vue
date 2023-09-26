<template lang="pug">
q-btn(
  label="Logout"
  color="primary"
  icon="mdi-logout"
  @click="signOut"
)
</template>

<script setup lang="ts">
import { signOut } from '@services/firebase';
</script>
