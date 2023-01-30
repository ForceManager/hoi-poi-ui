export default (theme) => {
    return {
        root: {
            display: 'flex',
            flexFlow: 'column nowrap',
            backgroundColor: theme.colors.neutralBase,
            boxShadow: theme.effects.boxShadow,
            borderRadius: 8,
            padding: 16,
            maxWidth: '100%',
            maxHeight: '50vh',
            width: 200,
        },
        item: {
            display: 'block',
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: 4,
        },
        selected: {
            backgroundColor: theme.colors.neutral200,
        },
        emojiItem: {
            display: 'flex',
            flexFlow: 'row nowrap',
            gap: 8,
            alignItems: 'center',
            '& img': {
                display: 'block',
                width: 'auto',
                height: 20,
            },
        },
    };
};
