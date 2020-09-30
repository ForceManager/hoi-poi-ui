export default (theme) => ({
    root: {
        outline: 'none',
    },
    Label: {
        width: 153,
        marginRight: 17,
        padding: '0 0 8px 0',
    },
    info: {
        ...theme.typography.caption,
        position: 'absolute',
        lineHeight: '20px',
        bottom: -21,
        color: theme.colors.neutral600,
    },
    error: {
        ...theme.typography.caption,
        position: 'absolute',
        lineHeight: '20px',
        bottom: -21,
        color: theme.colors.red500,
    },
    formControl: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: 290,
        padding: '0 10px',
        lineHeight: 0,
        borderRadius: '4px',
        border: '1px solid transparent',
        backgroundColor: theme.colors.neutral200,
        transition: 'all 0.15s ease',
    },
    input: {
        ...theme.typography.body,
        background: 'transparent',
        color: theme.colors.neutral900,
        width: '100%',
        lineHeight: '20px',
        height: '40px',
        alignItems: 'center',
        boxSizing: 'border-box',
        flexGrow: 1,
        outline: 'none',
        border: 'none',
        '&::placeholder': {
            color: theme.colors.neutral600,
        },
    },
    withMessage: {
        paddingBottom: '30px !important',
    },
    withTwoMessage: {
        paddingBottom: '45px !important',
        '& $error': {
            bottom: -39,
        },
    },
    errored: {
        '& $formControl': {
            backgroundColor: theme.colors.neutralBase,
            border: `1px solid ${theme.colors.red500}`,
        },
    },
    isReadOnly: {
        '& $formControl': {
            border: `1px solid ${theme.colors.neutral500}`,
            backgroundColor: theme.colors.neutralBase,
            color: theme.colors.neutral500,
            '&::placeholder': {
                color: theme.colors.neutral500,
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
    },
    clear: {},
    copy: {},
    focused: {
        '& $formControl': {
            backgroundColor: theme.colors.neutralBase,
            border: `1px solid ${theme.colors.orange500}`,
        },
    },
    vertical: {
        display: 'block',
        padding: '15px 0 10px 0',
        marginLeft: '0 !important',
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
            marginLeft: '5px',
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
