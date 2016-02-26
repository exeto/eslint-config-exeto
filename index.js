module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  rules: {
    'func-names': 0,
    'no-param-reassign': 0,
    'consistent-return': 0,
    'no-shadow': [2, { 'allow': ['err', 'resolve', 'reject', 'done', 'cb'] }],
    'no-multi-spaces': [2, { 'exceptions': { 'VariableDeclarator': true } }],
    'no-use-before-define': 0,
    'react/jsx-no-bind': [2, {
      'allowArrowFunctions': true,
    }],
  },
};
