export default (theme) => ({
    root: {
        ...theme.typography.defaultText,
        borderRadius: '8px',
        display: 'flex',
        padding: '16px',
        '& .ReactCollapse--collapse': {
            width: '100%',
            minHeight: 20,
            overflow: 'hidden !important',
            transition: 'height 500ms',
            willChange: 'height',
        },
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
    },
    error: {
        backgroundColor: theme.colors.red100,
        '& $Text': {
            color: theme.colors.red500,
        },
    },
    info: {
        backgroundColor: theme.colors.aqua100,
        '& $Text': {
            color: theme.colors.aqua700,
        },
    },
    success: {
        backgroundColor: theme.colors.green100,
        '& $Text': {
            color: theme.colors.green700,
        },
    },
    warning: {
        backgroundColor: theme.colors.yellow100,
        '& $Text': {
            color: theme.colors.yellow700,
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
        lineHeight: '0',
        transition: 'transform 0.3s ease-out',
        willChange: 'transform',
        transform: 'rotate(-180deg) translateY(1px)',
        cursor: 'pointer',
    },
    isOpened: {
        '& $dropdownIcon': {
            transform: 'rotate(0) translateY(1px)',
        },
        '& $Text': {
            whiteSpace: 'pre-wrap',
        },
    },
    withTitleContainer: {
        marginTop: 15,
    },
});
