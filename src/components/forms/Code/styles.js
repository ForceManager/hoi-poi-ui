export default (theme) => ({
    root: {
        outline: 'none',
        '& .ace_editor': {
            width: '100%',
        },
    },
    Label: {
        width: 150,
        marginRight: 17,
        padding: '0 0 8px 0',
        flexShrink: 0,
    },
    info: {
        ...theme.typography.smallText,
        position: 'absolute',
        lineHeight: '20px',
        bottom: -21,
        color: theme.colors.textLight.secondary,
    },
    error: {
        ...theme.typography.smallText,
        position: 'absolute',
        lineHeight: '20px',
        bottom: -21,
        color: theme.colors.semantic.negative500,
    },
    formControl: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 320,
        lineHeight: 0,
    },
    isReadOnly: {},
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
        alignItems: 'flex-start',
        padding: '15px 0 10px 0',
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
    focused: {},
});
