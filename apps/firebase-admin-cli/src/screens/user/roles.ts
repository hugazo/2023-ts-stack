import inquirer from 'inquirer';
import { UserRecord } from 'firebase-admin/auth';
import { updateUserRoles } from '../../models/auth.js';

export default async (user: UserRecord) => {
  const { roles } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'roles',
      message: 'Select Roles with [space], then press [Enter]',
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
  await updateUserRoles(user.uid, roles);
  console.log('Updated User', user.uid, roles);
};
