module.exports = {
  extends: '../../.eslintrc.cjs',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: `${__dirname}/tsconfig.eslint.json`,
  },
  ignorePatterns: [
    'dist',
    'node_modules',
  ],
};
