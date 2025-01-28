export default (theme) => ({
    root: {
        position: 'relative',
        padding: '8px 16px',
        borderRadius: '4px',
        backgroundColor: theme.colors.utility.bg,
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
                color: `${theme.colors.grey[700]} !important`,
            },
            '& $expandableIcon': {
                '& svg path': {
                    fill: theme.colors.actionMinor[500],
                },
            },
        },
    },
    open: {
        '& $Text': {
            color: theme.colors.utility.textPrimary,
        },
        '& $icon': {
            '& span:first-child svg': {
                transform: 'rotate(0deg) translateY(0px)',
            },
            '& $expandableIcon svg path': {
                fill: theme.colors.utility.textPrimary,
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
            color: `${theme.colors.utility.textPrimary} !important`,
        },
        '& $icon': {
            '& svg path': {
                fill: theme.colors.utility.textPrimary,
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
    title: {
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        paddingBottom: 8,
        borderBottom: `1px solid ${theme.colors.grey[100]}`,
    },
    titleContainer: {
        width: '100%',
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        boxSizing: 'border-box',
        paddingBottom: 8,
        borderBottom: `1px solid ${theme.colors.neutral400}`,
    },
    titleContainerInner: {
        display: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    textContainer: {
        overflow: 'hidden',
    },
    Text: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        color: theme.colors.utility.textSecondary,
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
        '& span:first-child svg': {
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
        backgroundColor: theme.colors.actionMajor[25],
        color: theme.colors.actionMajor[500],
        position: 'relative',
        '& span:first-child': {
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
    expandableIcon: {},
});
