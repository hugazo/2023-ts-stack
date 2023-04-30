import inquirer from 'inquirer';
import userListScreen from './user/list.js';
import userCreateScreen from './user/create.js';

const mainScreen = async () => {
  const { mainSelection } = await inquirer.prompt([
    {
      type: 'list',
      name: 'mainSelection',
      message: 'What do you want to do?',
      choices: [
        {
          name: 'Create user',
          value: 'create',
        },
        {
          name: 'List users',
          value: 'list',
        },
        new inquirer.Separator(),
        {
          name: 'Exit',
          value: 'exit',
        },
      ],
    },
  ]);
  switch (mainSelection) {
    case 'list':
      await userListScreen();
      break;
    case 'create':
      await userCreateScreen();
      break;
    case 'exit':
      console.log('Exit');
      process.exit(0);
      break;
    default:
      console.log('Invalid option');
      break;
  }
  mainScreen();
};

export default mainScreen;
