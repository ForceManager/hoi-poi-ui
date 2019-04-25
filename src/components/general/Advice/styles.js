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
        backgroundColor: theme.colors.softRaspBerry,
        color: theme.colors.text.raspBerry,
    },
    info: {
        backgroundColor: theme.colors.softIndonesia,
        color: theme.colors.text.indonesia,
    },
    success: {
        backgroundColor: theme.colors.softKiwi,
        color: theme.colors.text.kiwi,
    },
    warning: {
        backgroundColor: theme.colors.softBanana,
        color: theme.colors.text.banana,
    },
});
