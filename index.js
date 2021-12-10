const eslintrc = require('./eslintrc-base');
const eslintrcReact = require('./eslintrc-react');
const eslintrcVue = require('./eslintrc-vue');
const prettierConfig = require('./prettier.config');

module.exports = {
  linter: {
    base: eslintrc,
    react: eslintrcReact,
    vue: eslintrcVue,
  },
  prettier: prettierConfig,
};
