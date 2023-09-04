import { processMagicLinks } from '@services/firebase';
import { getCurrentUser } from 'vuefire';

// Handles authentication
export default defineNuxtRouteMiddleware(async (to) => {
  // Process magic links at page load
  processMagicLinks();
  // Get current user
  const user = await getCurrentUser();

  // Handles redirecting to login page if user is not logged in
  if (!user) {
    return navigateTo({
      path: '/login',
      query: {
        redirect: to.path,
      },
    });
  }
  return true;
  // TODO: check custom claims for admin access
  // ? Or maybe just use a separate route middleware for admin access
});
