// Colors
const overlay = 'rgba(33,33,33,0.55)';
const shadow = 'rgba(0, 0, 0, 0.25)';
const lines = '#dce3eb';
const placeholders = '#e1e4e7';
const placeholdersHover = '#d0d4d8';

const white = '#FFFFFF';
const lightBlack = '#5f656b';
const lightGrey = '#f0f3f5';
const grey = '#697782';
const softGrey = '#788590';
const disabledGrey = '#ced4d9';
const black = '#262B34';
const textBlack = '#3c4248';
const transparentBlack = 'rgba(38, 43, 52, 0.8)';

const primary = '#FF8C00';
const primaryDark = '#C87600';
const primaryLight = '#FEF4E6';

const secundary = '#00A8Be';
const secundaryLight = '#D6EEF2';

const danger = '#f04540';
const dangerDark = '#C43833';

//Text
const fontFamily = '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif';
const lineHeightBase = 1.5;
const fontSizeBase = 13;
const fontSizeSmall = 11;

// Others
const boxShadow = `0 3px 9px 0 ${shadow}`;

export default {
    colors: {
        white,
        black,
        transparentBlack,
        lightBlack,
        grey,
        disabledGrey,
        lightGrey,
        softGrey,
        primary,
        primaryDark,
        primaryLight,
        secundary,
        secundaryLight,
        danger,
        dangerDark,
        text: {
            default: grey,
            black: textBlack,
            primary: 'white',
            danger: 'white',
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
    },
    effects: {
        boxShadow,
        buttonActive: {
            boxShadow: 'inset 0 -2px 4px 0 rgba(122,122,122,0.23)',
        },
    },
};
