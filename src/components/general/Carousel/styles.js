export default (theme) => ({
    root: {
        position: 'relative',
        '&.carousel__with-dots': {
            paddingBottom: '25px',
        },
    },
    slider: {
        position: 'relative',
        outline: 'none',
        width: '100%',
        margin: '0 auto',
        '&.carousel__with-arrows': {
            width: `calc(100% - 50px)`,
        },
        '& .slick-list': {
            position: 'relative',
            textAlign: 'center',
            overflow: 'hidden',
        },
        '& .slick-list .slick-track .slick-slide': {
            width: '100%',
            display: 'inline-block',
            whiteSpace: 'nowrap',
            verticalAlign: 'middle',
            margin: '0 auto',
        },
    },
    arrow: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '20px',
        '&.arrow--left': {
            left: '-25px',
            transform: 'translateY(-50%) rotate(90deg)',
            '& > svg': {},
        },
        '&.arrow--right': {
            right: '-25px',
            transform: 'translateY(-50%) rotate(-90deg)',
            '& > svg': {},
        },
    },
    content: {
        height: '100%',
        textAlign: 'center',
        outline: 'none',
        '& > img': {
            height: '150px',
            verticalAlign: 'middle',
        },
    },
    dotsContainer: {
        position: 'absolute',
        width: '100%',
        listStyle: 'none',
        textAlign: 'center',
        padding: '5px 0 0',
        margin: '0',

        '& > li': {
            display: 'inline-block',
            verticalAlign: 'middle',
            margin: '0 5px',
            padding: '0',
            cursor: 'pointer',

            '& > button': {
                display: 'block',
                // width: '4px',
                // height: '4px',
                cursor: 'pointer',
                fontSize: '0',
                lineHeight: '0',
                padding: '4px',
                color: theme.colors.disabledGrey,
                border: '0',
                outline: 'none',
                backgroundColor: theme.colors.disabledGrey,
                borderRadius: '50%',
            },

            '&.slick-active > button': {
                color: theme.colors.primary,
                backgroundColor: theme.colors.primary,
            },
        },
    },
});
