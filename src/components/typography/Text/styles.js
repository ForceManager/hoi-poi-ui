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
        display: 'inherit',
        color: theme.colors.textLight.primary,
    },
    ...typographies.reduce((obj, key) => ({ ...obj, [key]: { ...theme.typography[key] } }), {}),
    truncated: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    bold: { fontWeight: 500 },
    divider: {
        borderBottom: `1px solid ${theme.colors.grey[100]}`,
        paddingBottom: 8,
    },
    highlighted: {
        '-webkit-background-clip': 'text',
        '-webkit-text-fill-color': 'transparent',
        background: 'linear-gradient(90deg, #FF8905 0%, #F54853 80%)',
        color: theme.colors.actionMajor[500],
    },
    strikethrough: {
        textDecoration: 'line-through',
    },
});
