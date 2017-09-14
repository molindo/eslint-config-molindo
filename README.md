# eslint-config-molindo

Molindo ESLint config that implements our styleguide and helps to catch errors.

## Usage

1. `yarn add eslint-config-molindo --dev`
2. `touch .eslintrc`, if there isn't already one.
3. Add `{"extends": "molindo"}` or `{"extends": "molindo/react"}` to `.eslintrc`
4. As [shared ESLint configs can't include dependencies themselves](https://github.com/eslint/eslint/issues/3458) yet, please install all peer dependencies as dev dependencies. The peers can be found here: `npm info "eslint-config-molindo" peerDependencies`.
5. Happy linting!

## Further configuration

 - Since the linting of the app should refer to the local copy of eslint and not a potentially globally installed one, it's helpful to add an npm task for this (e.g. `"lint": "eslint src"`).

 - Set the [`env` in `.eslintrc`](https://eslint.org/docs/user-guide/configuring#specifying-environments) as necessary (e.g. `{"browser": true, "node": true, "es6": true, "jest": true}`) so ESLint doesn't report missing globals.

## Editor configuration

It's strongly recommended to use an eslint integration for your editor of choice (e. g. [linter-eslint](https://atom.io/packages/linter-eslint) for [Atom](https://atom.io/)) so you see warnings and errors while writing code. Also the setting to auto fix errors on save should be turned on, so purely stylistic errors such as the ones reported by `prettier` are fixed automatically.

If your linter plugin checks your code as you type (before you save) it can be helpful to silence stylistic errors to reduce noise and let the formatting happen on save. E.g. `linter-eslint` for Atom has the setting "Silence specific rules while typing" which can for example be set to `"prettier/prettier", "react/jsx-sort-props"`.

## Versioning

 - Patch releases are for improved documentation, fixing a rule to stop reporting false positives and internal code changes.
 - Minor releases are for changes to rules that can automatically be fixed.
 - Major releases happen when rules are changed that can't be fixed automatically.
