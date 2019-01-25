// Colors
const lightBlack = '#5f656b';
const lightGray = '#F7F8F9';
const grey = '#697782';
const primary = '#FF8C00';
const primaryDark = '#F84F03';
const danger = '#f04540';
const dangerDark = '#C43833';

//Text
const fontFamily = '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif';
const lineHeightBase = 1.5;
const fontSizeBase = 13;

export default {
    colors: {
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
    },
    typography: {
        lineHeightBase,
        fontSizeBase,
        fontFamily,
        button: {
            fontFamily,
            lineHeight: lineHeightBase,
            fontSize: 11,
        },
    },
    effects: {
        buttonActive: {
            boxShadow: 'inset 0 -2px 4px 0 rgba(122,122,122,0.23)',
        },
    },
};
