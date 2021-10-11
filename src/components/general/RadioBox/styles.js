export default (theme) => ({
    root: {
        display: 'flex',
        borderRadius: 8,
        border: `1px solid ${theme.colors.neutral400}`,
        padding: 24,
        width: '100%',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxSizing: 'border-box',
        transition: 'height .3s ease',
    },
    checked: {
        border: `1px solid ${theme.colors.orange500}`,
        backgroundColor: theme.colors.orange100,
    },
    content: {
        flex: 1,
    },
    children: {
        marginTop: 10,
    },
    icon: {
        height: 36,
        width: 36,
        marginRight: 16,
        '& svg': {
            height: 36,
            width: 36,
        },
    },
    title: {},
    text: {},
    radio: {
        marginTop: 10,
        marginLeft: 16,
    },
    disabled: {
        opacity: 0.5,
        cursor: 'not-allowed',
    },
});
