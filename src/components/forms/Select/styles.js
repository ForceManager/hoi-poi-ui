export default (theme) => ({
    root: {},
    isFullWidth: {
        width: '100%',
        '& $inputComponents': {
            width: '100%',
        },
    },
    async: {},
    select: {},
    isMulti: {},
    menu: {},
    menuList: {
        ...theme.utils.scrollbar,
    },
    actionContainer: {
        borderTop: '1px solid',
        borderTopColor: theme.colors.neutral400,
    },
    action: {
        height: '40px',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        '&:hover': {
            '& $actionIcon': {
                '& svg path': {
                    fill: theme.colors.orange600,
                },
            },
            '& $actionText': {
                color: theme.colors.orange600,
            },
            '& $actionTextWithIcon': {
                color: theme.colors.orange600,
            },
        },
    },
    actionIcon: {
        width: 20,
        height: 20,
    },
    actionText: {
        marginLeft: 0,
        color: theme.colors.orange500,
    },
    actionTextWithIcon: {
        marginLeft: 8,
        color: theme.colors.orange500,
    },
    optionLabel: {
        display: 'flex',
        alignItems: 'center',
    },
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
    optionLabelCheckbox: {
        marginRight: 10,
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
    optionLabelText: {},
    optionLabelSubtitle: {
        ...theme.typography.caption,
        color: theme.colors.neutral700,
    },
    disabledText: {
        color: theme.colors.neutral500,
    },
    disabledIcon: {
        '& path': {
            fill: theme.colors.neutral500,
        },
    },
    disabledAvatar: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: theme.colors.neutral500,
        opacity: '0.8',
    },
    group: {
        ...theme.typography.subtitle,
        color: theme.colors.neutral700,
        textTransform: 'initial',
    },
    inputComponents: {
        width: 300,
        minWidth: 150,
    },
    control: {
        ...theme.typography.body,
        minHeight: 40,
        outline: 'none',
        padding: '2px 4px 2px 12px',
        borderRadius: '4px',
        border: `1px solid ${theme.colors.neutral200}`,
        backgroundColor: theme.colors.neutral200,
        transition: 'all 0.15s ease',
        '&:hover': {
            cursor: 'pointer',
        },
    },
    controlFocused: {
        backgroundColor: theme.colors.neutralBase,
        border: `1px solid ${theme.colors.orange500}`,
        boxShadow: 'none',
    },
    placeholder: {
        color: theme.colors.neutral600,
    },
    placeholderDisabled: {
        color: theme.colors.neutral700,
    },
    valueContainer: {
        color: theme.colors.neutral900,
        padding: '2px 10px 2px 0px',
    },
    valueContainerDisabled: {
        color: theme.colors.neutral700,
    },
    option: {
        ...theme.typography.body,
        padding: '8px 16px',
        color: theme.colors.neutral900,
        backgroundColor: theme.colors.neutralBase,
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
            backgroundColor: 'none',
            cursor: 'default',
        },
    },
    multiValue: {
        margin: '4px 6px 4px 2px',
        padding: '3px 6px 3px 8px',
        border: 'none',
        borderRadius: '20px',
        backgroundColor: theme.colors.blue100,
        color: theme.colors.blue500,
        transition: 'all 0.15s ease',
        '&:hover': {
            backgroundColor: theme.colors.blue200,
        },
    },
    multiValueLabel: {
        ...theme.typography.caption,
        color: theme.colors.blue500,
        padding: 0,
        paddingLeft: 0,
        paddingRight: 8,
    },
    multiValueLabelDisabled: {
        color: theme.colors.blue200,
    },
    multiValueRemove: {
        padding: 0,
        transition: 'all 0.15s ease',
        '& svg path': {
            fill: theme.colors.blue500,
        },
        '&:hover': {
            backgroundColor: 'initial',
            '& svg path': {
                fill: theme.colors.blue600,
            },
        },
    },
    multiValueRemoveDisabled: {
        '& svg path': {
            fill: theme.colors.blue200,
        },
    },
    noOptionsMessage: {
        ...theme.typography.body,
    },
    loadingMessage: {
        ...theme.typography.body,
    },
    indicatorsContainer: {
        height: 34,
        alignSelf: 'flex-start',
    },
    clearIndicator: {
        transition: 'all 0.15s ease',
        padding: 0,
        '&:hover svg path': {
            fill: theme.colors.neutral800,
        },
    },
    indicatorSeparator: {
        height: 8,
        width: 2,
        marginLeft: 8,
        marginRight: 4,
        alignSelf: 'center',
        backgroundColor: theme.colors.neutral400,
    },
    indicatorSeparatorHidden: {
        display: 'none',
    },
    dropdownIndicator: {
        paddingLeft: 0,
        paddingRight: 4,
        transition: 'all 0.15s ease',
        '&:hover svg path': {
            fill: theme.colors.neutral800,
        },
    },
    loadingIndicator: {
        marginRight: '8px',
    },
});
