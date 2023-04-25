import { getAuth } from 'firebase-admin/auth';

export const getUsers = async () => {
  const auth = getAuth();
  const users = await auth.listUsers();
  return users;
};

export const updateUserRoles = async (uid: string, roles: string[]) => {
  const auth = getAuth();
  await auth.setCustomUserClaims(uid, { roles });
};

export default { };
