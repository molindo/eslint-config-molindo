import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import {ERROR} from './config.js';

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
