export default (theme) => ({
    root: {
        display: 'block',
        height: 4,
        border: 'none',
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: theme.colors.neutral300,
        '&::-webkit-progress-bar': {
            backgroundColor: theme.colors.neutral300,
        },
        '&::-webkit-progress-value': {
            transition: 'all .2s linear',
            borderRadius: 2,
        },
        '&::-moz-progress-bar': {
            transition: 'all .2s linear',
            borderRadius: 2,
        },
    },
    low: {
        '&::-webkit-progress-value': {
            background: theme.colors.blue200,
        },
        '&::-moz-progress-bar': {
            background: theme.colors.blue200,
        },
    },
    medium: {
        '&::-webkit-progress-value': {
            background: theme.colors.blue300,
        },
        '&::-moz-progress-bar': {
            background: theme.colors.blue300,
        },
    },
    high: {
        '&::-webkit-progress-value': {
            background: theme.colors.blue400,
        },
        '&::-moz-progress-bar': {
            background: theme.colors.blue400,
        },
    },
    higher: {
        '&::-webkit-progress-value': {
            background: theme.colors.blue500,
        },
        '&::-moz-progress-bar': {
            background: theme.colors.blue500,
        },
    },
    full: {
        '&::-webkit-progress-value': {
            background: `transparent linear-gradient(to right, ${theme.colors.orange500} 0%, ${theme.colors.red500} 50%)`,
        },
        '&::-moz-progress-bar': {
            background: `transparent linear-gradient(to right, ${theme.colors.orange500} 0%, ${theme.colors.red500} 50%)`,
        },
    },
});
