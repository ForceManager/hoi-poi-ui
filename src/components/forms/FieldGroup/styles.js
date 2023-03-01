export default (theme) => {
    return {
        root: {
            outline: 'none',
            '&$alignLabelTop': {
                '& [class*="InputWrapper"]': {
                    alignItems: 'initial',
                    '& [class*="Label__root"]': {
                        marginTop: 12,
                        alignItems: 'initial',
                    },
                },
            },
        },
        alignLabelTop: {},
        rangeWrapper: {
            marginTop: -10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            '& > *': {
                marginRight: 16,
                '&:last-child': {
                    marginRight: 0,
                },
            },
            '&$verticalFieldsMode': {
                display: 'initial',
            },
        },
        verticalFieldsMode: {},
        divider: {
            height: 56,
            alignItems: 'center',
            display: 'flex',
        },
        dividerText: {
            ...theme.typography.body,
        },
        isFullWidth: {
            '& $rangeWrapper': {
                width: '100%',
            },
        },
    };
};
