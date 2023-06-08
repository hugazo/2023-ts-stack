# Pinia Stores

To create a pinia store can create a new .ts file with the following

`store/counter.ts`

```javascript
// Basic pinia store definition
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const counter = ref(0)
  const sum = () => counter ++;
  const substract = () counter --;

  return {
    counter,
    sum,
    substract,
  }
})
```

`component.vue`

```javascript
<template>
<div>
  <p> Counter: {{ store.counter }}</p>
  <button @click.prevent="store.sum">Click me to sum</button>
  <button @click.prevent="store.substract">Click me to substract</button>
</div>

</template>

<script lang="ts" setup>
import { useCounterStore } from '@store/counter.ts'

const store = useCounterStore()
</script>
```
