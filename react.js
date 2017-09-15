const base = require('./index');

const ERROR = 'error';
const OFF = 'off';

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
    'react/sort-comp': [
      ERROR,
      {
        order: [
          'static-methods',
          'lifecycle',
          '/^on.+$/',
          'getters',
          'setters',
          '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
          'everything-else',
          '/^render.+$/',
          'render'
        ]
      }
    ]
  }),

  overrides: (base.overrides || []).concat({
    files: ['src/**/__tests__/*-test.js'],
    rules: {
      'css-modules/no-unused-class': OFF,
      'react/prop-types': OFF,
      'react/display-name': OFF
    }
  })
});
