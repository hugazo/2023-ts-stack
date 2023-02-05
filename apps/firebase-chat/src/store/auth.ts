import { ref, computed } from 'vue';
import { useCurrentUser } from 'vuefire';
import { defineStore } from 'pinia';

export default defineStore('auth', () => {
  // State management
  const user = ref(useCurrentUser());

  const logged = computed(() => Boolean(user.value));

  return {
    user,
    logged,
  };
});
