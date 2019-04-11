export default (theme) => ({
    root: {},
    Label: {
        width: 153,
        marginRight: 17,
        padding: '6px 0',
    },
    error: {
        ...theme.typography.defaultText,
        position: 'absolute',
        bottom: -15,
        color: theme.colors.danger,
    },
    formControl: {
        isolate: true,
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
    input: {
        isolate: true,
        ...theme.typography.defaultText,
        color: theme.colors.softGrey,
        width: '100%',
        padding: '6px 0',
        flexGrow: 1,
        '&::placeholder': {
            color: theme.colors.disabledGrey,
        },
    },
    errored: {
        paddingBottom: '20px !important',
        '& $formControl': {
            '&::before': {
                borderBottom: `1px solid ${theme.colors.danger}`,
            },
            '&::after': {
                borderBottom: `1px solid ${theme.colors.danger}`,
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
        '& $postCloseComponent': {
            '& span': {
                cursor: 'default',
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
        padding: '12px 0 11px 0',
        '& $formControl': {
            marginTop: 10,
        },
    },
    horizontal: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 0 11px 0',
        '& $error': {},
    },
    isFullWidth: {
        '& $formControl, & $inputControl': {
            width: '100%',
        },
    },
    preComponent: {
        marginRight: 5,
    },
    postComponent: {
        marginLeft: 5,
    },
    postCloseComponent: {
        '& span': {
            cursor: 'pointer',
            width: 10,
            height: 10,
        },
    },
});
