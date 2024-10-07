export default (theme) => ({
    root: {
        '& .hoi-poi-ui__tabs': {
            boxSizing: 'border-box',
            position: 'relative',
            overflow: 'hidden',
        },
        '& .hoi-poi-ui__tabs-nav-container': {
            borderBottom: `1px solid ${theme.colors.neutral400}`,
        },
        '& .hoi-poi-ui__tabs-bar, & .hoi-poi-ui__tabs-nav-container': {
            fontSize: '14px',
            lineHeight: '1.5',
            boxSizing: 'border-box',
            overflow: 'hidden',
            position: 'relative',
            whiteSpace: 'nowrap',
            outline: 'none',
            zoom: 1,
            transition: 'padding .45s',
        },
        '& .hoi-poi-ui__tabs-tab-prev, & .hoi-poi-ui__tabs-tab-next': {
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect: 'none',
            userSelect: 'none',
            zIndex: 1,
            lineHeight: '30px',
            cursor: 'pointer',
            border: 'none',
            backgroundColor: 'transparent',
            position: 'absolute',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
        },
        '& .hoi-poi-ui__tabs-tab-prev-icon, & .hoi-poi-ui__tabs-tab-next-icon': {
            position: 'relative',
            display: 'inline-block',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            lineHeight: 'inherit',
            verticalAlign: 'baseline',
            textAlign: 'center',
            textTransform: 'none',
            fontSmoothing: 'antialiased',
            textStrokeWidth: 0,
            fontFamily: 'sans-serif',
        },
        '& .hoi-poi-ui__tabs-tab-prev-icon:before, & .hoi-poi-ui__tabs-tab-next-icon:before': {
            display: 'block',
        },
        '& .hoi-poi-ui__tabs-tab-btn-disabled, & .hoi-poi-ui__tabs-tab-arrow-show.hoi-poi-ui__tabs-tab-btn-disabled':
            {
                cursor: 'default',
                color: '#ccc',
                opacity: '0.5 !important',
            },
        '& .hoi-poi-ui__tabs-nav-wrap': {
            overflow: 'hidden',
        },
        '& .hoi-poi-ui__tabs-nav': {
            display: 'flex',
            boxSizing: 'border-box',
            paddingLeft: 0,
            position: 'relative',
            margin: 0,
            listStyle: 'none',
            transformOrigin: '0 0',
            '& > div:not([class])': {
                display: 'flex',
                flexFlow: 'row nowrap',
                gap: 20,
                flex: 1,
            },
        },
        '& .hoi-poi-ui__tabs-nav-animated': {
            transition: 'transform 0.5s cubic-bezier(0.35, 0, 0.25, 1)',
            transitionDelay: '.5s',
        },
        '& .hoi-poi-ui__tabs-tab': {
            boxSizing: 'border-box',
            position: 'relative',
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            gap: 8,
            transition: 'color 0.3s cubic-bezier(0.35, 0, 0.25, 1)',
            padding: '5px 0 14px 0',
            lineHeight: '20px',
            cursor: 'pointer',
            ...theme.typography.defaultText,
            color: theme.colors.neutral700,
            outline: 'none',
        },
        '& .hoi-poi-ui__tabs-tab:hover': {
            color: theme.colors.neutral900,
        },
        '& .hoi-poi-ui__tabs-tab-active, & .hoi-poi-ui__tabs-tab-active:hover': {
            position: 'relative',
            '&::after': {
                zIndex: 1,
                backgroundColor: theme.colors.neutral900,
                height: 2,
                left: 0,
                right: 0,
                bottom: 0,
                content: '""',
                position: 'absolute',
                display: 'block',
            },
            color: theme.colors.neutral900,
            cursor: 'default',
            transform: 'translateZ(0)',
            fontWeight: 500,
        },
        '& .hoi-poi-ui__tabs-tab-disabled, & .hoi-poi-ui__tabs-tab-disabled:hover': {
            cursor: 'default',
            color: '#ccc',
        },
        '& .hoi-poi-ui__tabs-content': {
            zoom: 1,
        },
        '& .hoi-poi-ui__tabs-content .hoi-poi-ui__tabs-tabpane': {
            overflow: 'auto',
        },
        '& .hoi-poi-ui__tabs-content-animated': {
            transition:
                'margin-left 0.3s cubic-bezier(0.35, 0, 0.25, 1), margin-top 0.3s cubic-bezier(0.35, 0, 0.25, 1)',
            display: 'flex',
            willChange: 'transform',
        },
        '& .hoi-poi-ui__tabs-content-animated .hoi-poi-ui__tabs-tabpane': {
            flexShrink: 0,
        },
        '& .no-flexbox .hoi-poi-ui__tabs-content': {
            transform: 'none !important',
            overflow: 'auto',
        },
        '& .no-csstransitions .hoi-poi-ui__tabs-tabpane-inactive': {
            display: 'none',
        },
        '& .no-flexbox .hoi-poi-ui__tabs-tabpane-inactive': {
            display: 'none',
        },
        '& .hoi-poi-ui__tabs-content-no-animated .hoi-poi-ui__tabs-tabpane-inactive': {
            display: 'none',
        },
        '& .hoi-poi-ui__tabs-left': {
            borderRight: `2px solid ${theme.colors.neutral400}`,
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-bar': {
            height: '100%',
            marginRight: '10px',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-nav-container': {
            height: '100%',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-nav-container-scrolling': {
            paddingTop: '32px',
            paddingBottom: '32px',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-nav-wrap': {
            height: '100%',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-content-animated': {
            flexDirection: 'column',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-content-animated .hoi-poi-ui__tabs-tabpane': {
            height: '100%',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-nav-scroll': {
            height: '99999px',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-nav-swipe': {
            position: 'relative',
            top: 0,
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-nav-swipe .hoi-poi-ui__tabs-nav': {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            height: '100%',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-nav-swipe .hoi-poi-ui__tabs-nav .hoi-poi-ui__tabs-tab':
            {
                display: 'flex',
                flexShrink: 0,
                justifyContent: 'center',
            },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-tab-prev': {
            top: '2px !important',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-tab-next': {
            bottom: '0 !important',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-tab-arrow-show': {
            opacity: '1',
            width: '32px !important',
            height: '100% !important',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-tab-arrow-show': {
            opacity: '1',
            width: '100% !important',
            height: '32px !important',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-tab-arrow-show': {
            opacity: '1',
            width: '100% !important',
            height: '32px !important',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-tab-arrow-show': {
            opacity: '1',
            width: '100% !important',
            height: '32px !important',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-tab-next-icon': {
            transform: 'rotate(90deg)',
            filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-tab-next-icon:before': {
            content:
                'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3LWJveD0iMCAwIDEwIDEwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDI3MCwgNSwgNSkiIGQ9Ik01IDUuODM2bDMuNjctMy4yMTJhLjUuNSAwIDAgMSAuNjYuNzUyTDUuMzM0IDYuODcyYS40OTkuNDk5IDAgMCAxLS42NyAwTC42NzEgMy4zNzZhLjUuNSAwIDAgMSAuNjU4LS43NTJMNSA1LjgzNnoiIGZpbGw9IiM3ODg1OTAiIGZpbGxSdWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+)',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-tab-prev-icon': {
            transform: 'rotate(270deg)',
            filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-tab-prev-icon:before': {
            content:
                'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3LWJveD0iMCAwIDEwIDEwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwLCA1LCA1KSIgZD0iTTUgNS44MzZsMy42Ny0zLjIxMmEuNS41IDAgMCAxIC42Ni43NTJMNS4zMzQgNi44NzJhLjQ5OS40OTkgMCAwIDEtLjY3IDBMLjY3MSAzLjM3NmEuNS41IDAgMCAxIC42NTgtLjc1Mkw1IDUuODM2eiIgZmlsbD0iIzc4ODU5MCIgZmlsbFJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=)',
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-ink-bar': {
            width: '2px',
            right: 0,
            top: 0,
        },
        '& .hoi-poi-ui__tabs-left .hoi-poi-ui__tabs-tab': {
            padding: '16px 24px',
        },
        '& .hoi-poi-ui__tabs-right': {
            borderLeft: `2px solid ${theme.colors.neutral400}`,
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-bar': {
            height: '100%',
            marginLeft: '10px',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-nav-container': {
            height: '100%',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-nav-container-scrolling': {
            paddingTop: '32px',
            paddingBottom: '32px',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-nav-wrap': {
            height: '100%',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-nav-scroll': {
            height: '99999px',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-nav-swipe': {
            position: 'relative',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-nav-swipe .hoi-poi-ui__tabs-nav': {
            display: 'flex',
            flex: 1,
            flexDirection: 'column',
            height: '100%',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-nav-swipe .hoi-poi-ui__tabs-nav .hoi-poi-ui__tabs-tab':
            {
                display: 'flex',
                flexShrink: 0,
                justifyContent: 'center',
            },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-tab-prev': {
            top: '2px !important',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-tab-next': {
            bottom: '0 !important',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-tab-next-icon': {
            transform: 'rotate(90deg)',
            filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=1)',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-tab-next-icon:before': {
            content:
                'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3LWJveD0iMCAwIDEwIDEwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDI3MCwgNSwgNSkiIGQ9Ik01IDUuODM2bDMuNjctMy4yMTJhLjUuNSAwIDAgMSAuNjYuNzUyTDUuMzM0IDYuODcyYS40OTkuNDk5IDAgMCAxLS42NyAwTC42NzEgMy4zNzZhLjUuNSAwIDAgMSAuNjU4LS43NTJMNSA1LjgzNnoiIGZpbGw9IiM3ODg1OTAiIGZpbGxSdWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+)',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-tab-prev-icon': {
            transform: 'rotate(270deg)',
            filter: 'progid:DXImageTransform.Microsoft.BasicImage(rotation=3)',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-tab-prev-icon:before': {
            content:
                'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3LWJveD0iMCAwIDEwIDEwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwLCA1LCA1KSIgZD0iTTUgNS44MzZsMy42Ny0zLjIxMmEuNS41IDAgMCAxIC42Ni43NTJMNS4zMzQgNi44NzJhLjQ5OS40OTkgMCAwIDEtLjY3IDBMLjY3MSAzLjM3NmEuNS41IDAgMCAxIC42NTgtLjc1Mkw1IDUuODM2eiIgZmlsbD0iIzc4ODU5MCIgZmlsbFJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=)',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-content-animated': {
            flexDirection: 'column',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-content-animated .hoi-poi-ui__tabs-tabpane': {
            height: '100%',
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-ink-bar': {
            width: '2px',
            left: 0,
            top: 0,
        },
        '& .hoi-poi-ui__tabs-right .hoi-poi-ui__tabs-tab': {
            padding: '16px 24px',
        },
        '& .hoi-poi-ui__tabs-bottom': {
            borderTop: `2px solid ${theme.colors.neutral400}`,
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-content': {
            width: '100%',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-nav-container-scrolling': {
            paddingLeft: '32px',
            paddingRight: '32px',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-nav-scroll': {
            width: '99999px',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-nav-swipe': {
            position: 'relative',
            left: 0,
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-nav-swipe .hoi-poi-ui__tabs-nav': {
            display: 'flex',
            flex: 1,
            width: '100%',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-nav-swipe .hoi-poi-ui__tabs-nav .hoi-poi-ui__tabs-tab':
            {
                display: 'flex',
                flexShrink: 0,
                marginRight: 0,
                padding: '8px 0',
                justifyContent: 'center',
            },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-nav-wrap': {
            width: '100%',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-content-animated': {
            flexDirection: 'row',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-content-animated .hoi-poi-ui__tabs-tabpane': {
            width: '100%',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-tab-next': {
            marginRight: -2,
            marginTop: -4,
            width: '32px',
            height: '100%',
            top: 0,
            textAlign: 'center',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-tab-next-icon:before': {
            content:
                'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3LWJveD0iMCAwIDEwIDEwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDI3MCwgNSwgNSkiIGQ9Ik01IDUuODM2bDMuNjctMy4yMTJhLjUuNSAwIDAgMSAuNjYuNzUyTDUuMzM0IDYuODcyYS40OTkuNDk5IDAgMCAxLS42NyAwTC42NzEgMy4zNzZhLjUuNSAwIDAgMSAuNjU4LS43NTJMNSA1LjgzNnoiIGZpbGw9IiM3ODg1OTAiIGZpbGxSdWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+)',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-tab-prev': {
            marginRight: -2,
            marginTop: -4,
            width: '32px',
            height: '100%',
            top: 0,
            textAlign: 'center',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-tab-prev-icon:before': {
            content:
                'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3LWJveD0iMCAwIDEwIDEwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwLCA1LCA1KSIgZD0iTTUgNS44MzZsMy42Ny0zLjIxMmEuNS41IDAgMCAxIC42Ni43NTJMNS4zMzQgNi44NzJhLjQ5OS40OTkgMCAwIDEtLjY3IDBMLjY3MSAzLjM3NmEuNS41IDAgMCAxIC42NTgtLjc1Mkw1IDUuODM2eiIgZmlsbD0iIzc4ODU5MCIgZmlsbFJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=)',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-ink-bar': {
            height: '2px',
            top: '3px',
            left: 0,
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-tab': {
            height: '100%',
            marginRight: '20px',
        },
        '& .hoi-poi-ui__tabs-bottom .hoi-poi-ui__tabs-tabpane-inactive': {
            height: 0,
            overflow: 'visible',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-content': {
            width: '100%',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-nav-container-scrolling': {
            paddingLeft: '32px',
            paddingRight: '32px',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-nav-swipe': {
            position: 'relative',
            left: 0,
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-nav-swipe .hoi-poi-ui__tabs-nav': {
            display: 'flex',
            flex: 1,
            width: '100%',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-nav-swipe .hoi-poi-ui__tabs-nav .hoi-poi-ui__tabs-tab':
            {
                display: 'flex',
                flexShrink: 0,
                marginRight: 0,
                padding: '8px 0',
                justifyContent: 'center',
            },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-nav-wrap': {
            width: '100%',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-content-animated': {
            flexDirection: 'row',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-content-animated .hoi-poi-ui__tabs-tabpane': {
            width: '100%',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-tab-next': {
            marginRight: -2,
            marginTop: -4,
            width: 0,
            height: 0,
            textAlign: 'center',
            transition: 'width .3s, height .3s, opacity .3s',
            right: 0,
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-tab-next-icon:before': {
            content:
                'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3LWJveD0iMCAwIDEwIDEwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDI3MCwgNSwgNSkiIGQ9Ik01IDUuODM2bDMuNjctMy4yMTJhLjUuNSAwIDAgMSAuNjYuNzUyTDUuMzM0IDYuODcyYS40OTkuNDk5IDAgMCAxLS42NyAwTC42NzEgMy4zNzZhLjUuNSAwIDAgMSAuNjU4LS43NTJMNSA1LjgzNnoiIGZpbGw9IiM3ODg1OTAiIGZpbGxSdWxlPSJldmVub2RkIj48L3BhdGg+PC9zdmc+)',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-tab-prev': {
            marginRight: -2,
            marginTop: -4,
            width: 0,
            height: 0,
            textAlign: 'center',
            transition: 'width .3s, height .3s, opacity .3s',
            left: 0,
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-tab-prev-icon:before': {
            content:
                'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTBweCIgaGVpZ2h0PSIxMHB4IiB2aWV3LWJveD0iMCAwIDEwIDEwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIHRyYW5zZm9ybT0icm90YXRlKDkwLCA1LCA1KSIgZD0iTTUgNS44MzZsMy42Ny0zLjIxMmEuNS41IDAgMCAxIC42Ni43NTJMNS4zMzQgNi44NzJhLjQ5OS40OTkgMCAwIDEtLjY3IDBMLjY3MSAzLjM3NmEuNS41IDAgMCAxIC42NTgtLjc1Mkw1IDUuODM2eiIgZmlsbD0iIzc4ODU5MCIgZmlsbFJ1bGU9ImV2ZW5vZGQiPjwvcGF0aD48L3N2Zz4=)',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-ink-bar': {
            height: '2px',
            bottom: 0,
            left: 0,
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-tab': {
            height: '100%',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-tabpane-inactive': {
            height: 0,
            overflow: 'visible',
        },
        '& .hoi-poi-ui__tabs-tab-draggable': {},
    },
    withPostComponent: {
        display: 'flex',
        alignItems: 'center',
    },
    postComponent: {
        paddingBottom: '10px',
    },
    vertical: {
        '& .hoi-poi-ui__tabs-nav-container': {
            borderBottom: 'none',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-nav-scroll': {
            width: '100%',
        },
        '& .hoi-poi-ui__tabs-top .hoi-poi-ui__tabs-tab': {
            float: 'none',
            margin: 0,
            width: '100%',
            textAlign: 'center',
        },
        '& .hoi-poi-ui__tabs-tab': {
            padding: '14px 0',
            borderBottom: `1px solid ${theme.colors.neutral400}`,
            justifyContent: 'center',
        },
        '& .hoi-poi-ui__tabs-nav': {
            float: 'none',
            display: 'block',
            '& > div:not([class])': {
                flexFlow: 'column nowrap',
                gap: 0,
            },
        },
        '& .hoi-poi-ui__tabs-nav > *': {
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
        },
        '& .hoi-poi-ui__tabs-tab-active': {
            borderBottom: `2px solid ${theme.colors.neutral900}`,
            paddingBottom: 13,
            '&::after, &:hover::after': {
                content: 'none',
            },
        },
    },
    tabWithPopover: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
    },
    popover: {
        display: 'none',
        position: 'absolute',
        background: theme.colors.neutralBase,
        boxShadow: `0px 4px 5px 0px rgba(39, 60, 80, 0.2),
                    0px 3px 14px 0px rgba(39, 60, 80, 0.12),
                    0px 8px 10px 0px rgba(39, 60, 80, 0.14)`,
        borderRadius: '6px',
    },
});
