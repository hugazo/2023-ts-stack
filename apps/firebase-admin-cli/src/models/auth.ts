import { getAuth } from 'firebase-admin/auth';

export const getUsers = async () => {
  const auth = getAuth();
  const users = await auth.listUsers();
  return users;
};

export const updateUserRoles = async (uid: string, roles: string[]) => {
  const auth = getAuth();
  await auth.setCustomUserClaims(uid, { roles });
  const updatedUser = await auth.getUser(uid);
  return updatedUser;
};

export const createUser = async (user: any) => {
  const auth = getAuth();
  const createdUser = await auth.createUser(user);
  return createdUser;
};

export const switchUserStatus = async (uid: string, status: boolean) => {
  const auth = getAuth();
  const updatedUser = await auth.updateUser(uid, { disabled: status });
  return updatedUser;
};

export default { };
