export default (theme) => ({
    root: {
        display: 'inline-block',
        borderRadius: 4,
        boxSizing: 'border-box',
        transition: 'background-color 0.15s ease',
        '&$clickable:hover': {
            backgroundColor: theme.colors.neutral300,
        },
        '&$isActive': {
            backgroundColor: theme.colors.neutral400,
        },
        '&$isDisabled': {
            '& $Text': {
                color: theme.colors.neutral600,
            },
        },
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    Text: {
        color: theme.colors.neutral700,
        transition: 'color 0.15s ease',
    },
    small: {
        height: 24,
        padding: '3px 8px',
    },
    large: {
        height: 32,
        padding: '7px 8px',
    },
    avatar: {
        marginRight: 4,
    },
    clickable: {
        cursor: 'pointer',
    },
    isDisabled: {
        cursor: 'not-allowed',
        '& $icon': {
            cursor: 'unset',
        },
        '& $icon path, & $icon rect': {
            fill: theme.colors.neutral600,
        },
    },
    isReadOnly: {
        '& $icon': {
            cursor: 'unset',
        },
        '& $icon path, & $icon rect': {
            fill: theme.colors.neutral600,
        },
    },
    isActive: {},
    icons: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 8,
    },
    icon: {
        cursor: 'pointer',
        '& path, & rect': {
            fill: theme.colors.neutral700,
            transition: 'all 0.15s ease',
        },
    },
    iconLeft: {
        marginRight: 4,
    },
    iconFolded: {
        transform: 'rotate(-90deg)',
    },
    iconDropdown: {
        margin: '0 -8px',
        transition: 'transform 0.15s ease',
    },
    dividerIcon: {
        padding: '0 2px',
        boxSizing: 'content-box',
    },
    isFilled: {
        backgroundColor: theme.colors.blue100,

        '& $Text': {
            color: theme.colors.blue500,
        },
        '& $icon path, & $icon rect': {
            fill: theme.colors.blue500,
        },
        '&$clickable:hover': {
            backgroundColor: theme.colors.blue200,
            '& $Text': {
                color: theme.colors.blue500,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.blue500,
            },
        },
        '&$isActive': {
            backgroundColor: theme.colors.blue400,
            '& $Text': {
                color: theme.colors.neutralBase,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.neutralBase,
            },
        },
        '&$isDisabled': {
            backgroundColor: theme.colors.blue100,
            '& $Text': {
                color: theme.colors.blue200,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.blue200,
            },
        },
        '&$isReadOnly': {
            backgroundColor: theme.colors.blue100,
            '& $Text': {
                color: theme.colors.blue400,
            },

            '& $icon path, & $icon rect': {
                fill: theme.colors.blue400,
            },
        },
    },
    isOutlined: {
        border: '1px solid',
        borderColor: theme.colors.neutral400,
        transition: 'border-color 0.15s ease-in-out',
        '&$clickable:hover': {
            borderColor: theme.colors.neutral300,
        },
    },
    isOutlinedColor: {
        border: '1px solid',
        borderColor: theme.colors.blue400,
        transition: 'border-color 0.15s ease',
        '& $Text': {
            color: theme.colors.blue500,
        },
        '& $icon path, & $icon rect': {
            fill: theme.colors.blue500,
        },
        '&$clickable:hover': {
            borderColor: 'transparent',
            backgroundColor: theme.colors.blue200,
            '& $Text': {
                color: theme.colors.blue500,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.blue500,
            },
        },
        '&$isActive': {
            borderColor: 'transparent',
            backgroundColor: theme.colors.blue200,
            '& $Text': {
                color: theme.colors.blue500,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.blue500,
            },
        },
        '&$isDisabled': {
            '& $Text': {
                color: theme.colors.blue200,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.blue200,
            },
        },
        '&$isReadOnly': {
            '& $Text': {
                color: theme.colors.blue200,
            },

            '& $icon path, & $icon rect': {
                fill: theme.colors.blue200,
            },
        },
    },
});
