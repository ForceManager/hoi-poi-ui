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
        cursor: 'pointer',
    },
    isFullWidth: {
        width: '100%',
    },
    radioControl: {
        display: 'flex',
        alignItems: 'center',
        lineHeight: '20px',
        marginBottom: 14,
        borderRadius: 4,
        border: `solid 1px ${theme.colors.neutral400}`,
        padding: 8,
    },
    radioLabel: {
        marginLeft: 10,
        ...theme.typography.defaultText,
        color: theme.colors.greySoft,
        fontWeight: 400,
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
    verticalLabel: {
        display: 'block',
        padding: '12px 0 11px 0',
        marginLeft: '0 !important',
        '& $formControl': {
            marginTop: 10,
        },
    },
    horizontalLabel: {
        display: 'flex',
        alignItems: 'flex-start',
        padding: '12px 0 11px 0',
    },
    vertical: {},
    horizontal: {
        '& $formControl': {
            flexDirection: 'row',
            width: '100%',
        },
        '& $radioControl': {
            marginRight: 20,
            width: 'auto',
            '&:last-child': {
                marginRight: 0,
            },
        },
    },
});
