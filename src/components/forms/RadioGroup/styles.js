export default (theme) => ({
    root: {},
    Label: {
        width: 150,
        marginRight: 17,
        padding: '0 0 8px 0',
        flexShrink: 0,
    },
    formControl: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        width: 290,
        padding: 0,
        cursor: 'pointer',
    },
    isFullWidth: {
        width: '100%',
    },
    radioControl: {
        display: 'flex',
        alignItems: 'center',
        lineHeight: '20px',
        marginBottom: 16,
        borderRadius: 4,
        border: `solid 1px ${theme.colors.grey[100]}`,
        padding: 8,
        '&:last-child': {
            marginBottom: 0,
        },
    },
    radioLabel: {
        marginLeft: 10,
        ...theme.typography.defaultText,
        color: theme.colors.textLight.primary,
        fontWeight: 400,
    },
    isReadOnly: {
        '& $formControl': {
            cursor: 'not-allowed',
            '&::before': {
                borderBottom: `1px solid ${theme.colors.grey[100]}`,
            },
            '&::after': {
                borderBottom: `1px solid ${theme.colors.grey[100]}`,
            },
        },
    },
    verticalLabel: {
        display: 'block',
        padding: '8px 0',
        marginLeft: '0 !important',
        '& $Label': {
            padding: '0 0 8px 0',
        },
    },
    horizontalLabel: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '8px 0',
    },
    vertical: {},
    horizontal: {
        '& $formControl': {
            flexFlow: 'row nowrap',
            width: '100%',
            '& $radioControl': {
                marginRight: 16,
                marginBottom: 16,
                width: 'auto',
                flex: 1,
                '&:last-child': {
                    marginRight: 0,
                },
            },
        },
    },
});
