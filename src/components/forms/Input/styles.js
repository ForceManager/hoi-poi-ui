export default (theme) => {
    const titleBorder = {
        backgroundColor: theme.colors.neutralBase,
        border: '1px solid transparent',
        borderBottom: `1px solid ${theme.colors.neutral400}`,
    };
    return {
        root: {
            outline: 'none',
        },
        title: {
            '&$focused': {
                '& $inputComponents': {
                    ...titleBorder,
                    borderBottomColor: theme.colors.orange500,
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
            backgroundColor: theme.colors.neutral200,
            transition: 'all 0.15s ease',
        },
        input: {
            ...theme.typography.body,
            background: 'transparent',
            color: theme.colors.neutral900,
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
                color: theme.colors.neutral600,
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
                backgroundColor: theme.colors.neutralBase,
                border: `1px solid ${theme.colors.red500}`,
            },
        },
        isReadOnly: {
            '& $inputComponents': {
                border: `1px solid ${theme.colors.neutral500}`,
                backgroundColor: theme.colors.neutralBase,

                '&::placeholder': {
                    color: theme.colors.neutral500,
                },
            },
            '& $input': {
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
            '& $inputComponents': {
                backgroundColor: theme.colors.neutralBase,
                border: `1px solid ${theme.colors.orange500}`,
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
                '&::before': {
                    borderBottom: 'none',
                },
            },
        },
    };
};
