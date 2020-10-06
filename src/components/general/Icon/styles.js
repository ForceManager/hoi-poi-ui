export default (theme) => ({
    root: {
        display: 'inline-block',
        textAlign: 'center',
        lineHeight: 0,

        '& svg': {
            width: '100%',
            height: '100%',
        },
    },
    small: {
        width: 10,
        height: 10,
    },
    medium: {
        width: 18,
        height: 18,
    },
    large: {
        width: 24,
        height: 24,
    },
    big: {
        width: 32,
        height: 32,
    },
    huge: {
        width: 64,
        height: 64,
    },
    clickable: {
        cursor: 'pointer',
    },
});
