export default (theme) => ({
    root: {},
    header: {
        isolate: true,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        boxSizing: 'border-box',
        borderBottom: `1px solid ${theme.colors.lightGrey}`,
        cursor: 'pointer',
    },
    title: {
        isolate: true,
        lineHeight: theme.typography.lineHeightBase,
        ...theme.typography.defaultText,
        color: theme.colors.lightBlack,
        textTransform: 'uppercase',
        cursor: 'pointer',
    },
    icon: {
        isolate: true,
        lineHeight: '0',
        transition: 'transform 0.3s ease-out',
        willChange: 'transform',
        transform: 'rotate(-180deg) translateY(1px)',
        cursor: 'pointer',
        '&$collapsed': {
            transform: 'rotate(0) translateY(1px)',
        },
    },
    collapsed: {},
});
