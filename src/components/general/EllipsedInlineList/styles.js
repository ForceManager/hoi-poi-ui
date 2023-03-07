export default (theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row nowrap',
        gap: 4,
    },
    list: {
        display: 'block',
        flex: 1,
        '& > span': {
            display: 'inline',
            whiteSpace: 'pre',
        },
    },
    count: {
        flexShrink: 0,
        cursor: 'pointer',
    },
});