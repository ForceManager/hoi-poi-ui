export default (theme) => ({
    root: {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'inline-block',
        textAlign: 'center',
        borderRadius: 4,
        border: 'none',
        outline: 'none',
        cursor: 'pointer !important',
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
        ...theme.typography.buttonText,
        lineHeight: '16px', // Ver typography
        color: 'inherit',
        fontSize: 'inherit',
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
    icon: {},
    // labelLoading: {
    //     top: 1,
    //     position: 'relative',
    //     '& $Text': {
    //         opacity: 0,
    //     },
    //     '& $loader': {
    //         opacity: 1,
    //     },
    // },
    // loader: {
    //     position: 'absolute',
    //     top: 0,
    //     left: 0,
    //     width: '100%',
    //     height: '100%',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     opacity: 0,
    //     transition: 'opacity .2s ease-in-out',
    // },
    // Types
    primary: {
        backgroundColor: theme.colors.orange500,
        color: theme.colors.neutralBase,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                backgroundColor: theme.colors.orange400,
            },
            '&:active': {
                backgroundColor: theme.colors.orange600,
            },
        },
    },
    primaryError: {
        backgroundColor: theme.colors.red500,
        color: theme.colors.neutralBase,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                backgroundColor: theme.colors.red400,
            },
            '&:active': {
                backgroundColor: theme.colors.red600,
            },
        },
    },
    secondary: {
        border: `1px solid ${theme.colors.orange500}`,
        backgroundColor: theme.colors.neutralBase,
        color: theme.colors.orange500,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                borderWidth: 2,
                color: theme.colors.orange400,
            },
            '&:active': {
                border: `2px solid ${theme.colors.orange600}`,
                backgroundColor: theme.colors.orange600,
                color: theme.colors.neutralBase,
                '& path': { fill: theme.colors.neutralBase },
            },
        },
    },
    secondaryError: {
        border: `1px solid ${theme.colors.neutral400}`,
        backgroundColor: theme.colors.neutralBase,
        color: theme.colors.red500,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                border: `2px solid ${theme.colors.red400}`,
                color: theme.colors.red400,
            },
            '&:active': {
                border: `2px solid ${theme.colors.red600}`,
                backgroundColor: theme.colors.red600,
                color: theme.colors.neutralBase,
                '& path': { fill: theme.colors.neutralBase },
            },
        },
    },
    terciary: {
        border: `1px solid ${theme.colors.neutral400}`,
        backgroundColor: theme.colors.neutralBase,
        color: theme.colors.neutral700,
        '&:not($loading):not($disabled)': {
            '&:hover': {
                border: `2px solid ${theme.colors.neutral200}`,
                color: theme.colors.neutral600,
            },
            '&:active': {
                border: `2px solid ${theme.colors.neutral300}`,
                backgroundColor: theme.colors.neutral300,
                color: theme.colors.neutral800,
                '& path': { fill: theme.colors.neutral800 },
            },
        },
    },
    outline: {
        '&:not($loading):not($disabled)': {
            '&:hover, &:active': {
                '&$big': {
                    padding: '0 16px',
                },
                '&$medium': {
                    padding: '0 15px',
                },
                '&$small': {
                    padding: '0 9px',
                },
            },
        },
    },

    // Sizes
    big: {
        height: 44,
        padding: '0 17px',
        // Ver typography
        fontSize: 14,
    },
    medium: {
        height: 32,
        padding: '0 16px',
        // Ver typography
        fontSize: 14,
    },
    small: {
        height: 24,
        padding: '0 8px',
        // Ver typography
        fontSize: 12,
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
    // outlined: {
    //     padding: '4px 20px',
    //     '&$primary': {
    //         backgroundColor: 'transparent',
    //         border: `1px solid ${theme.colors.primary}`,
    //         transition: `color .2s ease-in-out, box-shadow .2s ease-in-out, background-color .1s ease-in-out`,
    //         '&$disabled': {
    //             '&:hover': {
    //                 backgroundColor: 'transparent',
    //                 '& $Text': {
    //                     color: theme.colors.primary,
    //                 },
    //             },
    //         },
    //         '& $Text': {
    //             color: theme.colors.primary,
    //         },
    //         '&:hover': {
    //             backgroundColor: theme.colors.primarySoft,
    //             '& $Text': {
    //                 color: theme.colors.text.primary,
    //             },
    //         },
    //     },
    //     '&$danger': {
    //         background: 'transparent',
    //         backgroundColor: 'transparent',
    //         border: `1px solid ${theme.colors.red}`,
    //         transition: `color .2s ease-in-out, box-shadow .2s ease-in-out, background-color .1s ease-in-out`,
    //         '& $Text': {
    //             color: theme.colors.red,
    //         },
    //         '&:hover': {
    //             backgroundColor: theme.colors.red,
    //             '& $Text': {
    //                 color: theme.colors.text.white,
    //             },
    //         },
    //     },
    //     '&$small': {
    //         padding: '0 20px',
    //         '& $Text': {
    //             lineHeight: '18px',
    //         },
    //     },
    //     '&$big': {
    //         padding: '9px 20px',
    //     },
    // },
    // squared: {
    //     borderRadius: 2,
    //     padding: '4px 10px',
    //     '&$white': {
    //         backgroundColor: 'transparent',
    //         transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
    //         '&$disabled': {
    //             '&:hover': {
    //                 backgroundColor: 'transparent !important',
    //             },
    //         },
    //         '& $Text': {
    //             color: theme.colors.text.default,
    //         },
    //         '&:hover': {
    //             backgroundColor: theme.colors.greyLight,
    //         },
    //     },
    //     '&$primary': {
    //         backgroundColor: theme.colors.primary,
    //         '&$disabled': {
    //             '&:hover': {
    //                 backgroundColor: `${theme.colors.primary} !important`,
    //             },
    //         },
    //         '&:hover': {
    //             backgroundColor: theme.colors.primarySoft,
    //         },
    //         '& $Text': {
    //             color: theme.colors.text.white,
    //         },
    //     },
    //     '&$danger': {
    //         backgroundColor: theme.colors.red,
    //         '&$disabled': {
    //             '&:hover': {
    //                 backgroundColor: `${theme.colors.red} !important`,
    //             },
    //         },
    //         '&:hover': {
    //             backgroundColor: theme.colors.redsoft,
    //         },
    //         '& $Text': {
    //             color: theme.colors.text.white,
    //         },
    //     },
    //     '&$small': {
    //         padding: '0 9px',
    //     },
    //     '&$big': {
    //         padding: '9px 9px',
    //     },
    // },
    // 'squared-outlined': {
    //     borderRadius: 2,
    //     padding: '4px 10px',
    //     backgroundColor: 'transparent',
    //     border: `1px solid ${theme.colors.placeholders}`,
    //     transition: `border-color .2s ease-in-out`,
    //     '&:hover': {
    //         border: `1px solid ${theme.colors.placeholdersHover}`,
    //         backgroundColor: 'transparent !important',
    //     },
    //     '&$disabled': {
    //         '&:hover': {
    //             border: `1px solid ${theme.colors.placeholders}`,
    //             backgroundColor: 'transparent',
    //         },
    //     },
    //     '&$white': {
    //         backgroundColor: 'transparent',
    //         '&$disabled': {
    //             '&:hover': {
    //                 backgroundColor: 'transparent',
    //             },
    //         },
    //         '&:hover': {
    //             backgroundColor: 'transparent',
    //         },
    //     },
    //     '&$primary': {
    //         backgroundColor: 'transparent',
    //         '&$disabled': {
    //             '&:hover': {
    //                 backgroundColor: 'transparent',
    //                 '& $Text': {
    //                     color: theme.colors.primary,
    //                 },
    //             },
    //         },
    //         '& $Text': {
    //             color: theme.colors.primary,
    //         },
    //     },
    //     '&$danger': {
    //         background: 'transparent',
    //         backgroundColor: 'transparent',
    //         '& $Text': {
    //             color: theme.colors.red,
    //         },
    //     },
    //     '&$small': {
    //         padding: '0 9px',
    //     },
    //     '&$big': {
    //         padding: '9px 9px',
    //     },
    // },
    // filled: {},
    // //Colors
    // white: {
    //     backgroundColor: 'transparent',
    //     transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
    //     '& $Text': {
    //         color: theme.colors.text.default,
    //     },
    //     '&$disabled': {
    //         '&:hover': {
    //             backgroundColor: 'transparent',
    //         },
    //     },
    //     '&:hover': {
    //         backgroundColor: theme.colors.greyLight,
    //     },
    // },
    // primary: {
    //     backgroundColor: theme.colors.primary,
    //     transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
    //     '& $Text': {
    //         color: theme.colors.text.primary,
    //     },
    //     '&$disabled': {
    //         '&:hover': {
    //             backgroundColor: theme.colors.primary,
    //         },
    //     },
    //     '&:hover': {
    //         backgroundColor: theme.colors.primarySoft,
    //     },
    // },
    // danger: {
    //     backgroundColor: theme.colors.red,
    //     transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
    //     '& $Text': {
    //         color: theme.colors.text.white,
    //     },
    //     '&$disabled': {
    //         '&:hover': {
    //             backgroundColor: theme.colors.red,
    //         },
    //     },
    //     '&:hover': {
    //         backgroundColor: theme.colors.redSoft,
    //     },
    // },
    // grey: {
    //     backgroundColor: theme.colors.tableHover,
    //     transition: `box-shadow .2s ease-in, background-color .1s ease-in-out`,
    //     '& $Text': {
    //         color: theme.colors.text.default,
    //     },
    //     '&$disabled': {
    //         '&:hover': {
    //             backgroundColor: theme.colors.tableHover,
    //         },
    //     },
    //     '&:hover': {
    //         backgroundColor: theme.colors.tableHeader,
    //     },
    // },
});
