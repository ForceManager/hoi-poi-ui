export default (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    multiplier: {},
    multiplierContainer: {},
    multiplierItem: {
        paddingTop: '10px',
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
    multiplierButtonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    singleItem: {
        marginLeft: '170px',
        '&:first-child': {
            marginLeft: '0',
        },
    },
    multiplierButton: {},
});
