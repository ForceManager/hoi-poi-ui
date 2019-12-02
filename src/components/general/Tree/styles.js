export default (theme) => ({
    root: {},
    node: {
        display: 'flex',
        alignItems: 'center',
    },
    isSelectable: {
        '& $nodeItem': {
            cursor: 'pointer',
        },
        '& $nodeIcon': {
            cursor: 'pointer',
        },
    },
    isDisabled: {
        opacity: 0.5,
        cursor: 'initial !important',
        '& $nodeItem': {
            fontWeight: '400 !important',
        },
        '& $nodeIcon': {
            cursor: 'initial !important',
        },
    },
    active: {
        '& $nodeItem': {
            background: 'transparent',
            fontWeight: 500,
            color: theme.colors.black,
        },
    },
    toggled: {
        '& $nodeIcon': {
            transform: 'rotate(0deg) !important',
        },
    },
    empty: {
        'margin-left': '20px',
        '& $nodeIcon': {
            display: 'none',
        },
    },
    nodeItem: {
        position: 'relative',
        padding: '7.5px 0',
        lineHeight: '20px',
        ...theme.typography.defaultText,
        color: theme.colors.greySoft,
    },
    nodeIcon: {
        marginRight: 10,
        transform: 'rotate(-90deg)',
        transition: 'transform 0.2s',
        cursor: 'pointer',
    },
});
