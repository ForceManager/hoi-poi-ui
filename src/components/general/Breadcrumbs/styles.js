export default (theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    item: {
        marginRight: 8,
        '& span': {
            color: theme.colors.neutral700,
        },
        '&:last-child': {
            margin: 0,
            '& span': {
                color: theme.colors.neutral900,
            },
        },
    },
    clickables: {
        '& $item': {
            cursor: 'pointer',
            '&:hover': {
                '& span': {
                    color: theme.colors.blue500,
                },
                '&:last-child': {
                    '& span': {
                        color: theme.colors.neutral900,
                    },
                },
            },
            '&:last-child': {
                cursor: 'inherit',
            },
        },
        '& $divider': {
            cursor: 'inherit',
        },
    },
    divider: {},
});
