export default (theme) => ({
    root: {
        display: 'inline-block',
        textAlign: 'center',
        backgroundColor: theme.colors.orange500,
        color: theme.colors.neutralBase,
        position: 'relative',
    },
    Text: {
        padding: '0px 8px',
        verticalAlign: 'middle',
    },
    medium: {
        height: 24,
        minWidth: 24,
        borderRadius: 24,
        '& $Text': {
            lineHeight: '24px',
        },
    },
    small: {
        height: 18,
        minWidth: 18,
        borderRadius: 18,
        '& $Text': {
            lineHeight: '18px',
        },
    },
});