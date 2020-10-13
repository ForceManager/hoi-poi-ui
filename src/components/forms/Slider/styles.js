export default (theme) => ({
    root: {},
    slider: {
        width: 'calc(100% - 15px)',
        minHeight: 50,
        margin: 'auto',
        position: 'relative',
        padding: '35px 0',
        borderRadius: 6,
        touchAction: 'none',
        boxSizing: 'border-box',
        '& .rc-slider-rail': {
            boxSizing: 'border-box',
            position: 'absolute',
            width: '100%',
            backgroundColor: theme.colors.neutral400,
            height: 4,
            borderRadius: 6,
        },
        '& .rc-slider-track': {
            boxSizing: 'border-box',
            position: 'absolute',
            left: '0',
            height: 4,
            borderRadius: 6,
            backgroundColor: theme.colors.orange500,
        },
        '& .rc-slider-step': {
            boxSizing: 'border-box',
            position: 'absolute',
            width: '100%',
            height: 16,
            background: 'transparent',
        },
    },
    overlayHandler: {
        position: 'absolute',
        marginTop: -6,
        width: 16,
        height: 16,
        cursor: 'grab',
        borderRadius: '50%',
        border: '0',
        backgroundColor: theme.colors.orange500,
        MsTouchAction: 'pan-x',
        touchAction: 'pan-x',
        '&:active': {
            cursor: 'grabbing',
            border: `solid 4px ${theme.colors.orange100}`,
            marginTop: -10,
        },
        '&:focus': {
            outline: 'none',
        },
        '&:hover': {
            border: `solid 4px ${theme.colors.orange100}`,
            marginTop: -10,
        },
    },
    isReadOnly: {
        '& $overlayHandler': {
            backgroundColor: theme.colors.neutral500,
            cursor: 'default',
            '&:active': {
                border: 0,
                marginTop: -6,
            },
            '&:hover': {
                border: 0,
                marginTop: -6,
            },
        },
        '& .rc-slider-track': {
            backgroundColor: theme.colors.neutral500,
        },
    },
});
