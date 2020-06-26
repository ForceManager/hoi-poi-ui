const arrowWidth = 10;
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
            padding: '20px',
            color: theme.colors.text.default,
            textDecoration: 'none',
            backgroundColor: theme.colors.white,
            boxShadow: theme.effects.boxShadow,
        },
        '& .hoi-poi-popover-arrow': {
            position: 'absolute',
            width: 0,
            height: 0,
            borderColor: 'transparent',
            borderStyle: 'solid',
        },
        // Placements
        '&.hoi-poi-popover-placement-top, &.hoi-poi-popover-placement-topLeft, &.hoi-poi-popover-placement-topRight': {
            padding: `${arrowWidth}px 0 ${distance}px 0`,
        },
        '&.hoi-poi-popover-placement-right, &.hoi-poi-popover-placement-rightTop, &.hoi-poi-popover-placement-rightBottom': {
            padding: `0 ${arrowWidth}px 0 ${distance}px`,
        },
        '&.hoi-poi-popover-placement-bottom, &.hoi-poi-popover-placement-bottomLeft, &.hoi-poi-popover-placement-bottomRight': {
            padding: `${distance}px 0 ${arrowWidth}px 0`,
        },
        '&.hoi-poi-popover-placement-left, &.hoi-poi-popover-placement-leftTop, &.hoi-poi-popover-placement-leftBottom': {
            padding: `0 ${distance}px 0 ${arrowWidth}px`,
        },
        // Arrow plaements
        '&.hoi-poi-popover-placement-top .hoi-poi-popover-arrow, &.hoi-poi-popover-placement-topLeft .hoi-poi-popover-arrow, &.hoi-poi-popover-placement-topRight .hoi-poi-popover-arrow': {
            bottom: distance - arrowWidth,
            marginLeft: -arrowWidth,
            borderWidth: `${arrowWidth}px ${arrowWidth}px  0`,
            borderTopColor: theme.colors.white,
        },
        '&.hoi-poi-popover-placement-top .hoi-poi-popover-arrow': {
            left: '50%',
        },
        '&.hoi-poi-popover-placement-topLeft .hoi-poi-popover-arrow': {
            left: '15%',
        },
        '&.hoi-poi-popover-placement-topRight .hoi-poi-popover-arrow': {
            right: '15%',
        },
        '&.hoi-poi-popover-placement-right .hoi-poi-popover-arrow, &.hoi-poi-popover-placement-rightTop .hoi-poi-popover-arrow, &.hoi-poi-popover-placement-rightBottom .hoi-poi-popover-arrow': {
            left: distance - arrowWidth,
            marginTop: -arrowWidth,
            borderWidth: `${arrowWidth}px ${arrowWidth}px ${arrowWidth}px 0`,
            borderRightColor: theme.colors.white,
        },
        '&.hoi-poi-popover-placement-right .hoi-poi-popover-arrow': {
            top: '50%',
        },
        '&.hoi-poi-popover-placement-rightTop .hoi-poi-popover-arrow': {
            top: '15%',
            marginTop: 0,
        },
        '&.hoi-poi-popover-placement-rightBottom .hoi-poi-popover-arrow': {
            bottom: '15%',
        },
        '&.hoi-poi-popover-placement-left .hoi-poi-popover-arrow, &.hoi-poi-popover-placement-leftTop .hoi-poi-popover-arrow, &.hoi-poi-popover-placement-leftBottom .hoi-poi-popover-arrow': {
            right: distance - arrowWidth,
            marginTop: -arrowWidth,
            borderWidth: `${arrowWidth}px 0 ${arrowWidth}px ${arrowWidth}px`,
            borderLeftColor: theme.colors.white,
        },
        '&.hoi-poi-popover-placement-left .hoi-poi-popover-arrow': {
            top: '50%',
        },

        '&.hoi-poi-popover-placement-leftTop .hoi-poi-popover-arrow': {
            top: '15%',
            marginTop: '0',
        },
        '&.hoi-poi-popover-placement-leftBottom .hoi-poi-popover-arrow': {
            bottom: '15%',
        },
        '&.hoi-poi-popover-placement-bottom .hoi-poi-popover-arrow, &.hoi-poi-popover-placement-bottomLeft .hoi-poi-popover-arrow, &.hoi-poi-popover-placement-bottomRight .hoi-poi-popover-arrow': {
            top: distance - arrowWidth,
            marginLeft: -arrowWidth,
            borderWidth: `0 ${arrowWidth}px ${arrowWidth}px`,
            borderBottomColor: theme.colors.white,
        },
        '&.hoi-poi-popover-placement-bottom .hoi-poi-popover-arrow': {
            left: '50%',
        },
        ':&.hoi-poi-popover-placement-bottomLeft .hoi-poi-popover-arrow': {
            left: '15%',
        },
        '&.hoi-poi-popover-placement-bottomRight .hoi-poi-popover-arrow': {
            right: '15%',
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
