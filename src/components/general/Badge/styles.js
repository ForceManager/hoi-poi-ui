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
        fontSize: 9,
    },
    // Types
    error: {
        backgroundColor: theme.colors.redLight,
        '& $Text': {
            color: theme.colors.text.red,
        },
    },
    default: {
        backgroundColor: theme.colors.greyLight,
        '& $Text': {
            color: theme.colors.text.greySoft,
        },
    },
    info: {
        backgroundColor: theme.colors.secondaryLight,
        '& $Text': {
            color: theme.colors.text.secondary,
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
