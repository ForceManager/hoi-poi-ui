const arrowWidth = 5;
const distance = arrowWidth;

export default (theme) => ({
    root: {
        position: 'absolute',
        zIndex: 9999,
        maxWidth: 400,
        '&.hoi-poi-popover-hidden': {
            display: 'none',
        },
        '& .hoi-poi-popover-inner': {
            ...theme.typography.defaultText,
            padding: 32,
            color: theme.colors.neutral900,
            lineHeight: 1.4285714,
            textDecoration: 'none',
            backgroundColor: theme.colors.neutralBase,
            boxShadow: theme.effects.boxShadow,
            borderRadius: 16,
        },
        '& .hoi-poi-popover-arrow': {
            display: 'none',
        },
        // Placements
        '&.hoi-poi-popover-placement-top, &.hoi-poi-popover-placement-topLeft, &.hoi-poi-popover-placement-topRight':
            {
                padding: `${arrowWidth}px 0 ${distance}px 0`,
            },
        '&.hoi-poi-popover-placement-right, &.hoi-poi-popover-placement-rightTop, &.hoi-poi-popover-placement-rightBottom':
            {
                padding: `0 ${arrowWidth}px 0 ${distance}px`,
            },
        '&.hoi-poi-popover-placement-bottom, &.hoi-poi-popover-placement-bottomLeft, &.hoi-poi-popover-placement-bottomRight':
            {
                padding: `${distance}px 0 ${arrowWidth}px 0`,
            },
        '&.hoi-poi-popover-placement-left, &.hoi-poi-popover-placement-leftTop, &.hoi-poi-popover-placement-leftBottom':
            {
                padding: `0 ${distance}px 0 ${arrowWidth}px`,
            },
        // Transition
        '&.hoi-poi-popover--fade-appear': {
            opacity: 0,
        },
        '&.hoi-poi-popover--fade-appear-active': {
            opacity: 1,
            transition: 'opacity 200ms',
            willChange: 'opacity',
        },
        '&.hoi-poi-popover--fade-enter': {
            opacity: 0,
        },
        '&.hoi-poi-popover--fade-enter.hoi-poi-popover--fade-enter-active': {
            opacity: 1,
            transition: 'opacity 200ms',
            willChange: 'opacity',
        },
        '&.hoi-poi-popover--fade-leave': {
            opacity: 1,
        },
        '&.hoi-poi-popover--fade-leave.hoi-poi-popover--fade-leave-active': {
            opacity: 0,
            transition: 'opacity 200ms',
            willChange: 'opacity',
        },
    },
});
