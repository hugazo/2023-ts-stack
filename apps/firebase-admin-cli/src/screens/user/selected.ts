import inquirer from 'inquirer';
import { UserRecord } from 'firebase-admin/auth';
import userListScreen from './list.js';
import userRoleScreen from './roles.js';

export default async (user: UserRecord) => {
  console.log(`Selected User: ${user.email}`);
  const { optionSelected } = await inquirer.prompt([
    {
      type: 'list',
      name: 'optionSelected',
      message: 'What do you want to do?',
      choices: [
        // TODO: Implement this option
        // {
        //   name: 'Update User Information',
        //   value: 'update',
        // },
        {
          name: 'Update User Roles',
          value: 'roles',
        },
        {
          name: 'Return to User List',
          value: 'return',
        },
      ],
    },
  ]);
  switch (optionSelected) {
    case 'roles':
      await userRoleScreen(user);
      break;
    case 'return':
      console.log('Return to user list');
      await userListScreen();
      break;
    default:
      console.log('Invalid option');
      break;
  }
  return user;
};
