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
            borderColor: `${theme.neutral700} !important`,
            '&:hover': {
                backgroundColor: `${theme.colors.grey[50]} !important`,
            },
            '&:active': {
                backgroundColor: `${theme.colors.grey[100]} !important`,
            },
        },
    },
    error: {
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
    info: {
        backgroundColor: theme.colors.aqua100,
        '& $Text': {
            color: theme.colors.aqua700,
        },
        '& $dismiss': {
            color: `${theme.colors.aqua700} !important`,
            borderColor: `${theme.colors.aqua700} !important`,
            '&:hover': {
                backgroundColor: `${theme.colors.aqua200} !important`,
            },
            '&:active': {
                backgroundColor: `${theme.colors.aqua400} !important`,
            },
        },
    },
    success: {
        backgroundColor: theme.colors.green100,
        '& $Text': {
            color: theme.colors.green700,
        },
        '& $dismiss': {
            color: `${theme.colors.green700} !important`,
            borderColor: `${theme.colors.green700} !important`,
            '&:hover': {
                backgroundColor: `${theme.colors.green200} !important`,
            },
            '&:active': {
                backgroundColor: `${theme.colors.green400} !important`,
            },
        },
    },
    warning: {
        backgroundColor: theme.colors.yellow100,
        '& $Text': {
            color: theme.colors.yellow700,
        },
        '& $dismiss': {
            color: `${theme.colors.yellow700} !important`,
            borderColor: `${theme.colors.yellow700} !important`,
            '&:hover': {
                backgroundColor: `${theme.colors.yellow200} !important`,
            },
            '&:active': {
                backgroundColor: `${theme.colors.yellow400} !important`,
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
});
