export default (theme) => {
    return {
        root: {
            outline: 'none',
        },
        rangeWrapper: {
            marginTop: -10,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            '& > *': {
                marginRight: 16,
                '&:last-child': {
                    marginRight: 0,
                },
            },
        },
        divider: {},
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
