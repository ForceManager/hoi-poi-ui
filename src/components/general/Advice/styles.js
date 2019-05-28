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
    Text: {
        display: 'flex',
    },
    // Types
    error: {
        backgroundColor: theme.colors.redLight,
        '& $text': {
            color: theme.colors.text.red,
        },
    },
    info: {
        backgroundColor: theme.colors.secondaryLight,
        '& $text': {
            color: theme.colors.text.secondary,
        },
    },
    success: {
        backgroundColor: theme.colors.greenLight,
        '& $text': {
            color: theme.colors.text.green,
        },
    },
    warning: {
        backgroundColor: theme.colors.yellowLight,
        '& $text': {
            color: theme.colors.text.yellow,
        },
    },
});
