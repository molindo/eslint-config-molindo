import importPlugin from 'eslint-plugin-import';
// eslint-disable-next-line import/no-unresolved -- False positive
import typescriptEslint from 'typescript-eslint';
import {ERROR, OFF} from './config.js';
import javascript from './javascript.js';

export default [
  ...javascript,

  typescriptEslint.configs.eslintRecommended,
  ...typescriptEslint.configs.recommended,
  importPlugin.configs.typescript,

  {
    // Only apply TypeScript rules to TypeScript files to avoid
    // causing issues in regular JavaScript files. See also:
    // https://stackoverflow.com/a/64488474/343045
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      // The TypeScript compiler takes care of this
      'import/no-unresolved': OFF,
      'import/named': OFF,
      'import/namespace': OFF,
      'import/default': OFF,
      'import/export': OFF, // (also has false positives, see #70)

      // Use the TypeScript alternatives
      'no-unused-vars': OFF,
      'no-shadow': OFF,
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
      '@typescript-eslint/no-var-requires': OFF,
      '@typescript-eslint/switch-exhaustiveness-check': ERROR,
      '@typescript-eslint/explicit-member-accessibility': [
        ERROR,
        {accessibility: 'explicit', overrides: {constructors: 'no-public'}}
      ]
    }
  }
];
