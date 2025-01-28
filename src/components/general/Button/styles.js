export default (theme) => ({
    root: {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'inline-block',
        borderRadius: 4,
        border: 'none',
        outline: 'none',
        cursor: 'pointer !important',
        transition: 'all .2s ease-in-out',
        '&$fullWidth': {
            width: '100%',
        },
        '&$disabled, &$loading': {
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
        backgroundColor: theme.colors.actionMajor[500],
        color: theme.colors.primary.white,
        '&$disabled': {
            backgroundColor: theme.colors.actionMinor[100],
            color: theme.colors.textLight.disabled,
            '& path': { fill: theme.colors.textLight.disabled },
        },
        '&:not($loading):not($disabled)': {
            '&:hover': {
                backgroundColor: theme.colors.actionMajor[600],
            },
            '&:active': {
                backgroundColor: theme.colors.actionMajor[700],
            },
        },
    },
    primaryError: {
        backgroundColor: theme.colors.semantic.negative500,
        color: theme.colors.primary.white,
        '&$disabled': {
            backgroundColor: theme.colors.semantic.negativeCustom200,
            color: theme.colors.textDark.disabled,
            '& path': { fill: theme.colors.textDark.disabled },
        },
        '&:not($loading):not($disabled)': {
            '&:hover': {
                backgroundColor: theme.colors.semantic.negative600,
            },
            '&:active': {
                backgroundColor: theme.colors.semantic.negative350,
            },
        },
    },
    secondary: {
        border: `1px solid ${theme.colors.actionMajor[500]}`,
        backgroundColor: theme.colors.transparent,
        color: theme.colors.actionMajor[500],
        '&$disabled': {
            borderColor: theme.colors.actionMinor[200],
            backgroundColor: theme.colors.transparent,
            color: theme.colors.textLight.disabled,
            '& path': { fill: theme.colors.textLight.disabled },
        },
        '&:not($loading):not($disabled)': {
            '&:hover': {
                borderColor: theme.colors.actionMajor[500],
                backgroundColor: theme.colors.actionMajor[500],
                color: theme.colors.primary.white,
                '& path': { fill: theme.colors.primary.white },
            },
            '&:active': {
                borderColor: theme.colors.actionMajor[350],
                backgroundColor: theme.colors.actionMajor[350],
                color: theme.colors.primary.white,
                '& path': { fill: theme.colors.primary.white },
            },
        },
    },
    secondaryError: {
        border: `1px solid ${theme.colors.semantic.negative500}`,
        backgroundColor: theme.colors.transparent,
        color: theme.colors.semantic.negative500,
        '&$disabled': {
            borderColor: theme.colors.actionMinor[100],
            backgroundColor: theme.colors.transparent,
            color: theme.colors.textLight.disabled,
            '& path': { fill: theme.colors.textLight.disabled },
        },
        '&:not($loading):not($disabled)': {
            '&:hover': {
                borderColor: theme.colors.semantic.negative500,
                backgroundColor: theme.colors.semantic.negative500,
                color: theme.colors.primary.white,
                '& path': { fill: theme.colors.primary.white },
            },
            '&:active': {
                borderColor: theme.colors.semantic.negative350,
                backgroundColor: theme.colors.semantic.negative350,
                color: theme.colors.primary.white,
                '& path': { fill: theme.colors.primary.white },
            },
        },
    },
    terciary: {
        border: `1px solid ${theme.colors.actionMinor[200]}`,
        backgroundColor: theme.colors.transparent,
        color: theme.colors.actionMinor[400],
        '& path': { fill: theme.colors.actionMinor[400] },
        '&$disabled': {
            borderColor: theme.colors.actionMinor[200],
            backgroundColor: theme.colors.transparent,
            color: theme.colors.textLight.disabled,
            '& path': { fill: theme.colors.textLight.disabled },
        },
        '&:not($loading):not($disabled)': {
            '&:hover': {
                borderColor: theme.colors.actionMinor[200],
                backgroundColor: theme.colors.actionMinor[100],
                color: theme.colors.actionMinor[400],
            },
            '&:active': {
                borderColor: theme.colors.actionMinor[200],
                backgroundColor: theme.colors.actionMinor[200],
                color: theme.colors.actionMinor[400],
            },
        },
    },
    dashed: {
        border: `1px dashed ${theme.colors.actionMinor[200]}`,
        backgroundColor: theme.colors.transparent,
        color: theme.colors.textLight.secondary,
        '& path': { fill: theme.colors.textLight.secondary },
        '&$disabled': {
            borderColor: theme.colors.actionMinor[100],
            backgroundColor: theme.colors.transparent,
            color: theme.colors.textLight.disabled,
            '& path': { fill: theme.colors.textLight.disabled },
        },
        '&:not($loading):not($disabled)': {
            '&:hover': {
                borderColor: theme.colors.actionMinor[200],
                backgroundColor: theme.colors.actionMinor[100],
                color: theme.colors.textLight.secondary,
            },
            '&:active': {
                borderColor: theme.colors.actionMinor[300],
                backgroundColor: theme.colors.actionMinor[150],
                color: theme.colors.textLight.secondary,
            },
        },
    },
    promotion: {
        border: 'none',
        color: theme.colors.textLight.primary,
        zIndex: 0,
        '& $content': {
            position: 'relative',
            zIndex: 3,
        },
        '&::before, &::after': {
            content: '""',
            position: 'absolute',
            borderRadius: 'inherit',
            opacity: 1,
            transition: 'inherit',
        },
        '&::before': {
            zIndex: 1,
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: `linear-gradient(to right, ${theme.colors.utility.promoGradientGreen}, ${theme.colors.utility.promoGradientBlue}, ${theme.colors.utility.promoGradientPurple})`,
        },
        '&::after': {
            zIndex: 2,
            top: 2,
            right: 2,
            bottom: 2,
            left: 2,
            opacity: 1,
            background: theme.colors.primary.white,
        },
        '& path': { fill: theme.colors.textLight.primary },
        '&$disabled': {
            color: theme.colors.textLight.disabled,
            '& path': { fill: theme.colors.textLight.disabled },
            '&::before': {
                opacity: 1,
                background: theme.colors.textLight.disabled,
            },
        },
        '&:not($loading):not($disabled)': {
            '&:hover': {
                '&::after': { opacity: 0.9 },
            },
            '&:active': {
                color: theme.colors.textDark.primary,
                '& path': { fill: theme.colors.textDark.primary },
                '&::before, &::after': {
                    opacity: 1,
                    background: theme.colors.background.gray900,
                },
            },
        },
    },
    primarySoft: {
        border: `1px solid ${theme.colors.actionMajor[500]}`,
        backgroundColor: theme.colors.transparent,
        color: theme.colors.actionMajor[500],
        '& path': { fill: theme.colors.actionMajor[500] },
        '&$disabled': {
            borderColor: theme.colors.actionMinor[200],
            backgroundColor: theme.colors.transparent,
            color: theme.colors.textLight.disabled,
            '& path': { fill: theme.colors.textLight.disabled },
        },
        '&:not($loading):not($disabled)': {
            '&:hover': {
                borderColor: theme.colors.actionMajor[500],
                backgroundColor: theme.colors.actionMajor[500],
                color: theme.colors.primary.white,
                '& path': { fill: theme.colors.primary.white },
            },
            '&:active': {
                borderColor: theme.colors.actionMajor[350],
                backgroundColor: theme.colors.actionMajor[350],
                color: theme.colors.primary.white,
                '& path': { fill: theme.colors.primary.white },
            },
        },
    },
    text: {
        backgroundColor: theme.colors.transparent,
        color: theme.colors.actionMajor[500],
        '& path': { fill: theme.colors.actionMajor[500] },
        '&$disabled': {
            color: theme.colors.textLight.disabled,
            '& path': { fill: theme.colors.textLight.disabled },
        },
        '&:not($loading):not($disabled)': {
            '&:hover': {
                backgroundColor: theme.colors.actionMajor[25],
                color: theme.colors.actionMajor[500],
            },
            '&:active': {
                backgroundColor: theme.colors.actionMajor[150],
                color: theme.colors.actionMajor[500],
                '& path': { fill: theme.colors.actionMajor[500] },
            },
        },
    },

    iconOnly: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Sizes
    big: {
        borderRadius: 20,
        height: 40,
        padding: '0 17px',
        '&$iconOnly': {
            width: 40,
            padding: 0,
        },
    },
    medium: {
        borderRadius: 16,
        height: 32,
        padding: '0 16px',
        '&$iconOnly': {
            width: 32,
            padding: 0,
        },
    },
    small: {
        borderRadius: 12,
        height: 24,
        padding: '0 8px',
        '& $Text': {
            fontSize: 12,
            lineHeight: 'calc(19/12)',
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
