// @ts-check

import {getPresets} from './src/index.js';

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  ...(await getPresets(
    'typescript', // (contains javascript)
    'react',
    'cssModules',
    'tailwind',
    'jest',
    'cypress',
    'vitest'
  )),
  {
    languageOptions: {
      globals: {
        it: 'readonly',
        describe: 'readonly',
        expect: 'readonly',
        cy: 'readonly',
        Cypress: 'readonly'
      }
    }
  }
];
