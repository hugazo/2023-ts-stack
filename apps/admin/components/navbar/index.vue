<template lang="pug">
q-header(elevated)
  q-toolbar
    q-btn.q-mr-sm(flat round dense icon="mdi-menu")
    q-toolbar-title Admin Site
    navbar-theme-button.q-mr-sm
    q-btn.q-mr-sm(
      :ripple="false"
      round
      dense
      icon="mdi-cog"
      @click="rightDrawer = !rightDrawer"
    )
q-drawer(
  v-model="rightDrawer"
  side="right"
  bordered
  :width="200"
  :breakpoint="500"
)
  q-scroll-area.fit
    .q-pa-sm
      div(v-for="n in 50" :key="n")
        | Drawer {{ n }} / 50
</template>

<script setup lang="ts">
import { ref } from '#imports';

const rightDrawer = ref(false);
</script>
