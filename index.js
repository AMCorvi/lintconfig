import { Component, Proptypes } from 'react'




module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'comma-style': ['error', 'first'],
    'dot-location': ['error', 'property'],
    'spaced-comment': ['error', 'always'],
    ,'object-curly-newline': ["error", { 'minProperties': 3 }]
    ,"key-spacing": [2, {
    "singleLine": { "beforeColon": false, "afterColon": true },
    "multiLine": {
      "beforeColon": true,
      "afterColon": true,
      "align": "colon"
      }
    }]
    ,"array-bracket-spacing": ["error", 'always', {"singleValue": false}]
  },
};
