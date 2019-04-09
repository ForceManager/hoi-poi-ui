// Colors
const overlay = 'rgba(33,33,33,0.55)';
const shadow = 'rgba(0, 0, 0, 0.25)';
const lines = '#dce3eb';
const icons = '#788590';
const placeholders = '#e1e4e7';
const placeholdersHover = '#d0d4d8';

const lightBlack = '#5f656b';
const lightGray = '#f0f3f5';
const grey = '#697782';
const black = '#262B34';
const transparentBlack = 'rgba(38, 43, 52, 0.8)';

const primary = '#00CED1';
const primaryDark = '#00a0a0';

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
        black,
        transparentBlack,
        lightBlack,
        grey,
        lightGray,
        primary,
        primaryDark,
        danger,
        dangerDark,
        text: {
            default: grey,
            primary: 'white',
            danger: 'white',
        },
        overlay,
        shadow,
        lines,
        icons,
        placeholders,
        placeholdersHover,
    },
    typography: {
        lineHeightBase,
        fontSizeBase,
        fontSizeSmall,
        fontFamily,
        button: {
            fontFamily,
            lineHeight: lineHeightBase,
            fontSize: 11,
        },
    },
    effects: {
        boxShadow,
        buttonActive: {
            boxShadow: 'inset 0 -2px 4px 0 rgba(122,122,122,0.23)',
        },
    },
};
