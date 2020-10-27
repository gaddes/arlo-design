module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-props-no-spreading': 0,
    'eol-last': 0,
    'arrow-parens': 0,
    'object-curly-newline': 0,
    'max-len': 1, // Max length should be 'warning', not 'error'
  },
};
