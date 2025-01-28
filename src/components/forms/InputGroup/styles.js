export default (theme) => ({
    root: {},
    hiddenInputLabel: {
        color: theme.colors.textLight.secondary,
        fontWeight: 400,
    },
    formControl: {
        textAlign: 'right',
    },
    inputsControl: {
        display: 'block',
    },
    isFullWidth: {
        '& $formControl': {
            width: '100% !important',
            flex: 1,
        },
    },
    vertical: {
        '& $formControl': {
            width: '290px',
        },
    },
    horizontal: {
        '& $formControl': {
            width: '460px',
        },
    },
    hidden: {
        display: 'none',
    },
});
