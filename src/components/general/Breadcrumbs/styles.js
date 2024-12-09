export default (theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
    },
    item: {
        marginRight: 8,
        '& span': {
            color: theme.colors.textLight.secondary,
        },
        '&:last-child': {
            margin: 0,
            '& span': {
                color: theme.colors.textLight.primary,
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
                        color: theme.colors.textLight.primary,
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
