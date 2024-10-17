// @ts-check

import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import {ERROR} from './config.js';

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  {
    plugins: {
      tailwindcss: tailwindcssPlugin
    },
    rules: {
      'tailwindcss/classnames-order': ERROR,
      'tailwindcss/enforces-negative-arbitrary-values': ERROR,
      'tailwindcss/enforces-shorthand': ERROR,
      'tailwindcss/no-contradicting-classname': ERROR
    }
  }
];
