export default (theme) => ({
    root: {
        height: 20,
    },
    disabledOn: {
        '& div': {
            '& .react-switch-bg': { backgroundColor: `${theme.colors.actionMajor[150]}!important` },
        },
    },
    disabledOff: {
        '& div': {
            '& .react-switch-bg': { backgroundColor: `${theme.colors.grey[200]}!important` },
        },
    },
});
