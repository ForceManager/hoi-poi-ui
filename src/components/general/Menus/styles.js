export default (theme) => {
    return {
        root: {
            position: 'relative',
            fontFamily: 'inherit',
        },
        menu: {
            outline: 'none',
            marginBottom: '0',
            paddingLeft: '0',
            listStyle: 'none',

            '& .rc-menu-submenu-title': {
                paddingBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                userSelect: 'none',

                '& span': {
                    marginRight: '8px',
                },
            },
        },
        subMenu: {
            position: 'relative',
            width: (props) => props.popupSize,
            minWidth: 'auto !important',
            overflow: 'hidden',
            padding: '18px 10px',
            backgroundColor: theme.colors.primary.white,
            boxShadow: theme.effects.boxShadow,
            borderRadius: 6,

            '& .rc-menu-sub': {
                padding: '0',
                margin: '0',
                minWidth: 'auto !important',
            },

            '&.rc-menu-submenu-hidden': {
                display: 'none',
            },
        },
        menuItem: {
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end',
            listStyle: 'none',
            userSelect: 'none',
            ...theme.typography.subtitle,

            '& span': {
                marginRight: '8px',
            },
        },
        menuItemContent: {
            flex: 1,
        },
        clickable: {
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme.colors.grey[50],
            },
        },
        divider: {
            width: '100%',
            height: '1px',
            margin: '4px 0',
            backgroundColor: theme.colors.grey[100],
        },
    };
};
