export default (theme) => {
    const timingFunction = {
        animationTimingFunction: 'cubic-bezier(.16, .37, .41, .99)',
    };

    return {
        '@keyframes Toastify__bounceInRight': {
            'from, 90%, to': {
                // animationTimingFunction: 'cubic-bezier(.16, .37, .41, .99)',
                ...timingFunction,
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
        '@keyframes Toastify__bounceInLeft': {
            'from, 90%, to': {
                ...timingFunction,
            },
            from: {
                opacity: 0,
                transform: 'translate3d(-3000px, 0, 0)',
            },
            '90%': {
                transform: 'translate3d(15px, 0, 0)',
            },
            to: {
                opacity: 1,
                transform: 'none',
            },
        },
        '@keyframes Toastify__bounceOutLeft': {
            from: {
                opacity: 1,
                transform: 'none',
            },
            to: {
                opacity: 0,
                transform: 'translate3d(-1000px, 0, 0)',
            },
        },
        '@keyframes Toastify__bounceInUp': {
            'from, 90%, to': {
                ...timingFunction,
            },
            from: {
                opacity: 0,
                transform: 'translate3d(0, 3000px, 0)',
            },
            '90%': {
                transform: 'translate3d(0, 15px, 0)',
            },
            to: {
                opacity: 1,
                transform: 'none',
            },
        },
        '@keyframes Toastify__bounceOutUp': {
            from: {
                opacity: 1,
                transform: 'none',
            },
            to: {
                opacity: 0,
                transform: 'translate3d(0, 3000px, 0)',
            },
        },
        '@keyframes Toastify__bounceInDown': {
            'from, 90%, to': {
                ...timingFunction,
            },
            from: {
                opacity: 0,
                transform: 'translate3d(0, -3000px, 0)',
            },
            '90%': {
                transform: 'translate(0, -15px, 0)',
            },
            to: {
                opacity: 1,
                transform: 'none',
            },
        },
        '@keyframes Toastify__bounceOutDown': {
            from: {
                opacity: 1,
                transform: 'none',
            },
            to: {
                opacity: 0,
                transform: 'translate3d(0, 15px, 0)',
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
            //enter
            '& .Toastify__bounce-enter--top-left': {
                animationName: '$Toastify__bounceInLeft',
            },
            '& .Toastify__bounce-enter--bottom-left': {
                animationName: '$Toastify__bounceInLeft',
            },
            '& .Toastify__bounce-enter--top-right': {
                animationName: '$Toastify__bounceInRight',
            },
            '& .Toastify__bounce-enter--bottom-right': {
                animationName: '$Toastify__bounceInRight',
            },
            '& .Toastify__bounce-enter--top-center': {
                animationName: '$Toastify__bounceInDown',
            },
            '& .Toastify__bounce-enter--bottom-center': {
                animationName: '$Toastify__bounceInUp',
            },

            //exit
            '& .Toastify__bounce-exit--top-left': {
                animationName: '$Toastify__bounceOutLeft',
            },
            '& .Toastify__bounce-exit--bottom-left': {
                animationName: '$Toastify__bounceOutLeft',
            },
            '& .Toastify__bounce-exit--top-right': {
                animationName: '$Toastify__bounceOutRight',
            },
            '& .Toastify__bounce-exit--bottom-right': {
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
            '&.Toastify__toast-container--top-left': {
                top: '1em',
                left: '1em',
            },
            '&.Toastify__toast-container--bottom-right': {
                bottom: '1em',
                right: '1em',
            },
            '&.Toastify__toast-container--bottom-left': {
                bottom: '1em',
                left: '1em',
            },
            '& .Toastify__toast': {
                position: 'relative',
                minHeight: '64px',
                boxSizing: 'border-box',
                marginBottom: '1rem',
                padding: '12px 16px',
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'space-between',
                maxHeight: '800px',
                overflow: 'hidden',
                cursor: 'pointer',
                direction: 'ltr',
                background: theme.colors.neutral900,
            },
            '& .Toastify__toast-body': {
                margin: 'auto 0',
                flex: '1',
                ...theme.typography.body,
                color: theme.colors.neutralBase,
            },
            '& .Toastify__toast--rtl': {
                direction: 'rtl',
            },
            '& .Toastify__toast--default': {},
            '& .Toastify__toast--info': {},
            '& .Toastify__toast--success': {
                borderLeft: `8px solid ${theme.colors.green500}`,
            },
            '& .Toastify__toast--error': {
                borderLeft: `8px solid ${theme.colors.red500}`,
            },
            '& .Toastify__toast--warning': {
                borderLeft: `8px solid ${theme.colors.yellow500}`,
            },
        },
    };
};
