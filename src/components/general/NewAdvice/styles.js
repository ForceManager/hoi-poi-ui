export default (theme) => ({
    root: {
        ...theme.typography.defaultText,
        color: theme.colors.text.black,
        borderRadius: '8px',
        display: 'flex',
        padding: '15px 20px',
        '& > div.rah-static, & > div.rah-animating': {
            width: '100%',
            overflow: 'hidden !important',
        },
    },
    icon: {
        lineHeight: '0',
        display: 'flex',
        marginRight: 10,
    },
    Text: {
        display: 'block',
        width: '100%',
    },
    // Types
    error: {
        backgroundColor: theme.colors.red100,
        '& $Text': {
            color: theme.colors.red500,
        },
    },
    info: {
        backgroundColor: theme.colors.secondaryLight,
        '& $Text': {
            color: theme.colors.text.secondary,
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
