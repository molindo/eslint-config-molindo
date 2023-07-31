const {ERROR} = require('./config');

module.exports = {
  plugins: ['tailwindcss'],
  rules: {
    'tailwindcss/classnames-order': ERROR,
    'tailwindcss/enforces-negative-arbitrary-values': ERROR,
    'tailwindcss/enforces-shorthand': ERROR,
    'tailwindcss/no-custom-classname': ERROR,
    'tailwindcss/no-contradicting-classname': ERROR
  }
};
