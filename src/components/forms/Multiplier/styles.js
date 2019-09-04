export default (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    item: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: '10px',
        '&:hover $removeIcon': {
            display: 'flex !important',
        },
    },
    singleItem: {
        marginTop: 0,
        marginLeft: '170px',
        alignItems: 'center',
        justifyContent: 'flex-start',
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
            borderBottom: 'none !important',
        },
    },
    isFullWidth: {
        '& $buttonContainer': {
            width: '100%',
        },
    },
    buttonContainer: {
        position: 'relative',
        width: 465,
        marginLeft: 170,
        marginTop: 5,
        display: 'flex',
        justifyContent: 'flex-start',
    },
    button: {},
    removeIcon: {
        display: 'none',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        marginLeft: 20,
        '& svg': {
            width: 18,
        },
    },
    vertical: {
        '& $buttonContainer': {
            marginLeft: 0,
        },
        '& $singleItem': {
            marginLeft: 0,
            '& > div': {
                padding: 0,
                margin: '10px 0',
            },
        },
    },
    removeIconVertical: {
        marginTop: 3,
    },
    form: {
        width: '100%',
    },
});
