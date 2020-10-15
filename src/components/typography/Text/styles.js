export default (theme) => ({
    root: {
        display: 'inherit',
    },
    truncated: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    isLoading: {
        display: 'flex',
        alignItems: 'center',
    },
    Loader: { marginTop: -2, marginRight: 10 },
});
