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
const stone = '#788590';
const snow = '#F0F3F5';
const softKiwi = '#e7f1d5';
const kiwi = '#86AD20';
const softRaspBerry = '#FAE7E7';
const raspBerry = '#F04540';
const lightIndonesia = '#AADFE7';
const softIndonesia = '#D6EEF2';
const indonesia = '#00A8Be';
const softBanana = '#FFF9DD';
const banana = '#E9B200';

const primary = '#FF8C00';
const primaryDark = '#C87600';
const primaryLight = '#ff9d26';
const primarySoft = '#fef4e6';

const secundary = '#00A8Be';
const secundarySoft = '#D6EEF2';

const danger = '#f04540';
const dangerDark = '#C43833';
const dangerLight = '#FF544F';

const link = '#216db3';
const linkDark = '#174a79';

const tableHeader = '#f6f7f9';
const tableHover = '#FAFBFC';
//Text
const fontFamily = '"Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif';
const lineHeightBase = 1.5;
const fontSizeBase = 13;
const fontSizeSmall = 11;
const fontSizeBig = 16;

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
        softKiwi,
        kiwi,
        softRaspBerry,
        raspBerry,
        stone,
        snow,
        lightIndonesia,
        softIndonesia,
        indonesia,
        softBanana,
        banana,
        primary,
        primaryDark,
        primaryLight,
        primarySoft,
        secundary,
        secundarySoft,
        danger,
        dangerDark,
        dangerLight,
        link,
        linkDark,
        tableHeader,
        tableHover,
        text: {
            default: grey,
            black: textBlack,
            primary: 'white',
            danger: 'white',
            kiwi,
            stone,
            raspBerry,
            indonesia,
            banana,
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
