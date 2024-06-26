let defaultPresets;

if (process.env.BABEL_ENV === 'es') {
    defaultPresets = [];
} else {
    defaultPresets = [
        [
            '@babel/preset-env',
            {
                modules: ['esm', 'umd'].includes(process.env.BABEL_ENV) ? false : 'commonjs',
            },
        ],
    ];
}

module.exports = {
    presets: defaultPresets.concat(['@babel/preset-react']),
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-private-methods',
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-transform-runtime',
        'babel-plugin-transform-react-constant-elements',
        'babel-plugin-transform-dev-warning',
        [
            'babel-plugin-transform-react-remove-prop-types',
            {
                mode: 'unsafe-wrap',
            },
        ],
    ],
    ignore: [/@babel[\\|/]runtime/, /node_modules\/(?!debug)/],
};
