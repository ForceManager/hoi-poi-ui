export default (theme) => ({
    root: {
        display: 'inline-block',
        cursor: 'pointer !important',
        padding: 0,
        color: theme.colors.blue500,
        transition: 'color .1s ease-in-out',
        border: 'none',
        outline: 'none',
        background: 'transparent',
        textDecoration: 'none',
        '&:hover': {
            color: theme.colors.blue600,
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
});
