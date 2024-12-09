export default (theme) => ({
    root: {
        outline: 'none',
    },
    Label: {
        width: 150,
        marginRight: 17,
        padding: '0 0 8px 0',
        flexShrink: 0,
    },
    info: {
        ...theme.typography.smallText,
        position: 'absolute',
        lineHeight: '20px',
        bottom: -21,
        color: theme.colors.textLight.secondary,
    },
    error: {
        ...theme.typography.smallText,
        position: 'absolute',
        lineHeight: '20px',
        bottom: -21,
        color: theme.colors.red500,
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
        border: `1px dashed ${theme.colors.grey[100]}`,
        backgroundColor: theme.colors.actionMinor[50],
    },
    isDragActive: {
        border: `1px dashed ${theme.colors.blue400}`,
        backgroundColor: theme.colors.blue100,
    },
    disabled: {
        border: `1px dashed ${theme.colors.grey[100]}`,
        backgroundColor: theme.colors.grey[50],
    },
    button: {
        marginTop: 16,
    },
    title: {
        display: 'block',
        textAlign: 'center',
        width: '100%',
    },
    subtitle: {
        display: 'block',
        textAlign: 'center',
        width: '100%',
        color: theme.colors.textLight.secondary,
    },
    cloudUploadIcon: {
        marginBottom: 2,
    },
    file: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        minHeight: 40,
        boxSizing: 'border-box',
        padding: '10px 16px 10px 12px',
        borderBottom: `1px solid  ${theme.colors.grey[200]}`,
    },
    fileError: {
        backgroundColor: theme.colors.red100,
        borderBottom: 'none',
        borderRadius: 4,
    },
    fileLoading: {
        backgroundColor: theme.colors.grey[100],
        borderBottom: 'none',
        borderRadius: 4,
    },
    fileErrorText: {
        marginLeft: 4,
        color: theme.colors.red500,
    },
    fileDataContainer: {
        display: 'flex',
        marginRight: 20,
        minWidth: 0,
    },
    fileIconContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 24,
        height: 24,
        marginRight: 8,
        flexShrink: 0,
        '& span': {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: 4,
        },
    },
    fileTextContainer: {
        display: 'flex',
        alignItems: 'center',
        minWidth: 0,
    },
    fileNameContainer: {
        display: 'flex',
        minWidth: 0,
    },
    fileName: {
        color: theme.colors.textLight.primary,
        display: 'block',
    },
    fileSize: {
        marginLeft: 4,
        color: theme.colors.textLight.secondary,
        flexShrink: 0,
    },
    actions: {
        flexShrink: 0,
        display: 'flex',
        gap: 8,
    },
    clear: {
        cursor: 'pointer',
    },
    crop: {
        cursor: 'pointer',
        marginRight: 4,
    },
    progress: {
        position: 'absolute',
        bottom: 2,
        left: 0,
        height: 2,
        borderRadius: 10,
        backgroundColor: theme.colors.orange500,
    },

    errored: {
        '& $formControl': {
            '&::before': {
                borderBottom: `1px solid ${theme.colors.red500} !important`,
            },
            '&::after': {
                borderBottom: `1px solid ${theme.colors.red500} !important`,
            },
        },
    },
    isReadOnly: {
        '& $formControl': {
            '&::before': {
                borderBottom: `1px solid ${theme.colors.grey[100]}`,
            },
            '&::after': {
                borderBottom: `1px solid ${theme.colors.grey[100]}`,
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
    focused: {},
    singleImagePreview: {
        display: 'flex',
        width: '100%',
        height: 158,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        boxSizing: 'border-box',
        padding: 20,
        marginBottom: 20,
        border: `1px solid ${theme.colors.grey[100]}`,
        backgroundColor: theme.colors.actionMinor[50],
        '& span': {
            display: 'flex',
            width: '100%',
            height: '100%',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            alignItems: 'center',
            justifyContent: 'center',
        },
    },
    group: {
        width: '100%',
    },
    groupMargin: {
        marginTop: '16px',
    },
    groupHeader: {
        width: '100%',
        height: '22px',
        marginBottom: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    groupTitle: {},
    groupFooter: {
        width: '100%',
        // position: 'relative',
        boxSizing: 'border-box',
        padding: '8px 14px',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    groupFooterTextContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        gap: '6px',
        cursor: 'pointer',
    },
    groupFooterText: {},
    groupFooterIcon: {
        transition: 'all .3s ease-out',
    },
    groupFooterIconRotate: {
        transform: 'rotate(180deg)',
    },
    groupTitleDivider: {
        height: '1px',
        backgroundColor: theme.colors.grey[100],
        marginBottom: '10px',
    },
    groupListWrapper: {
        width: '100%',
        height: 'auto',
    },
    groupListWrapperMargin: {
        marginBottom: '12px',
    },
    filesList: {
        width: '100%',
    },
    filesListWrapper: {
        width: '100%',
        height: 'auto',
    },
    uploadedFilesPopover: {
        '& .hoi-poi-popover-inner': {
            padding: '10px',
            backgroundColor: `${theme.colors.grey[700]} !important`,
            color: `${theme.colors.primary.white} !important`,
        },
    },
});
