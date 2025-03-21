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
            color: theme.colors.semantic.positive500,
        },
    },
    error: {
        '&$title': {
            color: theme.colors.semantic.negative500,
        },
    },
    warning: {
        '&$title': {
            color: theme.colors.semantic.focus500,
        },
    },
});
