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
    menu: {
        boxShadow: `${theme.effects.boxShadow} !important`,
        '& [class*="Divider"]:last-child, & [class*="Divider"] + [class*="Divider"]': {
            display: 'none',
        },
    },
    menuList: {
        ...theme.utils.scrollbar,
        maxHeight: 300,
    },
    actionContainer: {
        borderTop: '1px solid',
        borderTopColor: theme.colors.grey[100],
    },
    action: {
        height: '40px',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
    },
    actionIcon: {
        width: 20,
        height: 20,
    },
    actionText: {
        marginLeft: 0,
        color: theme.colors.actionMajor[500],
    },
    actionTextWithIcon: {
        marginLeft: 8,
        color: theme.colors.actionMajor[500],
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
        backgroundColor: theme.colors.grey[200],
    },
    optionLabelBulletPrimary: {
        backgroundColor: theme.colors.actionMajor[500],
    },
    optionLabelBulletDanger: {
        backgroundColor: theme.colors.semantic.negative500,
    },
    optionLabelBulletSuccess: {
        backgroundColor: theme.colors.semantic.positive500,
    },
    optionLabelText: {},
    optionLabelSubtitle: {
        ...theme.typography.caption,
        color: theme.colors.textLight.secondary,
        '& + $optionLabelSubtitle': {
            marginTop: 2,
        },
    },
    disabledText: {
        color: theme.colors.grey[200],
    },
    disabledIcon: {
        '& path': {
            fill: theme.colors.grey[200],
        },
    },
    disabledAvatar: {
        position: 'absolute',
        width: 20,
        height: 20,
        borderRadius: '50%',
        backgroundColor: theme.colors.grey[200],
        opacity: '0.8',
    },
    group: {
        paddingTop: '0px',
        paddingBottom: '0px',
        '& $option': {
            padding: '8px 12px 8px 12px',
        },
    },
    groupHeading: {
        marginBottom: '0px',
        marginTop: '0px',
    },
    groupHeadingWithSelectAll: {
        paddingLeft: '0px !important',
        paddingRight: '0px !important',
    },
    groupLabel: {
        padding: '6px 0px',
        ...theme.typography.subtitle,
        color: theme.colors.textLight.primary,
        textTransform: 'initial',
    },
    inputComponents: {
        width: 320,
        minWidth: 100,
    },
    control: {
        ...theme.typography.body,
        minHeight: 40,
        outline: 'none',
        padding: '2px 4px 2px 12px',
        borderRadius: '4px',
        border: `1px solid ${theme.colors.grey[50]}`,
        backgroundColor: theme.colors.grey[50],
        transition: 'all 0.15s ease',
        '&:hover': {
            cursor: 'pointer',
        },
        '& .hoi-poi-select__search-indicator': {
            width: 14,
            height: 34,
            marginRight: 8,
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
        },
    },
    controlFocused: {
        backgroundColor: theme.colors.primary.white,
        border: `1px solid ${theme.colors.actionMajor[500]}`,
        boxShadow: 'none',
    },
    placeholder: {
        color: theme.colors.grey[500],
    },
    placeholderDisabled: {
        color: theme.colors.textLight.secondary,
    },
    valueContainer: {
        color: theme.colors.textLight.primary,
        padding: '1px 10px 1px 0px',
    },
    valueContainerDisabled: {
        color: theme.colors.textLight.secondary,
    },
    hideMultivalueChips: {
        display: 'none',
    },
    selectAll: {
        padding: '8px 12px',
        display: 'flex',
        alignItems: 'center',
        color: theme.colors.textLight.primary,
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.colors.grey[50],
        },
    },
    selectAllSelected: {
        backgroundColor: theme.colors.grey[50],
    },
    selectAllCheckbox: {
        marginRight: '10px',
    },
    selectAllText: {
        ...theme.typography.subtitle,
        color: theme.colors.textLight.primary,
        textTransform: 'initial',
    },
    option: {
        ...theme.typography.body,
        padding: '8px 16px',
        color: theme.colors.textLight.primary,
        backgroundColor: theme.colors.primary.white,
        transition: 'all 0.15s ease',
    },
    optionFocused: {
        backgroundColor: theme.colors.grey[50],
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.colors.grey[50],
        },
    },
    optionFocusDisabled: {
        backgroundColor: `${theme.colors.primary.white} !important`,
    },
    optionSelected: {
        backgroundColor: theme.colors.grey[50],
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: theme.colors.grey[50],
        },
    },
    optionDisabled: {
        backgroundColor: 'none',
        cursor: 'default',
    },
    optionWithSelectAll: {
        padding: '8px 16px 8px 42px !important',
    },
    multiValue: {
        margin: '3px 6px 3px 2px',
        padding: '3px 4px 3px 8px',
        border: 'none',
        borderRadius: 4,
        backgroundColor: theme.colors.semantic.infoCustom50,
        color: theme.colors.semantic.info500,
        transition: 'all 0.15s ease',
        '&:hover': {
            backgroundColor: theme.colors.semantic.infoCustom100,
        },
    },
    multiValueLabel: {
        ...theme.typography.caption,
        color: theme.colors.semantic.info500,
        padding: 0,
        paddingLeft: 0,
        paddingRight: 4,
        lineHeight: '18px',
        '& > span': {
            display: 'flex',
            gap: 4,
            alignItems: 'center',
        },
    },
    multiValueLabelDisabled: {
        color: theme.colors.semantic.infoCustom100,
    },
    multiValueRemove: {
        padding: 0,
        transition: 'all 0.15s ease',
        '& svg path': {
            fill: theme.colors.semantic.info500,
        },
        '&:hover': {
            backgroundColor: 'initial',
            '& svg path': {
                fill: theme.colors.semantic.info500,
            },
        },
    },
    multiValueRemoveDisabled: {
        '& svg path': {
            fill: theme.colors.semantic.infoCustom100,
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
        marginRight: 4,
    },
    clearIndicator: {
        transition: 'all 0.15s ease',
        padding: 0,
        '&:hover svg path': {
            fill: theme.colors.grey[700],
        },
    },
    indicatorSeparator: {
        height: 8,
        width: 2,
        marginLeft: 4,
        marginRight: 4,
        alignSelf: 'center',
        backgroundColor: theme.colors.grey[100],
    },
    indicatorSeparatorHidden: {
        display: 'none',
    },
    dropdownIndicator: {
        paddingLeft: 0,
        paddingRight: 2,
        transition: 'all 0.15s ease',
        '&:hover svg path': {
            fill: theme.colors.grey[700],
        },
    },
    loadingIndicator: {
        marginRight: '8px',
    },
    input: {
        padding: 0,
        visibility: 'inherit',
        color: 'inherit',
        '& input': {
            opacity: '1 !important',
        },
    },
    small: {
        '& .hoi-poi-select__control': {
            minHeight: '32px !important',
        },
        '& .hoi-poi-select__search-indicator': {
            height: '26px !important',
        },
        '& .hoi-poi-select__indicators': {
            height: '26px !important',
            alignSelf: 'center',
        },
        '& .hoi-poi-select__value-container': {
            height: 26,
        },
    },
    medium: {},
    onlyText: {
        '& .hoi-poi-select__control': {
            border: 'none',
            background: theme.colors.transparent,
        },
    },
    highlightedContainer: {},
    highlighted: {
        backgroundColor: theme.colors.semantic.focusCustom200,
    },
    singleValueIcon: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: 8,
        width: 18,
        height: 18,
    },
    singleValueAvatar: {
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: 10,
        borderRadius: '50%',
        position: 'relative',
    },
});
