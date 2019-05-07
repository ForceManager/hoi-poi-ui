export default (theme) => ({
    '@keyframes Toastify__bounceInRight': {
        'from, 60%, 75%, 90%, to': {
            animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        },
        from: {
            opacity: 0,
            transform: 'translate3d(3000px, 0, 0)',
        },
        '60%': {
            opacity: 1,
            transform: 'translate3d(-5px, 0, 0)',
        },
        '75%': {
            transform: 'translate3d(5px, 0, 0)',
        },
        '90%': {
            transform: 'translate3d(-5px, 0, 0)',
        },
        to: {
            transform: 'none',
        },
    },
    '@keyframes Toastify__bounceOutRight': {
        '20%': {
            opacity: 1,
            transform: 'translate3d(-5px, 0, 0)',
        },
        to: {
            opacity: 0,
            transform: 'translate3d(3000px, 0, 0)',
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
            borderLeft: `3px solid ${theme.colors.kiwi}`,
        },
        '& .Toastify__toast--error': {
            borderLeft: `3px solid ${theme.colors.raspBerry}`,
        },
    },
});
