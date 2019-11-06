import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import replace from 'rollup-plugin-replace';
import { uglify } from 'rollup-plugin-uglify';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';

const input = './src/index.js';
const globals = {
    react: 'React',
    'react-dom': 'ReactDOM',
};

const babelOptions = {
    exclude: /node_modules/,
    runtimeHelpers: true,
    configFile: './babel.config.js',
};

const commonjsOptions = {
    ignoreGlobal: true,
    include: /node_modules/,
    namedExports: {
        './node_modules/prop-types/index.js': [
            'elementType',
            'bool',
            'func',
            'object',
            'oneOfType',
            'element',
        ],
        './node_modules/react-treebeard/index.js': ['Treebeard'],
    },
};

export default [
    {
        input,
        output: {
            file: 'dist/umd/hoipoi-ui.min.js',
            format: 'umd',
            name: 'HoiPoiUI',
            globals,
        },
        external: Object.keys(globals),
        plugins: [
            nodeResolve({
                extensions: ['.jsx', '.js'],
            }),
            babel(babelOptions),
            commonjs(commonjsOptions),
            replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
            sizeSnapshot({ snapshotPath: 'size-snapshot.json' }),
            uglify(),
        ],
    },
];
