import cssModules from 'eslint-plugin-css-modules';
import {ERROR, OFF, testFiles} from './config.js';

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
