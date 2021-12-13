export default (theme) => ({
    root: {
        '& > :first-child': {
            borderTop: `1px solid ${theme.colors.neutral400}`,
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
        },
        '& > :last-child': {
            borderBottomLeftRadius: 6,
            borderBottomRightRadius: 6,
        },
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        height: 32,
        padding: '4px 0 0px 16px',
        borderRight: `1px solid ${theme.colors.neutral400}`,
        borderLeft: `1px solid ${theme.colors.neutral400}`,
        borderBottom: `1px solid ${theme.colors.neutral400}`,
    },
    emptyTable: {
        justifyContent: 'center',
    },
    cell: {
        flex: 1,
    },
});
