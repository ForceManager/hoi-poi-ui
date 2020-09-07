export default (theme) => ({
    root: {},
    button: {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'inline-block',
        padding: '5px 20px',
        textAlign: 'center',
        borderRadius: '100px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer !important',
        background: 'none',
        fontWeight: 500,
        transition: 'opacity .2s ease-in-out',
        ...theme.typography.button,
        fontSize: 12,
        lineHeight: '16px',
        letterSpacing: '0.4px',
        color: theme.colors.placeholdersHover,
        '&:hover': {
            color: theme.colors.placeholders,
        },
        '&:active': {},
        '& *': {
            cursor: 'pointer',
        },
    },
    active: {
        color: theme.colors.black,
    },
});
