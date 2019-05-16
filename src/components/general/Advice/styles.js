export default (theme) => ({
    root: {
        ...theme.typography.defaultText,
        color: theme.colors.text.black,
        borderRadius: '2px',
        display: 'flex',
        padding: '15px 20px',
    },
    icon: {
        lineHeight: '0',
        display: 'flex',
        marginRight: 10,
    },
    text: {
        fontWeight: 400,
        display: 'flex',
        lineHeight: 1.54,
    },
    // Types
    error: {
        backgroundColor: theme.colors.redLight,
        color: theme.colors.text.red,
    },
    info: {
        backgroundColor: theme.colors.secundaryLight,
        color: theme.colors.text.secundary,
    },
    success: {
        backgroundColor: theme.colors.greenLight,
        color: theme.colors.text.green,
    },
    warning: {
        backgroundColor: theme.colors.yellowLight,
        color: theme.colors.text.yellow,
    },
});
