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
        height: 36,
        boxSizing: 'border-box',
        marginBottom: 4,
        '&:hover': {
            '& $Text': {
                color: `${theme.colors.neutral800} !important`,
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
        '& $trashIcon': {
            display: 'inherit',
        },
        '& $BadgeNotification': {
            display: 'none',
        },
    },
    headerActiveFields: {
        '& $Text': {
            color: `${theme.colors.neutral900} !important`,
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
        alignItems: 'center',
    },
    isExpandable: {
        cursor: 'pointer',
    },
    titleContainer: {
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        paddingBottom: 8,
        borderBottom: `1px solid ${theme.colors.neutral400}`,
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
        display: 'flex',
        alignItems: 'center',
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
    horizontal: {
        display: 'flex',
        margin: '0 -8px',
        padding: 0,
        '& > [class*="InputWrapper"]': {
            flex: 1,
            padding: '0 8px',
        },
        '& [class*="formControl"]': {
            width: 'auto',
        },
        '& [class*="formControl"] > div': {
            width: '100%',
        },
    },
    withRemove: {
        '&:hover': {
            '& $trashIcon': {
                display: 'inherit',
            },
            '& $BadgeNotification': {
                display: 'none',
            },
        },
    },
    trashIcon: {
        display: 'none',
    },
});
