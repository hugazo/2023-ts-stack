/* eslint-disable no-plusplus */

import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('counter', () => {
  // eslint-disable no-plusplus
  const counter = ref(0);
  const sum = () => counter.value++;
  const substract = () => counter.value--;

  return {
    counter,
    sum,
    substract,
  };
});
