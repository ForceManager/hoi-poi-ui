export default (theme) => ({
    root: {
        outline: 'none',
    },
    Label: {
        width: 153,
        marginRight: 17,
        padding: '0 0 5px 0',
    },
    info: {
        ...theme.typography.smallText,
        position: 'absolute',
        lineHeight: '20px',
        bottom: -21,
        color: theme.colors.greySoft,
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
        alignItems: 'center',
        width: 290,
        lineHeight: 0,
    },
    dropZone: {
        display: 'flex',
        width: '100%',
        height: 100,
        '&:focus': {
            outline: 'none',
        },
        marginBottom: 20,
    },
    dropZoneActive: {
        display: 'flex',
        width: '100%',
        height: '100%',
        borderRadius: 4,
        border: `1px dashed ${theme.colors.secondary}`,
        backgroundColor: theme.colors.secondaryLight,
    },
    dropZoneInactive: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        border: `1px dashed ${theme.colors.placeholders}`,
        backgroundColor: theme.colors.greyLight,
        cursor: 'pointer',
    },
    placeholder: {
        display: 'block',
        textAlign: 'center',
        lineHeight: '20px',
        width: '100%',
    },
    activePlaceholder: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colors.secondary,
    },
    cloudUploadIcon: {
        marginBottom: 2,
    },
    files: {
        width: '100%',
    },
    file: {
        display: 'flex',
        justifyContent: 'space-between',
        height: 30,
    },
    iconNameContainer: {
        display: 'flex',
    },
    fileIcon: {
        height: 24,
        width: 24,
        marginRight: 5,
    },
    clear: {
        marginTop: 6,
        '& span': {
            width: 8,
            height: 8,
        },
    },

    errored: {
        '& $formControl': {
            '&::before': {
                borderBottom: `1px solid ${theme.colors.red} !important`,
            },
            '&::after': {
                borderBottom: `1px solid ${theme.colors.red} !important`,
            },
        },
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
        '&$focused': {
            '& $formControl::after': {
                transform: 'scaleX(0)',
            },
        },
    },
    vertical: {
        display: 'block',
        padding: '15px 0 10px 0',
        marginLeft: '0 !important',
        '& $formControl': {
            marginTop: 10,
        },
        '& $Label': {
            width: '100%',
        },
    },
    horizontal: {
        display: 'flex',
        alignItems: 'center',
        padding: '15px 0 10px 0',
        '& $error': {},
    },
    isFullWidth: {
        '& $formControl': {
            width: '100%',
            flex: 1,
        },
        '&$vertical $Label': {
            width: '100%',
        },
    },
});
