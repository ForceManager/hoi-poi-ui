export default (theme) => ({
    root: {
        ...theme.typography.defaultText,
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        '& .ReactCollapse--collapse': {
            width: '100%',
            minHeight: 20,
            overflow: 'hidden !important',
            transition: 'height 500ms',
            willChange: 'height',
        },
    },
    wrap: {
        display: 'flex',
    },
    icon: {
        display: 'flex',
        marginRight: 10,
        marginTop: 1,
    },
    Text: {
        display: 'block',
        width: '100%',
    },

    // Types
    default: {
        backgroundColor: theme.colors.actionMinor[50],
        '& $Text': {
            color: theme.colors.textLight.secondary,
        },
        '& $dismiss': {
            color: `${theme.colors.textLight.secondary} !important`,
            borderColor: `${theme.colors.textLight.secondary} !important`,
            '&:hover': {
                backgroundColor: `${theme.colors.grey[50]} !important`,
            },
            '&:active': {
                backgroundColor: `${theme.colors.grey[100]} !important`,
            },
        },
    },
    semanticNegative: {
        backgroundColor: theme.colors.semantic.negativeCustom100,
        '& $Text': {
            color: theme.colors.semantic.negative500,
        },
        '& $dismiss': {
            color: `${theme.colors.semantic.negative500} !important`,
            borderColor: `${theme.colors.semantic.negative500} !important`,
            '&:hover': {
                backgroundColor: `${theme.colors.semantic.negativeCustom200} !important`,
            },
            '&:active': {
                backgroundColor: `${theme.colors.semantic.negative450} !important`,
            },
        },
    },
    semanticInfo: {
        backgroundColor: theme.colors.semantic.infoCustom50,
        '& $Text': {
            color: theme.colors.semantic.info600,
        },
        '& $dismiss': {
            color: `${theme.colors.semantic.info600} !important`,
            borderColor: `${theme.colors.semantic.info600} !important`,
            '&:hover': {
                backgroundColor: `${theme.colors.semantic.infoCustom100} !important`,
            },
            '&:active': {
                backgroundColor: `${theme.colors.semantic.info400} !important`,
            },
        },
    },
    semanticPositive: {
        backgroundColor: theme.colors.semantic.positiveCustom100,
        '& $Text': {
            color: theme.colors.semantic.positive600,
        },
        '& $dismiss': {
            color: `${theme.colors.semantic.positive600} !important`,
            borderColor: `${theme.colors.semantic.positive600} !important`,
            '&:hover': {
                backgroundColor: `${theme.colors.semantic.positiveCustom200} !important`,
            },
            '&:active': {
                backgroundColor: `${theme.colors.semantic.positive400} !important`,
            },
        },
    },
    semanticFocus: {
        backgroundColor: theme.colors.semantic.focusCustom100,
        '& $Text': {
            color: theme.colors.semantic.focusCustom600,
        },
        '& $dismiss': {
            color: `${theme.colors.semantic.focusCustom600} !important`,
            borderColor: `${theme.colors.semantic.focusCustom600} !important`,
            '&:hover': {
                backgroundColor: `${theme.colors.semantic.focusCustom200} !important`,
            },
            '&:active': {
                backgroundColor: `${theme.colors.semantic.focusCustom400} !important`,
            },
        },
    },
    textContainer: {
        flex: 1,
        overflow: 'hidden',
    },
    collapseContainer: {
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'flex-start',
    },
    dropdownIcon: {
        marginTop: -4,
        lineHeight: '0',
        transition: 'transform 0.3s ease-out',
        willChange: 'transform',
        transform: 'rotate(0) translateY(1px)',
        cursor: 'pointer',
    },
    isOpened: {
        '& $dropdownIcon': {
            transform: 'rotate(-180deg) translateY(0px)',
        },
        '& $Text': {
            whiteSpace: 'pre-wrap',
        },
    },
    withTitleContainer: {
        marginTop: 15,
    },
    dismiss: {
        alignSelf: 'flex-end',
        marginTop: 16,
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
});
