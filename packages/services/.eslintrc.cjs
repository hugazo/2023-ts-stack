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
  // This rule disables the import/no-extraneous-dependencies rule for build and test files
  overrides: [
    {
      files: [
        'rollup.config.mjs',
        'test/**/*.ts',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
