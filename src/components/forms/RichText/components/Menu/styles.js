export default (theme) => {
    return {
        toolbar: {
            backgroundColor: theme.colors.neutralBase,
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            gap: 4,
            padding: 8,
        },
        floatingToolbar: {
            position: 'relative',
            padding: 6,
            backgroundColor: theme.colors.neutral800,
            borderRadius: 2,
            display: 'flex',
            flexFlow: 'row nowrap',
            gap: 4,
        },
        toolbarItems: {
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            gap: 4,
        },
        toolbarItem: {
            boxSizing: 'border-box',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: 2,
            padding: 1,
            cursor: 'pointer',
            transition: 'all .2s ease',
            width: 18,
            height: 18,
            fontSize: 16,
            '& [class*="Icon"], & svg': {
                width: '1em !important',
                height: '1em !important',
            },
            '&:hover': {
                backgroundColor: theme.colors.neutral400,
            },
        },
        toolbarItemActive: {
            backgroundColor: theme.colors.neutral400,
        },
        floatingToolbarItem: {
            '&:hover': {
                backgroundColor: theme.colors.neutral700,
            },
        },
        floatingToolbarItemActive: {
            backgroundColor: theme.colors.neutral700,
        },
        toolbarDivider: {
            width: 1,
            height: 20,
            backgroundColor: theme.colors.neutral700,
            margin: '0 2px',
        },
        toolbarCustomActions: {
            display: 'flex',
            flexFlow: 'row nowrap',
            marginLeft: 'auto',
            gap: 8,
        },
        submmitIcon: {
            cursor: 'pointer',
        },
        basicSubmit: {
            margin: '5px 16px 8px 8px',
            backgroundColor: theme.colors.neutralBase,
            borderRadius: '50px',
            width: '24px',
            height: '24px',
            '& span': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
            '& svg': {
                height: '17px',
                width: '17px',
            },

            '&$basicSubmitClickable': {
                '&:hover': {
                    backgroundColor: theme.colors.orange100,
                },
            },
        },
        basicSubmitClickable: {},
        basicLoader: {
            margin: '6px 16px 8px 8px',
        },
        compactMode: {
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: 0,
            right: 0,
            padding: '3px 12px',
            width: '100%',
            boxSizing: 'border-box',
            justifyContent: 'space-between',
            pointerEvents: 'none',
            '& $toolbarDivider': {
                width: 1,
                height: 20,
                backgroundColor: theme.colors.neutral700,
                margin: '0 2px',
            },
            '& $toolbarItems': {
                opacity: 0,
            },
        },
        compactModeFocused: {
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: 0,
            right: 0,
            padding: '3px 12px',
            width: '100%',
            boxSizing: 'border-box',
            justifyContent: 'space-between',
            pointerEvents: 'auto',
            '& $toolbarDivider': {
                width: 1,
                height: 20,
                backgroundColor: theme.colors.neutral700,
                margin: '0 2px',
            },
            '& $toolbarItems': {
                opacity: 1,
            },
            '& > span': {
                display: 'inherit',
            },
        },
    };
};
