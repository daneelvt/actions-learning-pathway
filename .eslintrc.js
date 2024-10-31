module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    // Add custom rules here
    'no-console': 'warn',
    'no-unused-vars': 'warn',
  },
};
