export default (theme) => ({
    root: {},
    isFullWidth: {},

    errored: {},
    select: {},
    isMulti: {},
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
        width: 24,
        height: 24,
        marginRight: 10,
    },
    optionLabelCheckbox: {
        marginRight: 10,
    },
    optionLabelBullet: {
        width: 8,
        height: 8,
        marginRight: 8,
        borderRadius: '50%',
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
        outline: 'none',
        borderRadius: '4px',
        border: '1px solid transparent',
        backgroundColor: theme.colors.neutral200,
        color: theme.colors.neutral900,
        '&:hover': {
            border: '1px solid transparent',
            cursor: 'pointer',
        },
    },
    controlFocused: {
        border: '1px solid transparent',
        borderColor: 'transparent',
        boxShadow: 'none',
    },
    options: {
        ...theme.typography.body,
        color: theme.colors.neutral900,
        backgroundColor: theme.colors.neutralBase,
        transition: 'all 0.15s ease',
        '&:hover': {
            backgroundColor: theme.colors.neutral200,
            cursor: 'pointer',
        },
    },
    multiValue: {
        backgroundColor: theme.colors.blue100,
        border: 'none',
        borderRadius: '4px',
        color: theme.colors.blue500,
    },
    multiValueLabel: {
        ...theme.typography.caption,
        color: theme.colors.blue500,
    },
    multiValueRemove: {
        transition: 'all 0.15s ease',
        '&:hover': {
            backgroundColor: 'initial',
            color: theme.colors.blue600,
        },
    },
    noOptionsMessage: {
        ...theme.typography.body,
    },
    indicatorsContainer: {
        alignSelf: 'flex-start',
    },
    clearIndicator: {
        transition: 'all 0.15s ease',
        padding: '0px 8px',
        '&:hover svg path': {
            fill: theme.colors.neutral800,
        },
    },
    indicatorSeparator: {
        height: 8,
        width: 2,
        alignSelf: 'center',
        backgroundColor: theme.colors.neutral400,
    },
    dropdownIndicator: {
        padding: 4,
        transition: 'all 0.15s ease',
        '&:hover svg path': {
            fill: theme.colors.neutral800,
        },
    },
});
