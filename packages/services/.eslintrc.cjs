module.exports = {
  extends: '../../.eslintrc.yml',
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: `${__dirname}/tsconfig.eslint.json`,
  },
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts"
  ],
  "ignorePatterns": [
    "dist",
    "node_modules",
    ".eslintrc.cjs"
  ],
};
