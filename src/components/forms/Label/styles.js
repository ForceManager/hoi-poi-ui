export default (theme) => ({
    root: {
        ...theme.typography.defaultText,
        lineHeight: '20px',
        fontWeight: 500,
        color: theme.colors.text.black,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    Text: {
        paddingRight: 5,
    },
    info: {
        display: 'block',
        width: 10,
    },
    icon: {
        display: 'block',
        width: 10,
        height: 10,
        cursor: 'pointer',
        '& path': {
            fill: theme.colors.disabledGrey,
        },
    },
});
