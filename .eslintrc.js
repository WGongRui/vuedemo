// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    "no-use-before-define": 2,
    "no-unused-vars": 0,
    "no-mixed-spaces-and-tabs": 0,
    "no-irregular-whitespace": 0,
    "no-trailing-spaces": 0,
    "no-whitespace-before-property": 0,
    "semi-spacing": 0,
    "yield-star-spacing": 0,
    "no-multi-spaces": 0,
    "indent": 0,
    "comma-spacing": [0, {"before": false,"after": false}],
    "no-multiple-empty-lines": [0, {"max":2}],
    "newline-after-var": 0,
    "yield-star-spacing": 0,
    "spaced-comment": 0
  }
}
