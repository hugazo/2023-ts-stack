import { getCurrentUser, processMagicLinks } from '@services/firebase';

export default defineNuxtRouteMiddleware(async (to) => {
  await processMagicLinks();
  const user = await getCurrentUser();
  if (user) {
    return navigateTo({
      path: `${to.query.redirect ? to.query.redirect : '/'}`,
    });
  }
  return true;
});
