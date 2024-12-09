export default (theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    Text: {
        paddingRight: 5,
        ...theme.typography.body,
        color: theme.colors.textLight.primary,
    },
    info: {
        display: 'block',
    },
    icon: {
        display: 'block',
        width: 14,
        height: 14,
        cursor: 'pointer',
        '& svg': {
            width: 14,
            height: 14,
            marginTop: -1,
        },
        '& path': {
            fill: theme.colors.grey[500],
        },
    },
});
