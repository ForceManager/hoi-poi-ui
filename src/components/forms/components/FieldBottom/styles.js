export default (theme) => {
    return {
        root: {
            width: 300,
            minWidth: 150,
            marginTop: -3,
        },
        isFullWidth: {
            width: '100%',
        },
        info: {
            ...theme.typography.caption,
            color: theme.colors.neutral600,
            paddingBottom: 5,
        },
        error: {
            ...theme.typography.caption,
            color: theme.colors.red500,
            paddingBottom: 5,
        },
    };
};
