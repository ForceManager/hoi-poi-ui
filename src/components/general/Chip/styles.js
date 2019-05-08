export default (theme) => ({
    root: {
        ...theme.typography.smallText,
        lineHeight: '20px',
        borderRadius: '3px',
        display: 'inline-block',
        padding: '0',
        height: '20px',
        backgroundColor: theme.colors.secondaryGray,
        color: theme.colors.text.stone,
    },

    wrapper: {
        display: 'inline-flex',
        alignItems: 'center',
    },

    text: {
        display: 'flex',
        fontSize: '13px',
        lineHeight: '20px',
        letterSpacing: '0.5px',
        padding: '0 5px',
        color: theme.colors.text.fmDefaultIcons,
    },

    shrinked: {
        fontSize: '11px',
        height: '20px',
        width: '20px',
        lineHeight: '20px',
        letterSpacing: '0.5px',
        textAlign: 'center',
        color: theme.colors.text.fmDefaultIcons,
    },

    close: {
        cursor: 'pointer',
        padding: '0 5px',
    },

    picture: {
        height: '20px',
        weight: '20px',
        borderTopLeftRadius: '3px',
        borderBottomLeftRadius: '3px',
    },

    shrinkedPicture: {
        height: '20px',
        weight: '20px',
        borderRadius: '3px',
    },
});
