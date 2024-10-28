const path = require('path');
const srcPath = path.resolve(__dirname, './src');

module.exports = {
    devServer: {
        client: {
            overlay: false,
        },
    },
    resolve: {
        alias: {
            'hoi-poi-ui': srcPath,
            process: 'process/browser.js',
        },
        extensions: ['js', 'json', 'jsx'],
        fallback: { 'process/browser': require.resolve('process/browser'), },
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
};
