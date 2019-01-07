module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'standard',
    'standard-react',
    'standard-jsx'
  ],
  plugins: [
    'standard',
    'react'
  ],
  rules: {
    'prefer-const': 'error',
    'quote-props': ['error', 'as-needed'],
    'eol-last': 'off',
    'comma-dangle': 'off'
  }
}
