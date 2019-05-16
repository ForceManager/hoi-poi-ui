export default (theme) => ({
    '@keyframes Toastify__bounceInRight': {
        'from, 90%, to': {
            animationTimingFunction: 'cubic-bezier(.16, .37, .41, .99)',
        },
        from: {
            opacity: 0,
            transform: 'translate3d(3000px, 0, 0)',
        },

        '90%': {
            transform: 'translate3d(-15px, 0, 0)',
        },
        to: {
            opacity: 1,
            transform: 'none',
        },
    },
    '@keyframes Toastify__bounceOutRight': {
        from: {
            opacity: 1,
            transform: 'none',
        },
        to: {
            opacity: 0,
            transform: 'translate3d(1000px, 0, 0)',
        },
    },
    '@keyframes Toastify__trackProgress': {
        '0%': {
            transform: 'scaleX(1)',
        },
        '100%': {
            transform: 'scaleX(0)',
        },
    },
    root: {
        '& .Toastify__bounce-enter--top-right': {
            animationName: '$Toastify__bounceInRight',
        },
        '& .Toastify__bounce-exit--top-right': {
            animationName: '$Toastify__bounceOutRight',
        },
        '& .Toastify__progress-bar--animated': {
            animation: '$Toastify__trackProgress linear 1 forwards',
        },
        '&.Toastify__toast-container': {
            zIndex: '9999',
            position: 'fixed',
            padding: '4px',
            width: '350px',
            boxSizing: 'border-box',
        },
        '&.Toastify__toast-container--top-right': {
            top: '1em',
            right: '1em',
        },
        '& .Toastify__toast': {
            position: 'relative',
            minHeight: '64px',
            boxSizing: 'border-box',
            marginBottom: '1rem',
            padding: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            maxHeight: '800px',
            overflow: 'hidden',
            cursor: 'pointer',
            direction: 'ltr',
            background: theme.colors.text.black,
        },
        '& .Toastify__toast-body': {
            margin: 'auto 0',
            flex: '1',
            ...theme.typography.defaultText,
            color: theme.colors.text.white,
        },
        '& .Toastify__toast--rtl': {
            direction: 'rtl',
        },
        '& .Toastify__toast--default': {},
        '& .Toastify__toast--info': {},
        '& .Toastify__toast--success': {
            borderLeft: `3px solid ${theme.colors.green}`,
        },
        '& .Toastify__toast--error': {
            borderLeft: `3px solid ${theme.colors.red}`,
        },
    },
});
