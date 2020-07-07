# CHANGELOG

## 5.0.0

### Features

 - Typescript support.
 - Add automatic version detection for React.
 - Allow more recent versions of dependencies.
 - Move some peer dependencies to dependencies if they can be installed automatically.

### Fixes

 - Keep `trailingComma: 'none'` for newer prettier versions.

### Breaking changes

 - The base JavaScript config `molindo` was renamed to `molindo/javascript`.
 - The base JavaScript config is no longer included in the React config. Use `"extends": ["molindo/javascript", "molindo/react"]` to use both.
 - Require a minimum version of Node.js 10
 - Use `eslint@^7.0.0`
