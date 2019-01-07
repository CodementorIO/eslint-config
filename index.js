module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  extends: [
    'standard',
    'standard-jsx'
  ],
  plugins: [
    'standard',
    'react'
  ],
  rules: {
    'prefer-const': 'error',
    'eol-last': 'off'
  }
}
