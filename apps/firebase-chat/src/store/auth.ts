import { ref } from 'vue';
import { useCurrentUser } from 'vuefire';
import { defineStore } from 'pinia';
import {
  signInWithGoogle,
  signOut,
} from '@services/firebase/auth';
import { error } from '@services/notifier';

export default defineStore('auth', () => {
  const user = useCurrentUser();

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
    // Methods
    googleSignIn,
    logout,
  };
});
