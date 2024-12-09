export default (theme) => ({
    root: {
        '& .rc-steps': {
            width: '100%',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'space-between',
        },
        '& .rc-steps, & .rc-steps *': {
            boxSizing: 'border-box',
        },
        '& .rc-steps-item': {
            position: 'relative',
            zIndex: 0,
            display: 'flex',
            flex: 1,
            '&:last-child': {
                flex: 'none',
            },
        },
        // Label horizontal
        // --------------------------------------------------------------------
        '& .rc-steps-horizontal.rc-steps-label-horizontal': {
            '& .rc-steps-item': {
                overflow: 'hidden',
            },
            '& .rc-steps-item-container': {
                display: 'flex',
                flexFlow: 'horizontal nowrap',
                alignItems: 'center',
            },
            '& .rc-steps-item-content': {
                marginLeft: 8,
            },
            '& .rc-steps-item-title': {
                position: 'relative',
            },
            '& .rc-steps-item-title:after': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: '50%',
                left: 'calc(100% + 8px)',
                width: '1000px',
                height: 1,
                backgroundColor: theme.colors.grey[100],
            },
            '& .rc-steps-item-finish .rc-steps-item-title:after': {
                backgroundColor: theme.colors.actionMajor[500],
            },
            '& .rc-steps-item-active .rc-steps-item-title:after': {
                background: `transparent linear-gradient(to right, ${theme.colors.actionMajor[500]} 48px, ${theme.colors.grey[100]} 48px)`,
            },
        },
        // Label vertical
        // --------------------------------------------------------------------
        '& .rc-steps-horizontal.rc-steps-label-vertical': {
            '& .rc-steps-item-container': {
                display: 'flex',
                flexFlow: 'column nowrap',
                alignItems: 'center',
            },
            '& .rc-steps-item-content': {
                marginTop: 4,
                width: 100,
                textAlign: 'center',
            },
            '& .rc-steps-item-tail': {
                display: 'block',
                position: 'absolute',
                top: 16,
                left: 50,
                zIndex: -1,
                width: '100%',
                height: 1,
                backgroundColor: theme.colors.grey[100],
            },
            '& .rc-steps-item-finish .rc-steps-item-tail': {
                backgroundColor: theme.colors.actionMajor[500],
            },
            '& .rc-steps-item-active .rc-steps-item-tail': {
                background: `transparent linear-gradient(to right, ${theme.colors.actionMajor[500]} 50%, ${theme.colors.grey[100]} 50%)`,
            },
            '& .rc-steps-item:last-child .rc-steps-item-tail': {
                display: 'none',
            },
        },
    },
    withoutLabels: {
        '& .rc-steps-item-content': {
            display: 'none',
        },
        '& .rc-steps-item-tail': {
            display: 'block',
            position: 'absolute',
            top: '50%',
            left: 32,
            zIndex: -1,
            width: 'calc(100% - 32px)',
            height: 1,
            backgroundColor: theme.colors.grey[100],
        },
        '& .rc-steps-item-finish .rc-steps-item-tail': {
            backgroundColor: theme.colors.actionMajor[500],
        },
        '& .rc-steps-item-active .rc-steps-item-tail': {
            background: `transparent linear-gradient(to right, ${theme.colors.actionMajor[500]} 50%, ${theme.colors.grey[100]} 50%)`,
        },
        '& .rc-steps-item:last-child .rc-steps-item-tail': {
            display: 'none',
        },
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 32,
        height: 32,
        borderRadius: '50%',
        color: theme.colors.textLight.secondary,
        backgroundColor: theme.colors.primary.white,
        border: 1,
        borderStyle: 'solid',
        borderColor: theme.colors.grey[100],
    },
    active: {
        '& $icon': {
            backgroundColor: theme.colors.actionMajor[500],
            borderColor: 'transparent',
            color: theme.colors.primary.white,
        },
    },
    completed: {
        '& $icon': {
            backgroundColor: theme.colors.actionMajor[500],
            borderColor: 'transparent',
        },
        '& .rc-steps-item-icon, & .rc-steps-item-content': {
            cursor: 'pointer',
        },
    },
});
