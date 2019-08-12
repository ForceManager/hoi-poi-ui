export default (theme) => ({
    root: {
        ...theme.typography.smallText,
        lineHeight: '20px',
        color: theme.colors.text.black,
        borderRadius: '3px',
        display: 'inline-block',
        padding: '0 10px',
        minWidth: 70,
        textAlign: 'center',
    },
    Text: {
        lineHeight: '20px',
        fontWeight: 500,
        textTransform: 'uppercase',
    },
    // Types
    error: {
        backgroundColor: theme.colors.redLight,
        '& $Text': {
            color: theme.colors.text.red,
        },
    },
    info: {
        backgroundColor: theme.colors.greyLight,
        '& $Text': {
            color: theme.colors.text.greySoft,
        },
    },
    success: {
        backgroundColor: theme.colors.greenLight,
        '& $Text': {
            color: theme.colors.text.green,
        },
    },
    warn: {
        backgroundColor: theme.colors.yellowLight,
        '& $Text': {
            color: theme.colors.text.yellow,
        },
    },
});
