// @ts-check

import {ERROR} from './config.js';

let tailwindcssPlugin;
try {
  tailwindcssPlugin = (await import('eslint-plugin-tailwindcss')).default;
} catch {
  // Don't fail in a setup without Tailwind installed
}

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  {
    plugins: {
      tailwindcss: /** @type {any} */ (tailwindcssPlugin)
    },
    rules: {
      'tailwindcss/classnames-order': ERROR,
      'tailwindcss/enforces-negative-arbitrary-values': ERROR,
      'tailwindcss/enforces-shorthand': ERROR,
      'tailwindcss/no-contradicting-classname': ERROR
    }
  }
];
