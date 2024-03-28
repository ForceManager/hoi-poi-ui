export default (theme) => ({
    '@keyframes spinAnimation': {
        to: { transform: 'rotate(360deg)', '-webkit-transform': 'rotate(360deg)' },
    },
    root: {
        display: 'inline-block',
        animation: '$spinAnimation 1s linear infinite',
        borderStyle: 'solid',
        borderRadius: '50%',
    },
    // Colors
    primary: {
        borderColor: theme.colors.orange200,
        borderTopColor: theme.colors.orange500,
    },
    danger: {
        borderColor: theme.colors.red200,
        borderTopColor: theme.colors.red500,
    },
    white: {
        borderColor: 'transparent',
        borderTopColor: 'white',
    },
    // Sizes
    mini: {
        // 12
        borderWidth: '3px',
        borderRadius: '50%',
        height: '9px',
        width: '9px',
        marginBottom: '-2px',
    },
    tiny: {
        // 16
        borderWidth: '3px',
        borderRadius: '50%',
        height: '13px',
        width: '13px',
        marginBottom: '-2px',
    },
    small: {
        // 24
        borderWidth: '3px',
        borderRadius: '50%',
        height: '21px',
        width: '21px',
        marginBottom: '-2px',
    },
    medium: {
        // 32
        borderWidth: '3px',
        borderRadius: '50%',
        height: '29px',
        width: '29px',
        marginBottom: '-3px',
    },
    large: {
        // 48
        borderWidth: '3px',
        borderRadius: '50%',
        height: '45px',
        width: '45px',
        marginBottom: '-3px',
    },
    big: {
        // 54
        borderWidth: '4px',
        borderRadius: '50%',
        height: '50px',
        width: '50px',
        marginBottom: '-3px',
    },
    huge: {
        // 62
        borderWidth: '4px',
        borderRadius: '50%',
        height: '58px',
        width: '58px',
        marginBottom: '-3px',
    },
    massive: {
        // 68
        borderWidth: '4px',
        borderRadius: '50%',
        height: '64px',
        width: '64px',
        marginBottom: '-3px',
    },
});
