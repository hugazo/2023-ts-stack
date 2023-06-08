<template lang="pug">
p Admin template
</template>

<script async setup lang="ts">
import { useRouter } from 'vue-router';
import useAuthStore from '@store/auth';

const authStore = useAuthStore();
const router = useRouter();

const roles = await authStore.getUserRoles();

if (!roles.includes('admin')) {
  router.push('/');
}
</script>
