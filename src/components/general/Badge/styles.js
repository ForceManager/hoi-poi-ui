export default (theme) => ({
    root: {
        height: '20px',
        minWidth: '70px',
        padding: '2px 8px',
        borderRadius: '4px',
        display: 'inline-block',
        textAlign: 'center',
    },
    Text: {
        display: 'inline-block',
    },
    // Types
    default: {
        backgroundColor: theme.colors.neutral300,
        '& $Text': {
            color: theme.colors.neutral700,
        },
    },
    success: {
        backgroundColor: theme.colors.green100,
        '& $Text': {
            color: theme.colors.green600,
        },
    },
    warning: {
        backgroundColor: theme.colors.yellow100,
        '& $Text': {
            color: theme.colors.yellow600,
        },
    },
    error: {
        backgroundColor: theme.colors.red100,
        '& $Text': {
            color: theme.colors.red500,
        },
    },
    info: {
        backgroundColor: theme.colors.blue100,
        '& $Text': {
            color: theme.colors.blue400,
        },
    },

    ongoing: {
        backgroundColor: theme.colors.purple100,
        '& $Text': {
            color: theme.colors.purple500,
        },
    },
});
