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
    q-page-sticky(position="bottom-right" :offset="[18, 18]")
      q-btn(round
        color="black"
        @click.prevent="themeStore.changeTheme"
        :icon="themeStore.currentTheme.icon"
      )
</template>

<script setup lang="ts">
import { Suspense } from 'vue';
import useThemeStore from '@store/theme';

const themeStore = useThemeStore();
</script>

<style>
.main-container {
  @apply w-screen h-screen;
}
</style>
