export default (theme) => ({
    root: {
        position: 'relative',
        boxSizing: 'border-box',
        padding: 8,
        background: theme.colors.actionMinor[150],
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    huge: {
        width: 85,
        height: 85,
    },
    big: {
        width: 50,
        height: 50,
    },
    large: { width: 40, height: 40 },
    medium: { width: 35, height: 35 },
    FirstIcon: {},
    SecondIcon: {
        position: 'absolute',
        left: '50%',
        bottom: '15%',
        zIndex: 1,
        padding: '2%',
        background: theme.colors.actionMinor[150],
        borderRadius: '50%',
    },
});
