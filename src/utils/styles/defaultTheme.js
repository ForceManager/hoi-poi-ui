// Colors
const overlay = 'rgba(33,33,33,0.55)';
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
const yellowLight = '#FFF9DD';

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
};
