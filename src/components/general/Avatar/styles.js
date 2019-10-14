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
