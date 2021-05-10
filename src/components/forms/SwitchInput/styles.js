export default (theme) => ({
    root: {},
    switchinput: {
        width: '100%',
        textAlign: 'end',
        lineHeight: '20px',
        flexGrow: 1,
        outline: 'none',
        border: 'none',
    },
    vertical: {
        '& $switchinput': {
            textAlign: 'start',
        },
    },
    isFullWidth: {
        '& $Label': {
            width: 'auto',
            flex: 1,
            flexShrink: 'initial',
        },
        '& $formControl': {
            flex: 0,
        },
    },
    Label: {},
    formControl: {},
});
