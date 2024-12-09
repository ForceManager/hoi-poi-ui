export default (theme) => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridGap: 4,
    },
    cell: {
        display: 'flex',
        flexFlow: 'column nowrap',
        alignItems: 'center',
        padding: 12,
        border: `1px solid ${theme.colors.grey[100]}`,
        '& > * + *': {
            marginTop: 8,
        }
    },
});
