import { processMagicLinks } from '@services/firebase';
import { getCurrentUser } from 'vuefire';

export default defineNuxtRouteMiddleware(async (to, from) => {
  // Checks if the link is a magic link
  processMagicLinks();

  // Get current user
  const user = await getCurrentUser();
  // TODO: Redirect the user to referer if it is logged in
  if (user) {
    // eslint-disable-next-line no-console
    console.log('should redirect');
  } else {
    // Keep the user if it is not logged in
    // eslint-disable-next-line no-console
    console.log('user not logged in, keep it');
  }
});
