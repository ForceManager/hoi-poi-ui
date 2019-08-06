export default (theme) => ({
    root: {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'block',
        background: '#fff',
        boxShadow: theme.effects.boxShadow,
        outline: 'none',
        padding: 30,
    },
    overlay: {
        position: 'fixed',
        width: '100%',
        zIndex: 1000,
        top: 0,
        right: 0,
        bottom: 0,
        background: theme.colors.overlay,
        '&.ReactModal__Overlay': {
            opacity: 0,
            transition: 'opacity 300ms ease-in-out',
        },
        '&.ReactModal__Overlay--after-open': {
            opacity: 1,
            transition: 'opacity 300ms ease-in-out',
        },
        '&.ReactModal__Overlay--before-close': {
            opacity: 0,
        },
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 30,
    },
    title: {
        color: theme.colors.blackLight,
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: 30,
    },
    content: {},
    closeIcon: {},
    confirmButton: {
        textTransform: 'uppercase',
    },
    cancelButton: {
        marginRight: 20,
    },
});
