<template lang="pug">
p This is the index page and the counter is: {{ store.counter }}
q-btn(@click.prevent="store.sum")
  | Counter +
q-btn(@click.prevent="store.substract")
  | Counter -
</template>

<script lang="ts" setup>
import useCounterStore from '@/store/counter';

const store = useCounterStore();
</script>
