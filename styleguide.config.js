const path = require('path');

module.exports = {
    webpackConfig: require('./config/webpack.config.dev.js'),
    components: 'src/components/**/index.jsx',
    usageMode: 'expand',
    getComponentPathLine(componentPath) {
        const name = path
            .dirname(componentPath)
            .replace('src/components/', '')
            .replace('src\\components\\', '');
        return `import ${name} from 'hoi-poi-ui/${name}';`;
    },
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/utils/styles/HoiPoiProvider'),
    },
    template: {
        head: {
            links: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css?family=Roboto',
                },
            ],
        },
    },
    theme: {
        baseBackground: '#fdfdfc',
        link: '#00CED1',
        linkHover: '#00a0a0',
        border: '#e0d2de',
        font: ['Roboto', 'Helvetica', 'sans-serif'],
    },
};
