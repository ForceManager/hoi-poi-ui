export default (theme) => ({
    root: {
        '& .CircularProgressbar': {
            width: '100%',
            verticalAlign: 'middle',
        },
        '& .CircularProgressbar-path': {
            strokeLinecap: 'round',
            transition: 'stroke-dashoffset 0.5s ease 0s',
        },
        '& .CircularProgressbar-trail': {
            strokeLinecap: 'round',
        },
        '& .CircularProgressbar-text': {
            marginTop: 5,
            dominantBaseline: 'middle',
            textAnchor: 'middle',
            ...theme.typography.defaultText,
        },
        '& .CircularProgressbar-inverted .CircularProgressbar-trail': {
            stroke: 'transparent',
        },
    },
    small: {
        width: 32,
        height: 32,
    },
    medium: {
        width: 60,
        height: 60,
        '& .CircularProgressbar-text': {
            fontWeight: 500,
        },
    },
    large: {
        width: 80,
        height: 80,
        '& .CircularProgressbar-text': {
            fontWeight: 500,
        },
    },
});
