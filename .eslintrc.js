module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  env: {
    jest: true,
    browser: true,
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            modules: ['node_modules', 'src'],
            extensions: ['.js', '.json', '.jsx'],
          },
        },
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [
      2, { extensions: ['.js'] },
    ],
    'react/prefer-stateless-function': 0,
    'jsx-a11y/no-distracting-elements': 0,
    'react/forbid-prop-types': 0,
    'no-console': 0,
  },
};
