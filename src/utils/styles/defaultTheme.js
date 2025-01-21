//Text
const fontFamily = '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif';
const lineHeightBase = '160%';
const fontSizeBase = 14;
const fontSizeSmall = 10;
const fontSizeLarge = 16;
const fontSizeBig = 20;

// Others
const transparentBlack = 'rgba(38, 43, 52, 0.8)';
const overlay = 'rgba(33,33,33,0.55)';
const secondaryOverlay = 'rgba(2,168,189,0.10)';
const shadow = 'rgba(0, 0, 0, 0.25)';
const boxShadow = `0 3px 9px 0 ${shadow}`;
const transparent = 'transparent';

export const alphaColor = (hex, a) => {
    const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!rgb) return '';
    return `rgba(${parseInt(rgb[1], 16)}, ${parseInt(rgb[2], 16)}, ${parseInt(rgb[3], 16)}, ${a})`;
};

// New color scheme
const brilliantGreen = '#00D639';
const black = '#000000';
const white = '#FFFFFF';
const jadeAccessible = '#007E45';
const jadeUniversal = '#00A310';

export const colors = {
    primary: {
        brilliantGreen,
        black,
        white,
    },
    accessible: {
        jadeAccessible,
        jadeUniversal,
    },
    textLight: {
        primary: 'rgba(0,0,0,0.9)',
        secondary: 'rgba(0,0,0,0.65)',
        disabled: 'rgba(0,0,0,0.3)',
        negative: '#CD384B',
        jadeAccessible,
        jadeUniversal,
    },
    textDark: {
        primary: 'rgba(255,255,255,0.9)',
        secondary: 'rgba(255,255,255,0.65)',
        disabled: 'rgba(255,255,255,0.3)',
        negative: '#D86473',
        brilliantGreen,
    },
    background: {
        black,
        gray900: '#1A1A1A',
        black095: 'rgba(0,0,0,0.95)',
        white,
        black005: 'rgba(0,0,0,0.05)',
        utility025: '#F2F5F6',
        jadeT7: '#D1FDE0',
    },
    grey: {
        50: '#F2F2F2',
        100: '#E6E6E6',
        200: '#CCCCCC',
        300: '#B3B3B3',
        400: '#999999',
        500: '#808080',
        600: '#666666',
        700: '#4D4D4D',
        850: '#333333',
        900: '#1A1A1A',
    },
    actionMajor: {
        25: '#F2F5F6',
        150: '#B3D9C8',
        350: '#4DA77E',
        450: '#198E59',
        500: '#007E45',
        600: '#006738',
        700: '#004D2A',
    },
    actionMinor: {
        25: '#FAFBFB',
        50: '#F2F5F6',
        100: '#E6EBED',
        150: '#D9E0E4',
        200: '#CCD6DB',
        250: '#B3C2C9',
        300: '#99ADB7',
        400: '#668494',
        500: '#335B70',
        550: '#19475E',
        600: '#00324C',
        700: '#00283D',
        850: '#001926',
        900: '#00141E',
    },
    semantic: {
        focusCustom100: '#FFF2D1',
        focusCustom200: '#FFE59E',
        focusCustom250: '#FFDA80',
        focusCustom400: '#FFCB47',
        focus500: '#FFBC19',
        focusCustom600: '#A87900',
        positiveCustom100: '#DCF4E2',
        positiveCustom200: '#B5E8C1',
        positiveCustom300: '#83D897',
        positive400: '#33A14D',
        positive500: '#00821F',
        positive600: '#006819',
        negativeCustom100: '#F4D7DB',
        negativeCustom200: '#EAAEB6',
        negative350: '#DB7380',
        negative450: '#D04B5C',
        negative500: '#CB374A',
        negative600: '#A22C3B',
        caution100: '#FBD9BF',
        caution200: '#F7B380',
        caution400: '#F28533',
        caution500: '#EF6700',
        caution600: '#BF5200',
        caution650: '#A74800',
        infoCustom50: '#EBF6FF',
        infoCustom100: '#D6EDFF',
        info150: '#B3CFE5',
        info400: '#3380B9',
        info500: '#0060A7',
        info600: '#004D86',
        notification600: '#BB4F00',
    },
    // Pending to be refactored when we have matching colors in the new palette
    temp: {
        purple100: '#fae3ed',
        purple200: '#f6c8e1',
        purple300: '#E5A5CE',
        purple400: '#cc84b8',
        purple500: '#aa5b9c',
        purple600: '#92428b',
        purple700: '#792d7a',
        purple900: '#441151',
    },
    utility: {
        bg: '#FFFFFF',
        textPrimary: 'rgba(0,0,0,0.9)',
        textSecondary: 'rgba(0,0,0,0.65)',
        textDisabled: 'rgba(0,0,0,0.3)',
        textNegative: '#cd384b',
        textAccessible: jadeAccessible,
        textUniversal: jadeUniversal,
    },
};

