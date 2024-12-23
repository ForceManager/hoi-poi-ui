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
        backgroundColor: theme.colors.grey[100],
    },
    progressBar: {
        display: 'block',
        height: 'inherit',
        borderRadius: 2,
    },
    low: {
        '& $progressBar': {
            background: theme.colors.semantic.infoCustom100,
        },
    },
    medium: {
        '& $progressBar': {
            background: theme.colors.semantic.info150,
        },
    },
    high: {
        '& $progressBar': {
            background: theme.colors.semantic.info400,
        },
    },
    higher: {
        '& $progressBar': {
            background: theme.colors.semantic.info500,
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
            transition: 'background-color var(--progress-duration) var(--progress-timing-function)',
        },
    },
});
