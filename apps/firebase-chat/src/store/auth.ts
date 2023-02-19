import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useCurrentUser, getCurrentUser } from 'vuefire';
import { defineStore } from 'pinia';
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
  signInWithEmail,
  signOut,
} from '@services/firebase/auth';
import { error } from '@services/notifier';

import { emailLoginModel } from '@/models/auth';

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

  const asyncHandler = async (callback: (payload: any) => Promise<void>, payload?: any) => {
    loading.value = true;
    try {
      await callback(payload);
    } catch (e) {
      error(e as string);
    } finally {
      loading.value = false;
    }
  };

  const googleSignIn = async () => asyncHandler(signInWithGoogle);

  const facebookSignIn = async () => asyncHandler(signInWithFacebook);

  const githubSignIn = async () => asyncHandler(signInWithGithub);

  const logout = async () => asyncHandler(signOut);

  const userLoad = async () => {
    const userPayload = await getCurrentUser();
    return userPayload;
  };

  const emailSignIn = async (email: string) => {
    const parsedEmail = emailLoginModel.safeParse(email);
    if (parsedEmail.success) {
      asyncHandler(signInWithEmail, parsedEmail.data);
    } else {
      parsedEmail.error.issues.forEach((issue) => error(issue.message));
    }
  };

  return {
    // State
    user,
    loading,
    // Methods
    googleSignIn,
    facebookSignIn,
    githubSignIn,
    emailSignIn,
    logout,
    userLoad,
  };
});
