// Colors
const overlay = 'rgba(33,33,33,0.55)';
const secondaryOverlay = 'rgba(2,168,189,0.10)';
const shadow = 'rgba(0, 0, 0, 0.25)';
const lines = '#dce3eb';
const placeholders = '#e1e4e7';
const placeholdersHover = '#d0d4d8';

const black = '#262B34';
const blackLight = '#5f656b';
const textBlack = '#3c4248';

const grey = '#697782';
const secondaryGrey = '#e4eeff';
const greySoft = '#788590';
const greyLight = '#f0f3f5';
const disabledGrey = '#ced4d9';
const white = '#FFFFFF';

const transparentBlack = 'rgba(38, 43, 52, 0.8)';

const green = '#86AD20';
const greenLight = '#e7f1d5';

const red = '#f04540';
const redSoft = '#FF544F';
const redLight = '#FAE7E7';
const redDark = '#C43833';

const yellow = '#E9B200';
const yellowLight = '#FCF7E5';
const yellowDark = '#BE9100';

const primary = '#FF8C00';
const primarySoft = '#ff9d26';
const primaryLight = '#fef4e6';
const primaryDark = '#C87600';

const secondary = '#00A8Be';
const secondarySoft = '#AADFE7';
const secondaryLight = '#D6EEF2';

const link = '#216db3';
const linkDark = '#174a79';

const tableHeader = '#f6f7f9';
const tableHeaderHover = '#EBECEF';
const tableHover = '#FAFBFC';

const blackberry = '#2e2d4c';
const blackberryDark = '#24243C';

const purple = '#AA5B9C';
const purpleLight = '#EEDEEB';

//Text
const fontFamily = '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif';
const lineHeightBase = 1.5;
const fontSizeBase = 14;
const fontSizeSmall = 11;
const fontSizeLarge = 16;
const fontSizeBig = 20;

// Others
const boxShadow = `0 3px 9px 0 ${shadow}`;

function alphaColor(hex, a) {
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!rgb) return '';
    return `rgba(${parseInt(rgb[1], 16)}, ${parseInt(rgb[2], 16)}, ${parseInt(rgb[3], 16)}, ${a})`;
}

// New color scheme
export const colors = {
    neutralBase: '#ffffff',
    neutral100: '#f9f9fa',
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
    red400: '#ff7863',
    red500: '#ff3b30',
    red600: '#db2328',
    red700: '#b7182a',
    red900: '#7a0929',
    orange100: '#fff1cc',
    orange200: '#ffde99',
    orange400: '#ffb13f',
    orange500: '#ff8c00',
    orange600: '#db6e00',
    orange700: '#b75400',
    orange900: '#7a2c00',
    green100: '#f4fad2',
    green200: '#e7f6a6',
    green400: '#aecd50',
    green500: '#86ad20',
    green600: '#6e9417',
    green700: '#237c10',
    green900: '#345306',
    blue100: '#d3e3fe',
    blue200: '#a7c5fe',
    blue400: '#5a89fd',
    blue500: '#245dfd',
    blue600: '#1a47d9',
    blue700: '#1234b6',
    blue900: '#061879',
    purple100: '#fae3ed',
    purple200: '#f6c8e1',
    purple400: '#cc84b8',
    purple500: '#aa5b9c',
    purple600: '#92428b',
    purple700: '#792d7a',
    purple900: '#441151',
    aqua100: '#e4fafd',
    aqua200: '#cbf3fc',
    aqua400: '#98d5f1',
    aqua500: '#76bde8',
    aqua600: '#5695c7',
    aqua700: '#3b71a7',
    aqua900: '#16386f',
    yellow100: '#fdf6cb',
    yellow200: '#fcec97',
    yellow400: '#f1cb3c',
    yellow500: '#e9b200',
    yellow600: '#c89400',
    yellow700: '#a77700',
    yellow900: '#6f4a00',
    turquoise100: '#c9fbf1',
    turquoise200: '#95f8ec',
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
        white,
        black,
        transparentBlack,
        blackLight,
        grey,
        secondaryGrey,
        greyLight,
        disabledGrey,
        greySoft,
        greenLight,
        green,
        red,
        redSoft,
        redLight,
        redDark,
        yellow,
        yellowLight,
        yellowDark,
        primary,
        primaryDark,
        primaryLight,
        primarySoft,
        secondary,
        secondarySoft,
        secondaryLight,
        link,
        linkDark,
        tableHeader,
        tableHeaderHover,
        tableHover,
        blackberry,
        blackberryDark,
        purple,
        purpleLight,
        text: {
            default: grey,
            greySoft,
            black: textBlack,
            primary: 'white',
            danger: 'white',
            green,
            red,
            secondary,
            yellow,
            white,
        },
        overlay,
        secondaryOverlay,
        shadow,
        lines,
        placeholders,
        placeholdersHover,
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
