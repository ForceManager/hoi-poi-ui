export default (theme) => ({
    root: {
        position: 'relative',
        padding: '8px 16px',
        borderRadius: '4px',
        backgroundColor: theme.colors.neutralBase,
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        boxSizing: 'border-box',
        '&:hover': {
            '& $Text': {
                color: theme.colors.neutral800,
            },
            '& $icon': {
                '& svg path': {
                    fill: theme.colors.neutral800,
                },
            },
        },
    },
    open: {
        '& $Text': {
            color: theme.colors.neutral900,
        },
        '& $icon': {
            '& svg': {
                transform: 'rotate(0deg) translateY(0px)',
            },
            '& svg path': {
                fill: theme.colors.neutral900,
            },
        },
    },
    headerActiveFields: {
        '& $Text': {
            color: theme.colors.neutral900,
        },
        '& $icon': {
            '& svg path': {
                fill: theme.colors.neutral900,
            },
        },
    },
    headerContent: {
        width: '100%',
        display: 'flex',
    },
    isExpandable: {
        cursor: 'pointer',
    },
    titleContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
    },
    textContainer: {
        overflow: 'hidden',
    },
    Text: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: theme.colors.neutral700,
        transition: 'all 0.15s ease',
    },
    BadgeNotification: {
        height: '100%',
        alignSelf: 'center',
        marginLeft: '8px',
    },
    icon: {
        marginRight: 4,
        lineHeight: '0',
        alignSelf: 'center',
        cursor: 'pointer',
        '& svg': {
            willChange: 'transform',
            transition: 'transform 0.3s ease-out',
            transform: 'rotate(-90deg) translateY(0px)',
        },
    },
    activeFields: {
        minWidth: 18,
        height: 20,
        padding: '0px 3px',
        borderRadius: 18,
        backgroundColor: theme.colors.orange100,
        color: theme.colors.orange500,
        position: 'relative',
        '& span': {
            position: 'absolute',
            marginTop: 1,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
});
