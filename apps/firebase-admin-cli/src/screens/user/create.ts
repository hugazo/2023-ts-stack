import inquirer from 'inquirer';
import { createUser } from '../../models/auth.js';

export default async () => {
  const user = await inquirer.prompt([
    {
      type: 'input',
      name: 'displayName',
      message: 'Display Name (optional):',
    },
    {
      type: 'input',
      name: 'email',
      message: 'User Email:',
      // TODO: Validate email
    },
    // TODO: Add optionals
    // {
    //   type: 'input',
    //   name: 'photoUrl',
    //   message: 'Photo URL (optional):',
    // },
    {
      type: 'confirm',
      name: 'emailVerified',
      message: 'Email Verified:',
    },
  ]);
  // TODO: Handle these loggers
  console.log('Should Create', user);
  const createdUser = await createUser(user);
  console.log('Created User', createdUser);
};
