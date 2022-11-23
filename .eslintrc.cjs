module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'no-use-before-define': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'react/function-component-definition': 0,
    'react/require-default-props': 0,
    'linebreak-style': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
