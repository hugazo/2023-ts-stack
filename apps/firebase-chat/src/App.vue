<template lang="pug">
q-layout(view="lHh Lpr lff")
  q-page-container.main-container
    router-view(v-slot="{ Component }")
      template(v-if="Component")
        Suspense
          Component(:is="Component")
          template(#fallback)
            p Loading auth session...
  q-page-sticky(position="bottom-right" :offset="[18, 18]")
    q-btn(round
      color="black"
      @click.prevent="themeStore.changeTheme"
      :icon="themeStore.currentTheme.icon"
    )
</template>

<script setup lang="ts">
import Services from '@pkgs/services';
import { Suspense } from 'vue';
import useThemeStore from '@store/theme';

const themeStore = useThemeStore();

Services();

/**
 * TODO: Add transition, the out-in is throwing an error
 *  ? Use it?
transition(
  mode="out-in"
  enter-active-class="animated fadeIn"
  leave-active-class="animated fadeOut"
)
 */
</script>

<style>
.main-container {
  @apply w-screen h-screen;
}
</style>
