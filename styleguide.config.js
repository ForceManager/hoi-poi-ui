const path = require('path');

module.exports = {
    // Customizations
    title: 'Hoi Poi UI',
    theme: {
        color: {
            link: '#00a0a0',
            linkHover: '#007777',
        },
        fontFamily: {
            base: '"Roboto", "Helvetica", sans-serif',
        },
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
};
