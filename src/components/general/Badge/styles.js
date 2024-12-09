export default (theme) => ({
    root: {
        height: 20,
        minWidth: 70,
        padding: '2px 8px',
        borderRadius: 4,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        display: 'inline-block',
        textAlign: 'center',
    },
    // Types
    default: {
        backgroundColor: theme.colors.grey[100],
        '& $Text': {
            color: theme.colors.textLight.secondary,
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
    promotion: {
        backgroundColor: theme.colors.actionMinor[50],
        '& $Text': {
            backgroundClip: 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent',
            backgroundImage: `linear-gradient(to right, ${theme.colors.orange500} 0%, ${theme.colors.red500} 50%)`,
        },
    },
    inverted: {
        '& $Text': {
            color: theme.colors.primary.white,
        },
        '&$default': {
            backgroundColor: theme.colors.grey[500],
        },
        '&$success': {
            backgroundColor: theme.colors.green400,
        },
        '&$warning': {
            backgroundColor: theme.colors.yellow400,
        },
        '&$error': {
            backgroundColor: theme.colors.red400,
        },
        '&$info': {
            backgroundColor: theme.colors.blue400,
        },
        '&$ongoing': {
            backgroundColor: theme.colors.purple400,
        },
        '&$promotion': {
            backgroundImage: `linear-gradient(to right, ${theme.colors.orange500} 0%, ${theme.colors.red500} 50%)`,
            '& $Text': {
                color: theme.colors.primary.white,
            },
        },
    },
});
