// @ts-check

import * as all from './src/index.js';

/**
 * @type {Array<import('eslint').Linter.Config>}
 */
export default [
  ...all.typescript, // (contains javascript)
  ...all.react,
  ...all.cssModules,
  ...all.tailwind,
  ...all.jest,
  ...all.cypress,
  ...all.vitest,
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
