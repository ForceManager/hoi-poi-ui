export default (theme) => ({
    root: {},
    hiddenInputLabel: {
        color: theme.colors.greySoft,
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
