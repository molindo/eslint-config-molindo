const {ERROR, OFF} = require('./config');

module.exports = {
  plugins: ['jest'],

  extends: ['plugin:jest/recommended'],

  rules: {
    'jest/expect-expect': OFF,
    'jest/consistent-test-it': [
      ERROR,
      {
        fn: 'it',
        withinDescribe: 'it'
      }
    ],
    'jest/prefer-lowercase-title': [ERROR, {ignore: ['describe']}]
  }
};
