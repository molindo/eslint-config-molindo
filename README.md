# eslint-config-molindo

## Goals

1. Find errors that are detectable with static analysis.
2. Make reading code easier by providing consistent code style.
3. Make writing code faster by leveraging auto fix wherever possible.

## Usage

1. `yarn add eslint eslint-config-molindo --dev`
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
  ...molindo.jest,
  ...molindo.cypress
];
```

3. If you use TypeScript, add `"extends": "eslint-config-molindo/tsconfig.json"` to your `tsconfig.json`.
4. Happy linting!

## Further configuration

### Prettier

If you use [Prettier](https://prettier.io/) to format your code, you can extend from `eslint-config-molindo/.prettierrc`.

### Globals

Configure [`globals`](https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables) as necessary, e.g. if you're using global Jest functionality.

### Editor integration

It's strongly recommended to use an ESLint integration for your editor of choice (e. g. [`dbaeumer.vscode-eslint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for [VSCode](https://code.visualstudio.com/) so you see errors while writing code.

Additionally, it's recommended to auto fix errors on save:

```js
// settings.json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": "always"
  }
}
```

If you're using Prettier, you may want to apply it automatically as well:

```js
// settings.json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

By doing this, both Prettier as well as ESLint will fix errors on save.

## Versioning

- Patch releases are for improved documentation, fixing a rule to stop reporting false positives and internal code changes.
- Minor releases are for changes to rules that can automatically be fixed.
- Major releases happen when rules are changed that can't be fixed automatically.
