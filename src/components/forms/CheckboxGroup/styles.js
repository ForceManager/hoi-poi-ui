export default (theme) => ({
    root: {},
    Label: {
        width: 150,
        marginRight: 17,
        flexShrink: 0,
    },
    error: {
        ...theme.typography.smallText,
        position: 'absolute',
        lineHeight: '20px',
        bottom: -21,
        color: theme.colors.red500,
    },
    errorPerCheck: {
        ...theme.typography.smallText,
        color: theme.colors.red500,
        margin: '-6px 0 14px',
    },
    formControl: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: 290,
    },
    isFullWidth: {
        width: '100%',
    },
    checkboxWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 14,
        '&:hover $info': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    checkboxControl: {
        display: 'flex',
        alignItems: 'center',
        lineHeight: '20px',
        cursor: 'pointer',
        '&:last-child': {
            marginBottom: 0,
        },
    },
    checkboxLabel: {
        marginLeft: 10,
        ...theme.typography.defaultText,
        color: theme.colors.neutral700,
    },
    iconContainer: {
        height: 18,
        width: 18,
        marginLeft: 5,
    },
    info: {
        display: 'none',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
    },
    popoverTitle: {
        marginBottom: 5,
    },
    isReadOnly: {
        '& $formControl': {
            cursor: 'not-allowed',
            '&::before': {
                borderBottom: `1px solid ${theme.colors.neutral400}`,
            },
            '&::after': {
                borderBottom: `1px solid ${theme.colors.neutral400}`,
            },
        },
    },
    vertical: {
        display: 'block',
        padding: '8px 0',
        marginLeft: '0 !important',
        '& $formControl': {
            marginTop: 10,
        },
    },
    horizontal: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '8px 0',
    },
});
