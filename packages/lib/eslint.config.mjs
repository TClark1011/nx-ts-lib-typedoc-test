import baseConfig from '../../eslint.config.mjs';
import jsdoc from 'eslint-plugin-jsdoc';

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...baseConfig,
  {
    files: ['**/*.json'],
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: [
            '{projectRoot}/eslint.config.{js,cjs,mjs}',
            '{projectRoot}/vite.config.{js,ts,mjs,mts}',
          ],
        },
      ],
    },
    languageOptions: {
      parser: await import('jsonc-eslint-parser'),
    },
  },
  // JSDoc Enforcement
  {
    files: ['./src/functions/*/index.ts'],
    plugins: {
      jsdoc,
    },
    rules: jsdoc.configs['flat/recommended-typescript-error'].rules,
    // rules: {
    //   // no console log
    //   'no-console': 'error',
    // },
  },
];
