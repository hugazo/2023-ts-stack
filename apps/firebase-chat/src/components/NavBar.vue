<template lang="pug">
q-toolbar
  q-toolbar-title My App
  q-btn(
    label="Logout"
    @click="authStore.logout()"
  )
</template>

<script setup lang="ts">
import useAuthStore from '@store/auth';

const authStore = useAuthStore();
</script>
