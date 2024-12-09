export default (theme) => ({
    root: {
        display: 'inline-block',
        borderRadius: 4,
        boxSizing: 'border-box',
        transition: 'background-color 0.15s ease',
        '&$clickable:hover': {
            backgroundColor: theme.colors.grey[100],
        },
        '&$isActive': {
            backgroundColor: theme.colors.grey[100],
        },
        '&$isDisabled': {
            '& $Text': {
                color: theme.colors.grey[500],
            },
        },
    },
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
    },
    Text: {
        color: theme.colors.textLight.secondary,
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
            fill: theme.colors.grey[500],
        },
    },
    isReadOnly: {
        '& $icon': {
            cursor: 'unset',
        },
        '& $icon path, & $icon rect': {
            fill: theme.colors.grey[500],
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
            fill: theme.colors.textLight.secondary,
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
        backgroundColor: theme.colors.semantic.infoCustom50,

        '& $Text': {
            color: theme.colors.semantic.info500,
        },
        '& $icon path, & $icon rect': {
            fill: theme.colors.semantic.info500,
        },
        '&$clickable:hover': {
            backgroundColor: theme.colors.semantic.infoCustom100,
            '& $Text': {
                color: theme.colors.semantic.info500,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.semantic.info500,
            },
        },
        '&$isActive': {
            backgroundColor: theme.colors.semantic.info400,
            '& $Text': {
                color: theme.colors.primary.white,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.primary.white,
            },
        },
        '&$isDisabled': {
            backgroundColor: theme.colors.semantic.infoCustom50,
            '& $Text': {
                color: theme.colors.semantic.infoCustom100,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.semantic.infoCustom100,
            },
        },
        '&$isReadOnly': {
            backgroundColor: theme.colors.semantic.infoCustom50,
            '& $Text': {
                color: theme.colors.semantic.info400,
            },

            '& $icon path, & $icon rect': {
                fill: theme.colors.semantic.info400,
            },
        },
    },
    isOutlined: {
        border: '1px solid',
        borderColor: theme.colors.grey[100],
        transition: 'border-color 0.15s ease-in-out',
        '&$clickable:hover': {
            borderColor: theme.colors.grey[100],
        },
    },
    isOutlinedColor: {
        border: '1px solid',
        borderColor: theme.colors.semantic.info400,
        transition: 'border-color 0.15s ease',
        '& $Text': {
            color: theme.colors.semantic.info500,
        },
        '& $icon path, & $icon rect': {
            fill: theme.colors.semantic.info500,
        },
        '&$clickable:hover': {
            borderColor: 'transparent',
            backgroundColor: theme.colors.semantic.infoCustom100,
            '& $Text': {
                color: theme.colors.semantic.info500,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.semantic.info500,
            },
        },
        '&$isActive': {
            borderColor: 'transparent',
            backgroundColor: theme.colors.semantic.infoCustom100,
            '& $Text': {
                color: theme.colors.semantic.info500,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.semantic.info500,
            },
        },
        '&$isDisabled': {
            '& $Text': {
                color: theme.colors.semantic.infoCustom100,
            },
            '& $icon path, & $icon rect': {
                fill: theme.colors.semantic.infoCustom100,
            },
        },
        '&$isReadOnly': {
            '& $Text': {
                color: theme.colors.semantic.infoCustom100,
            },

            '& $icon path, & $icon rect': {
                fill: theme.colors.semantic.infoCustom100,
            },
        },
    },
});
