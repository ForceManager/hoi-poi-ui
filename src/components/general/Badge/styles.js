export default (theme) => ({
    root: {
        ...theme.typography.smallText,
        lineHeight: '20px',
        color: theme.colors.text.black,
        borderRadius: '3px',
        display: 'inline-block',
        padding: '0 10px',
    },
    text: {
        fontWeight: 400,
        textTransform: 'uppercase',
    },
    // Types
    error: {
        backgroundColor: theme.colors.softRaspBerry,
        color: theme.colors.text.raspBerry,
    },
    info: {
        backgroundColor: theme.colors.snow,
        color: theme.colors.text.stone,
    },
    success: {
        backgroundColor: theme.colors.softKiwi,
        color: theme.colors.text.kiwi,
    },
});
