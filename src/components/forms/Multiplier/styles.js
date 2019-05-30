export default (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    container: {},
    item: {
        paddingTop: '10px',
    },
    singleItem: {
        marginLeft: '170px',
        '&:first-child': {
            marginLeft: '0',
        },
    },
    separator: {
        borderBottom: `1px solid ${theme.colors.greyLight}`,
        '&:first-child': {
            paddingTop: '0',
        },
        '&:last-child': {
            borderBottom: 'none',
        },
        paddingBottom: '20px',
    },
    isFullWidth: {
        '& $buttonContainer': {
            width: '100%',
        },
    },
    buttonContainer: {
        position: 'relative',
        width: 465,
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {},
});
