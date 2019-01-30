export default (theme) => ({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        margin: '0',
        textAlign: 'center',
        zIndex: '1000',
        transform: 'translateX(-50%) translateY(-50%)',
        '&:before': {
            position: 'absolute',
            content: '""',
            top: '0',
            left: '50%',
            width: '100%',
            height: '100%',
            borderRadius: '500rem',
            border: '.2em solid rgba(0,0,0,.1)',
            borderColor: 'rgba(255,255,255,.15)',
        },
        '&:after': {},
    },
});
