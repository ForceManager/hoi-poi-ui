export default (theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'column nowrap',
        gap: 20,
        '& > *': {
            margin: 0,
        },
    },
    block: {
        display: 'block',
    },
});