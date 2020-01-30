export default (theme) => ({
    root: {
        '& $button': {
            '&:first-child': {
                borderRight: 0,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
            },
            '&:last-child': {
                borderLeft: 0,
                borderRadiusRight: 0,
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
            },
        },
    },
    active: {
        boxShadow: 'inset 0 0 8px 0 rgba(120,133,144,.4)',
        background: theme.colors.tableHeader,
    },
    button: {},
});
