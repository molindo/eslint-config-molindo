// @ts-check

/**
 * Loads the relevant ESLint configuration files.
 *
 * This enables to avoid loading plugins that may have
 * peer dependencies that are not installed.
 *
 * @param {...('javascript'|'typescript'|'react'|'cssModules'|'tailwind'|'jest'|'cypress'|'vitest')} names - The names of configurations to load
 * @returns {Promise<import('eslint').Linter.Config[]>}
 */
export async function getPresets(...names) {
  const config = await Promise.all(
    names.map((name) => import(`./${name}.js`).then((mod) => mod.default))
  );
  return config.flat();
}
