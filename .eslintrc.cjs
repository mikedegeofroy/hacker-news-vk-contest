module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'no-console': 'warn',
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'prefer-const': 'error',
    indent: ['error', 2, {SwitchCase: 1}],
    'max-len': ['error', { code: 120 }],
    'import/no-unterminated-multiline': ['off'],
  },
};
