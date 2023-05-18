import inquirer from 'inquirer';
import { UserRecord } from 'firebase-admin/auth';
import { updateUserRoles } from '../../models/auth.js';

export default async (user: UserRecord) => {
  const { roles } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'roles',
      message: 'Select Roles:',
      default: user.customClaims?.roles || [],
      choices: [
        {
          name: 'Admin',
          value: 'admin',
        },
        {
          name: 'Editor',
          value: 'editor',
        },
        {
          name: 'User',
          value: 'user',
        },
      ],
    },
  ]);
  const updatedUser = await updateUserRoles(user.uid, roles);
  return updatedUser;
};
