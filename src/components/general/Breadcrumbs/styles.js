export default (theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },
    item: {
        '& span': {
            color: theme.colors.utility.textDisabled,
        },
        '&:last-child': {
            margin: 0,
            '& span': {
                color: theme.colors.actionMinor[500],
            },
        },
    },
    clickables: {
        '& $item': {
            cursor: 'pointer',
            '&:hover': {
                '& span': {
                    color: theme.colors.actionMinor[500],
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
    divider: {
        color: theme.colors.utility.textDisabled,
    },
});
