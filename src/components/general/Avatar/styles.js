export default (theme) => ({
    root: {
        ...theme.typography.defaultText,
        color: theme.colors.neutral700,
        overflow: 'hidden',
        background: theme.colors.neutral400,
        '& > img': {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            textAlign: 'center',
        },
    },
    round: {
        borderRadius: '50%',
        '& $icon': {
            width: '80%',
            height: '80%',
            padding: '10%',
        },
    },
    square: {
        borderRadius: 4,
        '& $icon': {
            width: '96%',
            height: '96%',
            padding: '2%',
        },
    },
    small: {
        height: '20px',
        width: '20px',
        '& $initials': {
            fontSize: '10px',
        },
    },
    medium: {
        height: '25px',
        width: '25px',
    },
    large: {
        height: '30px',
        width: '30px',
        '& $initials': {
            fontSize: '16px',
        },
    },
    big: {
        height: '32px',
        width: '32px',
        '& $initials': {
            fontSize: '18px',
        },
    },
    huge: {
        height: '64px',
        width: '64px',
        '& $initials': {
            fontSize: '38px',
        },
    },
    icon: {},
    initials: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        textTransform: 'uppercase',
    },
});
