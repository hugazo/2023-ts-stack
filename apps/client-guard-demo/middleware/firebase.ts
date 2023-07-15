import { getAuth } from '@services/firebase';

export default defineNuxtRouteMiddleware(async () => {
  // eslint-disable-next-line no-console
  console.log('auth initialized in plugin', getAuth());
});
