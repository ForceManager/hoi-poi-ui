export default (theme) => ({
    root: {
        '& .hoi-poi-select__search-indicator': {
            '& svg path': {
                fill: theme.colors.grey[700],
            },
        },
    },
    typeSelector: {
        '& > div': {
            margin: '-4px 0',
            padding: '0 !important',
        },
        '& .hoi-poi-select__indicator': {
            padding: 4,
        },
        '& .hoi-poi-select__indicator-separator': {
            display: 'none',
        },
        '& .hoi-poi-select__placeholder, & .hoi-poi-select__single-value': {
            position: 'relative',
            top: 'auto',
            transform: 'none',
            ...theme.typography.caption,
            color: theme.colors.actionMinor[550],
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
            '& .hoi-poi-select__value-container--has-value': {
                backgroundColor: theme.colors.actionMinor[50],
                '& + .hoi-poi-select__indicators': {
                    backgroundColor: theme.colors.actionMinor[50],
                },
            },
        },
        '& .hoi-poi-select__control--is-focused > div': {
            backgroundColor: theme.colors.actionMinor[100],
        },
        '& .hoi-poi-select__indicators': {
            height: 32,
            alignSelf: 'center',
            borderTopRightRadius: 4,
            borderBottomRightRadius: 4,
            '& svg path': {
                fill: theme.colors.actionMinor[550],
            },
        },
        '& .hoi-poi-select__control:not(.hoi-poi-select__control--menu-is-open):hover': {
            '& .hoi-poi-select__value-container:not(.hoi-poi-select__value-container--has-value)': {
                backgroundColor: theme.colors.actionMinor[25],
                '& + .hoi-poi-select__indicators': {
                    backgroundColor: theme.colors.actionMinor[25],
                },
            },
            '& .hoi-poi-select__value-container--has-value': {
                backgroundColor: theme.colors.actionMinor[100],
                '& + .hoi-poi-select__indicators': {
                    backgroundColor: theme.colors.actionMinor[100],
                },
            },
        },
        '& .hoi-poi-select__control--menu-is-open': {
            '& .hoi-poi-select__value-container:not(.hoi-poi-select__value-container--has-value)': {
                backgroundColor: `${theme.colors.actionMinor[50]} !important`,
                '& + .hoi-poi-select__indicators': {
                    backgroundColor: `${theme.colors.actionMinor[50]} !important`,
                },
            },
            '& .hoi-poi-select__value-container--has-value': {
                backgroundColor: `${theme.colors.actionMinor[150]} !important`,
                '& + .hoi-poi-select__indicators': {
                    backgroundColor: `${theme.colors.actionMinor[150]} !important`,
                },
            },
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
        backgroundColor: theme.colors.grey[100],
    },
});
