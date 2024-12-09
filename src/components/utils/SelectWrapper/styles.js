export default (theme) => ({
    root: {
        display: 'inline-block',
        cursor: 'pointer',
    },
    Popover: {
        '& .hoi-poi-popover-inner': {
            width: 240,
            padding: '4px 0px',
            borderRadius: 4,
        },
    },
    PopoverWide: {
        '& .hoi-poi-popover-inner': {
            width: 344,
        },
    },
    noOptions: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    customOptions: {
        padding: '8px 12px',
        '& [class*="inputWrapper"]': {
            padding: '0 !important',
        },
    },
    optionList: {
        ...theme.utils.scrollbar,
        width: '100%',
        maxHeight: 300,
        padding: '4px 0px',
        boxSizing: 'border-box',
        overflowY: 'auto',
    },
    optionListGroup: {},
    optionListGroupLabel: {
        minHeight: '36px',
        padding: '0px 12px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
    },
    option: {
        width: '100%',
        minHeight: 36,
        padding: '8px 16px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.15s ease',
        '&:hover': {
            backgroundColor: theme.colors.grey[50],
            cursor: 'pointer',
        },
    },
    optionTwoLines: {
        height: 52,
    },
    optionSelected: {
        backgroundColor: theme.colors.grey[50],
        '&:hover': {
            backgroundColor: theme.colors.grey[50],
        },
    },
    optionDisabled: {
        '&:hover': {
            backgroundColor: theme.colors.primary.white,
            cursor: 'default',
        },
        '& $optionLabel': {
            '& span': {
                color: theme.colors.textLight.secondary,
            },
        },
    },
    optionDisabledIcon: {
        '& path': {
            fill: theme.colors.grey[200],
        },
    },
    optionDisabledAvatar: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: theme.colors.grey[200],
        opacity: '0.8',
    },
    optionCheckbox: {
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        '& + $optionLabel': {
            maxWidth: 'calc(100% - 28px)',
        },
    },
    optionLabelBullet: {
        width: 8,
        height: 8,
        marginRight: 8,
        borderRadius: '50%',
        display: 'flex',
        flexShrink: 0,
    },
    optionLabelBulletDisabled: {
        backgroundColor: theme.colors.grey[200],
    },
    optionLabelBulletPrimary: {
        backgroundColor: theme.colors.actionMajor[500],
    },
    optionLabelBulletDanger: {
        backgroundColor: theme.colors.semantic.negative500,
    },
    optionLabelBulletSuccess: {
        backgroundColor: theme.colors.green500,
    },
    optionLabel: {
        width: '100%',
    },
    optionSubLabel: {
        '& >': {
            color: 'red',
        },
    },
    optionSideLabelBlock: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    optionSideLabel: {},
    optionLabelIcon: {
        marginRight: 10,
    },
    optionLabelCustomIcon: {
        width: 18,
        height: 18,
        marginRight: 10,
    },
    optionLabelAvatar: {
        width: 20,
        height: 20,
        marginRight: 10,
        borderRadius: '50%',
        position: 'relative',
    },
});
