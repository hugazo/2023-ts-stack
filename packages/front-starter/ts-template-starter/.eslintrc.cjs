module.exports = {
  extends: '../../.eslintrc.yml',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: `${__dirname}/tsconfig.json`,
  },
  "ignorePatterns": [
    "dist",
    "node_modules",
    ".eslintrc.cjs"
  ],
};
