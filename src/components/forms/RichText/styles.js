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
    },
    compactModeFocused: {
        '& $editorWrapper': {
            position: 'relative',
            border: 'none',
            borderRadius: 8,
            paddingBottom: 30,
        },
        '& $editor': {
            minHeight: 50,
        },
        '& .ProseMirror': {
            padding: '10px 36px 0 12px',
        },
        '& .ProseMirror p.is-editor-empty:first-child::before': {
            fontSize: 14,
            color: theme.colors.neutral600,
        },
    },
});
