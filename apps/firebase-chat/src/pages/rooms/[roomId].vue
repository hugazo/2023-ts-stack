<template lang="pug">
div
  p Room Id: {{ route.params.roomId }}
  q-btn(@click="auth.logout") Logout
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import useAuthStore from '@store/auth';

const route = useRoute();

const auth = useAuthStore();
</script>
