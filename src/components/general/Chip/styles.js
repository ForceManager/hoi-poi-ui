export default (theme) => ({
    root: {
        display: 'inline-block',
        borderRadius: 4,
        boxSizing: 'border-box',
        transition: 'background-color 0.15s ease',
        '&$clickable:hover': {
            backgroundColor: theme.colors.actionMinor[50],
            '& $icon path, & $icon rect': {
                fill: theme.colors.actionMinor[550],
            },
        },
        '&$isActive': {
            backgroundColor: theme.colors.actionMinor[100],
        },
        '&$isDisabled': {
            '& $Text': {
                color: theme.colors.textLight.disabled,
            },
        },
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    Text: {
        color: theme.colors.actionMinor[550],
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
            fill: theme.colors.textLight.disabled,
        },
    },
    isReadOnly: {
        '& $icon': {
            cursor: 'unset',
        },
        '& $icon path, & $icon rect': {
            fill: theme.colors.actionMinor[550],
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
            fill: theme.colors.actionMinor[550],
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
        backgroundColor: theme.colors.actionMinor[100],

        '& $Text': {
            color: theme.colors.actionMinor[550],
        },
        '& $icon path, & $icon rect': {
            fill: theme.colors.actionMinor[550],
        },
        '&$clickable:hover': {
            backgroundColor: theme.colors.actionMinor[150],
            '& $Text': {
                color: theme.colors.actionMinor[550],
            },
            '& $icon path, & $icon rect': {
                color: theme.colors.actionMinor[550],
            },
        },
        '&$isActive': {
            backgroundColor: theme.colors.actionMinor[500],
            '& $Text': {
                color: theme.colors.actionMinor[25],
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.actionMinor[25],
            },
        },
        '&$isDisabled': {
            backgroundColor: theme.colors.actionMinor[25],
            '& $Text': {
                color: theme.colors.textLight.disabled,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.textLight.disabled,
            },
        },
        '&$isReadOnly': {
            backgroundColor: theme.colors.actionMinor[100],

            '& $Text': {
                color: theme.colors.actionMinor[550],
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.actionMinor[550],
            },
        },
    },
    isOutlined: {
        border: '1px solid',
        borderColor: theme.colors.actionMinor[550],
        transition: 'border-color 0.15s ease-in-out',
        '&$clickable:hover': {
            borderColor: theme.colors.actionMinor[550],
        },
        '&$isDisabled': {
            borderColor: theme.colors.textLight.disabled,
            '& $Text': {
                color: theme.colors.textLight.disabled,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.textLight.disabled,
            },
        },
    },
    isOutlinedColor: {
        border: '1px solid',
        borderColor: theme.colors.actionMinor[550],
        transition: 'border-color 0.15s ease-in-out',
        '&$clickable:hover': {
            borderColor: theme.colors.actionMinor[550],
        },
        '&$isDisabled': {
            borderColor: theme.colors.textLight.disabled,
            '& $Text': {
                color: theme.colors.textLight.disabled,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.textLight.disabled,
            },
        },
    },
});
