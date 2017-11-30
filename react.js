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
    'react/jsx-boolean-value': [ERROR, 'never', {always: []}],
    'react/jsx-curly-brace-presence': [
      ERROR,
      {props: 'never', children: 'ignore'}
    ],
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
        ignoreCase: true,
        reservedFirst: ['key', 'ref']
      }
    ],
    'react/no-access-state-in-setstate': ERROR,
    'react/no-unused-prop-types': ERROR,
    'react/no-unused-state': ERROR,
    'react/no-typos': ERROR,
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
