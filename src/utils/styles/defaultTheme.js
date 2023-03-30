//Text
const fontFamily = '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif';
const lineHeightBase = 1.5;
const fontSizeBase = 14;
const fontSizeSmall = 11;
const fontSizeLarge = 16;
const fontSizeBig = 20;

// Others
const transparentBlack = 'rgba(38, 43, 52, 0.8)';
const overlay = 'rgba(33,33,33,0.55)';
const secondaryOverlay = 'rgba(2,168,189,0.10)';
const shadow = 'rgba(0, 0, 0, 0.25)';
const boxShadow = `0 3px 9px 0 ${shadow}`;

export const alphaColor = (hex, a) => {
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!rgb) return '';
    return `rgba(${parseInt(rgb[1], 16)}, ${parseInt(rgb[2], 16)}, ${parseInt(rgb[3], 16)}, ${a})`;
}

// New color scheme
export const colors = {
    black: '#3c4248',
    neutralBase: '#ffffff',
    neutral100: '#f9f9fa',
    neutral150: '#f6f7f9',
    neutral200: '#f4f5f6',
    neutral300: '#e9ecee',
    neutral400: '#dfe2e5',
    neutral500: '#d4d8dc',
    neutral600: '#a9b1b9',
    neutral700: '#7d8a96',
    neutral800: '#526373',
    neutral900: '#273c50',
    red100: '#ffe5d5',
    red200: '#ffc5ac',
    red300: '#FF9E82',
    red400: '#ff7863',
    red500: '#ff3b30',
    red600: '#db2328',
    red700: '#b7182a',
    red900: '#7a0929',
    orange100: '#fff1cc',
    orange200: '#ffde99',
    orange300: '#FFC766',
    orange400: '#ffb13f',
    orange500: '#ff8c00',
    orange600: '#db6e00',
    orange700: '#b75400',
    orange900: '#7a2c00',
    green100: '#E9FAD2',
    green200: '#CFF6A6',
    green300: '#A7E675',
    green400: '#7FCD50',
    green500: '#4CAD20',
    green600: '#369417',
    green700: '#237c10',
    green900: '#095306',
    blue100: '#d3e3fe',
    blue200: '#a7c5fe',
    blue300: '#7BA4FE',
    blue400: '#5a89fd',
    blue500: '#245dfd',
    blue600: '#1a47d9',
    blue700: '#1234b6',
    blue900: '#061879',
    purple100: '#fae3ed',
    purple200: '#f6c8e1',
    purple300: '#E5A5CE',
    purple400: '#cc84b8',
    purple500: '#aa5b9c',
    purple600: '#92428b',
    purple700: '#792d7a',
    purple900: '#441151',
    aqua100: '#e4fafd',
    aqua200: '#cbf3fc',
    aqua300: '#AEE5F8',
    aqua400: '#98d5f1',
    aqua500: '#76bde8',
    aqua600: '#5695c7',
    aqua700: '#3b71a7',
    aqua900: '#16386f',
    yellow100: '#fdf6cb',
    yellow200: '#fcec97',
    yellow300: '#F8DC63',
    yellow400: '#f1cb3c',
    yellow500: '#e9b200',
    yellow600: '#c89400',
    yellow700: '#a77700',
    yellow900: '#6f4a00',
    turquoise100: '#c9fbf1',
    turquoise200: '#95f8ec',
    turquoise300: '#5EEBE5',
    turquoise400: '#36d2d8',
    turquoise500: '#00a8be',
    turquoise600: '#0083a3',
    turquoise700: '#006388',
    turquoise900: '#00335b',
};

export const typography = {
    h1: {
        fontFamily,
        fontSize: 96,
        fontWeight: 300,
        lineHeight: '112px',
        letterSpacing: -1.5,
    },
    h2: {
        fontFamily,
        fontSize: 60,
        fontWeight: 300,
        lineHeight: '71px',
        letterSpacing: -0.5,
    },
    h3: {
        fontFamily,
        fontSize: 48,
        fontWeight: 400,
        lineHeight: '57px',
    },
    h4: {
        fontFamily,
        fontSize: 34,
        fontWeight: 400,
        lineHeight: '40px',
        letterSpacing: 0.25,
    },
    h5: {
        fontFamily,
        fontSize: 24,
        fontWeight: 400,
        lineHeight: '28px',
    },
    h6: {
        fontFamily,
        fontSize: 20,
        fontWeight: 500,
        lineHeight: '24px',
        letterSpacing: 0.25,
    },
    subtitle1: {
        fontFamily,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '24px',
        letterSpacing: 0.15,
    },
    subtitle: {
        fontFamily,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '20px',
        letterSpacing: 0.09,
    },
    body1: {
        fontFamily,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '28px',
        letterSpacing: 0.5,
    },
    body: {
        fontFamily,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '20px',
        letterSpacing: 0.6,
    },
    button: {
        fontFamily,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: '16px',
        letterSpacing: 0.6,
    },
    caption: {
        fontFamily,
        fontSize: 12,
        fontWeight: 400,
        lineHeight: '16px',
        letterSpacing: 0.4,
    },
    captionMedium: {
        fontFamily,
        fontSize: 12,
        fontWeight: 500,
        lineHeight: '16px',
        letterSpacing: 0.4,
    },
    badges: {
        fontFamily,
        fontSize: 10,
        fontWeight: 400,
        lineHeight: '16px',
        letterSpacing: 0.4,
    },
    overline: {
        fontFamily,
        fontSize: 12,
        fontWeight: 500,
        lineHeight: '16px',
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
};

export default {
    colors: {
        transparentBlack,
        overlay,
        secondaryOverlay,
        shadow,
        ...colors,
    },
    typography: {
        lineHeightBase,
        letterSpacing: 0.5,
        fontSizeBase,
        fontSizeSmall,
        fontFamily,
        defaultText: {
            letterSpacing: 0.5,
            fontSize: fontSizeBase,
            fontFamily,
        },
        smallText: {
            letterSpacing: 0.5,
            fontSize: fontSizeSmall,
            fontFamily,
        },
        largeText: {
            letterSpacing: 0.5,
            fontSize: fontSizeLarge,
            fontFamily,
        },
        bigText: {
            letterSpacing: 0.5,
            fontSize: fontSizeBig,
            fontFamily,
        },
        ...typography,
    },
    effects: {
        boxShadow,
        buttonActive: {
            boxShadow: 'inset 0 -2px 4px 0 rgba(51, 51, 51, 0.23)',
        },
        boxShadow24: {
            boxShadow: `0px 18px 40px ${alphaColor(colors.neutral900, 0.4)}`,
        },
    },
    utils: {
        selection: {
            '& ::selection': {
                backgroundColor: colors.orange200,
            },
            '& ::-moz-selection': {
                backgroundColor: colors.orange200,
            },
        },
        scrollbar: {
            '&::-webkit-scrollbar': {
                width: 17,
                height: 17,
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: 10,
                background: colors.neutral400,
                backgroundClip: 'content-box',
                border: '4px solid rgba(0, 0, 0, 0)',
            },
            '&::-webkit-scrollbar-thumb:window-inactive': {
                borderRadius: 10,
                background: colors.neutral400,
                backgroundClip: 'content-box',
                border: '4px solid rgba(0, 0, 0, 0)',
            },
        },
    },
};
