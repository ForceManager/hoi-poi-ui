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
    },
    // Types
    primary: {
        backgroundColor: theme.colors.orange500,
        color: theme.colors.neutralBase,
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
        backgroundColor: theme.colors.red500,
        color: theme.colors.neutralBase,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                backgroundColor: theme.colors.red600,
            },
            '&:active': {
                backgroundColor: theme.colors.red400,
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
                color: theme.colors.neutralBase,
                '& path': { fill: theme.colors.neutralBase },
            },
        },
    },
    secondaryError: {
        border: `1px solid ${theme.colors.neutral400}`,
        backgroundColor: 'transparent',
        color: theme.colors.red500,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                borderColor: theme.colors.red500,
                backgroundColor: theme.colors.red200,
                color: theme.colors.red500,
            },
            '&:active': {
                borderColor: theme.colors.red400,
                backgroundColor: theme.colors.red400,
                color: theme.colors.neutralBase,
                '& path': { fill: theme.colors.neutralBase },
            },
        },
    },
    terciary: {
        border: `1px solid ${theme.colors.neutral400}`,
        backgroundColor: 'transparent',
        color: theme.colors.neutral700,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                borderColor: theme.colors.neutral400,
                backgroundColor: theme.colors.neutral300,
                color: theme.colors.neutral700,
            },
            '&:active': {
                borderColor: theme.colors.neutral300,
                backgroundColor: theme.colors.neutral300,
                color: theme.colors.neutral600,
                '& path': { fill: theme.colors.neutral600 },
            },
        },
    },

    // Sizes
    big: {
        height: 44,
        padding: '0 17px',
    },
    medium: {
        height: 32,
        padding: '0 16px',
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
        '&$iconLeft': {
            '& $icon': {
                marginRight: 4,
            },
        },
        '&$iconRight': {
            '& $icon': {
                marginLeft: 4,
            },
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
    iconLeft: {
        '& $icon': {
            marginRight: 6,
        },
    },
    iconRight: {
        '& $icon': {
            marginLeft: 6,
        },
    },
    iconOnly: {
        '& $icon': {
            margin: 0,
        },
        '&$big': {
            padding: '0 13px',
        },
        '&$medium': {
            padding: '0 8px',
        },
        '&$small': {
            padding: '0 4px',
        },
    },
});