export const typography = {
    h1: {
        fontFamily,
        fontSize: 40,
        fontWeight: 700,
        lineHeight: '120%',
        letterSpacing: 0.6,
    },
    h2: {
        fontFamily,
        fontSize: 32,
        fontWeight: 700,
        lineHeight: '120%',
        letterSpacing: 0.6,
    },
    h3: {
        fontFamily,
        fontSize: 24,
        fontWeight: 700,
        lineHeight: '140%',
        letterSpacing: 0.6,
    },
    h4: {
        fontFamily,
        fontSize: 20,
        fontWeight: 700,
        lineHeight: '140%',
        letterSpacing: 0.6,
    },
    h5: {
        fontFamily,
        fontSize: 16,
        fontWeight: 700,
        lineHeight: '140%',
        letterSpacing: 0.6,
    },
    h6: {
        fontFamily,
        fontSize: 14,
        fontWeight: 700,
        lineHeight: '140%',
        letterSpacing: 0.6,
    },
    subtitle1: {
        fontFamily,
        fontSize: 16,
        fontWeight: 500,
        lineHeight: '160%',
        letterSpacing: 0.6,
    },
    subtitle: {
        fontFamily,
        fontSize: 13,
        fontWeight: 500,
        lineHeight: '160%',
        letterSpacing: 0.6,
    },
    body1: {
        fontFamily,
        fontSize: 16,
        fontWeight: 400,
        lineHeight: '160%',
        letterSpacing: 0.6,
    },
    body: {
        fontFamily,
        fontSize: 14,
        fontWeight: 400,
        lineHeight: '160%',
        letterSpacing: 0.6,
    },
    button: {
        fontFamily,
        fontSize: 14,
        fontWeight: 500,
        lineHeight: 'calc(22/14)',
        letterSpacing: 0.6,
    },
    caption: {
        fontFamily,
        fontSize: 12,
        fontWeight: 400,
        lineHeight: 'calc(19/12)',
        letterSpacing: 0.6,
    },
    captionMedium: {
        fontFamily,
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 'calc(19/12)',
        letterSpacing: 0.6,
    },
    badges: {
        fontFamily,
        fontSize: 10,
        fontWeight: 400,
        lineHeight: 'calc(16/10)',
        letterSpacing: 0.6,
    },
    overline: {
        fontFamily,
        fontSize: 12,
        fontWeight: 500,
        lineHeight: 'calc(16/12)',
        letterSpacing: 2,
        textTransform: 'uppercase',
    },
};

export default {
    colors: {
        transparent,
        transparentBlack,
        overlay,
        secondaryOverlay,
        shadow,
        ...colors,
    },
    typography: {
        lineHeightBase,
        letterSpacing: 0.6,
        fontSizeBase,
        fontSizeSmall,
        fontFamily,
        defaultText: {
            letterSpacing: 0.6,
            fontSize: fontSizeBase,
            fontFamily,
        },
        smallText: {
            letterSpacing: 0.6,
            fontSize: fontSizeSmall,
            fontFamily,
        },
        largeText: {
            letterSpacing: 0.6,
            fontSize: fontSizeLarge,
            fontFamily,
        },
        bigText: {
            letterSpacing: 0.6,
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
            boxShadow: `0px 18px 40px ${alphaColor(colors.textLight.primary, 0.4)}`,
        },
    },
    utils: {
        selection: {
            '& ::selection': {
                backgroundColor: colors.actionMajor[150],
            },
            '& ::-moz-selection': {
                backgroundColor: colors.actionMajor[150],
            },
        },
        scrollbar: {
            '&::-webkit-scrollbar': {
                width: 17,
                height: 17,
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: 10,
                background: colors.grey[100],
                backgroundClip: 'content-box',
                border: '4px solid rgba(0, 0, 0, 0)',
            },
            '&::-webkit-scrollbar-thumb:window-inactive': {
                borderRadius: 10,
                background: colors.grey[100],
                backgroundClip: 'content-box',
                border: '4px solid rgba(0, 0, 0, 0)',
            },
        },
    },
};
