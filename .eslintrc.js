"use strict";

module.exports = {
  // based on "standard" : https://github.com/feross/eslint-config-standard/blob/master/eslintrc.json
  "extends": "standard",
  // please install eslint & plugins here :
  // npm i --save-dev eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
  "parserOptions": {
    // please install babeljs, typescript, or any es2017 compatible transpiler or change that to "5"
    "ecmaVersion": 6
  },
  "env": {
    "node": true, // authorize "global", "__dirname", etc.
    "browser": true // authorize "window", "document", etc.
  },
  // "globals": {
  //   "moment": false // if true, "read only", if false "read/write"
  // },
  "rules": {
    "complexity": ["error", 8], // per function
    "max-len": ["error", 80], // per line
    "max-statements": ["error", 40], // per function
    "max-lines": ["error", 300], // per files
    "max-params": ["error", 5], // per function
    "no-unused-vars": ["error", { "vars": "all", "args": "all" }], // if you declare it, use it
    "semi": ["error", "always"], // semicolon everywhere
    "indent": ["error", "tab"], // indent should be a tab
    "no-tabs": "off", // so you can use tab everywhere you want
    "comma-spacing": ["error", { "before": false, "after": true }], // space after comma
    "comma-dangle": ["error", "never"], // no trailing coma at the end of Array, Object, etc.,
    "no-trailing-spaces": "error", // no space at the end of the line
    "camelcase": ["warn", { "properties": "always" }] // all vars name should be like "myLittlePony"
  }
};
// evey rules here: https://gist.github.com/cletusw/e01a85e399ab563b1236