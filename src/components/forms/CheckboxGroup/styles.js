export default (theme) => ({
    root: {},
    Label: {
        width: 153,
        marginRight: 17,
    },
    error: {
        ...theme.typography.smallText,
        position: 'absolute',
        lineHeight: '20px',
        bottom: -21,
        color: theme.colors.red,
    },
    formControl: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: 290,
        cursor: 'pointer',
    },
    isFullWidth: {
        width: '100%',
    },
    checkboxControl: {
        display: 'flex',
        alignItems: 'center',
        lineHeight: '20px',
        marginBottom: 14,
        '&:last-child': {
            marginBottom: 0,
        },
    },
    checkboxLabel: {
        marginLeft: 10,
        ...theme.typography.defaultText,
        color: theme.colors.greySoft,
    },
    isReadOnly: {
        '& $formControl': {
            cursor: 'not-allowed',
            '&::before': {
                borderBottom: `1px solid ${theme.colors.lines}`,
            },
            '&::after': {
                borderBottom: `1px solid ${theme.colors.lines}`,
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
