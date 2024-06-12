export default (theme) => ({
    root: {
        height: '100%',
        width: '100%',
        border: `1px solid ${theme.colors.neutral400}`,
        borderRadius: 6,
    },
    rows: {
        '& > :last-child': {
            borderBottom: 'none',
        },
    },
    rowsWithHeader: {
        '& > :first-child': {
            borderTop: 'none',
        },
    },
    header: {},
    headerHighlighted: {
        backgroundColor: theme.colors.neutral300,
    },
    row: {
        display: 'flex',
        height: 32,
        borderBottom: `1px solid ${theme.colors.neutral400}`,
    },
    evenBackground: {
        '& > :nth-child(even)': {
            backgroundColor: theme.colors.neutral150,
        },
    },
    oddBackground: {
        '& > :nth-child(odd)': {
            backgroundColor: theme.colors.neutral150,
        },
    },
    emptyTable: {
        justifyContent: 'center',
    },
    cell: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        boxSizing: 'border-box',
        padding: '4px 12px',
    },
    alignLeft: {
        display: 'flex',
        justifyContent: 'flex-start',
    },
    alignCenter: {
        display: 'flex',
        justifyContent: 'center',
    },
    alignRight: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    cellText: {},
    scrollAll: {
        overflow: 'auto',
        ...theme.utils.scrollbar,
    },
    scrollRows: {
        height: 'calc(100% - 37px)',
        overflow: 'auto',
        ...theme.utils.scrollbar,
    },
});
