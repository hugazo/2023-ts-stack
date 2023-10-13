import { getCurrentUser } from '@services/firebase';

export default defineNuxtRouteMiddleware(async (_to, from) => {
  const user = await getCurrentUser();
  if (user) {
    return navigateTo({
      path: `${from.query.redirect ? from.query.redirect : '/'}`,
    });
  }
  return true;
});
