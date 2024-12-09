const timingFunction = {
    animationTimingFunction: 'cubic-bezier(.16, .37, .41, .99)',
};

export default (theme) => ({
    '@global': {
        '.Toastify__toast-container': {
            zIndex: 9999,
            webkitTransform: 'translate3d(0, 0, 9999px)',
            position: 'fixed',
            padding: 4,
            width: 350,
            boxSizing: 'border-box',
        },
        '.Toastify__toast-container--top-left': {
            top: '1em',
            left: '1em',
        },
        '.Toastify__toast-container--top-center': {
            top: '1em',
            left: '50%',
            transform: 'translateX(-50%)',
        },
        '.Toastify__toast-container--top-right': {
            top: '1em',
            right: '1em',
        },
        '.Toastify__toast-container--bottom-left': {
            bottom: '1em',
            left: '1em',
        },
        '.Toastify__toast-container--bottom-center': {
            bottom: '1em',
            left: '50%',
            transform: 'translateX(-50%)',
        },
        '.Toastify__toast-container--bottom-right': {
            bottom: '1em',
            right: '1em',
        },
        '@media only screen and (max-width : 480px)': {
            '.Toastify__toast-container': {
                width: '100vw',
                padding: '0',
                left: '0',
                margin: '0',
            },
            '.Toastify__toast-container--top-left, .Toastify__toast-container--top-center, .Toastify__toast-container--top-right':
                {
                    top: '0',
                    transform: 'translateX(0)',
                },
            '.Toastify__toast-container--bottom-left, .Toastify__toast-container--bottom-center, .Toastify__toast-container--bottom-right':
                {
                    bottom: '0',
                    transform: 'translateX(0)',
                },
            '.Toastify__toast-container--rtl': {
                right: '0',
                left: 'initial',
            },
            '.Toastify__toast': {
                marginBottom: '0',
                borderRadius: '0',
            },
        },
        '.Toastify__toast': {
            position: 'relative',
            minHeight: 64,
            boxSizing: 'border-box',
            marginBottom: '1rem',
            padding: '12px 16px',
            borderRadius: 8,
            display: 'flex',
            fallbacks: [
                {
                    display: '-ms-flexbox',
                },
            ],
            msFlexPack: 'justify',
            justifyContent: 'space-between',
            maxHeight: 800,
            overflow: 'hidden',
            cursor: 'pointer',
            direction: 'ltr',
            background: theme.colors.textLight.primary,
        },
        '.Toastify__toast--rtl': {
            direction: 'rtl',
        },
        '.Toastify__toast-body': {
            margin: 'auto 0',
            msFlex: '1 1 auto',
            flex: '1',
            ...theme.typography.body,
            color: theme.colors.primary.white,
        },
        '.Toastify__toast-icon': {
            webkitMarginEnd: 10,
            marginInlineEnd: 10,
            width: 20,
            msFlexNegative: '0',
            flexShrink: '0',
            display: 'flex',
            fallbacks: [
                {
                    display: '-ms-flexbox',
                },
            ],
        },
        '.Toastify--animate': {
            animationFillMode: 'both',
            animationDuration: '0.7s',
        },
        '.Toastify--animate-icon': {
            animationFillMode: 'both',
            animationDuration: '0.3s',
        },
        '.Toastify__toast--default': {},
        '.Toastify__toast--info': {},
        '.Toastify__toast--success': {
            borderLeft: `8px solid ${theme.colors.green500}`,
        },
        '.Toastify__toast--error': {
            borderLeft: `8px solid ${theme.colors.semantic.negative500}`,
        },
        '.Toastify__toast--warning': {
            borderLeft: `8px solid ${theme.colors.yellow500}`,
        },
        '.Toastify__progress-bar--info': {
            background: theme.colors.green500,
        },
        '.Toastify__progress-bar--success': {
            background: theme.colors.green500,
        },
        '.Toastify__progress-bar--warning': {
            background: theme.colors.yellow500,
        },
        '.Toastify__progress-bar--error': {
            background: theme.colors.semantic.negative500,
        },
        '@keyframes Toastify__trackProgress': {
            '0%': {
                transform: 'scaleX(1)',
            },
            '100%': {
                transform: 'scaleX(0)',
            },
        },
        '.Toastify__progress-bar': {
            position: 'absolute',
            bottom: '0',
            left: '0',
            width: '100%',
            height: 0,
            zIndex: 9999,
            opacity: '0.7',
            transformOrigin: 'left',
            display: 'none',
        },
        '.Toastify__progress-bar--animated': {
            animation: 'Toastify__trackProgress linear 1 forwards',
        },
        '.Toastify__progress-bar--controlled': {
            transition: 'transform 0.2s',
        },
        '.Toastify__progress-bar--rtl': {
            right: '0',
            left: 'initial',
            transformOrigin: 'right',
        },
        '.Toastify__spinner': {
            width: 20,
            height: 20,
            boxSizing: 'border-box',
            border: '2px solid',
            borderRadius: '100%',
            borderColor: '#e0e0e0',
            borderRightColor: '#616161',
            animation: 'Toastify__spin 0.65s linear infinite',
        },
        '@keyframes Toastify__bounceInRight': {
            'from, 90%, to': {
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
        '.Toastify__bounce-enter--top-left, .Toastify__bounce-enter--bottom-left': {
            animationName: 'Toastify__bounceInLeft',
        },
        '.Toastify__bounce-enter--top-right, .Toastify__bounce-enter--bottom-right': {
            animationName: 'Toastify__bounceInRight',
        },
        '.Toastify__bounce-enter--top-center': {
            animationName: 'Toastify__bounceInDown',
        },
        '.Toastify__bounce-enter--bottom-center': {
            animationName: 'Toastify__bounceInUp',
        },
        '.Toastify__bounce-exit--top-left, .Toastify__bounce-exit--bottom-left': {
            animationName: 'Toastify__bounceOutLeft',
        },
        '.Toastify__bounce-exit--top-right, .Toastify__bounce-exit--bottom-right': {
            animationName: 'Toastify__bounceOutRight',
        },
        '.Toastify__bounce-exit--top-center': {
            animationName: 'Toastify__bounceOutUp',
        },
        '.Toastify__bounce-exit--bottom-center': {
            animationName: 'Toastify__bounceOutDown',
        },
        '@keyframes Toastify__zoomIn': {
            from: {
                opacity: '0',
                transform: 'scale3d(0.3, 0.3, 0.3)',
            },
            '50%': {
                opacity: '1',
            },
        },
        '@keyframes Toastify__zoomOut': {
            from: {
                opacity: '1',
            },
            '50%': {
                opacity: '0',
                transform: 'scale3d(0.3, 0.3, 0.3)',
            },
            to: {
                opacity: '0',
            },
        },
        '.Toastify__zoom-enter': {
            animationName: 'Toastify__zoomIn',
        },
        '.Toastify__zoom-exit': {
            animationName: 'Toastify__zoomOut',
        },
        '@keyframes Toastify__flipIn': {
            from: {
                transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
                animationTimingFunction: 'ease-in',
                opacity: '0',
            },
            '40%': {
                transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
                animationTimingFunction: 'ease-in',
            },
            '60%': {
                transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)',
                opacity: '1',
            },
            '80%': {
                transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)',
            },
            to: {
                transform: 'perspective(400px)',
            },
        },
        '@keyframes Toastify__flipOut': {
            from: {
                transform: 'perspective(400px)',
            },
            '30%': {
                transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
                opacity: '1',
            },
            to: {
                transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
                opacity: '0',
            },
        },
        '.Toastify__flip-enter': {
            animationName: 'Toastify__flipIn',
        },
        '.Toastify__flip-exit': {
            animationName: 'Toastify__flipOut',
        },
        '@keyframes Toastify__slideInRight': {
            from: {
                transform: 'translate3d(110%, 0, 0)',
                visibility: 'visible',
            },
            to: {
                transform: 'translate3d(0, 0, 0)',
            },
        },
        '@keyframes Toastify__slideInLeft': {
            from: {
                transform: 'translate3d(-110%, 0, 0)',
                visibility: 'visible',
            },
            to: {
                transform: 'translate3d(0, 0, 0)',
            },
        },
        '@keyframes Toastify__slideInUp': {
            from: {
                transform: 'translate3d(0, 110%, 0)',
                visibility: 'visible',
            },
            to: {
                transform: 'translate3d(0, 0, 0)',
            },
        },
        '@keyframes Toastify__slideInDown': {
            from: {
                transform: 'translate3d(0, -110%, 0)',
                visibility: 'visible',
            },
            to: {
                transform: 'translate3d(0, 0, 0)',
            },
        },
        '@keyframes Toastify__slideOutRight': {
            from: {
                transform: 'translate3d(0, 0, 0)',
            },
            to: {
                visibility: 'hidden',
                transform: 'translate3d(110%, 0, 0)',
            },
        },
        '@keyframes Toastify__slideOutLeft': {
            from: {
                transform: 'translate3d(0, 0, 0)',
            },
            to: {
                visibility: 'hidden',
                transform: 'translate3d(-110%, 0, 0)',
            },
        },
        '@keyframes Toastify__slideOutDown': {
            from: {
                transform: 'translate3d(0, 0, 0)',
            },
            to: {
                visibility: 'hidden',
                transform: 'translate3d(0, 500px, 0)',
            },
        },
        '@keyframes Toastify__slideOutUp': {
            from: {
                transform: 'translate3d(0, 0, 0)',
            },
            to: {
                visibility: 'hidden',
                transform: 'translate3d(0, -500px, 0)',
            },
        },
        '.Toastify__slide-enter--top-left, .Toastify__slide-enter--bottom-left': {
            animationName: 'Toastify__slideInLeft',
        },
        '.Toastify__slide-enter--top-right, .Toastify__slide-enter--bottom-right': {
            animationName: 'Toastify__slideInRight',
        },
        '.Toastify__slide-enter--top-center': {
            animationName: 'Toastify__slideInDown',
        },
        '.Toastify__slide-enter--bottom-center': {
            animationName: 'Toastify__slideInUp',
        },
        '.Toastify__slide-exit--top-left, .Toastify__slide-exit--bottom-left': {
            animationName: 'Toastify__slideOutLeft',
        },
        '.Toastify__slide-exit--top-right, .Toastify__slide-exit--bottom-right': {
            animationName: 'Toastify__slideOutRight',
        },
        '.Toastify__slide-exit--top-center': {
            animationName: 'Toastify__slideOutUp',
        },
        '.Toastify__slide-exit--bottom-center': {
            animationName: 'Toastify__slideOutDown',
        },
        '@keyframes Toastify__spin': {
            from: {
                transform: 'rotate(0deg)',
            },
            to: {
                transform: 'rotate(360deg)',
            },
        },
    },
});
