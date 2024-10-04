import {ERROR, testFiles} from './config.js';

export default [
  {
    files: testFiles,
    rules: {
      'no-restricted-properties': [
        ERROR,
        ...['it', 'describe', 'test'].map((name) => ({
          object: name,
          property: 'only',
          message:
            'This should only be used for debugging and removed afterwards.'
        }))
      ]
    }
  }
];
