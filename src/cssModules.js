// @ts-check

// @ts-expect-error -- False positive
import cssModules from 'eslint-plugin-css-modules';
import {ERROR, OFF, testFiles} from './config.js';

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  {
    plugins: {
      'css-modules': cssModules
    },
    rules: {
      'css-modules/no-unused-class': ERROR,
      'css-modules/no-undef-class': ERROR
    }
  },
  {
    files: testFiles,
    rules: {
      'css-modules/no-unused-class': OFF
    }
  }
];
