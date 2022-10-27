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
        },
        '& .ProseMirror:focus': {
            outline: 'none !important',
        },
        '& .ProseMirror:not(:focus) p.is-editor-empty:first-child::before': {
            content: 'attr(data-placeholder)',
            color: theme.colors.neutral600,
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
        width: '100%',
        minHeight: '80px',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        padding: 0,
        borderRadius: 4,
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
        height: '100%',
    },
    bubbleMenu: {
        position: 'relative',
        padding: 6,
        backgroundColor: theme.colors.neutral800,
        borderRadius: 2,
        display: 'flex',
        flexFlow: 'row nowrap',
        gap: 6,
        '&::after': {
            content: '""',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '4px 4px 0 4px',
            borderColor: `${theme.colors.neutral800} transparent transparent`,
            position: 'absolute',
            bottom: -4,
            left: '50%',
            marginLeft: -4,
        },
    },
    bubbleMenuItem: {
        boxSizing: 'border-box',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: 2,
        padding: 2,
        cursor: 'pointer',
        transition: 'all .2s ease',
        width: 20,
        height: 20,
        fontSize: 16,
        '& svg': {
            width: '1em !important',
            height: '1em !important',
        },
        '&:hover': {
            backgroundColor: theme.colors.neutral700,
        },
    },
    error: {
        '& $editorWrapper': {
            backgroundColor: theme.colors.neutralBase,
            borderColor: `${theme.colors.red500}`,
        },
    },
    focused: {
        '& $editorWrapper': {
            backgroundColor: theme.colors.neutralBase,
            borderColor: `${theme.colors.orange500}`,
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
            borderColor: `${theme.colors.neutral500}`,
        },
        '& $editor': {
            color: theme.colors.neutral700,
        },
    },
});
