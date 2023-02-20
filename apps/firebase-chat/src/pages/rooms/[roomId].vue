<template lang="pug">
div
  p Room Id: {{ route.params.roomId }}
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
</script>
