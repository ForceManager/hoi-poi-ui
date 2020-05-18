export default (theme) => ({
    root: {
        outline: 'none',
    },
    Label: {
        width: 153,
        marginRight: 17,
        padding: '15px 0 5px 0',
        alignItems: 'start',
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
    formControl: {
        position: 'relative',
        display: 'flex',
        alignItems: 'start',
        lineHeight: 0,
        width: 777,
        height: 190,
        backgroundColor: theme.colors.tableHover,
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
    textArea: {
        ...theme.typography.defaultText,
        ...theme.utils.scrollbar,
        background: 'transparent',
        color: theme.colors.black,
        width: '90%',
        height: '80%',
        lineHeight: '20px',
        padding: '16px 7px 12px 12px',
        flexGrow: 1,
        resize: 'none',
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
        '& $error': {
            bottom: -39,
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
    isClickable: {
        cursor: 'pointer',
        marginRight: '5px',
    },
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
        padding: '15px 0 10px 0',
        '& $error': {},
    },
    preComponent: {
        marginRight: 5,
        marginBottom: 3,
    },
    postComponent: {
        margin: '22px 7px 12px 5px',
        display: 'flex',
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
