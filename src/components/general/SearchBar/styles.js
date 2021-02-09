export default (theme) => ({
    root: {},
    typeSelector: {
        '& > div': {
            margin: '-4px 0',
            padding: '0 !important',
        },
        '& .hoi-poi-select__indicator-separator': {
            display: 'none',
        },
        '& .hoi-poi-select__placeholder, & .hoi-poi-select__single-value': {
            position: 'relative',
            top: 'auto',
            transform: 'none',
            ...theme.typography.caption,
            color: theme.colors.neutral700,
        },
        '& .hoi-poi-select__value-container': {
            padding: '0 4px 0 0',
            marginRight: -8,
        },
        '& .hoi-poi-select__single-value': {
            maxWidth: '100%',
            ...theme.typography.caption,
        },
    },
    typeSelectorWithValue: {
        '& .hoi-poi-select__dropdown-indicator': {
            display: 'none',
        },
    },
    typeSelectorInput: {
        minWidth: 'auto',
    },
    typeDivider: {
        width: 1,
        height: 23,
        backgroundColor: theme.colors.neutral400,
    },
});
