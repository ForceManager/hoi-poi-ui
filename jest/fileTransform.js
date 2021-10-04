const config = {
    babelrc: false,
    presets: ['@babel/preset-env', '@babel/preset-react'],
};
module.exports = require('babel-jest').default.createTransformer(config);
