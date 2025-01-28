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
    semanticPositive: {
        backgroundColor: theme.colors.semantic.positiveCustom100,
        '& $Text': {
            color: theme.colors.semantic.positive500,
        },
    },
    semanticFocus: {
        backgroundColor: theme.colors.semantic.focusCustom100,
        '& $Text': {
            color: theme.colors.semantic.focus500,
        },
    },
    semanticNegative: {
        backgroundColor: theme.colors.semantic.negativeCustom100,
        '& $Text': {
            color: theme.colors.semantic.negative500,
        },
    },
    semanticInfo: {
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
        backgroundColor: theme.colors.primary.brilliantGreen,
        '& $Text': {
            color: theme.colors.primary.black,        },
    },
    // For retrocompatibility
    error: {
        extend: 'semanticNegative',
    },
    success: {
        extend: 'semanticPositive',
    },
    info: {
        extend: 'semanticInfo',
    },
    warning: {
        extend: 'semanticFocus',
    },
    inverted: {
        '& $Text': {
            color: theme.colors.primary.white,
        },
        '&$default': {
            backgroundColor: theme.colors.grey[500],
        },
        '&$semanticPositive': {
            backgroundColor: theme.colors.semantic.positive400,
        },
        '&$success': {
            backgroundColor: theme.colors.semantic.positive400,
        },
        '&$semanticFocus': {
            backgroundColor: theme.colors.semantic.focusCustom400,
        },
        '&$warning': {
            backgroundColor: theme.colors.semantic.focusCustom400,
        },
        '&$semanticNegative': {
            backgroundColor: theme.colors.semantic.negative450,
        },
        '&$error': {
            backgroundColor: theme.colors.semantic.negative450,
        },
        '&$semanticInfo': {
            backgroundColor: theme.colors.semantic.info400,
        },
        '&$info': {
            backgroundColor: theme.colors.semantic.info400,
        },
        '&$ongoing': {
            backgroundColor: theme.colors.temp.purple400,
        },
        '&$promotion': {
            backgroundColor: theme.colors.background.gray900,
            '& $Text': {
                color: theme.colors.primary.white,
            },
        },
    },
});
