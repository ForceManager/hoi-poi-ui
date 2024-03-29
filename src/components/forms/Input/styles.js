export default (theme) => ({
    root: {
        outline: 'none',
    },
    Label: {
        width: 153,
        marginRight: 17,
        padding: '0 0 5px 0',
    },
    info: {
        ...theme.typography.smallText,
        position: 'absolute',
        lineHeight: '20px',
        bottom: -21,
        color: theme.colors.greySoft,
    },
    error: {
        ...theme.typography.smallText,
        position: 'absolute',
        lineHeight: '20px',
        bottom: -21,
        color: theme.colors.red,
    },
    bulkEdit: {
        display: 'flex',
        justifyContent: 'flex-start',
        padding: '0 0 5px 0',
        color: theme.colors.disabledGrey,
    },
    bulkCancel: {
        position: 'absolute',
        lineHeight: '20px',
        bottom: -30,
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
    input: {
        ...theme.typography.defaultText,
        background: 'transparent',
        color: theme.colors.greySoft,
        width: '100%',
        lineHeight: '20px',
        padding: '0 0 5px 0',
        flexGrow: 1,
        outline: 'none',
        border: 'none',
        '&::placeholder': {
            color: theme.colors.disabledGrey,
        },
    },
    withMessage: {
        paddingBottom: '30px !important',
    },
    withTwoMessage: {
        paddingBottom: '45px !important',
        '& $bulkCancel': {
            bottom: -39,
        },
    },
    withBulk: {
        paddingBottom: '39px !important',
    },
    withMessageBulk: {
        paddingBottom: '54px !important',
        '& $bulkCancel': {
            bottom: -49,
        },
    },
    withTwoMessageBulk: {
        paddingBottom: '69px !important',
        '& $bulkCancel': {
            bottom: -66,
        },
    },
    errored: {
        '& $formControl': {
            '&::before': {
                borderBottom: `1px solid ${theme.colors.red} !important`,
            },
            '&::after': {
                borderBottom: `1px solid ${theme.colors.red} !important`,
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
    isReadAndDuplicable: {
        '& $postCloseComponent': {
            display: 'inline-flex',
        },
    },
    isClickable: {
        cursor: 'pointer',
        marginRight: '5px',
    },
    clear: {},
    copy: {},
    focused: {
        '& $formControl::after': {
            transform: 'scaleX(1)',
        },
    },
    vertical: {
        display: 'block',
        padding: '15px 0 10px 0',
        marginLeft: '0 !important',
        '& $formControl': {
            marginTop: 10,
        },
        '& $Label': {
            width: '100%',
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
            flex: 1,
        },
        '&$vertical $Label': {
            width: '100%',
        },
    },
    preComponent: {
        marginRight: 5,
        marginBottom: 3,
    },
    postComponent: {
        marginLeft: 5,
        marginBottom: 3,
        display: 'flex',
        alignItems: 'center',
    },
    postCloseComponent: {
        '& span': {
            width: 8,
            height: 8,
        },
    },
    custom: {
        '& $formControl': {
            '&::before': {
                borderBottom: 'none',
            },
        },
    },
});
