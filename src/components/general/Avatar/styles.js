export default (theme) => ({
    root: {
        position: 'relative',
        borderRadius: '50%',
        overflow: 'hidden',
        '& > img': {
            position: 'absolute',
            height: '100%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
    },
    tiny: {
        height: '20px',
        width: '20px',
    },
    small: {
        height: '30px',
        width: '30px',
    },
    medium: {
        height: '35px',
        width: '35px',
    },
    large: {
        height: '40px',
        width: '40px',
    },
    big: {
        height: '50px',
        width: '50px',
    },
    huge: {
        height: '100px',
        width: '100px',
    },
});
