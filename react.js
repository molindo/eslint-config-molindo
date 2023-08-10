const {ERROR, OFF, testFiles} = require('./config');

module.exports = {
  plugins: ['jsx-a11y', 'react', 'react-hooks', 'sort-destructure-keys'],

  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['node_modules', 'src']
      }
    }
  },

  extends: ['plugin:jsx-a11y/recommended', 'plugin:react/recommended'],

  rules: {
    'jsx-a11y/label-has-associated-control': ERROR,
    'react/button-has-type': ERROR,
    'react/default-props-match-prop-types': ERROR,
    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': [
      ERROR,
      // Since we throw on missing deps, it's not a question of whether or not
      // the deps are added, but rather if you have to do it manually or
      // automatically. Therefore go for the automatic fix.
      {enableDangerousAutofixThisMayCauseInfiniteLoops: true}
    ],
    'react/react-in-jsx-scope': OFF,
    'react/jsx-boolean-value': [ERROR, 'never', {always: []}],
    'react/jsx-curly-brace-presence': [
      ERROR,
      {props: 'never', children: 'ignore'}
    ],
    'react/function-component-definition': [
      ERROR,
      {
        namedComponents: 'function-declaration',
        unnamedComponents: 'arrow-function'
      }
    ],
    'react/jsx-handler-names': [
      ERROR,
      {
        eventHandlerPrefix: 'on',
        eventHandlerPropPrefix: 'on'
      }
    ],
    'react/jsx-no-bind': [
      ERROR,
      {allowArrowFunctions: true, allowFunctions: true}
    ],
    'react/jsx-no-target-blank': ERROR,
    'react/jsx-sort-props': [
      ERROR,
      {
        locale: 'en',
        ignoreCase: true,
        reservedFirst: ['key', 'ref']
      }
    ],
    'react/no-access-state-in-setstate': ERROR,
    'react/no-direct-mutation-state': ERROR,
    'react/no-this-in-sfc': ERROR,
    'react/no-typos': ERROR,
    'react/no-unstable-nested-components': [ERROR, {allowAsProps: true}],
    'react/no-unused-prop-types': ERROR,
    'react/no-unused-state': ERROR,
    'react/self-closing-comp': ERROR,
    'react/sort-comp': [
      ERROR,
      {
        order: [
          'type-annotations',
          'static-variables',
          'static-methods',
          'instance-variables',
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
    ],
    'react/sort-prop-types': ERROR,
    'sort-destructure-keys/sort-destructure-keys': ERROR
  },

  overrides: [
    {
      files: testFiles,
      rules: {
        'react/prop-types': OFF,
        'react/display-name': OFF
      }
    }
  ]
};
