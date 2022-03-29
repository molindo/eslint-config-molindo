const {ERROR} = require('./config');

module.exports = {
  plugins: ['jest'],

  extends: ['plugin:jest/recommended'],

  rules: {
    'jest/consistent-test-it': [
      ERROR,
      {
        fn: 'it',
        withinDescribe: 'it'
      }
    ],
    'prefer-lowercase-title': [ERROR, {ignore: ['describe']}]
  }
};
