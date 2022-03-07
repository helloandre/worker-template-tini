/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
    worker: true,
    node: true,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};

// module.exports = {
//   root: true,
//   env: {
//     es6: true,
//   },
//   extends: ['plugin:vue/vue3-essential', 'eslint:recommended'],
//   parserOptions: {
//     ecmaVersion: 2020,
//     sourceType: 'module',
//   },
//   plugins: ['eslint-plugin-prettier'],
// };
