import inquirer from 'inquirer';
import { UserRecord } from 'firebase-admin/auth';
import userListScreen from './list.js';
import userRoleScreen from './roles.js';
import { switchUserStatus } from '../../models/auth.js';

export const selectedUserScreen = async (user: UserRecord) => {
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
          name: `${user.disabled ? 'Enable' : 'Disable'} User`,
          value: 'switchStatus',
        },
        {
          name: `Update User Roles (${user.customClaims?.roles ? user.customClaims.roles : ''})`,
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
    case 'switchStatus': {
      const newStatus = !user.disabled;
      const updatedUser = await switchUserStatus(user.uid, newStatus);
      await selectedUserScreen(updatedUser);
      break;
    }
    case 'roles': {
      const updatedUser = await userRoleScreen(user);
      await selectedUserScreen(updatedUser);
      break;
    }
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

export default selectedUserScreen;
