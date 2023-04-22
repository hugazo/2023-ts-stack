import inquirer from 'inquirer';

const mainScreen = async () => {
  const result = await inquirer.prompt([
    {
      type: 'list',
      name: 'main',
      message: 'What do you want to do?',
      choices: [
        {
          name: 'Create a new project',
          value: 'create',
        },
        {
          name: 'Add a new component',
          value: 'add',
        },
        {
          name: 'Exit',
          value: 'exit',
        },
      ],
    },
  ]);
  console.log(result);
  return result;
};

export default mainScreen;
