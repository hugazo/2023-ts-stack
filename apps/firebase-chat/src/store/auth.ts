import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCurrentUser } from 'vuefire';
import { defineStore } from 'pinia';
import {
  signInWithGoogle,
  signOut,
} from '@services/firebase/auth';
import { error } from '@services/notifier';

export default defineStore('auth', () => {
  const user = useCurrentUser();

  const router = useRouter();
  const currentRoute = useRoute();

  watch(user, (newUser) => {
    // Unauthenticated Users
    if (!newUser && currentRoute.meta.requiresAuth) {
      router.push({
        name: 'LoginPage',
        query: {
          redirection: currentRoute.fullPath,
        },
      });
    }
    // User logged redirection
    if (newUser && !currentRoute.meta.requiresAuth) {
      // Logged in on allowAuthenticated route
      const { redirection } = currentRoute.query;
      const to = redirection && typeof redirection === 'string'
        ? redirection
        : '/';
      router.push(to);
    }
  });

  const loading = ref(false);

  const asyncHandler = async (callback: () => Promise<void>) => {
    loading.value = true;
    try {
      await callback();
    } catch (e) {
      error(e as string);
    } finally {
      loading.value = false;
    }
  };

  const googleSignIn = async () => asyncHandler(signInWithGoogle);

  const logout = async () => asyncHandler(signOut);

  return {
    // State
    user,
    loading,
    // Methods
    googleSignIn,
    logout,
  };
});
