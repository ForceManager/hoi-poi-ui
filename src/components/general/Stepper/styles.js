export default (theme) => ({
    root: {
        '& .rc-steps': {
            fontSize: 0,
            width: '100%',
            lineHeight: 1.5,
            display: 'flex',
        },
        '& .rc-steps, & .rc-steps *': {
            boxSizing: 'border-box',
        },
        '& .rc-steps-item': {
            position: 'relative',
            display: 'inline-block',
            verticalAlign: 'top',
            flex: '1',
            overflow: 'hidden',
        },
        '& .rc-steps-item[role="button"]': {
            cursor: 'pointer',
            transition: 'all .3s',
        },
        '& .rc-steps-item[role="button"]:hover': {
            opacity: '0.7',
        },
        '& .rc-steps-item:last-child': {
            flex: 'none',
        },
        '& .rc-steps-item:last-child .rc-steps-item-tail, & .rc-steps-item:last-child .rc-steps-item-title:after': {
            display: 'none',
        },
        '& .rc-steps-item-icon, & .rc-steps-item-content': {
            display: 'inline-block',
            verticalAlign: 'top',
        },
        '& .rc-steps-item-icon': {
            border: '1px solid #ccc',
            width: '26px',
            height: '26px',
            lineHeight: '26px',
            textAlign: 'center',
            borderRadius: '26px',
            fontSize: '14px',
            marginRight: '8px',
            transition: 'background-color 0.3s, border-color 0.3s',
        },
        '& .rc-steps-item-icon > .rc-steps-icon': {
            lineHeight: '1',
            top: '-1px',
            position: 'relative',
        },
        '& .rc-steps-item-icon > .rc-steps-icon.rcicon': {
            fontSize: '12px',
            position: 'relative',
            top: '-2px',
        },
        '& .rc-steps-item-tail': {
            position: 'absolute',
            left: '0',
            width: '100%',
            top: '12px',
            padding: '0 10px',
        },
        '& .rc-steps-item-tail:after': {
            content: '""',
            display: 'inline-block',
            background: theme.colors.placeholders,
            height: '1px',
            borderRadius: '1px',
            width: '100%',
            transition: 'background .3s',
        },
        '& .rc-steps-item-content': {
            marginTop: '3px',
        },
        '& .rc-steps-item-title': {
            fontSize: '14px',
            display: 'inline-block',
            paddingRight: '20px',
            position: 'relative',
        },
        '& .rc-steps-item-title:after': {
            content: '""',
            height: '1px',
            width: '1000px',
            background: theme.colors.placeholders,
            display: 'block',
            position: 'absolute',
            top: '0.55em',
            left: '100%',
        },
        '& .rc-steps-item-description': {
            fontSize: '12px',
            color: '#999',
        },
        '& .rc-steps-item-process .rc-steps-item-icon': {
            backgroundColor: '#fff',
        },
        '& .rc-steps-item-process .rc-steps-item-title:after': {
            backgroundColor: theme.colors.placeholders,
        },
        '& .rc-steps-item-process .rc-steps-item-description': {
            color: 'rgba(0, 0, 0, 0.65)',
        },
        '& .rc-steps-item-process .rc-steps-item-tail:after': {
            backgroundColor: theme.colors.placeholders,
        },
        '& .rc-steps-horizontal:not(.rc-steps-label-vertical) .rc-steps-item': {
            marginRight: '20px',
        },
        '& .rc-steps-horizontal:not(.rc-steps-label-vertical) .rc-steps-item:last-child': {
            marginRight: '0',
        },
        '& .rc-steps-horizontal:not(.rc-steps-label-vertical) .rc-steps-item-tail': {
            display: 'none',
        },
        '& .rc-steps-horizontal:not(.rc-steps-label-vertical) .rc-steps-item-description': {
            maxWidth: '100px',
        },
        '& .rc-steps-item-custom .rc-steps-item-icon': {
            background: 'none',
            border: '0',
            width: 'auto',
            height: 'auto',
        },
        '& .rc-steps-item-custom .rc-steps-item-icon > .rc-steps-icon': {
            fontSize: '20px',
            top: '3px',
            width: '20px',
            height: '20px',
        },
        '& .rc-steps-vertical': {
            display: 'block',
        },
        '& .rc-steps-vertical .rc-steps-item': {
            display: 'block',
            overflow: 'visible',
        },
        '& .rc-steps-vertical .rc-steps-item-icon': {
            float: 'left',
        },
        '& .rc-steps-vertical .rc-steps-item-icon-inner': {
            marginRight: '16px',
        },
        '& .rc-steps-vertical .rc-steps-item-content': {
            minHeight: '48px',
            overflow: 'hidden',
            display: 'block',
        },
        '& .rc-steps-vertical .rc-steps-item-title': {
            lineHeight: '26px',
        },
        '& .rc-steps-vertical .rc-steps-item-title:after': {
            display: 'none',
        },
        '& .rc-steps-vertical .rc-steps-item-description': {
            paddingBottom: '12px',
        },
        '& .rc-steps-vertical .rc-steps-item-tail': {
            position: 'absolute',
            left: '13px',
            top: 0,
            height: '100%',
            width: '1px',
            padding: '30px 0 4px 0',
        },
        '& .rc-steps-vertical .rc-steps-item-tail:after': {
            height: '100%',
            width: '1px',
        },
        '& .rc-steps-label-vertical .rc-steps-item': {
            overflow: 'visible',
        },
        '& .rc-steps-label-vertical .rc-steps-item-tail': {
            padding: '0px 24px',
            marginLeft: '48px',
        },
        '& .rc-steps-label-vertical .rc-steps-item-content': {
            display: 'block',
            textAlign: 'center',
            marginTop: '8px',
            width: '100px',
        },
        '& .rc-steps-label-vertical .rc-steps-item-icon': {
            display: 'inline-block',
            marginLeft: '36px',
        },
        '& .rc-steps-label-vertical .rc-steps-item-title': {
            paddingRight: '0',
        },
        '& .rc-steps-label-vertical .rc-steps-item-title:after': {
            display: 'none',
        },
        '& .rc-steps-label-vertical .rc-steps-item-description': {
            textAlign: 'left',
        },
        '& .rc-steps-dot .rc-steps-item-tail': {
            width: '100%',
            top: '1px',
            margin: '0 0 0 50px',
            padding: '0',
        },
        '& .rc-steps-dot .rc-steps-item-tail:after': {
            height: '3px',
        },
        '& .rc-steps-dot .rc-steps-item-icon': {
            paddingRight: '0',
            width: '5px',
            height: '5px',
            lineHeight: '5px',
            border: '0',
            marginLeft: '48px',
        },
        '& .rc-steps-dot .rc-steps-item-icon .rc-steps-icon-dot': {
            float: 'left',
            width: '100%',
            height: '100%',
            borderRadius: '2.5px',
        },
        '& .rc-steps-dot .rc-steps-item-process .rc-steps-dot .rc-steps-item-icon': {
            top: '-1px',
            width: '7px',
            height: '7px',
            lineHeight: '7px',
        },
        '& .rc-steps-dot .rc-steps-item-process .rc-steps-dot .rc-steps-item-icon .rc-steps-icon-dot': {
            borderRadius: '3.5px',
        },
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 20,
        height: 20,
        backgroundColor: theme.colors.placeholders,
        borderRadius: '50%',
        color: theme.colors.white,
    },
    active: {
        '& $icon': {
            backgroundColor: theme.colors.primary,
        },
    },
    completed: {
        '& $icon': {
            backgroundColor: theme.colors.primary,
        },
        '& .rc-steps-item-icon, & .rc-steps-item-content': {
            cursor: 'pointer',
        },
    },
});
