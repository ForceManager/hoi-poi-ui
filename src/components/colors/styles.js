export default (theme) => ({
    root: {},
    section: {
        paddingBottom: 20,
        marginBottom: 20,
        borderBottom: `1px solid ${theme.colors.grey[100]}`,
        '&:last-child': {
            borderBottom: 'none',
            marginBottom: 0,
        },
    },
    sectionTitle: {
        color: theme.colors.textLight.secondary,
        textTransform: 'capitalize',
        marginBottom: 12,
    },
    swatches: {
        display: 'flex',
        flexFlow: 'row wrap',
        padding: 12,
        gap: 12,
    },
    swatchesDark: {
        backgroundColor: theme.colors.background.black,
    },
    swatch: {
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: 120,
        height: 60,
        padding: 8,
    },
    swatchTextDark: {
        color: theme.colors.primary.black,
    },
    swatchTextLight: {
        color: theme.colors.primary.white,
    },
});
