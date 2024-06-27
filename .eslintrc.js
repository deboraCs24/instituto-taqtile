module.exports = {
  plugins: ['prettier'],
  parser: '@typescript-eslint/parser',
  extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'eslint:recommended',
      'prettier',
      'plugin:prettier/recommended',
  ],
  parserOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      tsconfigRootDir: __dirname,
      project: ['./tsconfig.json'],
      ecmaFeatures: {
          jsx: true,
      },
  },
  rules: {
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/no-floating-promises': 'off',
  },
  env: {
      es6: true,
      browser: true,
      node: true,
  },
};
