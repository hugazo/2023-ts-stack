module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '../../.eslintrc.cjs',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: `${__dirname}/tsconfig.json`,
    extraFileExtensions: ['.vue'],
  },
};
