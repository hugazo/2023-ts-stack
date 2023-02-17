<script setup lang="ts">
import useAuthStore from '@store/auth';

const store = useAuthStore();
</script>

<template lang="pug">
q-layout(view="lHh Lpr lff")
  q-page-container.main-container
    router-view(v-slot="{ Component }")
      transition(
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      )
        Component(:is="Component")
    q-btn(v-if="store?.user" @click.prevent="store.logout") Logout
</template>

<style>
.main-container {
  @apply w-screen h-screen;
}
</style>
