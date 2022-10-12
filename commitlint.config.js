const { rules } = require('@commitlint/config-conventional');

/** @type {import('@commitlint/types').UserConfig} **/
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [2, 'always', [...rules['type-enum'][2], 'api', 'release']],
    'scope-enum': [2, 'always', ['core', 'connector', 'language', 'deps']]
  },
};
