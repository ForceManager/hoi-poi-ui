export default (theme) => ({
    root: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.semantic.notification600,
        position: 'relative',
    },
    Text: {
        padding: '0px 8px',
        verticalAlign: 'middle',
        color: theme.colors.primary.white,
    },
    medium: {
        height: 24,
        minWidth: 24,
        borderRadius: 12,
        '& $Text': {
            lineHeight: '24px',
        },
    },
    small: {
        height: 18,
        minWidth: 18,
        borderRadius: 9,
        '& $Text': {
            padding: '0px 4px',
            lineHeight: '18px',
        },
    },
    tiny: {
        height: 16,
        minWidth: 16,
        borderRadius: 8,
        '& $Text': {
            padding: '0px 4px',
            lineHeight: '16px',
        },
    },
});
