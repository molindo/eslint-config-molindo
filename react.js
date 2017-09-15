const base = require('./index');
const ERROR = 'error';

module.exports = Object.assign({}, base, {
  plugins: base.plugins.concat('css-modules', 'jsx-a11y', 'react'),

  settings: Object.assign({}, base.settings, {
    'import/resolver': 'webpack'
  }),

  extends: (base.extends || []).concat(
    'plugin:css-modules/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended'
  ),

  rules: Object.assign({}, base.rules, {
    'jsx-a11y/label-has-for': [
      ERROR,
      {
        required: {every: ['nesting']},
        allowChildren: true
      }
    ],
    'react/default-props-match-prop-types': ERROR,
    'react/jsx-handler-names': [
      ERROR,
      {
        eventHandlerPrefix: 'on',
        eventHandlerPropPrefix: 'on'
      }
    ],
    'react/jsx-no-bind': [ERROR, {allowArrowFunctions: true}],
    'react/jsx-sort-props': [
      ERROR,
      {
        ignoreCase: true

        // TODO: Wait for https://github.com/yannickcr/eslint-plugin-react/pull/1340
        // reservedFirst: ['key', 'ref'],
      }
    ],
    'react/no-unused-prop-types': ERROR,
    'react/sort-comp': ERROR
  }),

  overrides: (base.overrides || []).concat({
    files: ['src/**/__tests__/*-test.js'],
    rules: {
      'css-modules/no-unused-class': 0,
      'react/prop-types': 0
    }
  })
});
