module.exports = {
  extends: '../../.eslintrc.yml',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: `${__dirname}/tsconfig.eslint.json`,
  },
};
