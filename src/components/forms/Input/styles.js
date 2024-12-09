export default (theme) => {
    const titleBorder = {
        backgroundColor: theme.colors.primary.white,
        border: '1px solid transparent',
        borderBottom: `1px solid ${theme.colors.grey[100]}`,
    };
    return {
        root: {
            outline: 'none',
        },
        title: {
            '&$focused': {
                '& $inputComponents': {
                    ...titleBorder,
                    borderBottomColor: theme.colors.actionMajor[500],
                },
            },
            '&$error': {
                '& $inputComponents': {
                    ...titleBorder,
                },
            },
            '&$isReadOnly': {
                '& $inputComponents': {
                    ...titleBorder,
                },
            },
            '& $inputComponents': {
                padding: 0,
                borderRadius: 0,
                ...titleBorder,
            },
            '& $input': {
                ...theme.typography.h5,
            },
        },
        inputComponents: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: 320,
            boxSizing: 'border-box',
            padding: '0 12px',
            lineHeight: 0,
            borderRadius: '4px',
            border: '1px solid transparent',
            backgroundColor: theme.colors.grey[50],
            transition: 'all 0.15s ease',
        },
        input: {
            ...theme.typography.body,
            background: 'transparent',
            color: theme.colors.textLight.primary,
            width: '100%',
            height: '38px',
            alignItems: 'center',
            boxSizing: 'border-box',
            flexGrow: 1,
            outline: 'none',
            border: 'none',
            padding: 0,
            margin: 0,
            '&:invalid': {
                boxShadow: 'none',
            },
            '&::placeholder': {
                color: theme.colors.grey[500],
            },
            '&::-webkit-outer-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
            },
            '&::-webkit-inner-spin-button': {
                '-webkit-appearance': 'none',
                margin: 0,
            },
            '&[type=number]': {
                '-moz-appearance': 'textfield',
            },
        },
        error: {
            '& $inputComponents': {
                backgroundColor: theme.colors.primary.white,
                border: `1px solid ${theme.colors.semantic.negative500}`,
            },
        },
        isReadOnly: {
            '& $inputComponents': {
                border: `1px solid ${theme.colors.grey[200]}`,
                backgroundColor: theme.colors.primary.white,

                '&::placeholder': {
                    color: theme.colors.grey[200],
                },
            },
            '& $input': {
                cursor: 'text',
                color: theme.colors.textLight.secondary,
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
            backgroundColor: theme.colors.grey[100],
            margin: '0 2px',
        },
        copy: {},
        focused: {
            '& $inputComponents': {
                backgroundColor: theme.colors.primary.white,
                border: `1px solid ${theme.colors.actionMajor[500]}`,
            },
        },
        isFullWidth: {
            width: '100%',
            '& $inputComponents': {
                width: '100%',
                flex: 1,
            },
        },
        preComponent: {
            marginRight: 5,
        },
        postComponent: {
            marginLeft: 5,
            display: 'flex',
            alignItems: 'center',
            '& > span, > div': {
                marginLeft: '5px',
                '&:first-child': {
                    marginLeft: '0px',
                },
            },
        },
        customPostComponent: {
            marginLeft: 5,
        },
        postComponentClose: {
            display: 'flex',
            alignItems: 'center',
        },
        postComponentReadOnly: {},
        postComponentCopy: {},
        custom: {
            '& $inputComponents': {
                backgroundColor: 'transparent',
                border: 0,
                borderRadius: 0,
                padding: 0,
                '&::before': {
                    borderBottom: 'none',
                },
            },
        },
    };
};
