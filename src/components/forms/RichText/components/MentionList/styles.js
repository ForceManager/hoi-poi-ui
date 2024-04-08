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
            width: 300,
            ...theme.utils.scrollbar,
        },
        item: {
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 8,
            cursor: 'pointer',
            padding: '4px 8px',
            borderRadius: 4,
        },
        selected: {
            backgroundColor: theme.colors.neutral200,
        },
        advice: {
            marginBottom: 16,
        },
        avatar: {
            flexShrink: 0,
        },
        name: {
            display: 'inline-block',
        },
        isEmpty: {
            opacity: 0,
            pointerEvents: 'none',
        },
    };
};
