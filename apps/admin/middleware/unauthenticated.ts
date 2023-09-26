import { getCurrentUser } from '@services/firebase';

export default defineNuxtRouteMiddleware(async () => {
  const user = await getCurrentUser();
  if (user) {
    const route = useRoute();
    return navigateTo({
      path: `${route.query.redirect ? route.query.redirect : '/'}`,
    });
  }
  return true;
});
