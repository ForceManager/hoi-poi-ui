export default (theme) => ({
    root: {
        outline: 'none',
        width: '100%',
        height: '100%',
        cursor: 'text',
        '& .DraftEditor-root': {
            ...theme.typography.body,
            ...theme.utils.selection,
            color: theme.colors.neutral900,
            cursor: 'text',
            width: '100%',
        },
        '& [class^="draftJsToolbar__toolbar"]': {
            position: 'absolute',
            zIndex: 1,
            padding: '6px',
            backgroundColor: theme.colors.neutral800,
            borderRadius: '2px',
            display: 'flex',
            '& > span:not(:first-child)': {
                marginLeft: '6px',
            },
        },
        '& [class^="draftJsToolbar__toolbar"]::after': {
            content: '""',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
            borderWidth: '4px 4px 0 4px',
            borderColor: `${theme.colors.neutral800} transparent transparent`,
            position: 'absolute',
            bottom: '-4px',
            left: '50%',
            marginLeft: '-4px',
        },
        '& [class^="draftJsToolbar__buttonWrapper"]': {
            width: '20px',
            height: '20px',
        },
        '& [class^="draftJsToolbar__button__"]': {
            appearance: 'none',
            backgroundColor: 'transparent',
            border: 'none',
            borderRadius: '2px',
            cursor: 'pointer',
            fontSize: '16px',
            padding: '2px',
            transition: 'all .2s ease',
            '&:hover': {
                backgroundColor: theme.colors.neutral700,
            },
            '& svg': {
                fill: theme.colors.neutralBase,
                display: 'block',
                width: '1em',
                height: '1em',
            },
        },
        '& .public-DraftEditorPlaceholder-root': {
            position: 'absolute',
            top: '10px',
            left: '12px',
            right: '12px',
            pointerEvents: 'none',
            color: theme.colors.neutral600,
        },
    },
    closeIcon: {
        position: 'absolute',
        top: '9px',
        right: '9px',
    },
    lockedIcon: {
        position: 'absolute',
        top: '9px',
        right: '9px',
    },
    editorWrapper: {
        position: 'relative',
        display: 'flex',
        width: '100%',
        minHeight: '80px',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        padding: '10px 36px 10px 12px',
        borderRadius: '4px',
        border: '1px solid transparent',
        backgroundColor: theme.colors.neutral200,
        transition: 'all 0.15s ease',
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
        '& .DraftEditor-root': {
            color: theme.colors.neutral700,
        },
    },
});
