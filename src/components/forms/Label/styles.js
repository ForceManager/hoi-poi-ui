export default (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    Text: {
        paddingRight: 5,
        ...theme.typography.body,
        lineHeight: '20px',
        color: theme.colors.neutral900,
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
