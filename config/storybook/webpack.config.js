'use strict';
const webpack = require('webpack');
const paths = require('../paths');
const getClientEnvironment = require('../env');

module.exports = (baseConfig, env, defaultConfig) => {

  // Injecting eslint after compilation
  defaultConfig.module.rules = [
    { parser: { requireEnsure: false } },
    {
      test: /\.(js|mjs|jsx)$/,
      enforce: 'pre',
      use: [
        {
          options: {
            formatter: require.resolve('react-dev-utils/eslintFormatter'),
            eslintPath: require.resolve('eslint'),
          },
          loader: require.resolve('eslint-loader'),
        },
      ],
      include: paths.appSrc,
    },
    ...defaultConfig.module.rules,
  ]

  // Injecting environment variables
  const clientEnv = getClientEnvironment().stringified;
  defaultConfig.plugins[1] = new webpack.DefinePlugin({
    ...defaultConfig.plugins[1].definitions,
    'process.env': {
      ...clientEnv['process.env'],
      ...defaultConfig.plugins[1].definitions['process.env'],

    }
  })

  return defaultConfig;
};
