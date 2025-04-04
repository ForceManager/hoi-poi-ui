export default (theme) => ({
    root: {
        width: 350,
        minHeight: 75,
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderLeft: `8px solid transparent`,
        opacity: 1,
        cursor: 'pointer',
        borderRadius: 8,
        boxSizing: 'border-box',
        backgroundColor: theme.colors.primary.white,
        boxShadow: `0px 4px 5px 0px rgba(39, 60, 80, 0.2), 0px 3px 14px 0px rgba(39, 60, 80, 0.12), 0px 8px 10px 0px rgba(39, 60, 80, 0.14)`,
        transition: 'transform 2s ease-in-out',
    },
    'fade-enter': {
        opacity: 0,
        transform: 'scale(0.9)',
    },
    'fade-enter-active': {
        opacity: 1,
        transform: 'translateX(0)',
        transition: 'opacity 300ms, transform 300ms',
    },
    'fade-exit': {
        opacity: 1,
    },
    'fade-exit-active': {
        opacity: 0,
        transform: 'scale(0.9)',
        transition: 'opacity 300ms, transform 300ms',
    },
    toastWrapper: {
        width: '100%',
        boxSizing: 'border-box',
        padding: '10px 15px',
    },
    withIcon: {
        display: 'flex',
        '& svg': {
            width: 20,
            height: 20,
        },
    },
    iconBox: { padding: '5px 10px 0 0' },
    contentBox: {
        width: 'calc(100% - 28px)',
    },
    header: {
        width: '100%',
        height: 'auto',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'space-between',
        '& span': {
            alignSelf: 'center',
        },
    },
    close: {},
    content: {
        width: '100%',
        height: 'auto',
        boxSizing: 'border-box',
        paddingTop: 4,
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
    },
    text: {
        display: 'block',
    },
    link: {
        display: 'flex',
        alignSelf: 'flex-end',
    },
    info: {
        borderLeft: `8px solid ${theme.colors.semantic.info500}`,
    },
    success: {
        borderLeft: `8px solid ${theme.colors.semantic.positive500}`,
    },
    warning: {
        borderLeft: `8px solid ${theme.colors.semantic.focus500}`,
    },
    error: {
        borderLeft: `8px solid ${theme.colors.semantic.negative500}`,
    },
    base: {
        backgroundColor: theme.colors.primary.white,
    },
});
