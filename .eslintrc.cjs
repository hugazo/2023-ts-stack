module.exports = {
  env: {
    node: true,
  },
  root: true,
  plugins: [
    'import',
    'prettier'
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:vue/vue3-essential',
  ],
  rules: {
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
  settings: {
    'import/parser': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx',
      ],
    },
    'import/resolver': {
      typescript: {
        project: [
          'packages/*/tsconfig.eslint.json',
          'apps/*/tsconfig.eslint.json',
        ],
      },
    },
  },
  // This rule disables the import/no-extraneous-dependencies rule for build and test files
  overrides: [
    {
      files: [
        '**/rollup.config.mjs',
        '**/test/**/*.ts',
      ],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
