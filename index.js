const baseRules = {
  'max-depth': ['error', 3], // avoid deep nesting
  'max-len': ['error', 95],  // avoid long lines
  'max-nested-callbacks': ['error', 3],
  'max-statements': ['error', 10, // avoid long functions
    {'ignoreTopLevelFunctions': false}],
  'max-params': ['error', 5],
  'no-var': 2, // declarations must use let or const
  'prefer-const': 2, // let should be a red flag, use const wherever possible
  'extra-rules/no-for-loops': 2,
  'extra-rules/no-long-files': [2, 90], // avoid long files
  'extra-rules/potential-point-free': 1 // use `f` instead of `x => f(x)`
}

const parserOptions = {
  sourceType: 'module'
}

const node = {
  env: {
    'es6': true
  },
  plugins: ['extra-rules'],
  extends: 'standard', // use standard as a base library
  parserOptions: parserOptions,
  rules: baseRules
}

module.exports = { 
  node: node
  // potentially add more rules for unit tests, frontend fwks, etc
}
