export default (theme) => ({
    smooth: {
        height: 'auto',
        transition: 'all .3s ease-in-out',
    },
    fadeTransition: {
        '&.fadeTransition-enter': {
            opacity: 0,
        },

        '&.fadeTransition-enter-active': {
            opacity: 1,
            transition: 'all 200ms ease-in',
        },

        '&.fadeTransition-exit': {
            opacity: 1,
        },

        '&.fadeTransition-exit-active': {
            opacity: 0,
            transition: 'all 200ms ease-in',
        },
    },
    slideLeftTransition: {
        '&.slideLeftTransition-enter': {
            transform: 'translateX(110%)',
        },

        '&.slideLeftTransition-enter-active': {
            transform: 'translateX(0)',
            transition: 'all 300ms ease-in-out',
        },

        '&.slideLeftTransition-exit': {
            transform: 'translateX(0)',
        },

        '&.slideLeftTransition-exit-active': {
            transform: 'translateX(110%)',
            transition: 'all 300ms ease-in-out',
        },
    },
    slideRightTransition: {
        '&.slideRightTransition-enter': {
            transform: 'translateX(-110%)',
        },

        '&.slideRightTransition-enter-active': {
            transform: 'translateX(0)',
            transition: 'opacity 300ms ease-in-out',
        },

        '&.slideRightTransition-exit': {
            transform: 'translateX(0)',
        },

        '&.slideRightTransition-exit-active': {
            transform: 'translateX(-110%)',
            transition: 'opacity 300ms ease-in-out',
        },
    },
    slideDownTransition: {
        '&.slideDownTransition-enter': {
            transform: 'translateY(-100%)',
            opacity: 0,
        },

        '&.slideDownTransition-enter-active': {
            transform: 'translateY(0%)',
            opacity: 1,
            transition: 'all .3s ease-in-out',
        },

        '&.slideDownTransition-exit': {
            transform: 'translateY(0%)',
            opacity: 1,
        },

        '&.slideDownTransition-exit-active': {
            transform: 'translateY(-100%)',
            opacity: 0,
            transition: 'all .3s ease-in-out',
        },
    },
});
