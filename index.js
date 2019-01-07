module.exports = {
  parser: 'babel-eslint',
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
    'prefer-const': ['error', {
      destructuring: 'all'
    }],
    'quote-props': ['error', 'as-needed'],
    'eol-last': 'off',
    'comma-dangle': 'off'
  }
}
