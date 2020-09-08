export default (theme) => ({
    root: {
        display: 'inline-block',
        border: `1px solid ${theme.colors.neutral400}`,
        borderRadius: 4,
    },
    button: {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'inline-block',
        margin: 1,
        padding: '2px 20px',
        textAlign: 'center',
        border: 'none',
        outline: 'none',
        cursor: 'pointer !important',
        background: 'none',
        fontWeight: 500,
        ...theme.typography.button,
        fontSize: 12,
        lineHeight: '16px',
        letterSpacing: '0.4px',
        color: theme.colors.neutral700,
        transition: 'background .15s ease-in-out, border-radius .15s ease-in-out',
        borderLeft: `1px solid transparent`,
        '&:hover': {
            color: theme.colors.neutral900,
        },
        '&:active': {},
        '& *': {
            cursor: 'pointer',
        },
    },
    active: {
        color: theme.colors.neutral900,
        borderRadius: '4px',
        backgroundColor: theme.colors.neutral400,
    },
    inactive: {
        padding: '0px 20px',
        margin: '2px 1px',
        borderLeft: `1px solid ${theme.colors.neutral400}`,
    },
    withoutBorder: {
        borderLeftColor: 'transparent',
    },
});
