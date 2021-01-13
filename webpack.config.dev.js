const path = require('path');
const webpack = require('webpack');

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
                test: /\.(js|jsx)$/,
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
                include: srcPath,
            },
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': 'development',
        }),
        new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
    performance: false,
};
