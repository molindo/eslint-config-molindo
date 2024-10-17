// @ts-check

import jestPlugin from 'eslint-plugin-jest';
import {ERROR, testFiles} from './config.js';

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  {
    plugins: {
      jest: jestPlugin
    },
    files: testFiles,
    rules: {
      'jest/consistent-test-it': [
        ERROR,
        {
          fn: 'it',
          withinDescribe: 'it'
        }
      ],
      'jest/prefer-lowercase-title': [ERROR, {ignore: ['describe']}],
      'jest/no-commented-out-tests': ERROR,
      'jest/no-disabled-tests': ERROR,
      'jest/no-focused-tests': ERROR,
      'jest/no-identical-title': ERROR
    }
  }
];
