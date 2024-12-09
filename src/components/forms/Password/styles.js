export default (theme) => ({
    visibility: {
        cursor: 'pointer',
        '&:hover': {
            '& svg path': {
                fill: theme.colors.grey[700],
            },
        },
    },
});
