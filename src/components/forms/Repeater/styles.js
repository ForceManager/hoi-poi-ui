export default (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    repeater: {},
    repeaterContainer: {},
    repeaterItem: {
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
    repeaterButtonContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    singleItem: {
        marginLeft: '170px',
        '&:first-child': {
            marginLeft: '0',
        },
    },
    repeaterButton: {},
});
