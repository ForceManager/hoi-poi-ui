export default (theme) => ({
    root: {
        display: 'inline-block',
        cursor: 'pointer',
    },
    wrapperPopover: {
        '& .hoi-poi-popover-inner': {
            width: 240,
            padding: '4px 0px',
            borderRadius: 4,
        },
    },
    customOptions: {
        padding: '16px 12px',
    },
    optionList: {
        ...theme.utils.scrollbar,
        width: '100%',
        maxHeight: 300,
        padding: '12px 0px',
        boxSizing: 'border-box',
        overflowY: 'auto',
    },
    optionListGroup: {},
    optionListGroupLabel: {
        height: '36px',
        padding: '0px 12px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
    },
    option: {
        width: '100%',
        height: 36,
        padding: '0px 12px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.15s ease',
        '&:hover': {
            backgroundColor: theme.colors.neutral200,
            cursor: 'pointer',
        },
    },
    optionSelected: {
        backgroundColor: theme.colors.neutral200,
        '&:hover': {
            backgroundColor: theme.colors.neutral200,
        },
    },
    optionDisabled: {
        '&:hover': {
            backgroundColor: theme.colors.neutralBase,
            cursor: 'default',
        },
        '& $optionLabel': {
            '& span': {
                color: theme.colors.neutral700,
            },
        },
    },
    optionCheckbox: {
        paddingRight: '8px',
        display: 'flex',
        alignItems: 'center',
    },
    optionLabelBullet: {
        width: 8,
        height: 8,
        marginRight: 8,
        borderRadius: '50%',
    },
    optionLabelBulletDisabled: {
        backgroundColor: theme.colors.neutral500,
    },
    optionLabelBulletPrimary: {
        backgroundColor: theme.colors.orange500,
    },
    optionLabelBulletDanger: {
        backgroundColor: theme.colors.red500,
    },
    optionLabelBulletSuccess: {
        backgroundColor: theme.colors.green500,
    },
    optionLabel: {
        width: '100%',
    },
});
