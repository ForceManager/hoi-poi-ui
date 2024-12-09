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
        backgroundColor: theme.colors.semantic.positiveCustom100,
        '& $Text': {
            color: theme.colors.semantic.positive500,
        },
    },
    warning: {
        backgroundColor: theme.colors.semantic.focusCustom100,
        '& $Text': {
            color: theme.colors.semantic.focus500,
        },
    },
    error: {
        backgroundColor: theme.colors.semantic.negativeCustom100,
        '& $Text': {
            color: theme.colors.semantic.negative500,
        },
    },
    info: {
        backgroundColor: theme.colors.semantic.infoCustom50,
        '& $Text': {
            color: theme.colors.semantic.info400,
        },
    },
    ongoing: {
        backgroundColor: theme.colors.temp.purple100,
        '& $Text': {
            color: theme.colors.temp.purple500,
        },
    },
    promotion: {
        backgroundColor: theme.colors.actionMinor[50],
        '& $Text': {
            backgroundClip: 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent',
            backgroundImage: `linear-gradient(to right, ${theme.colors.actionMajor[500]} 0%, ${theme.colors.semantic.negative500} 50%)`,
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
            backgroundColor: theme.colors.semantic.positive400,
        },
        '&$warning': {
            backgroundColor: theme.colors.semantic.focusCustom400,
        },
        '&$error': {
            backgroundColor: theme.colors.semantic.negative450,
        },
        '&$info': {
            backgroundColor: theme.colors.semantic.info400,
        },
        '&$ongoing': {
            backgroundColor: theme.colors.temp.purple400,
        },
        '&$promotion': {
            backgroundImage: `linear-gradient(to right, ${theme.colors.actionMajor[500]} 0%, ${theme.colors.semantic.negative500} 50%)`,
            '& $Text': {
                color: theme.colors.primary.white,
            },
        },
    },
});
