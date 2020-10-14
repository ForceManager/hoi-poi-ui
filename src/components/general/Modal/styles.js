export default (theme) => ({
    root: {
        position: 'relative',
        boxSizing: 'border-box',
        display: 'block',
        outline: 'none',
        padding: '10px',
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
    container: {
        maxHeight: 'calc(100vh - 20px)',
        padding: '32px',
        boxSizing: 'border-box',
        background: theme.colors.neutralBase,
        ...theme.effects.boxShadow24,
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingBottom: 16,
    },
    title: {
        color: theme.colors.text.black,
    },
    footer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingTop: 16,
    },
    content: {
        position: 'relative',
        overflow: 'auto',
        ...theme.utils.scrollbar,
    },
    closeIcon: {
        flexShrink: 0,
    },
    confirmButton: {},
    cancelButton: {
        marginRight: 20,
    },
});
