<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<template lang="pug">
q-layout
  q-page-container.full-height.full-width
    q-page.q-pa-md
      q-card.my-card.q-pa-md
        img.vue-logo(src="./assets/vue.svg" alt="Vue logo")
        p.text-h6 This is a vue + vite + quasar demo.
        p.text-body1 You clicked {{ count }} times.
        q-btn(@click="count ++" flat)
          | Press me
</template>

<style lang="sass ">
.my-card
  min-width: 300px
  max-width: 400px
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

</style>
