export default (theme) => ({
    root: {},
    isFullWidth: {},

    errored: {},
    select: {},
    isMulti: {},
    optionLabel: {},
    group: {},
    inputComponents: {
        width: 300,
        minWidth: 150,
    },
    control: {
        ...theme.typography.body,
        outline: 'none',
        borderRadius: '4px',
        border: '1px solid transparent',
        backgroundColor: theme.colors.neutral200,
        color: theme.colors.neutral900,
        '&:hover': {
            border: '1px solid transparent',
            cursor: 'pointer',
        },
    },
    constrolFocused: {
        border: '1px solid transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
    options: {
        ...theme.typography.body,
        color: theme.colors.neutral900,
        backgroundColor: theme.colors.neutralBase,
        '&:hover': {
            backgroundColor: theme.colors.neutral200,
            cursor: 'pointer',
        },
    },
    indicatorSeparator: {
        marginBottom: 0,
        marginTop: 0,
        height: 8,
        width: 2,
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: theme.colors.neutral400,
    },
    dropdownIndicator: {
        padding: 4,
    },
});
