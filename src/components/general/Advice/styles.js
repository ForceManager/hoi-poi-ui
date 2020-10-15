export default (theme) => ({
    root: {
        ...theme.typography.defaultText,
        borderRadius: '8px',
        display: 'flex',
        padding: '16px',
        '& > div.rah-static, & > div.rah-animating': {
            width: '100%',
            overflow: 'hidden !important',
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
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'flex-start',
    },
    dropdownIcon: {
        margin: '5px 0 5px 20px',
        lineHeight: '0',
        transition: 'transform 0.3s ease-out',
        willChange: 'transform',
        transform: 'rotate(-180deg) translateY(1px)',
        cursor: 'pointer',
    },
    isCollapsed: {
        '& $textContainer': {
            alignItems: 'center',
        },
        '& $dropdownIcon': {
            transform: 'rotate(0) translateY(1px)',
        },
    },
    withTitleContainer: {
        marginTop: 15,
    },
});
