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
        width: 320,
        lineHeight: 0,
    },
    dropZone: {
        display: 'flex',
        width: '100%',
        height: 158,
        '&:focus': {
            outline: 'none',
        },
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginBottom: 20,
        border: `1px dashed ${theme.colors.neutral400}`,
        backgroundColor: theme.colors.neutral100,
    },
    isDragActive: {
        border: `1px dashed ${theme.colors.blue400}`,
        backgroundColor: theme.colors.blue100,
    },
    disabled: {
        border: `1px dashed ${theme.colors.neutral400}`,
        backgroundColor: theme.colors.neutral200,
    },
    button: {
        marginBottom: 16,
    },
    placeholder: {
        display: 'block',
        textAlign: 'center',
        lineHeight: '20px',
        width: '100%',
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
        alignItems: 'center',
        minHeight: 40,
        boxSizing: 'border-box',
        padding: '10px 16px 10px 12px',
        borderBottom: `1px solid  ${theme.colors.neutral500}`,
        marginBottom: 16,
    },
    fileDataContainer: {
        display: 'flex',
    },
    fileIconContainer: {
        marginRight: 8,
    },
    fileTextContainer: {
        display: 'flex',
    },
    fileName: {
        color: theme.colors.neutral900,
    },
    fileSize: {
        marginLeft: 4,
        color: theme.colors.neutral700,
    },
    clear: {
        cursor: 'pointer',
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
        alignItems: 'flex-start',
        padding: '15px 0 10px 0',
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
