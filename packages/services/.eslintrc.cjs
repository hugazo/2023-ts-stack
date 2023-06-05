module.exports = {
  extends: '../../.eslintrc.yml',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `${__dirname}/tsconfig.eslint.json`
  },
  ignorePatterns: [
    "dist",
    "node_modules",
    ".eslintrc.cjs",
    "jest.config.ts",
  ],
};
