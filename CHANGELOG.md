# CHANGELOG

## 5.0.0

### Features

 - Typescript support.
 - Add automatic version detection for React.
 - Allow more recent versions of dependencies.
 - Remove peer dependencies in favour of actual dependencies since ESLint 7 resolves them correctly.
 - Warn about [confusing browser globals](https://www.npmjs.com/package/confusing-browser-globals) when accessing them without `window`.
 - Sort desctructured keys when using the React config (useful for destructured props to match the prop type definition).

### Fixes

 - Keep `trailingComma: 'none'` for newer prettier versions.
 - Keep auto fix behaviour of `react-hooks/exhaustive-deps` in more recent versions.
 - Replace `jsx-a11y/label-has-for` with `jsx-a11y/label-has-associated-control`.

### Breaking changes

 - The base JavaScript config `molindo` was renamed to `molindo/javascript`.
 - The base JavaScript config is no longer included in the React config. Use `"extends": ["molindo/javascript", "molindo/react"]` to use both.
 - Require a minimum version of Node.js 10
 - Use `eslint@^7.0.0`
 - A declaration style is now enforced for functions. Since there's no auto fix, it's probably the best option to override this rule in existing code bases which use a different style extensively.
