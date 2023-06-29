module.exports = {
  extends: [
    '../../.eslintrc.cjs',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: `${__dirname}/tsconfig.eslint.json`,
    extraFileExtensions: ['.vue'],
  },
};

// TODO:
// - Parse auto imports from nuxt
