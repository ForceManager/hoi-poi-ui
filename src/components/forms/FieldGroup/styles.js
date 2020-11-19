export default (theme) => {
    return {
        root: {
            outline: 'none',
        },
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
        },
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
