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
        color: theme.colors.red,
    },
    formControl: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: 290,
        lineHeight: 0,
    },
    switchinput: {
        width: '100%',
        lineHeight: '20px',
        flexGrow: 1,
        outline: 'none',
        border: 'none',
    },
    errored: {
        paddingBottom: '20px !important',
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
});
