export default (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        margin: 0,
        paddingLeft: 24,
    },
    listItem: {
        ...theme.typography.body,
    },
    text: {
        display: 'unset',
    },
    bullet: {
        position: 'absolute',
        top: 1,
        left: 0,
    },
    unStyled: {
        listStyle: 'none',
        padding: 0,
    },
    withCustomBullet: {
        paddingLeft: 24,
        position: 'relative',
    },
});