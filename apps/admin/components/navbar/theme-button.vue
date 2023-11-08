<template lang="pug">
q-btn(
  :ripple="false"
  dense
  round
  :icon="themeStore.currentTheme.icon"
  @click.prevent="themeStore.changeTheme"
)
</template>

<script setup lang="ts">
import useThemeStore from '@/store/theme';

const themeStore = useThemeStore();
</script>
