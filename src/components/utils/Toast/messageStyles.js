export default (theme) => ({
    root: {
        ...theme.typography.subtitle,
        fontWeight: '500',
        lineHeight: '20px',
    },
    title: {
        color: theme.colors.primary.white,
        display: 'block',
    },
    message: {
        ...theme.typography.caption,
        color: theme.colors.primary.white,
        display: 'block',
        whiteSpace: 'pre-wrap',
    },
    success: {
        '&$title': {
            color: theme.colors.green500,
        },
    },
    error: {
        '&$title': {
            color: theme.colors.red500,
        },
    },
    warning: {
        '&$title': {
            color: theme.colors.yellow500,
        },
    },
});
