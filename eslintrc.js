/* eslint-disable-next-line no-unused-vars */
const disable = 0;
/* eslint-disable-next-line no-unused-vars */
const warn = 1;
const error = 2;

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['google', 'plugin:prettier/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-inline-comments': error,
  },
};
