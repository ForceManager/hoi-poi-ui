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
            '& $formControl': {
                padding: 0,
                ...titleBorder,
            },
            '&$focused': {
                '& $formControl': {
                    ...titleBorder,
                },
            },
            '&$error': {
                '& $formControl': {
                    ...titleBorder,
                },
            },
            '&$isReadOnly': {
                '& $formControl': {
                    ...titleBorder,
                },
            },
            '& $input': {
                ...theme.typography.h5,
            },
            '& $info': {
                marginLeft: 0,
            },
            '& $errorInfo': {
                marginLeft: 0,
            },
        },
        Label: {
            width: 153,
            marginRight: 17,
            padding: '0 0 8px 0',
        },
        vertical: {
            display: 'block',
            padding: '15px 0 10px 0',
            marginLeft: '0 !important',
            '& $Label': {
                width: '100%',
            },
        },
        horizontal: {
            display: 'flex',
            alignItems: 'center',
            padding: '15px 0 10px 0',
            '& $error': {},
            '& $Label': {
                padding: 0,
            },
        },
        info: {
            ...theme.typography.caption,
            position: 'absolute',
            marginLeft: -10,
            lineHeight: '20px',
            bottom: -24,
            color: theme.colors.neutral600,
        },
        errorInfo: {
            ...theme.typography.caption,
            position: 'absolute',
            marginLeft: -10,
            lineHeight: '20px',
            bottom: -24,
            color: theme.colors.red500,
        },
        errorInfoSecond: {
            bottom: -42,
        },
        formControl: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            width: 300,
            boxSizing: 'border-box',
            padding: '0 10px',
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
            lineHeight: '20px',
            height: '40px',
            alignItems: 'center',
            boxSizing: 'border-box',
            flexGrow: 1,
            outline: 'none',
            border: 'none',
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
        withMessage: {
            paddingBottom: '30px !important',
        },
        withTwoMessage: {
            paddingBottom: '45px !important',
            '& $error': {
                bottom: -39,
            },
        },
        error: {
            '& $formControl': {
                backgroundColor: theme.colors.neutralBase,
                border: `1px solid ${theme.colors.red500}`,
            },
        },
        isReadOnly: {
            '& $formControl': {
                border: `1px solid ${theme.colors.neutral500}`,
                backgroundColor: theme.colors.neutralBase,
                color: theme.colors.neutral500,
                '&::placeholder': {
                    color: theme.colors.neutral500,
                },
            },
            '& $input': {
                cursor: 'default',
            },
        },
        isReadAndDuplicable: {
            '& $postCloseComponent': {
                display: 'inline-flex',
            },
        },
        isClickable: {
            cursor: 'pointer',
        },
        clear: {
            width: 10,
            height: 10,
            '& span': {
                width: '100%',
                height: '100%',
            },
        },
        copy: {},
        focused: {
            '& $formControl': {
                backgroundColor: theme.colors.neutralBase,
                border: `1px solid ${theme.colors.orange500}`,
            },
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
        preComponent: {
            marginRight: 5,
        },
        postComponent: {
            marginLeft: 5,
            display: 'flex',
            alignItems: 'center',
        },
        customPostComponent: {
            marginLeft: 5,
        },
        postCloseComponent: {
            '& > span, > div': {
                marginLeft: '5px',
                '&:first-child': {
                    marginLeft: '0px',
                },
            },
        },
        custom: {
            '& $formControl': {
                '&::before': {
                    borderBottom: 'none',
                },
            },
        },
    };
};
