import js from '@eslint/js';
import confusingBrowserGlobals from 'confusing-browser-globals';
import importPlugin from 'eslint-plugin-import';
import unicornPlugin from 'eslint-plugin-unicorn';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import {ERROR} from './config.js';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest'
      }
    },
    plugins: {
      unicorn: unicornPlugin,
      import: importPlugin,
      'unused-imports': unusedImportsPlugin
    },
    settings: {
      'import/resolver': 'node'
    },
    rules: {
      'array-callback-return': ERROR,
      'arrow-body-style': [ERROR, 'as-needed'],
      curly: [ERROR, 'multi-line'],
      'dot-notation': ERROR,
      eqeqeq: [ERROR, 'always', {null: 'ignore'}],
      'func-names': [ERROR, 'as-needed'],
      // See discussion in https://github.com/molindo/eslint-config-molindo/issues/27
      'func-style': [ERROR, 'declaration', {allowArrowFunctions: false}],
      'unused-imports/no-unused-imports': ERROR,
      'import/named': ERROR,
      'import/namespace': ERROR,
      'import/default': ERROR,
      'import/export': ERROR,
      'import/no-duplicates': ERROR,
      'import/newline-after-import': ERROR,
      'import/no-unresolved': [ERROR, {commonjs: true}],
      'import/no-extraneous-dependencies': ERROR,
      'import/order': [
        ERROR,
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index'
          ],
          'newlines-between': 'never',
          alphabetize: {order: 'asc'}
        }
      ],
      'import/no-useless-path-segments': ERROR,
      'no-console': [ERROR, {allow: ['warn', 'error']}],
      'no-restricted-globals': [ERROR].concat(confusingBrowserGlobals),
      'no-restricted-syntax': [
        ERROR,
        {
          selector: 'ForInStatement',
          message:
            'for … in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries} and iterate over the resulting array. Iteration based on arrays usually shows the intent of the loop clearer and works better with chaining. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods'
        }
      ],
      'no-shadow': ERROR,
      'no-throw-literal': ERROR,
      'no-unneeded-ternary': ERROR,
      'no-unused-expressions': ERROR,
      'no-use-before-define': [ERROR, {functions: false}],
      'no-useless-rename': ERROR,
      'no-var': ERROR,
      'object-shorthand': ERROR,
      'prefer-arrow-callback': ERROR,
      'prefer-const': ERROR,
      'spaced-comment': [
        ERROR,
        'always',
        // Allow TypeScript reference imports with tripple slashes
        // https://github.com/molindo/eslint-config-molindo/issues/69
        {
          line: {
            markers: ['/'],
            exceptions: ['/']
          }
        }
      ],
      'unicorn/explicit-length-check': ERROR,
      'unicorn/import-index': ERROR,
      'unicorn/no-abusive-eslint-disable': ERROR,
      'unicorn/prefer-array-index-of': ERROR,
      'unicorn/prefer-optional-catch-binding': ERROR,
      'unicorn/no-useless-spread': ERROR
    }
  }
];
