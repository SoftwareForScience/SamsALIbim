module.exports = {
    "root": true,
    "plugins": [
      "security"
    ],
    "extends": ["tslint:all"],
    "env": {
      "node": true,
      "mocha": true
    },
    "globals": {
      "Promise": true
    },
    "rules": {
      "max-len": ['error', {code: 100}], // default 80
      "indent": ['error', 2, {"SwitchCase": 1}], // not set by default
      "comma-dangle": ["error", "never"], // do not enforce trailing comma
      "curly": [2, "all"], // enfornce curly braces even in single line if-else
      "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
    }
  }