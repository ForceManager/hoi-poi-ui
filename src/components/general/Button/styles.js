export default (theme) => ({
    root: {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'inline-block',
        padding: '5px 20px',
        lineHeight: 0,
        borderRadius: '100px',
        textAlign: 'center',
        cursor: 'pointer !important',
        '&:active': {
            ...theme.effects.buttonActive,
        },
        '&$fullWidth': {
            width: '100%',
        },
        '&$disabled': {
            opacity: 0.5,
            cursor: 'not-allowed !important',
            '&:hover': {
                backgroundColor: theme.colors.primary,
            },
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
    label: {
        isolate: true,
        display: 'inherit',
        alignItems: 'inherit',
        justifyContent: 'inherit',
        fontWeight: 500,
        transition: 'opacity .2s ease-in-out',
        ...theme.typography.button,
        lineHeight: '20px',
    },
    labelLoading: {
        top: 1,
        position: 'relative',
        '& $label': {
            opacity: 0,
        },
        '& $loader': {
            opacity: 1,
        },
    },
    loader: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0,
        transition: 'opacity .2s ease-in-out',
    },
    // Types
    outlined: {
        padding: '4px 20px',
        '&$primary': {
            backgroundColor: 'transparent',
            border: `1px solid ${theme.colors.primary}`,
            transition: `color .2s ease-in-out, box-shadow .2s ease-in-out, background-color .1s ease-in-out`,
            '&$disabled': {
                '&:hover': {
                    backgroundColor: 'transparent',
                    '& $label': {
                        color: theme.colors.primary,
                    },
                },
            },
            '& $label': {
                color: theme.colors.primary,
            },
            '&:hover': {
                backgroundColor: theme.colors.primaryLight,
                '& $label': {
                    color: theme.colors.text.primary,
                },
            },
        },
        '&$danger': {
            background: 'transparent',
            backgroundColor: 'transparent',
            border: `1px solid ${theme.colors.danger}`,
            transition: `color .2s ease-in-out, box-shadow .2s ease-in-out, background-color .1s ease-in-out`,
            '& $label': {
                color: theme.colors.danger,
            },
            '&:hover': {
                backgroundColor: theme.colors.danger,
                '& $label': {
                    color: theme.colors.text.danger,
                },
            },
        },
        '&$small': {
            padding: '0 20px',
        },
        '&$big': {
            padding: '9px 20px',
        },
    },
    squared: {
        borderRadius: 2,
        padding: '4px 10px',
        backgroundColor: 'transparent',
        border: `1px solid ${theme.colors.placeholders}`,
        transition: `border-color .2s ease-in-out`,
        '&:hover': {
            border: `1px solid ${theme.colors.placeholdersHover}`,
            backgroundColor: 'transparent !important',
        },
        '&$disabled': {
            '&:hover': {
                border: `1px solid ${theme.colors.placeholders}`,
                backgroundColor: 'transparent',
            },
        },
        '&$white': {
            backgroundColor: 'transparent',
            '&$disabled': {
                '&:hover': {
                    backgroundColor: 'transparent',
                },
            },
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
        '&$primary': {
            backgroundColor: 'transparent',
            '&$disabled': {
                '&:hover': {
                    backgroundColor: 'transparent',
                    '& $label': {
                        color: theme.colors.primary,
                    },
                },
            },
            '& $label': {
                color: theme.colors.primary,
            },
        },
        '&$danger': {
            background: 'transparent',
            backgroundColor: 'transparent',
            '& $label': {
                color: theme.colors.danger,
            },
        },
        '&$small': {
            padding: '0 9px',
            '& $label': {
                lineHeight: '18px',
            },
        },
        '&$big': {
            padding: '9px 9px',
        },
    },
    //Colors
    white: {
        backgroundColor: 'transparent',
        transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
        '& $label': {
            color: theme.colors.text.default,
        },
        '&:hover': {
            backgroundColor: theme.colors.lightGrey,
        },
    },
    primary: {
        backgroundColor: theme.colors.primary,
        transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
        '& $label': {
            color: theme.colors.text.primary,
        },
        '&:hover': {
            backgroundColor: theme.colors.primaryLight,
        },
    },
    danger: {
        backgroundColor: theme.colors.danger,
        transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
        '& $label': {
            color: theme.colors.text.danger,
        },
        '&:hover': {
            backgroundColor: theme.colors.dangerLight,
        },
    },
    // Sizes
    small: {
        padding: '0px 20px',
    },
    big: {
        padding: '10px 20px',
    },
    // States
    disabled: {},
    fullWidth: {},
});
