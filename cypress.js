const {ERROR} = require('./config');

module.exports = {
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
  },
  globals: {
    cy: false,
    Cypress: false
  }
};
