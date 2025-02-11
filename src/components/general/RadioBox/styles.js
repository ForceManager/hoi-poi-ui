export default (theme) => ({
    root: {
        display: 'flex',
        borderRadius: 8,
        border: `1px solid ${theme.colors.grey[100]}`,
        padding: 24,
        width: '100%',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxSizing: 'border-box',
        transition: 'height .3s ease',
        backgroundColor: theme.colors.background.white,
    },
    checked: {
        border: `1px solid ${theme.colors.actionMajor[500]}`,
        backgroundColor: theme.colors.actionMajor[25],
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
        paddingTop: 5,
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
