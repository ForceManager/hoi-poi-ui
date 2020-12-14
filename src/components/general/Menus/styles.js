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
            overflow: 'hidden',
            paddingTop: '8px',
            paddingBottom: '8px',
            backgroundColor: theme.colors.neutralBase,
            boxShadow: theme.effects.boxShadow,
            borderRadius: 4,

            '& .rc-menu-sub': {
                padding: '0',
                margin: '0',
            },

            '&.rc-menu-submenu-hidden': {
                display: 'none',
            },
        },
        menuItem: {
            height: '36px',
            paddingLeft: '16px',
            paddingRight: '16px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end',
            listStyle: 'none',
            userSelect: 'none',
            ...theme.typography.subtitle,

            '& span': {
                marginRight: '10px',
            },
        },

        clickable: {
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme.colors.neutral300,
            },
        },
    };
};
