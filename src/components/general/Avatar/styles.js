export default (theme) => ({
    root: {
        ...theme.typography.defaultText,
        color: theme.colors.text.black,
        borderRadius: '50%',
        overflow: 'hidden',
        '& > img': {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            textAlign: 'center',
        },
    },
    small: {
        height: '20px',
        width: '20px',
    },
    medium: {
        height: '25px',
        width: '25px',
    },
    large: {
        height: '30px',
        width: '30px',
    },
    big: {
        height: '32px',
        width: '32px',
    },
});
