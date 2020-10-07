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
        color: theme.colors.text.black,
    },
    normal: {
        fontWeight: 'normal',
        color: theme.colors.neutral900,
    },
    light: {
        fontWeight: 'normal',
        color: theme.colors.neutral600,
    },
    isLoading: {
        display: 'flex',
        alignItems: 'center',
    },
    Loader: { marginTop: -2, marginRight: 10 },
});
