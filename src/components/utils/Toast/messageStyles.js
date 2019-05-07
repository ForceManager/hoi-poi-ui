export default (theme) => ({
    root: {
        ...theme.typography.defaultText,
        fontWeight: '500',
        lineHeight: '20px',
    },
    title: {
        color: theme.colors.text.white,
        display: 'block',
    },
    message: {
        color: theme.colors.text.white,
        display: 'block',
    },
    success: {
        '&$title': {
            color: theme.colors.text.green,
        },
    },
    error: {
        '&$title': {
            color: theme.colors.text.red,
        },
    },
});
