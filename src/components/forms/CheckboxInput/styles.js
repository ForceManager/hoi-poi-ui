export default (theme) => ({
    root: {
        outline: 'none',
    },
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
    },
    checkbox: {
        width: '100%',
        lineHeight: '20px',
        flexGrow: 1,
        outline: 'none',
        border: 'none',
    },
    errored: {
        paddingBottom: '30px !important',
        '& $formControl': {
            '&::before': {
                borderBottom: `1px solid ${theme.colors.red} !important`,
            },
            '&::after': {
                borderBottom: `1px solid ${theme.colors.red} !important`,
            },
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
});
