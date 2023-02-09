<script setup lang="ts">
import useAuthStore from '@store/auth';

const store = useAuthStore();
</script>

<template lang="pug">
RouterView
q-btn(v-if="store?.user" @click.prevent="store.logout") Logout
</template>
