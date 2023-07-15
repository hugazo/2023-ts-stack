module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue-pug/vue3-essential',
    '../../.eslintrc.cjs',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: `${__dirname}/tsconfig.json`,
    extraFileExtensions: ['.vue'],
  },
};
