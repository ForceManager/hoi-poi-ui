export default (theme) => ({
    '@keyframes progressAnimation': {
        from: { width: 'var(--progress-percentage-from)' },
        to: { width: 'var(--progress-percentage-to)' },
    },
    root: {
        display: 'block',
        height: 4,
        border: 'none',
        borderRadius: 2,
        overflow: 'hidden',
        backgroundColor: theme.colors.neutral300,
    },
    progressBar: {
        display: 'block',
        height: 'inherit',
        borderRadius: 2,
    },
    low: {
        '& $progressBar': {
            background: theme.colors.blue200,
        },
    },
    medium: {
        '& $progressBar': {
            background: theme.colors.blue300,
        },
    },
    high: {
        '& $progressBar': {
            background: theme.colors.blue400,
        },
    },
    higher: {
        '& $progressBar': {
            background: theme.colors.blue500,
        },
    },
    full: {
        '& $progressBar': {
            background: `transparent linear-gradient(to right, ${theme.colors.orange500} 0%, ${theme.colors.red500} 50%)`,
        },
    },
    animated: {
        '& $progressBar': {
            animationName: '$progressAnimation',
            animationDuration: 'var(--progress-duration)',
            animationDelay: 'var(--progress-delay)',
            animationTimingFunction: 'var(--progress-timing-function)',
            transition: 'background-color var(--progress-duration) var(--progress-timing-function)',
        },
    },
});
