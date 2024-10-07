// @ts-check

import {getConfig} from './src/index.js';

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  ...(await getConfig(
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
