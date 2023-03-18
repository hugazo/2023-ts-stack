<script setup lang="ts">
import { Suspense } from 'vue';
</script>

<template lang="pug">
q-layout(view="lHh Lpr lff")
  q-page-container.main-container
    Suspense
      template(#default)
        router-view(v-slot="{ Component }")
          transition(
            mode="out-in"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          )
            Component(:is="Component")
      template(#fallback)
        p Loading...
</template>

<style>
.main-container {
  @apply w-screen h-screen;
}
</style>
