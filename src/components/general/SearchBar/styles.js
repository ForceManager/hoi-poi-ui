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
            height: 32,
            padding: '0 4px 0 6px',
            marginRight: -8,
            borderTopLeftRadius: 4,
            borderBottomLeftRadius: 4,
        },
        '& .hoi-poi-select__single-value': {
            maxWidth: '100%',
            ...theme.typography.caption,
        },
        '& .hoi-poi-select__control': {
            padding: '2px 4px 2px 8px',
        },
        '& .hoi-poi-select__control--is-focused > div': {
            backgroundColor: theme.colors.neutral400,
        },
        '& .hoi-poi-select__indicators': {
            height: 32,
            alignSelf: 'center',
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
        },
    },
    typeSmall: {
        '& .hoi-poi-select__value-container': {
            height: 26,
        },
        '& .hoi-poi-select__indicators': {
            height: 26,
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
