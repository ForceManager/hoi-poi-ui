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
const fontSizeBase = 13;
const fontSizeSmall = 11;
const fontSizeLarge = 16;
const fontSizeBig = 20;

// Others
const boxShadow = `0 3px 9px 0 ${shadow}`;

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
    },
    typography: {
        lineHeightBase,
        letterSpacing: 0.5,
        fontSizeBase,
        fontSizeSmall,
        fontFamily,
        button: {
            fontFamily,
            lineHeight: lineHeightBase,
            fontSize: 11,
        },
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
    },
    effects: {
        boxShadow,
        buttonActive: {
            boxShadow: 'inset 0 -2px 4px 0 rgba(51, 51, 51, 0.23)',
        },
    },
    utils: {
        scrollbar: {
            '&::-webkit-scrollbar': {
                width: 17,
                height: 17,
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: 10,
                background: placeholders,
                backgroundClip: 'content-box',
                border: '4px solid rgba(0, 0, 0, 0)',
            },
            '&::-webkit-scrollbar-thumb:window-inactive': {
                borderRadius: 10,
                background: placeholders,
                backgroundClip: 'content-box',
                border: '4px solid rgba(0, 0, 0, 0)',
            },
        },
    },
};
