import inquirer from 'inquirer';
import { UserRecord } from 'firebase-admin/auth';
import { getUsers } from '../../models/auth.js';
import selectedUserScreen from './selected.js';

type UserListScreenResult = {
  userSelection: UserRecord | null;
};

export default async () => {
  const result = await getUsers();
  const userEmails = result.users.map((user) => ({
    name: user.email,
    value: user,
  }));
  const { userSelection }: UserListScreenResult = await inquirer.prompt([
    {
      type: 'list',
      name: 'userSelection',
      message: 'Select a user',
      choices: [
        ...userEmails,
        {
          name: 'Back',
          value: null,
        },
      ],
    },
  ]);
  if (userSelection) {
    await selectedUserScreen(userSelection);
  }
  return result;
};
