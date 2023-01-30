<template>
  <p>This is the index page and the counter is: {{ store.counter }}</p>
  <button @click.prevent="store.sum">
    Counter +
  </button>
  <button @click.prevent="store.substract">
    Counter -
  </button>
</template>

<script lang="ts" setup>
import useCounterStore from '../store/counter';

const store = useCounterStore();
</script>
