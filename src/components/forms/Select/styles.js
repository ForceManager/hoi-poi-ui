export default (theme) => ({
    root: {},
    Label: {
        width: 153,
        marginRight: 17,
        padding: '0 0 5px 0',
    },
    error: {
        ...theme.typography.smallText,
        position: 'absolute',
        lineHeight: '20px',
        bottom: -21,
        color: theme.colors.red,
    },
    formControl: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: 290,
        lineHeight: 0,
        '&::before': {
            borderBottom: `1px solid ${theme.colors.lines}`,
            left: 0,
            right: 0,
            bottom: 0,
            content: '""',
            position: 'absolute',
            transition: 'border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
            pointerEvents: 'none',
        },
        '&::after': {
            left: 0,
            right: 0,
            bottom: 0,
            content: '""',
            position: 'absolute',
            transform: 'scaleX(0)',
            transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
            borderBottom: `1px solid ${theme.colors.primary}`,
            pointerEvents: 'none',
        },
    },
    errored: {
        paddingBottom: '30px !important',
        '& $formControl': {
            '&::before': {
                borderBottom: `1px solid ${theme.colors.red}`,
            },
            '&::after': {
                borderBottom: `1px solid ${theme.colors.red}`,
            },
        },
    },
    isReadOnly: {
        '& $formControl': {
            '&::before': {
                borderBottom: `1px solid ${theme.colors.lines}`,
            },
            '&::after': {
                borderBottom: `1px solid ${theme.colors.lines}`,
            },
        },
        '&$focused': {
            '& $formControl::after': {
                transform: 'scaleX(0)',
            },
        },
    },
    focused: {
        '& $formControl::after': {
            transform: 'scaleX(1)',
        },
    },
    vertical: {
        display: 'block',
        padding: '15px 0 10px 0',
        '& $formControl': {
            marginTop: 10,
        },
    },
    horizontal: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px 0 10px 0',
        '& $error': {},
    },
    isFullWidth: {
        '& $formControl': {
            width: '100%',
        },
    },
    select: {
        width: '100%',
        flexGrow: 1,
        '& .hoi-poi-select__control': {
            minHeight: 'auto',
            background: 'transparent',
            border: 'none !important',
            boxShadow: 'none',
            '& div': {
                margin: 0,
                padding: 0,
            },
        },
        '& .hoi-poi-select__value-container': {
            padding: 0,
        },
        '& .hoi-poi-select__placeholder': {
            color: theme.colors.disabledGrey,
        },
        '& .hoi-poi-select__input, & .hoi-poi-select__single-value': {
            color: theme.colors.greySoft,
        },
        '& .hoi-poi-select__input': {
            ...theme.typography.defaultText,
        },
        '& .hoi-poi-select__input input': {
            lineHeight: '20px',
            padding: '0 0 4px 0 !important',
            ...theme.typography.defaultText,
        },
        '& .hoi-poi-select__placeholder, & .hoi-poi-select__single-value': {
            margin: 0,
            padding: '0 0 5px 0 !important',
            lineHeight: '20px',
            ...theme.typography.defaultText,
        },
        '& .hoi-poi-select__indicators': {
            padding: '0 0 5px 0 !important',
            '& .hoi-poi-select__indicator-separator': {
                display: 'none',
                margin: '5px 10px',
            },
            '& .hoi-poi-select__clear-indicator span': {
                width: 8,
                height: 8,
            },
            '& .hoi-poi-select__dropdown-indicator span': {
                width: 10,
                height: 10,
            },
            '& svg': {
                cursor: 'pointer',
            },
        },
        '& .hoi-poi-select__value-container--has-value + .hoi-poi-select__indicators': {
            '& .hoi-poi-select__indicator-separator': {
                display: 'block',
            },
        },
    },
    menuList: {
        borderRadius: 0,
        paddingTop: '0 !important',
        paddingBottom: '0 !important',
        overflow: 'hidden',
        '& .hoi-poi-select__group': {
            padding: '10px 0',
            borderTop: '1px solid',
            borderTopColor: theme.colors.lines,
            '&:first-child': {
                paddingTop: 0,
                borderTop: 0,
            },
            '&:last-child': {
                paddingBottom: 0,
            },
        },
        '& .hoi-poi-select__group-heading': {
            margin: 0,
            padding: 0,
            textTransform: 'initial',
        },
        '& .hoi-poi-select__option': {
            ...theme.typography.defaultText,
            color: theme.colors.grey,
            cursor: 'pointer',
            outline: 'none',
            padding: '10px 20px',
            '&.hoi-poi-select__option--is-disabled': {
                color: theme.colors.disabledGrey,
                backgroundColor: 'transparent !important',
                cursor: 'default',
                '&:hover, &:active': {
                    backgroundColor: 'transparent !important',
                },
            },
            '&:hover, &:active': {
                backgroundColor: `${theme.colors.primaryLight} !important`,
            },
        },
        '& .hoi-poi-select__option--is-focused, & .hoi-poi-select__option--is-selected': {
            backgroundColor: `${theme.colors.primaryLight} !important`,
        },
        '& .hoi-poi-select__menu-notice--no-options': {
            ...theme.typography.defaultText,
            color: theme.colors.grey,
            padding: '10px 12px',
        },
    },
    menu: {
        borderRadius: '0 !important',
        boxShadow: `${theme.effects.boxShadow} !important`,
    },
    group: {
        ...theme.typography.defaultText,
        color: theme.colors.text.black,
        outline: 'none',
        padding: '10px 20px',
    },
    action: {
        borderTop: '1px solid',
        borderTopColor: theme.colors.lines,
        '& .hoi-poi-select__action': {
            width: '100%',
        },
        '& button': {
            padding: '15px 20px',
        },
    },
});
