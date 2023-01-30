export default (theme) => {
    return {
        root: {
            display: 'flex',
            flexFlow: 'column nowrap',
            '& [class*="inputWrapper"]': {
                padding: 0,
            },
        },
        searchBar: {
            marginBottom: 8,
        },
        gridWrapper: {
            position: 'relative',
        },
        popover: {
            '& .hoi-poi-popover-inner': {
                backgroundColor: theme.colors.neutralBase,
                boxShadow: theme.effects.boxShadow,
                borderRadius: 8,
                padding: 16,
            },
        },
        emojiGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(9, 36px)',
        },
        emojiItem: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 6,
            borderRadius: 4,
            fontSize: 20,
            lineHeight: 1,
            cursor: 'pointer',
            boxSizing: 'border-box',
            '& img': {
                display: 'block',
                width: 'auto',
                height: 20,
            },
        },
        emojiItemActive: {
            backgroundColor: theme.colors.blue100,
            boxShadow: `inset 0 0 1px 1px ${theme.colors.blue300}`,
        },
        emojiItemHover: {
            backgroundColor: theme.colors.blue100,
        },
        section: {
            textTransform: 'capitalize',
            padding: '8px 0',
            gridColumn: '1 / span 9',
            whiteSpace: 'nowrap',
        },
        sectionSticky: {
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            width: 'calc(100% - 12px)', // 100% - the scrollbar track width
            backgroundColor: theme.colors.neutralBase,
        },
        hint: {
            boxSizing: 'border-box',
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 8,
            height: 45,
            padding: '12px 16px 0',
            margin: '0 -16px -4px',
            borderTop: `1px solid ${theme.colors.neutral400}`,
        },
        hintIcon: {
            fontSize: 32,
            lineHeight: 1,
            '& img': {
                display: 'block',
                width: 'auto',
                height: 32,
            }
        },
        empty: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 176,
            width: 336,
        }
    };
};
