/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-09 10:31:35
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2020-03-17 15:39:37
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', 'airbnb-base'],
  rules: {
    'linebreak-style': [0, 'error', 'windows'],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': 0,
    'semi': 'off',
    'eol-last': 'off',
    'no-trailing-spaces': 'off',
    "comma-dangle": 'off',
    "quotes": 'off',
    "import/newline-after-import": 'off',
    "import/no-unresolved": 'off',
    "eqeqeq": 0,
    "implicit-arrow-linebreak": 'off',
    'function-paren-newline': 'off',
    'arrow-parens': 'off',
    'prefer-destructuring': 'off',
    "no-multiple-empty-lines": [1, { "max": 2 }],
    "operator-linebreak": 'off',
    "no-param-reassign": 'off',
    'func-names': 'off',
    'space-before-function-paren': 'off',
    'prefer-arrow-callback': 'off',
    'spaced-comment': 'off',
    'object-shorthand': 'off',
    'consistent-return': 'off',
    'no-restricted-syntax': 'off',
    'object-curly-newline': 'off',
    'max-len': ["error", 150],
    'arrow-body-style': 'off',
    'array-callback-return': 'off',
    'no-underscore-dangle': 'off',
    'guard-for-in': 'off',
    'no-multi-spaces': 'off',
    'valid-typeof': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint',
  }
};