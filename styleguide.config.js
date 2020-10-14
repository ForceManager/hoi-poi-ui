const path = require('path');

module.exports = {
    // Customizations
    title: 'Hoi Poi UI',
    pagePerSection: true,
    sections: [
        {
            name: 'General',
            description: 'General and global components',
            sectionDepth: 0,
            components: ['./src/components/general/Button/index.jsx'],
        },
        {
            name: 'Old General',
            description: 'Old General and global components',
            sectionDepth: 0,
            components: [
                './src/components/general/Advice/index.jsx',
                './src/components/general/Badge/index.jsx',
                './src/components/general/ButtonSwitch/index.jsx',
                './src/components/general/ButtonTabGroup/index.jsx',
                './src/components/general/Checkbox/index.jsx',
                './src/components/general/Chip/index.jsx',
                './src/components/general/ChipGroup/index.jsx',
                './src/components/general/Drawer/index.jsx',
                './src/components/general/Icon/index.jsx',
                './src/components/general/Loader/index.jsx',
                './src/components/general/Modal/index.jsx',
                './src/components/general/ProgressBar/index.jsx',
                './src/components/general/Tabs/index.jsx',
                './src/components/general/Stepper/index.jsx',
                './src/components/general/Menus/index.jsx',
                './src/components/general/Avatar/index.jsx',
                './src/components/general/CircularProgress/index.jsx',
                './src/components/general/Tree/index.jsx',
                './src/components/general/DataGrid/index.jsx',
                './src/components/general/Carousel/index.jsx',
            ],
        },
        {
            name: 'Forms',
            description: '',
            sectionDepth: 0,
            components: [
                './src/components/forms/Label/index.jsx',
                './src/components/forms/Input/index.jsx',
                './src/components/forms/Slider/index.jsx',
                './src/components/forms/Switch/index.jsx',
                './src/components/forms/SwitchInput/index.jsx',
                './src/components/forms/FieldGroup/index.jsx',
            ],
        },
        {
            name: 'OldForms',
            description: 'Components related (but not exclusively) to build forms.',
            sectionDepth: 0,
            components: [
                './src/components/oldForms/CheckboxInput/index.jsx',
                './src/components/oldForms/CheckboxGroup/index.jsx',
                './src/components/oldForms/DatePicker/index.jsx',
                './src/components/oldForms/FilePicker/index.jsx',
                './src/components/oldForms/Form/index.jsx',
                // './src/components/oldForms/Input/index.jsx',
                './src/components/oldForms/InputGroup/index.jsx',
                // './src/components/oldForms/Label/index.jsx',
                './src/components/oldForms/Radio/index.jsx',
                './src/components/oldForms/RadioGroup/index.jsx',
                './src/components/oldForms/Multiplier/index.jsx',
                './src/components/oldForms/Section/index.jsx',
                './src/components/oldForms/Select/index.jsx',
                './src/components/oldForms/SelectButton/index.jsx',
                // './src/components/oldForms/Slider/index.jsx',
                // './src/components/oldForms/Switch/index.jsx',
                // './src/components/oldForms/SwitchInput/index.jsx',
                './src/components/oldForms/TextArea/index.jsx',
            ],
        },
        {
            name: 'Utils',
            description: 'Utility and complementary components',
            sectionDepth: 0,
            components: [
                './src/components/utils/Popover/index.jsx',
                './src/components/utils/ScrollBar/index.jsx',
                './src/components/utils/Toast/Toast.jsx',
                './src/components/utils/Tooltip/index.jsx',
            ],
        },
        {
            name: 'Typography',
            description: 'Text & Title components',
            sectionDepth: 0,
            components: [
                './src/components/typography/Link/index.jsx',
                './src/components/typography/Title/index.jsx',
                './src/components/typography/Text/index.jsx',
            ],
        },
    ],
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
                    href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
                },
            ],
        },
    },
    webpackConfig: require('./webpack.config.dev.js'),
    components: 'src/components/**/index.jsx',
    usageMode: 'expand',
    getComponentPathLine(componentPath) {
        const name = path.dirname(componentPath).split(path.sep).slice(-1).pop();

        return `import { ${name} } from 'hoi-poi-ui';`;
    },
    styleguideComponents: {
        Wrapper: path.join(__dirname, 'src/utils/styles/HoiPoiProvider'),
    },
};
