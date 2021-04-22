const arrowWidth = 4;
const distance = arrowWidth;

export default (theme) => ({
    root: {
        position: 'absolute',
        zIndex: 9999,
        '&.hoi-poi-tooltip-hidden': {
            display: 'none',
        },
        '& .hoi-poi-tooltip-inner': {
            padding: '4px 8px',
            color: 'white',
            ...theme.typography.caption,
            textAlign: 'left',
            textDecoration: 'none',
            backgroundColor: theme.colors.neutral800,
            borderRadius: '4px',
        },
        '& .hoi-poi-tooltip-arrow': {
            position: 'absolute',
            width: 0,
            height: 0,
            borderColor: 'transparent',
            borderStyle: 'solid',
        },
        // Placements
        '&.hoi-poi-tooltip-placement-top, &.hoi-poi-tooltip-placement-topLeft, &.hoi-poi-tooltip-placement-topRight': {
            padding: `${arrowWidth}px 0 ${distance}px 0`,
        },
        '&.hoi-poi-tooltip-placement-right, &.hoi-poi-tooltip-placement-rightTop, &.hoi-poi-tooltip-placement-rightBottom': {
            padding: `0 ${arrowWidth}px 0 ${distance}px`,
        },
        '&.hoi-poi-tooltip-placement-bottom, &.hoi-poi-tooltip-placement-bottomLeft, &.hoi-poi-tooltip-placement-bottomRight': {
            padding: `${distance}px 0 ${arrowWidth}px 0`,
        },
        '&.hoi-poi-tooltip-placement-left, &.hoi-poi-tooltip-placement-leftTop, &.hoi-poi-tooltip-placement-leftBottom': {
            padding: `0 ${distance}px 0 ${arrowWidth}px`,
        },
        // Arrow plaements
        '&.hoi-poi-tooltip-placement-top .hoi-poi-tooltip-arrow, &.hoi-poi-tooltip-placement-topLeft .hoi-poi-tooltip-arrow, &.hoi-poi-tooltip-placement-topRight .hoi-poi-tooltip-arrow': {
            bottom: distance - arrowWidth,
            marginLeft: -arrowWidth,
            borderWidth: `${arrowWidth}px ${arrowWidth}px  0`,
            borderTopColor: theme.colors.neutral800,
        },
        '&.hoi-poi-tooltip-placement-top .hoi-poi-tooltip-arrow': {
            left: '50%',
        },
        '&.hoi-poi-tooltip-placement-topLeft .hoi-poi-tooltip-arrow': {
            left: '15%',
        },
        '&.hoi-poi-tooltip-placement-topRight .hoi-poi-tooltip-arrow': {
            right: '15%',
        },
        '&.hoi-poi-tooltip-placement-right .hoi-poi-tooltip-arrow, &.hoi-poi-tooltip-placement-rightTop .hoi-poi-tooltip-arrow, &.hoi-poi-tooltip-placement-rightBottom .hoi-poi-tooltip-arrow': {
            left: distance - arrowWidth,
            marginTop: -arrowWidth,
            borderWidth: `${arrowWidth}px ${arrowWidth}px ${arrowWidth}px 0`,
            borderRightColor: theme.colors.neutral800,
        },
        '&.hoi-poi-tooltip-placement-right .hoi-poi-tooltip-arrow': {
            top: '50%',
        },
        '&.hoi-poi-tooltip-placement-rightTop .hoi-poi-tooltip-arrow': {
            top: '15%',
            marginTop: 0,
        },
        '&.hoi-poi-tooltip-placement-rightBottom .hoi-poi-tooltip-arrow': {
            bottom: '15%',
        },
        '&.hoi-poi-tooltip-placement-left .hoi-poi-tooltip-arrow, &.hoi-poi-tooltip-placement-leftTop .hoi-poi-tooltip-arrow, &.hoi-poi-tooltip-placement-leftBottom .hoi-poi-tooltip-arrow': {
            right: distance - arrowWidth,
            marginTop: -arrowWidth,
            borderWidth: `${arrowWidth}px 0 ${arrowWidth}px ${arrowWidth}px`,
            borderLeftColor: theme.colors.neutral800,
        },
        '&.hoi-poi-tooltip-placement-left .hoi-poi-tooltip-arrow': {
            top: '50%',
        },

        '&.hoi-poi-tooltip-placement-leftTop .hoi-poi-tooltip-arrow': {
            top: '15%',
            marginTop: '0',
        },
        '&.hoi-poi-tooltip-placement-leftBottom .hoi-poi-tooltip-arrow': {
            bottom: '15%',
        },
        '&.hoi-poi-tooltip-placement-bottom .hoi-poi-tooltip-arrow, &.hoi-poi-tooltip-placement-bottomLeft .hoi-poi-tooltip-arrow, &.hoi-poi-tooltip-placement-bottomRight .hoi-poi-tooltip-arrow': {
            top: distance - arrowWidth,
            marginLeft: -arrowWidth,
            borderWidth: `0 ${arrowWidth}px ${arrowWidth}px`,
            borderBottomColor: theme.colors.neutral800,
        },
        '&.hoi-poi-tooltip-placement-bottom .hoi-poi-tooltip-arrow': {
            left: '50%',
        },
        ':&.hoi-poi-tooltip-placement-bottomLeft .hoi-poi-tooltip-arrow': {
            left: '15%',
        },
        '&.hoi-poi-tooltip-placement-bottomRight .hoi-poi-tooltip-arrow': {
            right: '15%',
        },
        // Transition
        '&.hoi-poi-tooltip--fade-appear': {
            opacity: 0,
        },
        '&.hoi-poi-tooltip--fade-appear-active': {
            opacity: 1,
            transition: 'opacity 200ms',
            willChange: 'opacity',
        },
        '&.hoi-poi-tooltip--fade-enter': {
            opacity: 0,
        },
        '&.hoi-poi-tooltip--fade-enter.hoi-poi-tooltip--fade-enter-active': {
            opacity: 1,
            transition: 'opacity 200ms',
            willChange: 'opacity',
        },
        '&.hoi-poi-tooltip--fade-leave': {
            opacity: 1,
        },
        '&.hoi-poi-tooltip--fade-leave.hoi-poi-tooltip--fade-leave-active': {
            opacity: 0,
            transition: 'opacity 200ms',
            willChange: 'opacity',
        },
    },
});
