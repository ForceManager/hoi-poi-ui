export default (theme) => ({
    root: {
        position: 'relative',
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        boxSizing: 'border-box',
        borderBottom: `1px solid ${theme.colors.greyLight}`,
        cursor: 'pointer',
    },
    Text: {
        fontWeight: 'normal',
        lineHeight: theme.typography.lineHeightBase,
        ...theme.typography.defaultText,
        color: theme.colors.blackLight,
        textTransform: 'uppercase',
        cursor: 'pointer',
    },
    icon: {
        lineHeight: '0',
        transition: 'transform 0.3s ease-out',
        willChange: 'transform',
        transform: 'rotate(-180deg) translateY(1px)',
        cursor: 'pointer',
        '&$collapsed': {
            transform: 'rotate(0) translateY(1px)',
        },
    },
    removeIcon: {
        display: 'flex',
        justifyContent: 'flex-end',
        top: 0,
        right: 0,
        '& span': {
            width: '10px',
            height: '10px',
            cursor: 'pointer',
        },
    },
    collapsed: {},
});
