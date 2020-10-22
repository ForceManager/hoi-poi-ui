export default (theme) => ({
    root: {},
    isFullWidth: {
        '& $inputComponents': {
            width: '100%',
            flex: 1,
        },
        // '& $formControl': {
        //     width: '100%',
        //     '& $inputComponents': {
        //         width: '100%',
        //         flex: 1,
        //     },
        // },
    },
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
        padding: 2,
        borderRadius: '4px',
        border: `1px solid ${theme.colors.neutral200}`,
        backgroundColor: theme.colors.neutral200,
        color: theme.colors.neutral900,
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
        margin: 4,
        padding: '2px 6px 2px 8px',
        border: 'none',
        borderRadius: '4px',
        backgroundColor: theme.colors.blue100,
        color: theme.colors.blue500,
    },
    multiValueLabel: {
        ...theme.typography.caption,
        color: theme.colors.blue500,
        padding: 0,
        paddingLeft: 0,
        paddingRight: 8,
    },
    multiValueRemove: {
        padding: 0,
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
