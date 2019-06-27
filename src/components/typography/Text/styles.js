export default (theme) => ({
    root: {
        display: 'inherit',
    },
    truncated: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
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
    isLoading: {
        display: 'flex',
        alignItems: 'center',
    },
    Loader: { marginRight: 10 },
});
