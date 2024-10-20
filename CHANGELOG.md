# CHANGELOG

## 8.0.0

### Features

- ESLint 9 compatibility.
- Upgraded all plugins.
- [`eslint-import-resolver-typescript`](https://www.npmjs.com/package/eslint-import-resolver-typescript) is now used for TypeScript files to configure `eslint-plugin-import` correctly. This now correctly takes into consideration [`paths`](https://www.typescriptlang.org/tsconfig#paths) from `tsconfig.json` when determining ordering of imports.
- New rules from [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn):
  - `unicorn/prefer-array-index-of`
  - `unicorn/prefer-optional-catch-binding`
  - `unicorn/no-useless-spread`
- New rules from [`@typescript-eslint`](https://www.npmjs.com/package/@typescript-eslint):
  - `@typescript-eslint/prefer-optional-chain`
  - `@typescript-eslint/no-unnecessary-condition`
- New rules from [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import):
  - `import/no-useless-path-segments`
- Apply TypeScript-specific rules also to `.mts`, `.mtsx`, `.cts` and `.ctsx` files.
- Add [`eslint-plugin-unused-imports`](https://www.npmjs.com/package/eslint-plugin-unused-imports) to remove unused imports during autofix.
- Add vitest rules.
- Enable `sort-imports`.

### Breaking changes

- ESLint 9 is now required (see updated README)
- The ESLint config is intended to be consumed via ESM (e.g. by using `eslint.config.mjs`)
- Prettier no longer runs via an integrated rule since this is [discouraged](https://prettier.io/docs/en/integrating-with-linters#notes). Instead, a supplemental Prettier config is now provided (see updated README). To enable prettier checking on CI, you might want to consider adding `prettier --check` to your CI pipeline.
- The `valid-jsdoc` rule has been removed since it was removed from ESLint core and is only available via an additional plugin. If you'd like to keep this rule, add [`eslint-plugin-jsdoc`](https://www.npmjs.com/package/eslint-plugin-jsdoc) to your project.
- Globals for Cypress are no longer provided out of the box, but should be added explicitly by projects (see [predefined global variables](https://eslint.org/docs/latest/use/configure/language-options#predefined-global-variables)).
- The `src` directory is no longer resolved by default. For TypeScript projects, [`paths`](https://www.typescriptlang.org/tsconfig#paths) from `tsconfig.json` are now suggested as the alternative and will be resolved by default. For JavaScript projects, you can add `settings: {'import/resolver': {node: {paths: ['node_modules', 'src']}}}` to your ESLint config.

## 7.0.0

### Features

- Enable `react/function-component-definition` to have auto fix for using functions of React components (fixes #75)
- Enable `react/no-unstable-nested-components` (fixes #77)
- Enable `{checksVoidReturn: {attributes: false}}` for `@typescript-eslint/no-misused-promises` (fixes #86)
- Enable `@typescript-eslint/ban-ts-comment` (fixes #89)
- Upgrade available major versions of dependencies (`@typescript-eslint/eslint-plugin`)
- Add `molindo/tailwind`

### Fixes

- Detect `**/*.{e2e,cy}.{js,jsx,ts,tsx}` as test files (fixes #67)
- Change `import/no-extraneous-dependencies` rule configuration to allow dev dependencies in all files since it has too many false positives otherwise (fixes #71)
- Add `cy` and `Cypress` globals when `cypress` config is used (fixes #79)
- Disable `no-use-before-define` for TypeScript files (fixes #91)

### Breaking changes

- Require `eslint@^8.45`
- `eslint-config-molindo/setupPlugins` has been removed, since it's no longer necessary (fixes #59)
- Removed `typescript` from dependencies (consumers should install this)
- CSS modules-related rules were moved to `molindo/css-modules`
- Upstream breaking changes
  1. [`@typescript-eslint/eslint-plugin` & `@typescript-eslint/eslint-plugin`](https://github.com/typescript-eslint/typescript-eslint/blob/main/CHANGELOG.md#breaking-changes)
  2. [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest/blob/main/CHANGELOG.md#2700-2022-08-28)
  3. [`prettier`](https://prettier.io/blog/2023/07/05/3.0.0.html)
  4. [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier/blob/master/CHANGELOG.md#500)
  5. [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn/releases) (upgraded from v41 to v48)

## 6.0.1

### Fixes

- Add locale for `react/jsx-sort-props` ([#94](https://github.com/molindo/eslint-config-molindo/pull/94) by [@googol7](https://github.com/googol7))

## 6.0.0

### Features

- Upgrade to TypeScript 4

### Fixes

- Disable TypeScript rules which cause false positives.
- Disallow `describe.only`.

### Breaking changes

- Requires ESLint 8

## 5.1.1

### Fixes

- Add `allowFunctions` to `react/jsx-no-bind` rule.

## 5.1.0

### Features

- Add `jest` config
- Add `cypress` config
- Add `no-useless-rename`
- Add `spaced-comment`

### Fixes

- Avoid errors in JavaScript files in TypeScript projects
- Disable `react/react-in-jsx-scope`

## 5.0.2

### Fixes

- Compatibility with ESLint 7.23.0

## 5.0.0

### Features

- TypeScript support.
- Remove peer dependencies in favour of actual dependencies.
- Add automatic version detection for React.
- Allow more recent versions of dependencies.
- Warn about [confusing browser globals](https://www.npmjs.com/package/confusing-browser-globals) when accessing them without `window`.
- Sort desctructured keys when using the React config (useful for destructured props to match the prop type definition).
- Add useful rules from [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn): `unicorn/explicit-length-check`, `unicorn/import-index`, `unicorn/no-abusive-eslint-disable`
- Imports are alphabetized (within individual groups: dependencies, internal, local, etc.).
- Validate that array methods like `map` and `filter` return something.
- Improve React component method sorting if you're using classes.
- Add `react/button-has-type`.

### Fixes

- Removed `no-lonely-if` since there are valid cases for this pattern.
- Keep `trailingComma: 'none'` for newer prettier versions.
- Keep auto fix behaviour of `react-hooks/exhaustive-deps` in more recent versions.
- Replace `jsx-a11y/label-has-for` with `jsx-a11y/label-has-associated-control`.
- Allow for/of statements as there are valid use cases.

### Breaking changes

- The base JavaScript config `molindo` has been renamed to `molindo/javascript`.
- The base JavaScript config is no longer included in the React config. Use `"extends": ["molindo/javascript", "molindo/react"]` to use both.
- Require a minimum version of Node.js 10.
- Use `eslint@^7.0.0`.
- A declaration style is now enforced for functions. Since there's no auto fix, it's probably the best option to override this rule in existing code bases which use a different style extensively.
- This config now installs the relevant plugins automatically. However you have to use the JavaScript version of the ESLint config (`.eslintrc.js`) and add `require('eslint-config-molindo/setupPlugins')` there. Alternatively you can still install all necessary plugins yourself.
