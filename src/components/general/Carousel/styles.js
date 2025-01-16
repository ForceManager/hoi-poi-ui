export default (theme) => ({
    root: {
        height: '100%',
    },
    minimalist: {
        '& .image-gallery-image': {
            cursor: 'pointer',
        },
    },
    '@global': {
        '.image-gallery-icon': {
            color: '#fff',
            transition: 'all .3s ease-out',
            appearance: 'none',
            backgroundColor: theme.colors.transparent,
            border: '0',
            cursor: 'pointer',
            outline: 'none',
            position: 'absolute',
            zIndex: '4',
            filter: 'drop-shadow(0px 1px 1px rgba(39, 60, 80, 0.20)) drop-shadow(0px 2px 1px rgba(39, 60, 80, 0.12)) drop-shadow(0px 0px 1px rgba(39, 60, 80, 0.14))',
        },
        '.image-gallery-using-mouse .image-gallery-icon:focus': {
            outline: 'none',
        },
        '.image-gallery-fullscreen-button, .image-gallery-play-button': {
            top: '0',
            padding: '8px',
        },
        '.image-gallery-fullscreen-button .image-gallery-svg, .image-gallery-play-button .image-gallery-svg':
            {
                height: '24px',
                width: '24px',
            },
        '@media (max-width: 768px)': {
            '.image-gallery-fullscreen-button, .image-gallery-play-button': {
                padding: '15px',
            },
            '.image-gallery-fullscreen-button .image-gallery-svg, .image-gallery-play-button .image-gallery-svg':
                {
                    height: '24px',
                    width: '24px',
                },
            '.image-gallery-left-nav .image-gallery-svg, .image-gallery-right-nav .image-gallery-svg':
                {
                    height: '72px',
                    width: '36px',
                },
            '.image-gallery-slide-wrapper.image-gallery-thumbnails-left, .image-gallery-slide-wrapper.image-gallery-thumbnails-right':
                {
                    width: 'calc(100% - 87px)',
                },
            '.image-gallery-slide .image-gallery-description': {
                bottom: '45px',
                fontSize: '.8em',
                padding: '8px 15px',
            },
            '.image-gallery-bullets .image-gallery-bullet': {
                margin: '0 3px',
                padding: '3px',
            },
            '.image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left, .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right':
                {
                    width: '81px',
                    margin: '0 3px',
                },
            '.image-gallery-thumbnails': {
                padding: '3px 0',
            },
            '.image-gallery-thumbnail': {
                border: '3px solid transparent',
                width: '81px',
            },
            '.image-gallery-thumbnail-label': {
                fontSize: '.8em',
                lineHeight: '.8em',
            },
            '.image-gallery-index': {
                fontSize: '.8em',
                padding: '5px 10px',
            },
        },
        '@media (max-width: 480px)': {
            '.image-gallery-fullscreen-button, .image-gallery-play-button': {
                padding: '10px',
            },
            '.image-gallery-fullscreen-button .image-gallery-svg, .image-gallery-play-button .image-gallery-svg':
                {
                    height: '16px',
                    width: '16px',
                },
            '.image-gallery-left-nav .image-gallery-svg, .image-gallery-right-nav .image-gallery-svg':
                {
                    height: '48px',
                    width: '24px',
                },
            '.image-gallery-bullets .image-gallery-bullet': {
                padding: '2.7px',
            },
        },
        '.image-gallery-fullscreen-button': {
            right: '0',
        },
        '.image-gallery-play-button': {
            left: '0',
        },
        '.image-gallery-left-nav, .image-gallery-right-nav': {
            padding: '50px 10px',
            top: '50%',
            transform: 'translateY(-50%)',
            '& path': {
                fill: 'white',
            },
        },
        '.image-gallery-left-nav .image-gallery-svg, .image-gallery-right-nav .image-gallery-svg': {
            height: '120px',
            width: '60px',
        },
        '.image-gallery-left-nav[disabled], .image-gallery-right-nav[disabled]': {
            cursor: 'disabled',
            opacity: '.6',
            pointerEvents: 'none',
        },
        '.image-gallery-left-nav': {
            left: '0',
        },
        '.image-gallery-right-nav': {
            right: '0',
        },
        '.image-gallery': {
            width: '100%',
            height: '100%',
            webkitUserSelect: 'none',
            mozUserSelect: 'none',
            msUserSelect: 'none',
            oUserSelect: 'none',
            userSelect: 'none',
            webkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
            position: 'relative',
        },
        '.image-gallery-swipe': {
            height: '100%',
        },
        '.image-gallery.fullscreen-modal': {
            bottom: '0',
            height: '100%',
            left: '0',
            position: 'fixed',
            right: '0',
            top: '0',
            width: '100%',
            zIndex: '5',
            '& .image-gallery-swipe': {
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            '& .image-gallery-slide-wrapper': {
                height: '100%',
            },
        },
        '.image-gallery.fullscreen-modal .image-gallery-content': {
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        '.image-gallery-content': {
            position: 'relative',
            lineHeight: '0',
            top: '0',
            height: '100%',
        },
        '.image-gallery-content.fullscreen': {
            background: '#000',

            '& .image-gallery-slides': {
                height: 'auto',
                background: theme.colors.transparent,
            },

            '& .image-gallery-image': {
                cursor: 'auto',
            },
        },
        '.image-gallery-content .image-gallery-slide .image-gallery-image': {
            maxHeight: 'calc(100vh - 116px)',
        },
        '.image-gallery-content.image-gallery-thumbnails-left .image-gallery-slide .image-gallery-image, .image-gallery-content.image-gallery-thumbnails-right .image-gallery-slide .image-gallery-image':
            {
                maxHeight: '100vh',
            },
        '.image-gallery-slide-wrapper': {
            position: 'relative',
            height: '100%',
        },
        '.image-gallery-slide-wrapper.image-gallery-thumbnails-left, .image-gallery-slide-wrapper.image-gallery-thumbnails-right':
            {
                display: 'inline-block',
                width: 'calc(100% - 110px)',
            },
        '.image-gallery-slide-wrapper.image-gallery-rtl': {
            direction: 'rtl',
        },
        '.image-gallery-slides': {
            lineHeight: '0',
            overflow: 'hidden',
            position: 'relative',
            whiteSpace: 'nowrap',
            textAlign: 'center',
            height: '100%',
            background: theme.colors.grey[100],
            borderRadius: 8,
        },
        '.image-gallery-slide': {
            left: '0',
            position: 'absolute',
            top: '0',
            width: '100%',
            height: '100%',
        },
        '.image-gallery-slide.image-gallery-center': {
            position: 'relative',
        },
        '.image-gallery-slide .image-gallery-image': {
            width: 'calc(100% - 1px)',
            height: '100%',
            objectFit: 'scale-down',
        },
        '.image-gallery-slide .image-gallery-description': {
            background: 'rgba(0, 0, 0, .4)',
            bottom: '70px',
            color: '#fff',
            left: '0',
            lineHeight: '1',
            padding: '10px 20px',
            position: 'absolute',
            whiteSpace: 'normal',
        },
        '.image-gallery-bullets': {
            bottom: '20px',
            left: '0',
            margin: '0 auto',
            position: 'absolute',
            right: '0',
            width: '80%',
            zIndex: '4',
        },
        '.image-gallery-bullets .image-gallery-bullets-container': {
            margin: '0',
            padding: '0',
            textAlign: 'center',
        },
        '.image-gallery-bullets .image-gallery-bullet': {
            appearance: 'none',
            backgroundColor: theme.colors.transparent,
            border: '1px solid #fff',
            borderRadius: '50%',
            boxShadow: '0 2px 2px #1a1a1a',
            cursor: 'pointer',
            display: 'inline-block',
            margin: '0 5px',
            outline: 'none',
            padding: '5px',
            transition: 'all .2s ease-out',
        },
        '.image-gallery-bullets .image-gallery-bullet:focus': {
            transform: 'scale(1.2)',
            background: '#337ab7',
            border: '1px solid #337ab7',
        },
        '.image-gallery-bullets .image-gallery-bullet.active': {
            transform: 'scale(1.2)',
            border: '1px solid #fff',
            background: '#fff',
        },
        '.image-gallery-thumbnails-wrapper': {
            position: 'relative',
        },
        '.image-gallery-thumbnails-wrapper.thumbnails-swipe-horizontal': {
            touchAction: 'pan-y',
        },
        '.image-gallery-thumbnails-wrapper.thumbnails-swipe-vertical': {
            touchAction: 'pan-x',
        },
        '.image-gallery-thumbnails-wrapper.thumbnails-wrapper-rtl': {
            direction: 'rtl',
        },
        '.image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left, .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right':
            {
                display: 'inline-block',
                verticalAlign: 'top',
                width: '100px',
                margin: '0 5px',
            },
        '.image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left .image-gallery-thumbnails, .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right .image-gallery-thumbnails':
            {
                height: '100%',
                width: '100%',
                left: '0',
                padding: '0',
                position: 'absolute',
                top: '0',
            },
        '.image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left .image-gallery-thumbnails .image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right .image-gallery-thumbnails .image-gallery-thumbnail':
            {
                display: 'block',
                marginRight: '0',
                padding: '0',
            },
        '.image-gallery-thumbnails-wrapper.image-gallery-thumbnails-left .image-gallery-thumbnails .image-gallery-thumbnail+.image-gallery-thumbnail, .image-gallery-thumbnails-wrapper.image-gallery-thumbnails-right .image-gallery-thumbnails .image-gallery-thumbnail+.image-gallery-thumbnail':
            {
                marginLeft: '0',
                marginTop: '2px',
            },
        '.image-gallery-thumbnails': {
            overflow: 'hidden',
        },
        '.image-gallery-thumbnails .image-gallery-thumbnails-container': {
            cursor: 'pointer',
            textAlign: 'center',
            whiteSpace: 'nowrap',
        },
        '.image-gallery-thumbnail': {
            display: 'inline-block',
            border: 'none',
            transition: 'border .3s ease-out',
            width: '100px',
            background: theme.colors.transparent,
            padding: '0',
            margin: 8,
        },
        '.image-gallery-thumbnail+.image-gallery-thumbnail': {
            marginLeft: '2px',
        },
        '.image-gallery-thumbnail .image-gallery-thumbnail-inner': {
            display: 'block',
            position: 'relative',
        },
        '.image-gallery-thumbnail .image-gallery-thumbnail-image': {
            verticalAlign: 'middle',
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            lineHeight: '0',
            cursor: 'pointer',
            borderRadius: '4px',
            objectPosition: 'left',
        },
        '.image-gallery-thumbnail.active': {
            outline: 'none',
        },
        '.image-gallery-thumbnail-label': {
            boxSizing: 'border-box',
            color: '#fff',
            fontSize: '1em',
            left: '0',
            lineHeight: '1em',
            padding: '5%',
            position: 'absolute',
            top: '50%',
            textShadow: '0 2px 2px #1a1a1a',
            transform: 'translateY(-50%)',
            whiteSpace: 'normal',
            width: '100%',
        },
        '.image-gallery-index': {
            background: 'rgba(0, 0, 0, .4)',
            color: '#fff',
            lineHeight: '1',
            padding: '10px 20px',
            position: 'absolute',
            right: '0',
            top: '0',
            zIndex: '4',
        },
    },
});
