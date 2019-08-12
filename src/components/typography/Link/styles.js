export default (theme) => ({
    root: {
        display: 'inline-block',
        cursor: 'pointer !important',
        lineHeight: '20px',
        padding: 0,
        color: theme.colors.link,
        transition: 'color .1s ease-in-out',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        textDecoration: 'none',
        '&:active': {
            color: theme.colors.link,
        },
        '&:hover': {
            color: theme.colors.linkDark,
        },
        '& *': {
            cursor: 'pointer',
        },
    },
    isDisabled: {
        opacity: 0.5,
        cursor: 'not-allowed !important',
        '&:hover': {
            backgroundPosition: '0 0 !important',
        },
        '& *': {
            cursor: 'not-allowed',
        },
    },
    big: { ...theme.typography.bigText },
    medium: { ...theme.typography.defaultText },
    small: { ...theme.typography.smallText },
});
