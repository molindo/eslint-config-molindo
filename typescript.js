const javascript = require('./javascript');

const ERROR = 'error';
const OFF = 'off';

module.exports = Object.assign({}, javascript, {
  parser: '@typescript-eslint/parser',
  plugins: javascript.plugins.concat('@typescript-eslint'),
  extends: (javascript.extends || []).concat(
    'plugin:@typescript-eslint/recommended'
  ),
  parserOptions: {
    project: './tsconfig.json'
  },

  rules: Object.assign({}, javascript.rules, {
    // Use the one from TypeScript instead
    'no-unused-vars': OFF,
    // The TypeScript compiler takes care of this
    'import/no-unresolved': OFF,
    '@typescript-eslint/array-type': [ERROR, {default: 'generic'}],
    '@typescript-eslint/await-thenable': ERROR,
    // Avoid declaring the implied return type for React components
    '@typescript-eslint/explicit-module-boundary-types': OFF,
    '@typescript-eslint/method-signature-style': [ERROR, 'method'],
    '@typescript-eslint/no-explicit-any': OFF,
    '@typescript-eslint/no-for-in-array': ERROR,
    '@typescript-eslint/no-inferrable-types': ERROR,
    '@typescript-eslint/no-misused-promises': ERROR,
    '@typescript-eslint/no-unused-vars': ERROR,
    '@typescript-eslint/switch-exhaustiveness-check': ERROR,
    '@typescript-eslint/explicit-member-accessibility': [
      ERROR,
      {accessibility: 'explicit', overrides: {constructors: 'no-public'}}
    ]
  })
});