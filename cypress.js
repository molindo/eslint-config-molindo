const {ERROR} = require('./config');

module.exports = {
  rules: {
    'no-restricted-properties': [
      ERROR,
      {
        object: 'it',
        property: 'only',
        message:
          'This should only be used for debugging and removed afterwards.'
      }
    ]
  }
};
