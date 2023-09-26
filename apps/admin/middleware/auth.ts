import { processMagicLinks, getCurrentUser, signOut } from '@services/firebase';

/**
 * Authentication Middleware
 * This middleware works at load time and redirects to login page if user is not logged in
*/

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
  // Checks if user is an admin
  const idTokenResult = await user.getIdTokenResult();
  if (!idTokenResult.claims.roles.includes('admin')) {
    await signOut();
    return navigateTo({
      path: '/login',
      query: {
        redirect: to.path,
      },
    });
  }
  return true;
});
