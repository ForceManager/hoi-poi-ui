const typographies = [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'subtitle1',
    'subtitle',
    'body1',
    'body',
    'button',
    'caption',
    'captionMedium',
    'badges',
    'overline',
];

export default (theme) => ({
    root: {
        display: 'inline-block',
        cursor: 'pointer !important',
        padding: 0,
        color: theme.colors.semantic.info500,
        transition: 'color .1s ease-in-out',
        border: 'none',
        outline: 'none',
        background: theme.colors.transparent,
        textDecoration: 'none',
        '&:hover': {
            color: theme.colors.semantic.info500,
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
    ...typographies.reduce((obj, key) => ({ ...obj, [key]: { ...theme.typography[key] } }), {}),
    bold: { fontWeight: 500 },
    truncated: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        display: 'inherit',
    },
    underline: {
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    primary: {
        color: theme.colors.actionMajor[500],
        '&:hover': {
            color: theme.colors.actionMajor[600],
        },
    },
});
