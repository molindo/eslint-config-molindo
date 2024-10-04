import * as all from './src/index.js';

export default [
  ...all.typescript, // (contains javascript)
  ...all.react,
  ...all.cssModules,
  ...all.tailwind,
  ...all.jest,
  ...all.cypress,
  {
    languageOptions: {
      globals: {
        it: false,
        describe: false,
        expect: false,
        cy: false,
        Cypress: false
      }
    }
  }
];
