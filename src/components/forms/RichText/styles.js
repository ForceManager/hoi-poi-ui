export default (theme) => ({
    root: {
        '& .ProseMirror': {
            width: '100%',
            height: '100%',
            padding: '10px 36px 10px 12px',
            boxSizing: 'border-box',
            '& p, & ol, & ul': {
                margin: 0,
            },
            '& ol, & ul': {
                paddingLeft: 20,
            },
        },
        '& .ProseMirror:focus': {
            outline: 'none !important',
        },
        '& .ProseMirror p.is-editor-empty:first-child::before': {
            content: 'attr(data-placeholder)',
            color: theme.colors.neutral600,
            float: 'left',
            height: 0,
            pointerEvents: 'none',
        },
        '& [data-type="mention"]': {
            display: 'inline-block',
            backgroundColor: theme.colors.blue500,
            color: theme.colors.neutralBase,
            padding: '0 6px',
            borderRadius: 10,
            '&::before': {
                content: '"@"',
            },
            '&::selection': {
                color: theme.colors.neutral700,
                backgroundColor: theme.colors.orange200,
            },
        },
    },
    actionIcon: {
        position: 'absolute',
        top: 9,
        right: 9,
    },
    editorWrapper: {
        position: 'relative',
        display: 'flex',
        flexFlow: 'column nowrap',
        width: '100%',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        padding: 0,
        borderRadius: 8,
        border: '1px solid transparent',
        backgroundColor: theme.colors.neutral200,
        transition: 'all 0.15s ease',
    },
    editor: {
        ...theme.typography.body,
        ...theme.utils.selection,
        color: theme.colors.neutral900,
        cursor: 'text',
        width: '100%',
        minHeight: 80,
        transition: 'all 0.15s ease',
    },
    toolbar: {
        backgroundColor: theme.colors.neutralBase,
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center',
        gap: 4,
        padding: 8,
    },
    floatingToolbar: {
        position: 'relative',
        padding: 6,
        backgroundColor: theme.colors.neutral800,
        borderRadius: 2,
        display: 'flex',
        flexFlow: 'row nowrap',
        gap: 4,
    },
    toolbarItem: {
        boxSizing: 'border-box',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: 2,
        padding: 1,
        cursor: 'pointer',
        transition: 'all .2s ease',
        width: 18,
        height: 18,
        fontSize: 16,
        '& [class*="Icon"], & svg': {
            width: '1em !important',
            height: '1em !important',
        },
        '&:hover': {
            backgroundColor: theme.colors.neutral400,
        },
    },
    floatingToolbarItem: {
        '&:hover': {
            backgroundColor: theme.colors.neutral700,
        },
    },
    compactToolbarItem: {
        fontSize: 18,
        padding: 0,
        '&:hover': {
            backgroundColor: 'transparent',
        },
    },
    toolbarDivider: {
        width: 1,
        height: 20,
        backgroundColor: theme.colors.neutral700,
        margin: '0 2px',
    },
    toolbarCustomActions:{
        display: 'flex',
        flexFlow: 'row nowrap',
        marginLeft: 'auto',
        gap: 8,
    },
    error: {
        '& $editorWrapper': {
            backgroundColor: theme.colors.neutralBase,
            borderColor: theme.colors.red500,
        },
    },
    focused: {
        '& $editorWrapper': {
            backgroundColor: theme.colors.neutralBase,
            borderColor: theme.colors.orange500,
        },
    },
    isFullWidth: {
        width: '100%',
        '& $editorWrapper': {
            width: '100%',
            flex: 1,
        },
        '& [class^="HoiPoi__Input"]': {
            width: '100%',
        },
    },
    isReadOnly: {
        '& $editorWrapper': {
            backgroundColor: theme.colors.neutralBase,
            borderColor: theme.colors.neutral500,
        },
        '& $editor': {
            color: theme.colors.neutral700,
        },
    },
    hasFixedToolbar: {
        '& $editorWrapper': {
            border: 'none',
        },
    },
    compactMode: {
        '& $editorWrapper': {
            position: 'relative',
            border: 'none',
            borderRadius: 15,
        },
        '& $editor': {
            minHeight: 30,
        },
        '& .ProseMirror': {
            padding: '5px 36px 0 12px',
        },
        '& .ProseMirror p.is-editor-empty:first-child::before': {
            fontSize: 12,
            color: theme.colors.neutral500,
        },
        '& $toolbar': {
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: 0,
            right: 0,
            padding: '3px 12px',
        },
        '& $toolbarDivider': {
            width: 1,
            height: 8,
            backgroundColor: theme.colors.neutral400,
            margin: '0 2px',
        },
    },
    compactModeFocused: {
        '& $editorWrapper': {
            position: 'relative',
            border: 'none',
            borderRadius: 8,
            paddingBottom: 30,
        },
        '& $editor': {
            minHeight: 30,
        },
        '& .ProseMirror': {
            padding: '10px 36px 0 12px',
        },
        '& .ProseMirror p.is-editor-empty:first-child::before': {
            fontSize: 14,
            color: theme.colors.neutral600,
        },
        '& $toolbar': {
            backgroundColor: 'transparent',
            position: 'absolute',
            bottom: 0,
            right: 0,
            padding: '3px 12px',
        },
        '& $toolbarDivider': {
            width: 1,
            height: 8,
            backgroundColor: theme.colors.neutral400,
            margin: '0 2px',
        },
    },
});
