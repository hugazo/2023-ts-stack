import { ref, computed } from 'vue';
import { useCurrentUser, getCurrentUser } from 'vuefire';
import { defineStore } from 'pinia';
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithGithub,
  sendAuthMail,
  signInEmail,
  signOut,
  validateMagicLink,
} from '@services/firebase/auth';
import { error, success, info } from '@services/notifier';

import { emailLoginModel } from '@/models/auth';

export default defineStore('auth', () => {
  const user = useCurrentUser();
  // Store loading status
  const loading = ref(false);
  // Magic email logic
  const emailForSignIn = ref('');
  const promptForEmail = ref(false);

  // Auxiliary function
  const asyncHandler = async (callback: (payload: any) => Promise<void>, payload?: any) => {
    loading.value = true;
    try {
      await callback(payload);
    } finally {
      loading.value = false;
    }
  };

  // Sign-in Methods
  const googleSignIn = async () => asyncHandler(signInWithGoogle);
  const facebookSignIn = async () => asyncHandler(signInWithFacebook);
  const githubSignIn = async () => asyncHandler(signInWithGithub);
  const logout = async () => {
    await asyncHandler(signOut);
    emailForSignIn.value = '';
    promptForEmail.value = false;
  };

  // Init function
  const handleAuthEmailLink = async () => {
    const emailLink = window.location.href;
    if (validateMagicLink(emailLink)) {
      if (emailForSignIn.value) {
        info('Receiving authentication session');
        await asyncHandler(signInEmail, emailForSignIn.value);
        emailForSignIn.value = '';
      } else {
        info('It seems you are authenticating from another device, please input your email to continue.');
        promptForEmail.value = true;
      }
    }
    // Waiting for user load
    const userPayload = await getCurrentUser();
    return userPayload;
  };

  const emailSignIn = async (email: string) => {
    const parsedEmail = emailLoginModel.safeParse(email);
    // Handle Email form
    if (parsedEmail.success) {
      // Handle magic link
      if (promptForEmail.value) {
        await asyncHandler(signInEmail, parsedEmail.data);
        promptForEmail.value = false;
      } else {
        await asyncHandler(sendAuthMail, parsedEmail.data);
        emailForSignIn.value = parsedEmail.data;
        success('An email with a magic link has been sent, check your email!');
      }
    } else {
      parsedEmail.error.issues.forEach((issue) => error(issue.message));
    }
  };

  const icon = computed(() => (promptForEmail.value ? 'mdi-at' : 'mdi-auto-fix'));

  const buttonText = computed(() => (promptForEmail.value ? 'Confirm my email' : 'Send me an email magic link'));

  return {
    // State
    user,
    loading,
    emailForSignIn,
    promptForEmail,
    // Template fills
    icon,
    buttonText,
    // Methods
    googleSignIn,
    facebookSignIn,
    githubSignIn,
    emailSignIn,
    logout,
    handleAuthEmailLink,
  };
}, {
  persist: {
    storage: localStorage,
    paths: [
      'emailForSignIn',
    ],
  },
});
