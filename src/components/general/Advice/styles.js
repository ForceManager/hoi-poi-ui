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
        backgroundColor: theme.colors.neutral100,
        '& $Text': {
            color: theme.colors.neutral700,
        },
        '& $dismiss': {
            color: `${theme.colors.neutral700} !important`,
            borderColor: `${theme.neutral700} !important`,
        },
    },
    error: {
        backgroundColor: theme.colors.red100,
        '& $Text': {
            color: theme.colors.red500,
        },
        '& $dismiss': {
            color: `${theme.colors.red500} !important`,
            borderColor: `${theme.colors.red500} !important`,
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
