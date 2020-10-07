export default (theme) => ({
    root: {
        height: 20,
    },
    disabledOn: {
        '& div': {
            '& .react-switch-bg': { backgroundColor: `${theme.colors.orange200}!important` },
        },
    },
    disabledOff: {
        '& div': {
            '& .react-switch-bg': { backgroundColor: `${theme.colors.neutral500}!important` },
        },
    },
});
