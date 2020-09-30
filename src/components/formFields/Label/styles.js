export default (theme) => ({
    root: {
        ...theme.typography.defaultText,
        lineHeight: '20px',
        color: theme.colors.text.greySoft,
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
