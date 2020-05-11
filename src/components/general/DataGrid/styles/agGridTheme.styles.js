export default (theme) => ({
    '&.ag-theme-balham': {
        height: '100%',
        backgroundColor: 'white',
        color: '#000',
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: '1',
    },
    '&.ag-theme-balham .ag-menu, &.ag-theme-balham .ag-theme-balham.ag-dnd-ghost, &.ag-theme-balham .ag-cell-inline-editing, &.ag-theme-balham .ag-popup-editor, &.ag-theme-balham .ag-select-agg-func-popup, &.ag-theme-balham .ag-overlay-loading-center': {
        border: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-tab-header .ag-tab': {
        border: '1px solid transparent',
        borderBottomWidth: '0',
        margin: 4,
        marginBottom: -2,
        padding: '4px 8px',
        display: 'flex',
        borderBottom: '2px solid transparent',
        height: 16,
        flex: 'none',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '&.ag-theme-balham .ag-tab-header .ag-tab.ag-tab-selected': {
        backgroundColor: 'white',
        borderBottom: '2px solid white',
        borderColor: '#BDC3C7',
        borderBottomColor: 'transparent',
    },
    '&.ag-theme-balham label': {
        marginBottom: '0',
    },
    '&.ag-theme-balham *': {
        boxSizing: 'border-box',
    },
    '&.ag-theme-balham *:focus, &.ag-theme-balham * *:before, &.ag-theme-balham * *:after': {
        outline: 'none',
        boxSizing: 'border-box',
    },
    '&.ag-theme-balham .ag-tab': {
        boxSizing: 'content-box',
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-1': {
        paddingLeft: 20,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-1': {
        paddingRight: 20,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-1': {
        paddingLeft: 28,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-1': {
        paddingRight: 28,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-2': {
        paddingLeft: 40,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-2': {
        paddingRight: 40,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-2': {
        paddingLeft: 56,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-2': {
        paddingRight: 56,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-3': {
        paddingLeft: 60,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-3': {
        paddingRight: 60,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-3': {
        paddingLeft: 84,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-3': {
        paddingRight: 84,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-4': {
        paddingLeft: 80,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-4': {
        paddingRight: 80,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-4': {
        paddingLeft: 112,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-4': {
        paddingRight: 112,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-5': {
        paddingLeft: 100,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-5': {
        paddingRight: 100,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-5': {
        paddingLeft: 140,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-5': {
        paddingRight: 140,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-6': {
        paddingLeft: 120,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-6': {
        paddingRight: 120,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-6': {
        paddingLeft: 168,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-6': {
        paddingRight: 168,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-7': {
        paddingLeft: 140,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-7': {
        paddingRight: 140,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-7': {
        paddingLeft: 196,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-7': {
        paddingRight: 196,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-8': {
        paddingLeft: 160,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-8': {
        paddingRight: 160,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-8': {
        paddingLeft: 224,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-8': {
        paddingRight: 224,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-9': {
        paddingLeft: 180,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-9': {
        paddingRight: 180,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-9': {
        paddingLeft: 252,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-9': {
        paddingRight: 252,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-10': {
        paddingLeft: 200,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-10': {
        paddingRight: 200,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-10': {
        paddingLeft: 280,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-10': {
        paddingRight: 280,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-11': {
        paddingLeft: 220,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-11': {
        paddingRight: 220,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-11': {
        paddingLeft: 308,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-11': {
        paddingRight: 308,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-12': {
        paddingLeft: 240,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-12': {
        paddingRight: 240,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-12': {
        paddingLeft: 336,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-12': {
        paddingRight: 336,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-13': {
        paddingLeft: 260,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-13': {
        paddingRight: 260,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-13': {
        paddingLeft: 364,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-13': {
        paddingRight: 364,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-14': {
        paddingLeft: 280,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-14': {
        paddingRight: 280,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-14': {
        paddingLeft: 392,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-14': {
        paddingRight: 392,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-15': {
        paddingLeft: 300,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-15': {
        paddingRight: 300,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-15': {
        paddingLeft: 420,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-15': {
        paddingRight: 420,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-16': {
        paddingLeft: 320,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-16': {
        paddingRight: 320,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-16': {
        paddingLeft: 448,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-16': {
        paddingRight: 448,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-17': {
        paddingLeft: 340,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-17': {
        paddingRight: 340,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-17': {
        paddingLeft: 476,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-17': {
        paddingRight: 476,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-18': {
        paddingLeft: 360,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-18': {
        paddingRight: 360,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-18': {
        paddingLeft: 504,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-18': {
        paddingRight: 504,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-19': {
        paddingLeft: 380,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-19': {
        paddingRight: 380,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-19': {
        paddingLeft: 532,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-19': {
        paddingRight: 532,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-20': {
        paddingLeft: 400,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-20': {
        paddingRight: 400,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-20': {
        paddingLeft: 560,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-20': {
        paddingRight: 560,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-21': {
        paddingLeft: 420,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-21': {
        paddingRight: 420,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-21': {
        paddingLeft: 588,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-21': {
        paddingRight: 588,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-22': {
        paddingLeft: 440,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-22': {
        paddingRight: 440,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-22': {
        paddingLeft: 616,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-22': {
        paddingRight: 616,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-23': {
        paddingLeft: 460,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-23': {
        paddingRight: 460,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-23': {
        paddingLeft: 644,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-23': {
        paddingRight: 644,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-24': {
        paddingLeft: 480,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-24': {
        paddingRight: 480,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-24': {
        paddingLeft: 672,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-24': {
        paddingRight: 672,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-25': {
        paddingLeft: 500,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-25': {
        paddingRight: 500,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-25': {
        paddingLeft: 700,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-25': {
        paddingRight: 700,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-26': {
        paddingLeft: 520,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-26': {
        paddingRight: 520,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-26': {
        paddingLeft: 728,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-26': {
        paddingRight: 728,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-27': {
        paddingLeft: 540,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-27': {
        paddingRight: 540,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-27': {
        paddingLeft: 756,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-27': {
        paddingRight: 756,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-28': {
        paddingLeft: 560,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-28': {
        paddingRight: 560,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-28': {
        paddingLeft: 784,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-28': {
        paddingRight: 784,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-29': {
        paddingLeft: 580,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-29': {
        paddingRight: 580,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-29': {
        paddingLeft: 812,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-29': {
        paddingRight: 812,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-30': {
        paddingLeft: 600,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-30': {
        paddingRight: 600,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-30': {
        paddingLeft: 840,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-30': {
        paddingRight: 840,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-31': {
        paddingLeft: 620,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-31': {
        paddingRight: 620,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-31': {
        paddingLeft: 868,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-31': {
        paddingRight: 868,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-32': {
        paddingLeft: 640,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-32': {
        paddingRight: 640,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-32': {
        paddingLeft: 896,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-32': {
        paddingRight: 896,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-33': {
        paddingLeft: 660,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-33': {
        paddingRight: 660,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-33': {
        paddingLeft: 924,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-33': {
        paddingRight: 924,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-34': {
        paddingLeft: 680,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-34': {
        paddingRight: 680,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-34': {
        paddingLeft: 952,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-34': {
        paddingRight: 952,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-35': {
        paddingLeft: 700,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-35': {
        paddingRight: 700,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-35': {
        paddingLeft: 980,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-35': {
        paddingRight: 980,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-36': {
        paddingLeft: 720,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-36': {
        paddingRight: 720,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-36': {
        paddingLeft: 1008,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-36': {
        paddingRight: 1008,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-37': {
        paddingLeft: 740,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-37': {
        paddingRight: 740,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-37': {
        paddingLeft: 1036,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-37': {
        paddingRight: 1036,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-38': {
        paddingLeft: 760,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-38': {
        paddingRight: 760,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-38': {
        paddingLeft: 1064,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-38': {
        paddingRight: 1064,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-39': {
        paddingLeft: 780,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-39': {
        paddingRight: 780,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-39': {
        paddingLeft: 1092,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-39': {
        paddingRight: 1092,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-40': {
        paddingLeft: 800,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-40': {
        paddingRight: 800,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-40': {
        paddingLeft: 1120,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-40': {
        paddingRight: 1120,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-41': {
        paddingLeft: 820,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-41': {
        paddingRight: 820,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-41': {
        paddingLeft: 1148,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-41': {
        paddingRight: 1148,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-42': {
        paddingLeft: 840,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-42': {
        paddingRight: 840,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-42': {
        paddingLeft: 1176,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-42': {
        paddingRight: 1176,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-43': {
        paddingLeft: 860,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-43': {
        paddingRight: 860,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-43': {
        paddingLeft: 1204,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-43': {
        paddingRight: 1204,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-44': {
        paddingLeft: 880,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-44': {
        paddingRight: 880,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-44': {
        paddingLeft: 1232,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-44': {
        paddingRight: 1232,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-45': {
        paddingLeft: 900,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-45': {
        paddingRight: 900,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-45': {
        paddingLeft: 1260,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-45': {
        paddingRight: 1260,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-46': {
        paddingLeft: 920,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-46': {
        paddingRight: 920,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-46': {
        paddingLeft: 1288,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-46': {
        paddingRight: 1288,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-47': {
        paddingLeft: 940,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-47': {
        paddingRight: 940,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-47': {
        paddingLeft: 1316,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-47': {
        paddingRight: 1316,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-48': {
        paddingLeft: 960,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-48': {
        paddingRight: 960,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-48': {
        paddingLeft: 1344,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-48': {
        paddingRight: 1344,
    },
    '&.ag-theme-balham .ag-ltr .ag-toolpanel-indent-49': {
        paddingLeft: 980,
    },
    '&.ag-theme-balham .ag-rtl .ag-toolpanel-indent-49': {
        paddingRight: 980,
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-indent-49': {
        paddingLeft: 1372,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-indent-49': {
        paddingRight: 1372,
    },
    '&.ag-theme-balham .ag-cell .ag-icon': {
        display: 'inline-block',
        verticalAlign: 'middle',
    },
    '&.ag-theme-balham .ag-radio-button-label, &.ag-theme-balham .ag-checkbox-label': {
        cursor: 'default',
        marginLeft: 4,
    },
    '&.ag-theme-balham .ag-radio-button-label:empty, &.ag-theme-balham .ag-checkbox-label:empty': {
        margin: '0',
    },
    '&.ag-theme-balham .ag-cell': {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        border: '1px solid transparent',
        ...theme.typography.defaultText,
        color: theme.colors.text.greySoft,
        cursor: 'auto',
        height: '100%',
    },
    '&.ag-theme-balham .ag-ltr .ag-row-group-leaf-indent': {
        marginLeft: 28,
    },
    '&.ag-theme-balham .ag-ltr .ag-cell': {
        borderRight: '1px solid transparent',
    },
    '&.ag-theme-balham .ag-ltr .ag-row.ag-cell-first-right-pinned, &.ag-theme-balham .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned': {
        borderLeft: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-ltr .ag-row.ag-cell-last-left-pinned, &.ag-theme-balham .ag-ltr .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned': {
        borderRight: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-rtl .ag-row-group-leaf-indent': {
        marginRight: 28,
    },
    '&.ag-theme-balham .ag-rtl .ag-cell': {
        borderLeft: '1px solid transparent',
    },
    '&.ag-theme-balham .ag-rtl .ag-row.ag-cell-first-right-pinned, &.ag-theme-balham .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-first-right-pinned': {
        borderLeft: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-rtl .ag-row.ag-cell-last-left-pinned, &.ag-theme-balham .ag-rtl .ag-cell:not(.ag-cell-focus).ag-cell-last-left-pinned': {
        borderRight: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-value-change-delta': {
        paddingRight: 2,
    },
    '&.ag-theme-balham .ag-value-change-delta-up': {
        color: '#43a047',
    },
    '&.ag-theme-balham .ag-value-change-delta-down': {
        color: '#e53935',
    },
    '&.ag-theme-balham .ag-value-change-value': {
        backgroundColor: 'transparent',
        borderRadius: 1,
        paddingLeft: 1,
        paddingRight: 1,
        transition: 'background-color 1s',
    },
    '&.ag-theme-balham .ag-value-change-value-highlight': {
        backgroundColor: 'rgba(22, 160, 133, 0.5)',
        transition: 'background-color 0.1s',
    },
    '&.ag-theme-balham .ag-input-text-wrapper input:not([type]), &.ag-theme-balham .ag-input-text-wrapper input[type="text"], &.ag-theme-balham .ag-input-text-wrapper input[type="tel"], &.ag-theme-balham .ag-input-text-wrapper input[type="date"], &.ag-theme-balham .ag-input-text-wrapper input[type="datetime-local"]': {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#95A5A6',
    },
    '&.ag-theme-balham .ag-input-text-wrapper input:not([type]):disabled, &.ag-theme-balham .ag-input-text-wrapper input[type="text"]:disabled, &.ag-theme-balham .ag-input-text-wrapper input[type="tel"]:disabled, &.ag-theme-balham .ag-input-text-wrapper input[type="date"]:disabled, &.ag-theme-balham .ag-input-text-wrapper input[type="datetime-local"]:disabled': {
        color: 'rgba(0, 0, 0, 0.38)',
        backgroundColor: '#ebebeb',
        borderColor: 'rgba(149, 165, 166, 0.3)',
    },
    '&.ag-theme-balham .ag-input-text-wrapper input[type="date"]': {
        flex: '1 1 auto',
    },
    '&.ag-theme-balham .ag-input-text-wrapper textarea': {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#95A5A6',
    },
    '&.ag-theme-balham .ag-input-text-wrapper textarea:disabled': {
        color: 'rgba(0, 0, 0, 0.38)',
        backgroundColor: '#ebebeb',
        borderColor: 'rgba(149, 165, 166, 0.3)',
    },
    '&.ag-theme-balham .ag-header': {
        backgroundColor: theme.colors.tableHeader,
        color: 'rgba(0, 0, 0, 0.54)',
        fontWeight: '600',
        fontSize: 12,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        borderBottom: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-pinned-right-header': {
        borderLeft: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-pinned-left-header': {
        borderRight: `1px solid ${theme.colors.placeholders}`,
        '& .ag-header-cell': {
            borderBottom: `1px solid ${theme.colors.placeholders}`,
        },
    },
    '&.ag-theme-balham .ag-header-row': {
        border: 'none',
    },
    '&.ag-theme-balham .ag-row': {
        borderStyle: 'solid',
        borderColor: theme.colors.placeholders,
        borderWidth: '0',
    },
    '&.ag-theme-balham .ag-row:not(.ag-row-first)': {
        borderWidth: '1px 0 0',
    },
    '&.ag-theme-balham .ag-row.ag-row-last': {
        borderBottomWidth: 1,
    },
    '&.ag-theme-balham .ag-row-even': {
        backgroundColor: 'white',
    },
    '&.ag-theme-balham .ag-horizontal-left-spacer': {
        borderRight: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-horizontal-left-spacer.ag-scroller-corner': {
        borderRight: 'none',
    },
    '&.ag-theme-balham .ag-horizontal-right-spacer': {
        minHeight: 'auto !important',
        height: 'auto !important',
        borderLeft: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-horizontal-right-spacer.ag-scroller-corner': {
        borderLeft: 'none',
    },
    '&.ag-theme-balham .ag-numeric-cell': {
        textAlign: 'right',
    },
    '&.ag-theme-balham .ag-header-cell-label .ag-header-icon': {
        marginLeft: 4,
        opacity: '0.87',
    },
    '&.ag-theme-balham .ag-header-cell, &.ag-theme-balham .ag-header-group-cell': {
        backgroundColor: theme.colors.tableHeader,
        borderStyle: 'solid',
        borderColor: theme.colors.placeholders,
        paddingLeft: 20,
        paddingRight: 20,
        borderWidth: '0',
        ...theme.typography.defaultText,
        color: theme.colors.text.black,
        fontWeight: 500,
    },
    '&.ag-theme-balham .ag-header-cell.ag-header-cell-moving, &.ag-theme-balham .ag-header-group-cell.ag-header-cell-moving': {
        backgroundColor: 'white',
    },
    '&.ag-theme-balham .ag-header-cell:not(.ag-header-group-cell-no-group), &.ag-theme-balham .ag-header-group-cell:not(.ag-header-group-cell-no-group)': {
        borderTopWidth: 1,
    },
    '&.ag-theme-balham .ag-header-row:first-child .ag-header-cell, &.ag-theme-balham .ag-header-row:first-child .ag-header-group-cell': {
        borderTopWidth: '0',
    },
    '&.ag-theme-balham .ag-header-cell-resize': {
        cursor: 'col-resize',
        width: 8,
    },
    '&.ag-theme-balham .ag-header-select-all': {
        marginRight: 12,
    },
    '&.ag-theme-balham .ag-row-drag': {
        cursor: 'grab',
        minWidth: 28,
    },
    '&.ag-theme-balham .ag-row-dragging, &.ag-theme-balham .ag-row-dragging .ag-row-drag': {
        cursor: 'move',
    },
    '&.ag-theme-balham .ag-column-drag': {
        cursor: 'grab',
    },
    '&.ag-theme-balham .ag-row-dragging': {
        opacity: '0.5',
    },
    '&.ag-theme-balham .ag-ltr .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected), &.ag-theme-balham .ag-ltr .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell, &.ag-theme-balham .ag-ltr .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle, &.ag-theme-balham .ag-rtl .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected), &.ag-theme-balham .ag-rtl .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell, &.ag-theme-balham .ag-rtl .ag-cell-focus.ag-cell-range-single-cell.ag-cell-range-handle': {
        border: '1px solid #0091EA',
        outline: 'initial',
    },
    '&.ag-theme-balham .ag-menu': {
        background: 'white',
        borderRadius: 2,
        boxShadow: 'none',
        padding: '0',
    },
    '&.ag-theme-balham .ag-menu .ag-menu-list': {
        cursor: 'default',
        marginBottom: 4,
        marginTop: 4,
        width: '100%',
    },
    '&.ag-theme-balham .ag-menu .ag-menu-option-active': {
        backgroundColor: '#ECF0F1',
    },
    '&.ag-theme-balham .ag-menu .ag-menu-option-disabled': {
        opacity: '0.5',
    },
    '&.ag-theme-balham .ag-menu .ag-menu-option-text': {
        marginLeft: 4,
    },
    '&.ag-theme-balham .ag-menu .ag-menu-option-icon': {
        paddingLeft: 4,
        paddingRight: 4,
        minWidth: 24,
    },
    '&.ag-theme-balham .ag-menu .ag-menu-option-shortcut': {
        paddingLeft: 8,
    },
    '&.ag-theme-balham .ag-menu .ag-menu-separator': {
        height: 8,
    },
    '&.ag-theme-balham .ag-menu .ag-menu-separator > span': {
        backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg%20width%3D'1'%20height%3D'8px'%20viewBox%3D'0%200%201%208px'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Cline%20x1%3D'0'%20y1%3D'4px'%20x2%3D'1'%20y2%3D'4px'%20stroke-width%3D'1'%20stroke%3D'%23BDC3C7'%2F%3E%3C%2Fsvg%3E\")",
    },
    '&.ag-theme-balham .ag-menu .ag-menu-option-popup-pointer': {
        width: 24,
        textAlign: 'center',
    },
    '&.ag-theme-balham.ag-dnd-ghost': {
        background: 'white',
        borderRadius: 2,
        boxShadow: 'none',
        padding: '0 8px',
        border: `1px solid ${theme.colors.placeholders}`,
        color: 'rgba(0, 0, 0, 0.54)',
        fontWeight: '600',
        fontSize: 12,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        height: '32px !important',
        lineHeight: '32px',
        margin: '0',
        transform: 'translateY(8px)',
    },
    '&.ag-theme-balham.ag-dnd-ghost span, &.ag-theme-balham.ag-dnd-ghost div': {
        height: '100%',
        margin: '0',
        padding: '0',
    },
    '&.ag-theme-balham.ag-dnd-ghost .ag-dnd-ghost-icon': {
        marginRight: 4,
        opacity: '0.87',
    },
    '&.ag-theme-balham .ag-tab-header': {
        background: '#f5f7f7',
        minWidth: 220,
        width: '100%',
        display: 'flex',
        borderBottom: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-tab-body': {
        padding: '4px 0',
    },
    '&.ag-theme-balham .ag-tab-body .ag-menu-list': {
        marginBottom: '0',
        marginTop: '0',
    },
    '&.ag-theme-balham .ag-tab-body .ag-menu-list > div:first-child > span': {
        paddingTop: '0',
    },
    '&.ag-theme-balham .ag-tab-body .ag-menu-list > div:last-child > span': {
        paddingBottom: '0',
    },
    '&.ag-theme-balham .ag-tab-body .ag-menu-list > div:last-child > .ag-menu-option-popup-pointer': {
        backgroundPositionY: '0',
    },
    '&.ag-theme-balham .ag-filter .ag-filter-select, &.ag-theme-balham .ag-filter .ag-filter-body': {
        marginBottom: 4,
    },
    '&.ag-theme-balham .ag-filter .ag-filter-body': {
        marginTop: '0',
    },
    '&.ag-theme-balham .ag-filter .ag-filter-filter': {
        marginLeft: 4,
        marginRight: 4,
    },
    '&.ag-theme-balham .ag-filter .ag-filter-select': {
        margin: 4,
    },
    '&.ag-theme-balham .ag-filter input[type="radio"]': {
        margin: '0 3px 0 6px',
        width: 12,
        height: 17,
        verticalAlign: 'top',
    },
    '&.ag-theme-balham .ag-filter input[type="text"], &.ag-theme-balham .ag-filter input[type="date"]': {
        paddingLeft: 4,
    },
    '&.ag-theme-balham .ag-filter .ag-set-filter-list': {
        height: 168,
    },
    '&.ag-theme-balham .ag-filter .ag-set-filter-item': {
        height: 28,
        display: 'flex',
        alignItems: 'center',
    },
    '&.ag-theme-balham .ag-filter .ag-set-filter-item > div, &.ag-theme-balham .ag-filter .ag-set-filter-item > span': {
        marginLeft: 5,
        display: 'flex',
    },
    '&.ag-theme-balham .ag-filter .ag-filter-header-container:nth-child(2)': {
        borderBottom: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-filter .ag-filter-apply-panel': {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: 4,
        paddingTop: 8,
    },
    '&.ag-theme-balham .ag-filter .ag-filter-apply-panel button': {
        lineHeight: '1.5',
    },
    '&.ag-theme-balham .ag-filter .ag-filter-apply-panel button + button': {
        marginLeft: 8,
    },
    '&.ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column-group, &.ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column': {
        height: 20,
    },
    '&.ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, &.ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-tool-panel-column-label, &.ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, &.ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, &.ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column .ag-column-tool-panel-column-label, &.ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons': {
        marginLeft: 4,
        marginRight: 4,
    },
    '&.ag-theme-balham .ag-column-select-panel .ag-primary-cols-list-panel': {
        borderTop: `1px solid ${theme.colors.placeholders}`,
        paddingTop: 4,
    },
    '&.ag-theme-balham .ag-column-select-panel .ag-primary-cols-list-panel > div': {
        cursor: 'pointer',
    },
    '&.ag-theme-balham .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent': {
        marginLeft: 24,
    },
    '&.ag-theme-balham .ag-primary-cols-header-panel': {
        borderTop: `1px solid ${theme.colors.placeholders}`,
        height: 32,
        alignItems: 'center',
    },
    '&.ag-theme-balham .ag-primary-cols-header-panel > div': {
        cursor: 'pointer',
        margin: '0 4px',
    },
    '&.ag-theme-balham .ag-primary-cols-header-panel .ag-filter-body': {
        marginLeft: 4,
        marginRight: 4,
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper': {
        borderRight: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-filter-panel': {
        width: '100%',
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance': {
        color: 'rgba(0, 0, 0, 0.54)',
        fontWeight: '600',
        flex: 'auto',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        display: 'flex',
        flexFlow: 'column nowrap',
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance .ag-filter-toolpanel-header': {
        padding: '7px 5px',
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-toolpanel-instance .ag-filter-toolpanel-header > div': {
        margin: 'auto 0',
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-body-wrapper': {
        paddingTop: 5,
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-filter-panel .ag-filter-air': {
        border: `1px solid ${theme.colors.placeholders}`,
        borderLeft: '0',
        borderRight: '0',
        padding: '4px 0',
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-pivot-mode-panel': {
        height: 32,
        display: 'flex',
        flex: 'none',
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select': {
        display: 'flex',
        alignItems: 'center',
        marginLeft: 4,
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-column-select-panel': {
        borderBottom: `1px solid ${theme.colors.placeholders}`,
        paddingBottom: 3,
        paddingTop: '0',
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-column-drop': {
        borderBottom: `1px solid ${theme.colors.placeholders}`,
        padding: '4px 0',
        paddingBottom: 8,
        paddingTop: 8,
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message': {
        color: 'rgba(0, 0, 0, 0.38)',
        fontWeight: '600',
        fontSize: 12,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        paddingLeft: 24,
        paddingRight: 4,
        marginTop: 4,
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-list': {
        cursor: 'default',
        marginTop: 4,
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-column-drop > div > :first-child': {
        paddingLeft: 4,
        paddingRight: 4,
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-column-drop:last-child': {
        borderBottom: '0',
    },
    '&.ag-theme-balham .ag-numeric-header .ag-header-cell-label .ag-header-icon': {
        marginLeft: '0',
        marginRight: 4,
    },
    '&.ag-theme-balham .ag-paging-panel': {
        borderTop: `1px solid ${theme.colors.placeholders}`,
        color: 'rgba(0, 0, 0, 0.54)',
        height: 32,
        padding: '0 12px',
    },
    '&.ag-theme-balham .ag-paging-panel > span': {
        marginLeft: 16,
    },
    '&.ag-theme-balham .ag-paging-page-summary-panel .ag-icon': {
        width: 16,
        height: 16,
        cursor: 'pointer',
    },
    '&.ag-theme-balham .ag-paging-page-summary-panel .ag-icon.ag-disabled': {
        color: 'rgba(0, 0, 0, 0.38)',
        opacity: '0.38',
    },
    '&.ag-theme-balham .ag-paging-page-summary-panel .ag-icon button': {
        width: '100%',
        height: '100%',
        opacity: '0',
    },
    '&.ag-theme-balham .ag-paging-page-summary-panel span': {
        margin: '0 4px',
    },
    '&.ag-theme-balham .ag-row-selected': {
        backgroundColor: '#b7e4ff',
        borderColor: '#b7e4ff',
    },
    '&.ag-theme-balham .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell), &.ag-theme-balham .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell)': {
        border: '1px solid transparent',
    },
    '&.ag-theme-balham .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top, &.ag-theme-balham .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top': {
        borderTopColor: '#0091EA',
    },
    '&.ag-theme-balham .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right, &.ag-theme-balham .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right': {
        borderRightColor: '#0091EA',
    },
    '&.ag-theme-balham .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom, &.ag-theme-balham .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom': {
        borderBottomColor: '#0091EA',
    },
    '&.ag-theme-balham .ag-ltr .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left, &.ag-theme-balham .ag-rtl .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left': {
        borderLeftColor: '#0091EA',
    },
    '&.ag-theme-balham .ag-cell-range-selected:not(.ag-cell-focus)': {
        backgroundColor: 'rgba(0, 145, 234, 0.2)',
    },
    '&.ag-theme-balham .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart': {
        backgroundColor: 'rgba(0, 88, 255, 0.1)',
    },
    '&.ag-theme-balham .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category': {
        backgroundColor: 'rgba(0, 255, 132, 0.1)',
    },
    '&.ag-theme-balham .ag-cell-range-selected-1:not(.ag-cell-focus)': {
        backgroundColor: 'rgba(0, 145, 234, 0.3)',
    },
    '&.ag-theme-balham .ag-cell-range-selected-2:not(.ag-cell-focus)': {
        backgroundColor: 'rgba(0, 145, 234, 0.4)',
    },
    '&.ag-theme-balham .ag-cell-range-selected-3:not(.ag-cell-focus)': {
        backgroundColor: 'rgba(0, 145, 234, 0.5)',
    },
    '&.ag-theme-balham .ag-cell-range-selected-4:not(.ag-cell-focus)': {
        backgroundColor: 'rgba(0, 145, 234, 0.6)',
    },
    '&.ag-theme-balham .ag-ltr .ag-selection-fill-top, &.ag-theme-balham .ag-rtl .ag-selection-fill-top': {
        borderTop: '1px dashed #0091EA',
    },
    '&.ag-theme-balham .ag-ltr .ag-selection-fill-top.ag-cell.ag-cell-range-selected, &.ag-theme-balham .ag-rtl .ag-selection-fill-top.ag-cell.ag-cell-range-selected': {
        borderTop: '1px dashed #869198',
    },
    '&.ag-theme-balham .ag-ltr .ag-selection-fill-right, &.ag-theme-balham .ag-rtl .ag-selection-fill-right': {
        borderRight: '1px dashed #0091EA',
    },
    '&.ag-theme-balham .ag-ltr .ag-selection-fill-right.ag-cell.ag-cell-range-selected, &.ag-theme-balham .ag-rtl .ag-selection-fill-right.ag-cell.ag-cell-range-selected': {
        borderRight: '1px dashed #869198',
    },
    '&.ag-theme-balham .ag-ltr .ag-selection-fill-bottom, &.ag-theme-balham .ag-rtl .ag-selection-fill-bottom': {
        borderBottom: '1px dashed #0091EA',
    },
    '&.ag-theme-balham .ag-ltr .ag-selection-fill-bottom.ag-cell.ag-cell-range-selected, &.ag-theme-balham .ag-rtl .ag-selection-fill-bottom.ag-cell.ag-cell-range-selected': {
        borderBottom: '1px dashed #869198',
    },
    '&.ag-theme-balham .ag-ltr .ag-selection-fill-left, &.ag-theme-balham .ag-rtl .ag-selection-fill-left': {
        borderLeft: '1px dashed #0091EA',
    },
    '&.ag-theme-balham .ag-ltr .ag-selection-fill-left.ag-cell.ag-cell-range-selected, &.ag-theme-balham .ag-rtl .ag-selection-fill-left.ag-cell.ag-cell-range-selected': {
        borderLeft: '1px dashed #869198',
    },
    '&.ag-theme-balham .ag-fill-handle, &.ag-theme-balham .ag-range-handle': {
        position: 'absolute',
        width: 6,
        height: 6,
        bottom: -1,
        right: -1,
        backgroundColor: '#0091EA',
    },
    '&.ag-theme-balham .ag-fill-handle': {
        cursor: 'cell',
    },
    '&.ag-theme-balham .ag-range-handle': {
        cursor: 'nwse-resize',
    },
    '&.ag-theme-balham .ag-cell-inline-editing': {
        padding: '0',
        height: 28,
    },
    '&.ag-theme-balham .ag-cell-inline-editing, &.ag-theme-balham .ag-popup-editor': {
        background: 'white',
        borderRadius: 2,
        boxShadow: 'none',
        padding: 4,
        backgroundColor: '#f5f7f7',
    },
    '&.ag-theme-balham .ag-popup-editor': {
        padding: '0',
    },
    '&.ag-theme-balham .ag-popup-editor .ag-large-textarea textarea': {
        height: 'auto',
        padding: 12,
    },
    '&.ag-theme-balham .ag-rich-select': {
        backgroundColor: '#f5f7f7',
    },
    '&.ag-theme-balham .ag-rich-select .ag-rich-select-list': {
        width: 200,
        height: 182,
    },
    '&.ag-theme-balham .ag-rich-select .ag-rich-select-value': {
        padding: '0 4px 0 12px',
        height: 28,
    },
    '&.ag-theme-balham .ag-rich-select .ag-virtual-list-item': {
        cursor: 'default',
        height: 28,
    },
    '&.ag-theme-balham .ag-rich-select .ag-virtual-list-item:hover': {
        backgroundColor: '#ECF0F1',
    },
    '&.ag-theme-balham .ag-rich-select .ag-rich-select-row': {
        paddingLeft: 12,
    },
    '&.ag-theme-balham .ag-rich-select .ag-rich-select-row-selected': {
        backgroundColor: '#b7e4ff',
    },
    '&.ag-theme-balham .ag-ltr .ag-floating-filter-button': {
        marginLeft: 12,
    },
    '&.ag-theme-balham .ag-floating-filter-button button': {
        appearance: 'none',
        background: 'transparent',
        border: '0',
        height: 16,
        padding: '0',
        width: 16,
    },
    '&.ag-theme-balham .ag-selection-checkbox:not(.ag-hidden) ~ .ag-cell-value:not(:empty), &.ag-theme-balham .ag-selection-checkbox:not(.ag-hidden) + .ag-group-value:not(:empty), &.ag-theme-balham .ag-group-expanded:not(.ag-hidden) ~ .ag-cell-value:not(:empty), &.ag-theme-balham .ag-group-expanded:not(.ag-hidden) + .ag-group-value:not(:empty), &.ag-theme-balham .ag-group-contracted:not(.ag-hidden) ~ .ag-cell-value:not(:empty), &.ag-theme-balham .ag-group-contracted:not(.ag-hidden) + .ag-group-value:not(:empty), &.ag-theme-balham .ag-group-checkbox:not(.ag-invisible) ~ .ag-cell-value:not(:empty), &.ag-theme-balham .ag-group-checkbox:not(.ag-invisible) + .ag-group-value:not(:empty)': {
        marginLeft: 12,
    },
    '&.ag-theme-balham .ag-selection-checkbox:not(.ag-hidden) ~ .ag-group-checkbox, &.ag-theme-balham .ag-group-expanded:not(.ag-hidden) ~ .ag-group-checkbox, &.ag-theme-balham .ag-group-contracted:not(.ag-hidden) ~ .ag-group-checkbox, &.ag-theme-balham .ag-group-checkbox:not(.ag-invisible) ~ .ag-group-checkbox': {
        marginLeft: 12,
    },
    '&.ag-theme-balham .ag-group-child-count': {
        marginLeft: 2,
    },
    '&.ag-theme-balham .ag-selection-checkbox span': {
        position: 'relative',
    },
    '&.ag-theme-balham .ag-column-drop-horizontal': {
        backgroundColor: '#f5f7f7',
        height: 32,
        paddingLeft: 12,
    },
    '&.ag-theme-balham .ag-column-drop-horizontal .ag-icon-group, &.ag-theme-balham .ag-column-drop-horizontal .ag-icon-pivot': {
        marginRight: 12,
    },
    '&.ag-theme-balham .ag-column-drop-horizontal .ag-left-arrow, &.ag-theme-balham .ag-column-drop-horizontal .ag-right-arrow': {
        margin: '0 4px',
        opacity: '0.54',
    },
    '&.ag-theme-balham .ag-column-drop-horizontal .ag-column-drop-empty-message': {
        opacity: '0.38',
    },
    '&.ag-theme-balham .ag-column-drop-cell': {
        background: '#dde4e6',
        borderRadius: 16,
        minHeight: 24,
        padding: '0 2px',
    },
    '&.ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-text': {
        margin: '0 4px',
    },
    '&.ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-button': {
        minWidth: 16,
        margin: '0 2px',
        opacity: '0.54',
        marginBottom: 2,
        marginTop: 2,
    },
    '&.ag-theme-balham .ag-column-drop-cell .ag-column-drop-cell-button:hover': {
        opacity: '1',
    },
    '&.ag-theme-balham .ag-column-drop-cell .ag-column-drag': {
        marginLeft: 8,
    },
    '&.ag-theme-balham .ag-column-drop-vertical .ag-column-drop-cell': {
        marginTop: 4,
        marginLeft: 8,
        marginRight: 8,
    },
    '&.ag-theme-balham .ag-select-agg-func-popup': {
        background: 'white',
        borderRadius: 2,
        boxShadow: 'none',
        padding: '0',
        height: 70,
    },
    '&.ag-theme-balham .ag-select-agg-func-popup .ag-virtual-list-item': {
        cursor: 'default',
        lineHeight: '20px',
        paddingLeft: 8,
    },
    '&.ag-theme-balham .ag-set-filter-list, &.ag-theme-balham .ag-menu-column-select-wrapper': {
        width: 'auto',
    },
    '&.ag-theme-balham .ag-column-drop-vertical > .ag-column-drop-cell': {
        marginLeft: 4,
        marginTop: '0',
    },
    '&.ag-theme-balham .ag-cell-data-changed': {
        backgroundColor: 'rgba(22, 160, 133, 0.5) !important',
    },
    '&.ag-theme-balham .ag-cell-data-changed-animation': {
        backgroundColor: 'transparent',
        transition: 'background-color 1s',
    },
    '&.ag-theme-balham .ag-row-stub': {
        backgroundColor: 'inherit',
    },
    '&.ag-theme-balham .ag-stub-cell': {
        paddingLeft: 12,
        paddingTop: 4,
    },
    '&.ag-theme-balham .ag-stub-cell .ag-loading-icon': {
        animationName: 'spin',
        animationDuration: '1000ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
    },
    '&.ag-theme-balham .ag-stub-cell .ag-loading-text': {
        marginLeft: 4,
        marginTop: 4,
    },
    '&.ag-theme-balham .ag-floating-top': {
        borderBottom: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-floating-bottom': {
        borderTop: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-floating-top, &.ag-theme-balham .ag-floating-bottom': {
        backgroundColor: 'inherit',
    },
    '&.ag-theme-balham .ag-floating-top .ag-row, &.ag-theme-balham .ag-floating-bottom .ag-row': {
        backgroundColor: 'inherit',
    },
    '&.ag-theme-balham .ag-status-bar': {
        background: 'white',
        border: `1px solid ${theme.colors.placeholders}`,
        borderTopWidth: '0',
        color: 'rgba(0, 0, 0, 0.38)',
        fontWeight: '600',
        fontSize: 12,
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        paddingRight: 16,
        paddingLeft: 16,
        lineHeight: '1.5',
    },
    '&.ag-theme-balham .ag-name-value-value': {
        color: '#000',
    },
    '&.ag-theme-balham .ag-status-bar-center': {
        textAlign: 'center',
    },
    '&.ag-theme-balham .ag-name-value': {
        marginLeft: 4,
        marginRight: 4,
        paddingTop: 8,
        paddingBottom: 8,
    },
    '&.ag-theme-balham .ag-details-row': {
        padding: 20,
        backgroundColor: 'white',
    },
    '&.ag-theme-balham .ag-overlay-loading-wrapper': {
        backgroundColor: 'none',
    },
    '&.ag-theme-balham .ag-overlay-loading-center': {
        background: 'white',
        borderRadius: 2,
        boxShadow: 'none',
        padding: 16,
        backgroundColor: 'white',
        border: `1px solid ${theme.colors.placeholders}`,
        color: '#000',
    },
    '&.ag-theme-balham .ag-side-bar': {
        backgroundColor: '#f5f7f7',
        border: `1px solid ${theme.colors.placeholders}`,
        borderLeftWidth: '0',
        position: 'relative',
    },
    '&.ag-theme-balham .ag-side-bar .ag-side-buttons': {
        paddingTop: 16,
        background: 'white',
        width: 20,
        position: 'relative',
    },
    '&.ag-theme-balham .ag-side-bar .ag-side-buttons .ag-side-button button': {
        background: 'transparent',
        border: '0',
        color: '#000',
        padding: '8px 0 8px 0',
        width: '100%',
        margin: '0',
        minHeight: 72,
        borderWidth: '1px 0 1px 0',
        borderStyle: 'solid',
        borderColor: 'transparent',
        backgroundPositionY: 'center',
        backgroundPositionX: 'center',
        backgroundRepeat: 'no-repeat',
    },
    '&.ag-theme-balham .ag-side-bar .ag-side-buttons .ag-selected button': {
        backgroundColor: '#f5f7f7',
        marginLeft: -1,
        paddingLeft: 1,
        borderColor: '#BDC3C7',
    },
    '&.ag-theme-balham .ag-side-bar .ag-panel-container': {
        borderRight: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-side-bar.full-width .ag-panel-container': {
        borderRight: '0',
    },
    '&.ag-theme-balham .ag-side-bar .ag-column-drop': {
        minHeight: 50,
    },
    '&.ag-theme-balham .ag-primary-cols-filter-wrapper': {
        marginLeft: 4,
        marginRight: 4,
    },
    '&.ag-theme-balham .ag-group-component': {
        margin: '10px 5px',
        padding: '10px 2px',
        border: '0px solid rgba(189, 195, 199, 0.5)',
        borderTopWidth: 4,
        borderRadius: 3,
    },
    '&.ag-theme-balham .ag-group-component .ag-group-component-label': {
        backgroundColor: 'white',
        marginLeft: 8,
        padding: '0 2px',
        fontSize: 10,
        fontWeight: '500',
        textTransform: 'uppercase',
    },
    '&.ag-theme-balham .ag-group-component .ag-group-item': {
        marginTop: 2,
    },
    '&.ag-theme-balham.ag-popup > div': {
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
    },
    '&.ag-theme-balham .ag-dialog': {
        backgroundColor: 'white',
        border: `1px solid ${theme.colors.placeholders}`,
    },
    '& .ag-dragging-range-handle .ag-theme-balham .ag-dialog, & .ag-dragging-fill-handle .ag-theme-balham .ag-dialog': {
        opacity: '0.7',
        pointerEvents: 'none',
    },
    '&.ag-theme-balham .ag-dialog .ag-dialog-title-bar': {
        backgroundColor: '#f5f7f7',
        color: 'rgba(0, 0, 0, 0.54)',
        height: 32,
        fontSize: 12,
        fontWeight: '600',
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
        paddingLeft: 12,
        padding: '5px 10px',
    },
    '&.ag-theme-balham .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons .ag-dialog-button': {
        height: 20,
        width: 20,
        borderRadius: 5,
    },
    '&.ag-theme-balham .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons .ag-dialog-button .ag-icon': {
        lineHeight: '20px',
        fontSize: 20,
    },
    '&.ag-theme-balham .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons .ag-dialog-button:hover, &.ag-theme-balham .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons .ag-dialog-button.ag-has-popup': {
        backgroundColor: '#d7e0e2',
    },
    '&.ag-theme-balham .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons .ag-dialog-button:not(:last-child)': {
        marginRight: 5,
    },
    '&.ag-theme-balham .ag-dialog .ag-message-box .ag-message-box-button-bar': {
        height: 30,
        backgroundColor: '#f5f7f7',
        padding: 2,
    },
    '&.ag-theme-balham .ag-dialog .ag-message-box .ag-message-box-button-bar button': {
        borderRadius: 2,
    },
    '&.ag-theme-balham .ag-tooltip': {
        backgroundColor: '#cbd0d3',
        color: '#000',
        borderRadius: 2,
        padding: 5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#cbd0d3',
        transition: 'opacity 1s',
    },
    '&.ag-theme-balham .ag-tooltip.ag-tooltip-hiding': {
        opacity: '0',
    },
    '&.ag-theme-balham .ag-chart .ag-chart-menu': {
        background: 'white',
    },
    '&.ag-theme-balham .ag-chart .ag-chart-menu > span:hover': {
        backgroundColor: '#e6e6e6',
    },
    '&.ag-theme-balham .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper > div': {
        border: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper > div.ag-selected': {
        borderColor: '#0091EA',
    },
    '&.ag-theme-balham .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item': {
        color: '#000',
        fontSize: 10,
    },
    '&.ag-theme-balham .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item.ag-selected': {
        color: '#0091EA',
    },
    '&.ag-theme-balham .ag-icon': {
        fontFamily: '"agGridBalham"',
        speak: 'none',
        fontSize: 16,
        color: '#7F8C8D',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontVariant: 'normal',
        textTransform: 'none',
    },
    '&.ag-theme-balham .ag-icon-aggregation:before': {
        content: '"E900"',
    },
    '&.ag-theme-balham .ag-icon-arrows:before': {
        content: '"E901"',
    },
    '&.ag-theme-balham .ag-icon-asc:before': {
        content: '"E902"',
    },
    '&.ag-theme-balham .ag-icon-cancel:before': {
        content: '"E903"',
    },
    '&.ag-theme-balham .ag-icon-chart:before': {
        content: '"E904"',
    },
    '&.ag-theme-balham .ag-icon-checkbox-checked, &.ag-theme-balham .ag-icon-checkbox-indeterminate, &.ag-theme-balham .ag-icon-checkbox-unchecked': {
        backgroundColor: 'white',
        lineHeight: '16px',
        borderRadius: 3,
    },
    '&.ag-theme-balham .ag-icon-checkbox-checked-readonly, &.ag-theme-balham .ag-icon-checkbox-indeterminate-readonly, &.ag-theme-balham .ag-icon-checkbox-unchecked-readonly': {
        cursor: 'default',
        opacity: '0.38',
    },
    '&.ag-theme-balham .ag-icon-checkbox-checked': {
        color: '#0091EA',
    },
    '&.ag-theme-balham .ag-icon-checkbox-checked:before, &.ag-theme-balham .ag-icon-checkbox-checked-readonly:before': {
        content: '"E905"',
    },
    '&.ag-theme-balham .ag-icon-checkbox-indeterminate:before, &.ag-theme-balham .ag-icon-checkbox-indeterminate-readonly:before': {
        content: '"E906"',
    },
    '&.ag-theme-balham .ag-icon-checkbox-unchecked:before, &.ag-theme-balham .ag-icon-checkbox-unchecked-readonly:before': {
        content: '"E907"',
    },
    '&.ag-theme-balham .ag-icon-column:before': {
        content: '"E908"',
    },
    '&.ag-theme-balham .ag-icon-columns:before': {
        content: '"E909"',
    },
    '&.ag-theme-balham .ag-icon-contracted:before': {
        content: '"E90A"',
    },
    '&.ag-theme-balham .ag-group-expanded .ag-icon-contracted:empty:before': {
        content: '"E932"',
    },
    '&.ag-theme-balham .ag-icon-copy:before': {
        content: '"E90B"',
    },
    '&.ag-theme-balham .ag-icon-cross:before': {
        content: '"E90C"',
    },
    '&.ag-theme-balham .ag-icon-cut:before': {
        content: '"E90D"',
    },
    '&.ag-theme-balham .ag-icon-data:before': {
        content: '"E90E"',
    },
    '&.ag-theme-balham .ag-icon-desc:before': {
        content: '"E90F"',
    },
    '&.ag-theme-balham .ag-icon-expanded:before': {
        content: '"E910"',
    },
    '&.ag-theme-balham .ag-icon-eye-slash:before': {
        content: '"E911"',
    },
    '&.ag-theme-balham .ag-icon-eye:before': {
        content: '"E912"',
    },
    '&.ag-theme-balham .ag-icon-filter:before': {
        content: '"E913"',
    },
    '&.ag-theme-balham .ag-icon-first:before': {
        content: '"E914"',
    },
    '&.ag-theme-balham .ag-icon-grip:before, &.ag-theme-balham .ag-icon-row-drag:before': {
        content: '"E915"',
    },
    '&.ag-theme-balham .ag-icon-group:before': {
        content: '"E916"',
    },
    '&.ag-theme-balham .ag-icon-indeterminate:before': {
        content: '"E917"',
    },
    '&.ag-theme-balham .ag-icon-last:before': {
        content: '"E918"',
    },
    '&.ag-theme-balham .ag-icon-left:before, &.ag-theme-balham .ag-right-arrow:before': {
        content: '"E919"',
    },
    '&.ag-theme-balham .ag-icon-loading:before': {
        content: '"E91A"',
    },
    '&.ag-theme-balham .ag-icon-maximize:before': {
        content: '"E91B"',
    },
    '&.ag-theme-balham .ag-icon-menu:before': {
        content: '"E91C"',
    },
    '&.ag-theme-balham .ag-icon-minimize:before': {
        content: '"E91D"',
    },
    '&.ag-theme-balham .ag-icon-minus:before': {
        content: '"E91E"',
    },
    '&.ag-theme-balham .ag-icon-next:before': {
        content: '"E91F"',
    },
    '&.ag-theme-balham .ag-icon-none:before': {
        content: '"E920"',
    },
    '&.ag-theme-balham .ag-icon-not-allowed:before': {
        content: '"E921"',
    },
    '&.ag-theme-balham .ag-icon-paste:before': {
        content: '"E922"',
    },
    '&.ag-theme-balham .ag-icon-pin:before': {
        content: '"E923"',
    },
    '&.ag-theme-balham .ag-icon-pivot:before': {
        content: '"E924"',
    },
    '&.ag-theme-balham .ag-icon-plus:before': {
        content: '"E925"',
    },
    '&.ag-theme-balham .ag-icon-previous:before': {
        content: '"E926"',
    },
    '&.ag-theme-balham .ag-icon-radio-button-off:before': {
        content: '"E927"',
    },
    '&.ag-theme-balham .ag-icon-radio-button-on': {
        color: '#0091EA',
    },
    '&.ag-theme-balham .ag-icon-radio-button-on:before': {
        content: '"E928"',
    },
    '&.ag-theme-balham .ag-icon-right:before, &.ag-theme-balham .ag-right-arrow:before': {
        content: '"E929"',
    },
    '&.ag-theme-balham .ag-icon-save:before': {
        content: '"E92A"',
    },
    '&.ag-theme-balham .ag-icon-small-down:before': {
        content: '"E92B"',
    },
    '&.ag-theme-balham .ag-icon-small-left:before': {
        content: '"E92C"',
    },
    '&.ag-theme-balham .ag-icon-small-right:before': {
        content: '"E92D"',
    },
    '&.ag-theme-balham .ag-icon-small-up:before': {
        content: '"E92E"',
    },
    '&.ag-theme-balham .ag-icon-tick:before': {
        content: '"E92F"',
    },
    '&.ag-theme-balham .ag-icon-tree-closed:before': {
        content: '"E930"',
    },
    '&.ag-theme-balham .ag-icon-tree-indeterminate:before': {
        content: '"E931"',
    },
    '&.ag-theme-balham .ag-icon-tree-open:before': {
        content: '"E932"',
    },
    '&.ag-theme-balham .ag-rtl': {
        textAlign: 'right',
    },
    '&.ag-theme-balham .ag-rtl .ag-numeric-cell': {
        textAlign: 'left',
    },
    '&.ag-theme-balham .ag-rtl .ag-radio-button-label, &.ag-theme-balham .ag-rtl .ag-checkbox-label': {
        marginRight: 4,
        marginLeft: '0',
    },
    '&.ag-theme-balham .ag-rtl .ag-tool-panel-wrapper .ag-pivot-mode-panel .ag-pivot-mode-select': {
        marginRight: 4,
    },
    '&.ag-theme-balham .ag-rtl .ag-tool-panel-wrapper .ag-column-drop .ag-column-drop-empty-message': {
        paddingLeft: 4,
        paddingRight: 16,
    },
    '&.ag-theme-balham .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-select-checkbox, &.ag-theme-balham .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column-group .ag-column-group-icons, &.ag-theme-balham .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-select-checkbox, &.ag-theme-balham .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column .ag-column-group-icons': {
        marginLeft: 4,
        marginRight: 4,
    },
    '&.ag-theme-balham .ag-rtl .ag-column-select-panel .ag-column-tool-panel-column.ag-toolpanel-add-group-indent': {
        marginLeft: '0',
        marginRight: 24,
    },
    '&.ag-theme-balham .ag-rtl .ag-header-select-all': {
        marginLeft: 12,
        marginRight: '0',
    },
    '&.ag-theme-balham .ag-rtl .ag-selection-checkbox, &.ag-theme-balham .ag-rtl .ag-group-checkbox, &.ag-theme-balham .ag-rtl .ag-group-expanded, &.ag-theme-balham .ag-rtl .ag-group-contracted': {
        display: 'inline-flex',
    },
    '&.ag-theme-balham .ag-rtl .ag-selection-checkbox + .ag-cell-value:not(:empty), &.ag-theme-balham .ag-rtl .ag-selection-checkbox + .ag-group-value:not(:empty), &.ag-theme-balham .ag-rtl .ag-group-checkbox + .ag-cell-value:not(:empty), &.ag-theme-balham .ag-rtl .ag-group-checkbox + .ag-group-value:not(:empty), &.ag-theme-balham .ag-rtl .ag-group-expanded + .ag-cell-value:not(:empty), &.ag-theme-balham .ag-rtl .ag-group-expanded + .ag-group-value:not(:empty), &.ag-theme-balham .ag-rtl .ag-group-contracted + .ag-cell-value:not(:empty), &.ag-theme-balham .ag-rtl .ag-group-contracted + .ag-group-value:not(:empty)': {
        marginRight: 12,
        marginLeft: 'initial',
    },
    '&.ag-theme-balham .ag-rtl .ag-selection-checkbox + .ag-group-checkbox, &.ag-theme-balham .ag-rtl .ag-group-checkbox + .ag-group-checkbox, &.ag-theme-balham .ag-rtl .ag-group-expanded + .ag-group-checkbox, &.ag-theme-balham .ag-rtl .ag-group-contracted + .ag-group-checkbox': {
        marginRight: 12,
        marginLeft: 'initial',
    },
    '&.ag-theme-balham .ag-rtl .ag-group-child-count': {
        marginLeft: 'unset',
        marginRight: 2,
    },
    '&.ag-theme-balham .ag-rtl .ag-column-drop-horizontal': {
        paddingRight: 12,
    },
    '&.ag-theme-balham .ag-rtl .ag-column-drop-horizontal .ag-icon-group, &.ag-theme-balham .ag-rtl .ag-column-drop-horizontal .ag-icon-pivot': {
        marginLeft: 12,
        marginRight: '0',
    },
    '&.ag-theme-balham .ag-rtl .ag-floating-filter-button': {
        marginRight: 12,
    },
    '&.ag-theme-balham .ag-rtl .ag-set-filter-item > div, &.ag-theme-balham .ag-rtl .ag-set-filter-item > span': {
        marginLeft: '0',
        marginRight: 5,
    },
    '&.ag-theme-balham .ag-rtl .ag-header .ag-header-cell-resize::after': {
        borderLeft: `1px solid ${theme.colors.placeholders}`,
        borderRight: '0',
    },
    '&.ag-theme-balham .ag-rtl .ag-side-bar .ag-panel-container': {
        borderLeft: `1px solid ${theme.colors.placeholders}`,
        borderRight: '0',
    },
    '&.ag-theme-balham .ag-rtl .ag-side-bar.full-width .ag-panel-container': {
        borderLeft: '0',
    },
    '&.ag-theme-balham .sass-variables::after': {
        content:
            '\'{ "autoSizePadding": "12px", "headerHeight": "32px", "groupPaddingSize": "28px", "footerPaddingAddition": "16px", "virtualItemHeight": "28px", "aggFuncPopupHeight": "98px", "checkboxIndentWidth": "20px", "leafNodePadding": "12px", "rowHeight": "28px", "gridSize": "4px", "iconSize": "16px" }\'',
        display: 'none',
    },
    '&.ag-theme-balham .ag-cell-highlight': {
        backgroundColor: '#0091EA !important',
    },
    '&.ag-theme-balham .ag-header-cell-resize::after': {
        height: '100%',
        marginTop: 8,
    },
    '&.ag-theme-balham .ag-ltr .ag-header-cell::after, &.ag-theme-balham .ag-ltr .ag-header-group-cell::after': {
        right: '0',
    },
    '&.ag-theme-balham .ag-rtl .ag-header-cell::after, &.ag-theme-balham .ag-rtl .ag-header-group-cell::after': {
        left: '0',
    },
    '&.ag-theme-balham .ag-column-drop-horizontal.ag-column-drop': {
        border: `1px solid ${theme.colors.placeholders}`,
        borderBottom: '0',
    },
    '&.ag-theme-balham .ag-ltr .ag-column-drop-horizontal.ag-column-drop.ag-width-half:first-child': {
        borderRight: '0',
    },
    '&.ag-theme-balham .ag-rtl .ag-column-drop-horizontal.ag-column-drop.ag-width-half:first-child': {
        borderLeft: '0',
    },
    '&.ag-theme-balham .ag-column-drop-vertical .ag-column-drop-cell .ag-column-drop-cell-text': {
        marginLeft: 8,
    },
    '&.ag-theme-balham .ag-column-drop-horizontal .ag-column-drop-cell-text': {
        marginLeft: 8,
    },
    '&.ag-theme-balham .ag-root': {
        border: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-tool-panel-wrapper .ag-column-select-panel .ag-column-tool-panel-column-group, &.ag-theme-balham .ag-tool-panel-wrapper .ag-column-select-panel .ag-column-tool-panel-column': {
        minHeight: 20,
    },
    '&.ag-theme-balham .ag-rtl .ag-side-bar, &.ag-theme-balham .ag-rtl .ag-tool-panel-wrapper': {
        borderLeft: `1px solid ${theme.colors.placeholders}`,
        borderRight: '0',
    },
    '&.ag-theme-balham .ag-rtl .ag-icon-expanded, &.ag-theme-balham .ag-rtl .ag-icon-contracted': {
        transform: 'rotate(180deg)',
    },
    '&.ag-theme-balham .ag-menu-option': {
        height: 28,
    },
    '&.ag-theme-balham .ag-tab-body, &.ag-theme-balham .ag-popup-editor, &.ag-theme-balham .ag-menu': {
        backgroundColor: 'white',
        color: '#000',
    },
    '&.ag-theme-balham .ag-rich-select-value': {
        borderBottom: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-filter-apply-panel': {
        borderTop: `1px solid ${theme.colors.placeholders}`,
    },
    '&.ag-theme-balham .ag-filter-toolpanel-body': {
        backgroundColor: 'white',
    },
    '&.ag-theme-balham .ag-row-hover': {
        backgroundColor: theme.colors.tableHover,
        '& .ag-grid-link-hover': {
            color: theme.colors.link,
        },
        '& .ag-react-container__row-actions': {
            display: 'flex',
        },
    },
    '&.ag-theme-balham .ag-header-cell::after, &.ag-theme-balham .ag-header-group-cell::after': {
        borderRight: `1px solid ${theme.colors.placeholders}`,
        content: '" "',
        height: '100%',
        position: 'absolute',
        textIndent: -2000,
        top: '0',
    },
    '&.ag-theme-balham .ag-react-container': {
        width: '100%',
    },
});
