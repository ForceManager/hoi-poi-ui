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
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '20px',
                display: 'flex',
                alignItems: 'center',
                cursor: 'pointer',
                userSelect: 'none',

                '& span': {
                    marginRight: '10px',
                },
            },
        },
        subMenu: {
            position: 'relative',
            width: (props) => props.popupSize,
            overflow: 'hidden',
            paddingTop: '10px',
            paddingBottom: '10px',
            backgroundColor: '#fff',
            boxShadow: '0 3px 9px 0 rgba(0, 0, 0, 0.25)',
            cursor: 'pointer',

            '& .rc-menu-sub': {
                padding: '0',
                margin: '0',
            },

            '&.rc-menu-submenu-hidden': {
                display: 'none',
            },
        },
        menuItem: {
            height: '45px',
            paddingLeft: '20px',
            paddingRight: '20px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row-reverse',
            justifyContent: 'flex-end',
            listStyle: 'none',
            color: theme.colors.greySoft,
            backgroundColor: '#fff',
            fontSize: '13px',
            fontStyle: 'normal',
            fontWeight: 'normal',
            cursor: 'pointer',
            userSelect: 'none',

            '&:hover': {
                backgroundColor: theme.colors.tableHeader,
            },

            '& span': {
                marginRight: '10px',
            },
        },
    };
};
