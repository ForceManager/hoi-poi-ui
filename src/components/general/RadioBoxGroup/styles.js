export default (theme) => ({
    root: {
        display: 'flex',
        borderRadius: 8,
        border: `1px solid ${theme.colors.neutral400}`,
        padding: 24,
        width: '100%',
        justifyContent: 'space-between',
        marginBottom: 20,
        cursor: 'pointer',
    },
    checked: {
        border: `1px solid ${theme.colors.orange500}`,
        backgroundColor: theme.colors.orange100,
    },
    textContainer: {},
    icon: {
        height: 36,
        width: 36,
    },
    title: {},
    text: {},
    radio: {
        display: 'flex',
        alignItems: 'center',
    },
});
