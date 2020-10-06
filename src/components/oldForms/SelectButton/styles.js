export default (theme) => ({
    root: {
        display: 'inline-block',
    },
    button: {},
    select: {
        position: 'absolute',
        marginTop: 10,
        backgroundColor: 'white',
        boxShadow: theme.effects.boxShadow,
        '& .hoi-poi-select__control': {
            padding: '0 20px',
        },
        '& .hoi-poi-select__search': {
            position: 'absolute',
            paddingBottom: 5,
        },
        '& .hoi-poi-select__value-container': {
            position: 'unset',
        },
        '& .hoi-poi-select__input, & .hoi-poi-select__placeholder': {
            paddingLeft: '28px !important',
        },
        '& > div': {
            boxSizing: 'border-box',
            width: '220px !important',
        },
        '& > div::before, & > div::after': {
            border: 'none !important',
        },
    },
    menu: {
        boxShadow: theme.effects.boxShadow,
        '&::after': {
            content: '""',
            position: 'absolute',
            width: '100%',
            background: theme.colors.white,
            height: 10,
            top: -10,
        },
    },
    menuList: {
        borderTop: '1px solid',
        borderTopColor: theme.colors.lines,
        '& .hoi-poi-select__group': {
            '&:first-child': {
                paddingTop: '10px !important',
            },
        },
    },
});
