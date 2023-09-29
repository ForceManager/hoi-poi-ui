export default (theme) => ({
    root: {
        width: '350px',
        minHeight: '75px',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',

        opacity: 1,
        padding: '15px',
        color: 'white',
        cursor: 'pointer',
        borderRadius: '8px',
        boxSizing: 'border-box',
        boxShadow: '0px 0px 2px rgb(69, 69, 69)',
        backgroundColor: theme.colors.neutralBase,
    },
    header: {
        width: '100%',
        height: '40px',
        boxSizing: 'border-box',
        padding: '8px',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    content: {
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
        padding: '8px',
        display: 'flex',
        justifyContent: 'flex-start',
    },
    info: {
        backgroundColor: theme.colors.blue300,
    },
    success: {
        backgroundColor: theme.colors.green300,
    },
    warning: {
        backgroundColor: theme.colors.yellow300,
    },
    error: {
        backgroundColor: theme.colors.red300,
    },
});
