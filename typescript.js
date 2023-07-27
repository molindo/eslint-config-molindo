const {ERROR, OFF} = require('./config');
const javascript = require('./javascript');

module.exports = Object.assign({}, javascript, {
  parser: '@typescript-eslint/parser',
  plugins: javascript.plugins.concat('@typescript-eslint'),

  // Only apply TypeScript rules to TypeScript files to avoid
  // causing issues in regular JavaScript files. See also:
  // https://stackoverflow.com/a/64488474/343045
  overrides: (javascript.overrides || []).concat([
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: (javascript.extends || []).concat(
        // This is a compatibility ruleset that:
        // 1. Disables rules from eslint:recommended which are already handled by TypeScript.
        // 2. Enables rules that make sense due to TS's typechecking / transpilation.
        'plugin:@typescript-eslint/eslint-recommended',

        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript'
      ),
      parserOptions: {
        project: './tsconfig.json'
      },
      rules: {
        // Creates false positives (see https://github.com/molindo/eslint-config-molindo/issues/70)
        'import/export': OFF,
        // Use the TypeScript alternatives
        'no-unused-vars': OFF,
        'no-shadow': OFF,
        // The TypeScript compiler takes care of this
        'import/no-unresolved': OFF,
        'no-use-before-define': OFF,
        '@typescript-eslint/array-type': [ERROR, {default: 'generic'}],
        '@typescript-eslint/await-thenable': ERROR,
        '@typescript-eslint/ban-ts-comment': [
          ERROR,
          {
            'ts-expect-error': false, // This is sometimes necessary and a better alternative to ts-ignore
            'ts-ignore': 'allow-with-description'
          }
        ],
        // Avoid declaring the implied return type for React components
        '@typescript-eslint/explicit-module-boundary-types': OFF,
        '@typescript-eslint/method-signature-style': [ERROR, 'method'],
        '@typescript-eslint/no-explicit-any': OFF,
        '@typescript-eslint/no-for-in-array': ERROR,
        '@typescript-eslint/no-inferrable-types': ERROR,
        '@typescript-eslint/no-misused-promises': [
          ERROR,
          {checksVoidReturn: {attributes: false}}
        ],
        // There are valid use cases for this
        // https://github.com/molindo/eslint-config-molindo/issues/83
        '@typescript-eslint/no-empty-interface': OFF,
        '@typescript-eslint/no-empty-function': OFF,
        '@typescript-eslint/no-non-null-assertion': OFF,
        '@typescript-eslint/no-shadow': [ERROR],
        '@typescript-eslint/no-unused-vars': ERROR,
        '@typescript-eslint/no-var-requires': OFF,
        '@typescript-eslint/switch-exhaustiveness-check': ERROR,
        '@typescript-eslint/explicit-member-accessibility': [
          ERROR,
          {accessibility: 'explicit', overrides: {constructors: 'no-public'}}
        ],
        // Don't require duplicate type annotations.
        'valid-jsdoc': OFF
      }
    }
  ])
});
