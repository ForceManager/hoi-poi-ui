'use strict';

const path = require('path');
const webpack = require('webpack');
const getClientEnvironment = require('./env');
const paths = require('./paths');

const publicUrl = '';
const env = getClientEnvironment(publicUrl);

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    paths.appIndexJs,
  ],
  output: {
    pathinfo: true,
    filename: 'static/js/bundle.js',
    devtoolModuleFilenameTemplate: info =>
      path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
  },
  resolve: {
    alias: {
      'hoi-poi-ui': path.resolve(__dirname, '../src'),
      components: path.resolve(__dirname, '../src/components'),
      utils: path.resolve(__dirname, '../src/utils'),
    },
    modules: ['node_modules'].concat(
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: paths.moduleFileExtensions
      .map(ext => `.${ext}`),
  },
  module: {
    strictExportPresence: true,
    rules: [
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
      {
        oneOf: [
          {
            test: /\.(js|jsx)$/,
            include: paths.appSrc,

            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              cacheDirectory: true,
              cacheCompression: true,
              compact: true,
            },
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  require.resolve('babel-preset-react-app/dependencies'),
                  { helpers: true },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: true,
              sourceMaps: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
  performance: false,
};
