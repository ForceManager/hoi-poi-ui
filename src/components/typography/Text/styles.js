export default (theme) => ({
    root: {
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 0,
    },
    truncateHeight: {
        height: '2em',
    },
    small: {
        fontStyle: 'normal',
        lineHeight: 'normal',
        ...theme.typography.smallText,
    },
    medium: {
        fontStyle: 'normal',
        lineHeight: 1.54,
        ...theme.typography.defaultText,
    },
    large: {
        fontStyle: 'normal',
        lineHeight: 1.25,
        ...theme.typography.largeText,
    },
    big: {
        fontStyle: 'normal',
        lineHeight: 'normal',
        ...theme.typography.bigText,
    },
    bold: {
        fontWeight: 500,
        color: theme.colors.textBlack,
    },
    normal: {
        fontWeight: 'normal',
        color: theme.colors.greySoft,
    },
    light: {
        fontWeight: 'normal',
        color: theme.colors.disabledGrey,
    },
});
