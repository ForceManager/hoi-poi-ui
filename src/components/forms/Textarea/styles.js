export default (theme) => {
    return {
        root: {
            outline: 'none',
        },
        textareaComponents: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: 320,
            boxSizing: 'border-box',
            padding: '8px 12px',
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
            width: '100%',
            minHeight: 60,
            alignItems: 'center',
            boxSizing: 'border-box',
            flexGrow: 1,
            outline: 'none',
            border: 'none',
            padding: 0,
            margin: 0,
            resize: 'none',
            caretColor: theme.colors.orange500,
            '&::placeholder': {
                color: theme.colors.neutral600,
            },
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
            marginLeft: 8,
            display: 'flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
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
