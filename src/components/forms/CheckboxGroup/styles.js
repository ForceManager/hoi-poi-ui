export default (theme) => ({
    root: {},
    Label: {
        width: 153,
        marginRight: 17,
        padding: '6px 0',
    },
    formControl: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: 290,
        padding: '5px 0',
    },
    checkboxControl: {
        display: 'flex',
        alignItems: 'center',
        lineHeight: '20px',
        marginBottom: 14,
    },
    checkboxLabel: {
        marginLeft: 2,
        ...theme.typography.defaultText,
        color: theme.colors.softGrey,
    },
    isReadOnly: {
        '& $formControl': {
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
        padding: '12px 0 11px 0',
        '& $formControl': {
            marginTop: 10,
        },
    },
    horizontal: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '12px 0 11px 0',
    },
});
