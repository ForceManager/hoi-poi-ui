const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

const srcPath = path.resolve(__dirname, './src');
const indexPath = path.resolve(__dirname, './src/index.js');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: [require.resolve('react-dev-utils/webpackHotDevClient'), indexPath],
    devServer: {
        host: '0.0.0.0',
    },
    output: {
        pathinfo: true,
        filename: 'static/js/bundle.js',
        devtoolModuleFilenameTemplate: (info) =>
            path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
    },
    resolve: {
        alias: {
            'hoi-poi-ui': srcPath,
            process: 'process/browser',
        },
        extensions: ['js', 'json', 'jsx'],
    },
    module: {
        rules: [
            {
                oneOf: [
                    {
                        test: /\.(js|jsx)$/,
                        include: srcPath,

                        loader: require.resolve('babel-loader'),
                        options: {
                            customize: require.resolve('babel-preset-react-app/webpack-overrides'),
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
        new ESLintPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({ process: 'process/browser' }),
    ].filter(Boolean),
    performance: false,
};
