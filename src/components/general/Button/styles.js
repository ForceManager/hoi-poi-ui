export default (theme) => ({
    root: {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'inline-block',
        borderRadius: 4,
        border: 'none',
        outline: 'none',
        cursor: 'pointer !important',
        transition: `color .2s ease-in-out, background-color .1s ease-in-out, fill .2s ease-in-out`,
        '&$fullWidth': {
            width: '100%',
        },
        '&$disabled, &$loading': {
            opacity: 0.5,
            cursor: 'not-allowed !important',
            '&:active': {
                boxShadow: 'none',
            },
            '& *': {
                cursor: 'not-allowed',
            },
        },
        '& *': {
            cursor: 'pointer',
        },
    },
    content: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        justifyContent: 'center',
    },
    Text: {
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit',
        transition: 'opacity .2s ease-in-out',
        color: 'inherit',
        ...theme.typography.button,
    },
    loaderContainer: {
        position: 'absolute',
        display: 'flex',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        '& div': {
            marginBottom: -0,
        },
    },
    icon: {
        height: 18,
        '& svg': {
            verticalAlign: 'initial',
        },
    },
    // Types
    primary: {
        backgroundColor: theme.colors.orange500,
        color: theme.colors.primary.white,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                backgroundColor: theme.colors.orange600,
            },
            '&:active': {
                backgroundColor: theme.colors.orange400,
            },
        },
    },
    primaryError: {
        backgroundColor: theme.colors.semantic.negative500,
        color: theme.colors.primary.white,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                backgroundColor: theme.colors.semantic.negative500,
            },
            '&:active': {
                backgroundColor: theme.colors.semantic.negative450,
            },
        },
    },
    secondary: {
        border: `1px solid ${theme.colors.orange500}`,
        backgroundColor: 'transparent',
        color: theme.colors.orange500,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                borderColor: theme.colors.orange500,
                backgroundColor: theme.colors.orange200,
                color: theme.colors.orange500,
            },
            '&:active': {
                borderColor: theme.colors.orange400,
                backgroundColor: theme.colors.orange400,
                color: theme.colors.primary.white,
                '& path': { fill: theme.colors.primary.white },
            },
        },
    },
    secondaryError: {
        border: `1px solid ${theme.colors.grey[100]}`,
        backgroundColor: 'transparent',
        color: theme.colors.semantic.negative500,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                borderColor: theme.colors.semantic.negative500,
                backgroundColor: theme.colors.semantic.negativeCustom200,
                color: theme.colors.semantic.negative500,
            },
            '&:active': {
                borderColor: theme.colors.semantic.negative450,
                backgroundColor: theme.colors.semantic.negative450,
                color: theme.colors.primary.white,
                '& path': { fill: theme.colors.primary.white },
            },
        },
    },
    terciary: {
        border: `1px solid ${theme.colors.grey[100]}`,
        backgroundColor: 'transparent',
        color: theme.colors.textLight.secondary,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                borderColor: theme.colors.grey[100],
                backgroundColor: theme.colors.grey[100],
                color: theme.colors.textLight.secondary,
            },
            '&:active': {
                borderColor: theme.colors.grey[200],
                backgroundColor: theme.colors.grey[100],
                color: theme.colors.textLight.secondary,
            },
        },
    },
    dashed: {
        border: `1px dashed ${theme.colors.grey[200]}`,
        backgroundColor: 'transparent',
        color: theme.colors.textLight.secondary,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                borderColor: theme.colors.grey[200],
                backgroundColor: theme.colors.grey[100],
                color: theme.colors.textLight.secondary,
            },
            '&:active': {
                borderColor: theme.colors.grey[500],
                backgroundColor: theme.colors.grey[100],
                color: theme.colors.textLight.secondary,
            },
        },
    },
    promotion: {
        backgroundColor: theme.colors.orange100,
        color: theme.colors.textLight.primary,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                backgroundColor: theme.colors.orange300,
                color: theme.colors.textLight.primary,
            },
            '&:active': {
                backgroundColor: theme.colors.orange200,
                color: theme.colors.textLight.secondary,
            },
        },
    },
    primarySoft: {
        backgroundColor: theme.colors.orange100,
        color: theme.colors.orange500,
        '& path': { fill: theme.colors.orange500 },
        '&:not($loading):not($disabled)': {
            '&:hover': {
                backgroundColor: theme.colors.orange200,
                color: theme.colors.orange500,
            },
            '&:active': {
                backgroundColor: theme.colors.orange300,
                color: theme.colors.orange500,
                '& path': { fill: theme.colors.orange500 },
            },
        },
    },

    text: {
        backgroundColor: 'transparent',
        color: theme.colors.orange500,
        '& path': { fill: theme.colors.orange500 },
        '&$disabled': {
            opacity: 1,
            color: theme.colors.grey[500],
            '& path': { fill: theme.colors.grey[500] },
        },
        '&:not($loading):not($disabled)': {
            '&:hover': {
                backgroundColor: theme.colors.orange100,
                color: theme.colors.orange500,
            },
            '&:active': {
                backgroundColor: theme.colors.orange200,
                color: theme.colors.orange500,
                '& path': { fill: theme.colors.orange500 },
            },
        },
    },

    iconOnly: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Sizes
    big: {
        height: 40,
        padding: '0 17px',
        '&$iconOnly': {
            width: 40,
            padding: 0,
        },
    },
    medium: {
        height: 32,
        padding: '0 16px',
        '&$iconOnly': {
            width: 32,
            padding: 0,
        },
    },
    small: {
        height: 24,
        padding: '0 8px',
        '& $Text': {
            fontSize: 12,
            fontWeight: 400,
        },
        '& $icon': {
            width: 15,
            height: 15,
            '& span': {
                width: 15,
                height: 15,
            },
            '& svg': {
                width: 15,
                height: 15,
            },
        },
        '&$iconOnly': {
            width: 24,
            padding: 0,
        },
    },

    // States
    disabled: {},
    loading: {
        '& $Text': {
            opacity: 0,
        },
    },
    fullWidth: {},
    href: {
        textDecoration: 'none',
        display: 'inline-flex',
    },
});
