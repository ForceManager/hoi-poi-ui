export default (theme) => ({
    root: {},
    Label: {
        width: 153,
        marginRight: 17,
        padding: '6px 0',
    },
    error: {
        ...theme.typography.defaultText,
        position: 'absolute',
        bottom: -15,
        color: theme.colors.red,
    },
    formControl: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        width: 290,
        lineHeight: 0,
    },
    errored: {
        paddingBottom: '20px !important',
    },
    vertical: {
        display: 'block',
        padding: '12px 0 11px 0',
        marginLeft: '0 !important',
        '& $formControl': {
            marginTop: 10,
        },
    },
    horizontal: {
        display: 'flex',
        alignItems: 'center',
        padding: '12px 0 11px 0',
        '& $error': {},
    },
    isFullWidth: {
        '& $formControl': {
            width: '100%',
            flex: 1,
        },
    },
    // Slider custom styles
    slider: {
        width: 'calc(100% - 15px)',
        minHeight: 50,
        margin: 'auto',
        position: 'relative',
        padding: '25px 0',
        borderRadius: 6,
        touchAction: 'none',
        boxSizing: 'border-box',
        '& .rc-slider-rail': {
            boxSizing: 'border-box',
            position: 'absolute',
            width: '100%',
            backgroundColor: theme.colors.greyLight,
            height: 2,
            borderRadius: 6,
        },
        '& .rc-slider-track': {
            boxSizing: 'border-box',
            position: 'absolute',
            left: '0',
            height: 2,
            borderRadius: 6,
            backgroundColor: theme.colors.primary,
        },
        '& .rc-slider-step': {
            boxSizing: 'border-box',
            position: 'absolute',
            width: '100%',
            height: 4,
            background: 'transparent',
        },
    },
    overlay: {},
    overlayHandler: {
        position: 'absolute',
        marginLeft: -8,
        marginTop: -6,
        width: 15,
        height: 15,
        cursor: 'grab',
        borderRadius: '50%',
        border: '0',
        backgroundColor: theme.colors.primary,
        MsTouchAction: 'pan-x',
        touchAction: 'pan-x',
        '&:active': {
            cursor: 'grabbing',
        },
        '&:focus': {
            outline: 'none',
        },
    },
    overlayLabel: {
        position: 'absolute',
        minWidth: 15,
        top: 4,
        marginLeft: -15,
        textAlign: 'center',
        color: theme.colors.greySoft,
        ...theme.typography.smallText,
    },
    isReadOnly: {
        '& $overlayHandler': {
            backgroundColor: theme.colors.greyLight,
            cursor: 'default',
        },
        '& .rc-slider-track': {
            backgroundColor: theme.colors.greyLight,
        },
    },
});
