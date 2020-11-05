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
        color: theme.colors.neutral900,
    },
    ...typographies.reduce((obj, key) => ({ ...obj, [key]: { ...theme.typography[key] } }), {}),
    truncated: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    bold: { fontWeight: 500 },
});
