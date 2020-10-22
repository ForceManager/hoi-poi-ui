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
});
