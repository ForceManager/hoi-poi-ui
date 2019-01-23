'use strict';
const webpack = require('webpack');
const paths = require('../paths');
const getClientEnvironment = require('../env');

module.exports = (baseConfig, env, defaultConfig) => {
  // Custom babel-loader
  defaultConfig.module.rules[0] = {
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
      customize: require.resolve(
        'babel-preset-react-app/webpack-overrides'
      ),
      plugins: [
        ...defaultConfig.module.rules[0].use[0].options.plugins,
        [
          require.resolve('babel-plugin-named-asset-import'),
          {
            loaderMap: {
              svg: {
                ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
              },
            },
          }
        ]
      ],
      cacheDirectory: true,
      cacheCompression: false,
    },
  };

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
