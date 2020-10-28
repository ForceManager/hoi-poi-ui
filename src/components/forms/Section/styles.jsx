export default (theme) => ({
    root: {
        position: 'relative',
        padding: '8px 16px',
        borderRadius: '4px',
        backgroundColor: theme.colors.neutralBase,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 40,
        boxSizing: 'border-box',
        '&:hover': {
            '& $Text': {
                color: theme.colors.neutral800,
            },
            '& $icon': {
                '& svg path': {
                    fill: theme.colors.neutral800,
                },
            },
        },
    },
    isExpandable: {
        cursor: 'pointer',
    },
    Text: {
        color: theme.colors.neutral700,
        transition: 'all 0.15s ease',
    },
    icon: {
        marginRight: 4,
        lineHeight: '0',
        transition: 'transform 0.3s ease-out',
        willChange: 'transform',
        transform: 'rotate(-90deg) translateY(0px)',
        cursor: 'pointer',
    },
    open: {
        '& $Text': {
            color: theme.colors.neutral900,
        },
        '& $icon': {
            transform: 'rotate(0deg) translateY(0px)',
            '& svg path': {
                fill: theme.colors.neutral900,
            },
        },
    },
});
