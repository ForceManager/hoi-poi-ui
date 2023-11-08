export default (theme) => {
    return {
        root: {
            outline: 'none',
        },
        textareaComponents: {
            position: 'relative',
            width: 320,
            boxSizing: 'border-box',
            lineHeight: 0,
            borderRadius: 4,
            border: '1px solid transparent',
            backgroundColor: theme.colors.neutral200,
            transition: 'all 0.15s ease',
        },
        textarea: {
            ...theme.typography.body,
            background: 'transparent',
            color: theme.colors.neutral900,
            minHeight: 38,
            width: '100% !important',
            maxWidth: '100%',
            boxSizing: 'border-box',
            outline: 'none',
            border: 'none',
            padding: '8px 48px 8px 12px',
            margin: 0,
            caretColor: theme.colors.orange500,
            scrollbarWidth: 'thin',
            scrollbarColor: `${theme.colors.neutral700} ${theme.colors.neutralBase}`,
            '&::placeholder': {
                color: theme.colors.neutral600,
            },
            '&::-webkit-scrollbar': {
                width: 12,
            },
            '&::-webkit-scrollbar-track': {
                background: theme.colors.neutralBase,
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.colors.neutral700,
                border: `3px solid ${theme.colors.neutralBase}`,
                borderRadius: 6,
            },
        },
        notResizable: {
            resize: 'none',
            overflow: 'hidden',
        },
        error: {
            '& $textareaComponents': {
                backgroundColor: theme.colors.neutralBase,
                border: `1px solid ${theme.colors.red500}`,
            },
        },
        isReadOnly: {
            '& $textareaComponents': {
                border: `1px solid ${theme.colors.neutral500}`,
                backgroundColor: theme.colors.neutralBase,

                '&::placeholder': {
                    color: theme.colors.neutral500,
                },
            },
            '& $textarea': {
                cursor: 'text',
                color: theme.colors.neutral700,
            },
        },
        isReadAndDuplicable: {
            '& $postComponentClose': {
                display: 'inline-flex',
            },
        },
        isClickable: {
            cursor: 'pointer',
        },
        clear: {},
        clearSeparator: {
            width: 2,
            height: 8,
            backgroundColor: theme.colors.neutral400,
            margin: '0 2px',
        },
        copy: {},
        focused: {
            '& $textareaComponents': {
                backgroundColor: theme.colors.neutralBase,
                border: `1px solid ${theme.colors.orange500}`,
            },
        },
        isFullWidth: {
            width: '100%',
            '& $textareaComponents': {
                width: '100%',
                flex: 1,
            },
        },
        postComponent: {
            position: 'absolute',
            top: 8,
            right: 12,
            display: 'flex',
            alignItems: 'center',
            '& > span, > div': {
                marginLeft: 4,
                '&:first-child': {
                    marginLeft: 0,
                },
            },
        },
        postComponentClose: {
            display: 'flex',
            alignItems: 'center',
        },
        postComponentReadOnly: {},
        postComponentCopy: {},
        horizontal: {
            '& [class*="Label"]': {
                alignSelf: 'flex-start',
                paddingTop: 9,
            },
        },
    };
};
