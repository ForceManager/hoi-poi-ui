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
        backgroundColor: theme.colors.grey[50],
    },
    progressBar: {
        display: 'block',
        height: 'inherit',
        borderRadius: 2,
    },
    low: {
        '& $progressBar': {
            background: theme.colors.semantic.positiveCustom200,
        },
    },
    medium: {
        '& $progressBar': {
            background: theme.colors.semantic.positiveCustom300,
        },
    },
    high: {
        '& $progressBar': {
            background: theme.colors.semantic.positive400,
        },
    },
    higher: {
        '& $progressBar': {
            background: theme.colors.semantic.positive500,
        },
    },
    full: {
        '& $progressBar': {
            background: theme.colors.semantic.negative500,
        },
    },
    animated: {
        '& $progressBar': {
            animationName: '$progressAnimation',
            animationDuration: 'var(--progress-duration)',
            animationDelay: 'var(--progress-delay)',
            animationTimingFunction: 'var(--progress-timing-function)',
            transition: 'all var(--progress-duration) var(--progress-timing-function)',
        },
    },
});
