export default (theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    small: {
        width: 10,
        height: 10,
        '& svg': {
            width: 10,
            height: 10,
        },
    },
    medium: {
        width: 18,
        height: 18,
        '& svg': {
            width: 18,
            height: 18,
        },
    },
    large: {
        width: 24,
        height: 24,
        '& svg': {
            width: 24,
            height: 24,
        },
    },
    big: {
        width: 32,
        height: 32,
        '& svg': {
            width: 32,
            height: 32,
        },
    },
    huge: {
        width: 64,
        height: 64,
        '& svg': {
            width: 64,
            height: 64,
        },
    },
    raw: {
        width: 'inherit',
        height: 'inherit',
    },
    clickable: {
        cursor: 'pointer',
    },
});
