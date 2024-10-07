# eslint-config-molindo

## Goals

1. Find errors that are detectable with static analysis.
2. Make reading code easier by providing consistent code style.
3. Make writing code faster by leveraging auto fix wherever possible.

## Getting started

1. `yarn add eslint eslint-config-molindo prettier --dev`
2. Setup your project config in `eslint.config.mjs`:

```js
// eslint.config.mjs
import * as molindo from 'eslint-config-molindo';

export default [
  // Base config
  ...molindo.typescript, // or `molindo.javascript`

  // Optional extensions
  ...molindo.react,
  ...molindo.cssModules,
  ...molindo.tailwind,
  ...molindo.vitest,
  ...molindo.jest,
  ...molindo.cypress,

  {
    // Your custom config
  }
];
```

3. If you require [globals](https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables), like browser APIs on `window`, you can add them to your config:

```js
// eslint.config.mjs
import globals from 'globals';

export default [
  // ...
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  }
];
```

4. To set up Prettier, add to your `package.json`:

```json
"prettier": "eslint-config-molindo/.prettierrc.json"
```

5. If you use TypeScript, add to your `tsconfig.json`:

```json
"extends": "eslint-config-molindo/tsconfig.json"
```

Happy linting!

## Further configuration

### CI integration

To validate your code in a CI pipeline, add the following to your `package.json`:

```json
"scripts": {
  "lint": "eslint src && prettier src --check"
}
```

### VSCode integration

The following two extensions are recommended:

1. [`dbaeumer.vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
2. [`esbenp.prettier-vscode`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

To auto-fix errors from ESLint as well as Prettier on save, you can use the following configuration:

```js
// settings.json (VSCode)
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "always"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

## Versioning

- Patch releases are for improved documentation, fixing a rule to stop reporting false positives and internal code changes.
- Minor releases are for changes to rules that can automatically be fixed.
- Major releases happen when rules are changed that can't be fixed automatically.
