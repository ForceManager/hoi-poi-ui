export default (theme) => ({
    fadeTransition: {
        '&.fadeTransition-enter': {
            opacity: 0,
        },

        '&.fadeTransition-enter-active': {
            opacity: 1,
            transition: 'all .2s ease-in',
        },

        '&.fadeTransition-exit': {
            opacity: 1,
        },

        '&.fadeTransition-exit-active': {
            opacity: 0,
            transition: 'all .2s ease-in',
        },
    },
    slideRightTransition: {
        '&.slideRightTransition-enter': {
            transform: 'translateX(110%)',
        },

        '&.slideRightTransition-enter-active': {
            transform: 'translateX(0)',
            transition: 'all .3s ease-in-out',
        },

        '&.slideRightTransition-exit': {
            transform: 'translateX(0)',
        },

        '&.slideRightTransition-exit-active': {
            transform: 'translateX(110%)',
            transition: 'all .3s ease-in-out',
        },
    },
    slideLeftTransition: {
        '&.slideLeftTransition-enter': {
            transform: 'translateX(-110%)',
        },

        '&.slideLeftTransition-enter-active': {
            transform: 'translateX(0)',
            transition: 'all .3s ease-in-out',
        },

        '&.slideLeftTransition-exit': {
            transform: 'translateX(0)',
        },

        '&.slideLeftTransition-exit-active': {
            transform: 'translateX(-110%)',
            transition: 'all .3s ease-in-out',
        },
    },
});
