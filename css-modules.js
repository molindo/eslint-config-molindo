const {OFF, testFiles} = require('./config');

module.exports = {
  plugins: ['css-modules'],
  extends: ['plugin:css-modules/recommended'],
  overrides: [
    {
      files: testFiles,
      rules: {
        'css-modules/no-unused-class': OFF
      }
    }
  ]
};
