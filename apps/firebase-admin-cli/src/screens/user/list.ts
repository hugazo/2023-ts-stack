import inquirer from 'inquirer';
import { UserRecord } from 'firebase-admin/auth';
import { getUsers } from '../../models/auth.js';
import selectedUserScreen from './selected.js';

type UserListScreenResult = {
  userSelection: UserRecord;
};

export default async () => {
  const result = await getUsers();
  const userEmails = result.users.map((user) => ({
    name: user.email,
    value: user,
  }));
  const userListSelection: UserListScreenResult = await inquirer.prompt([
    {
      type: 'list',
      name: 'userSelection',
      message: 'Select a user',
      choices: userEmails,
    },
  ]);
  await selectedUserScreen(userListSelection.userSelection);
  return result;
};
