module.exports = {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:vue-pug/vue3-essential',
    '../../.eslintrc.cjs',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // eslint-disable-next-line n/no-path-concat
    project: `${__dirname}/tsconfig.eslint.json`,
    extraFileExtensions: ['.vue'],
  },
  // add a rule that disables the vue/multi-word-component-names rule on the /pages directory
  overrides: [
    {
      files: ['pages/**/*.vue', 'layouts/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
};
