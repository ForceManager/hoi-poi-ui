export default (theme) => ({
    root: {
        position: 'relative',
        '& *': {
            boxSizing: 'border-box',
        },
        '& .react-grid-Main': {
            outline: `1px solid ${theme.colors.greyLight}`,
        },
        '& .react-grid-Grid': {
            border: 'none',
        },
        '& .react-grid-Header': {
            boxShadow: 'none',
            borderBottom: `1px solid ${theme.colors.placeholders}`,
            backgroundColor: theme.colors.tableHeader,
        },
        '& .react-grid-HeaderCell--frozen, & .rdg-last--frozen': {
            boxShadow: 'none !important',
            borderRight: `1px solid ${theme.colors.placeholders} !important`,
            '& .react-grid-HeaderCell__draggable': {
                border: 'none',
            },
        },
        '& .react-grid-HeaderCell': {
            height: '39px !important',
            padding: '0 20px',
            backgroundColor: theme.colors.tableHeader,
            border: 0,
            lineHeight: '40px',
            fontStyle: 'normal',
            fontWeight: 500,
            color: theme.colors.textBlack,
            ...theme.typography.defaultText,
        },
        '& .react-grid-HeaderCell__draggable': {
            width: '0px !important',
            borderRight: `1px solid ${theme.colors.placeholders}`,
            padding: '0 2.5px',
        },
        '&, .react-grid-Row': {
            '&:focus': {
                outline: 'none',
            },
            '&:hover > .react-grid-Cell': {
                backgroundColor: theme.colors.tableHover,
            },
        },
        '& .react-grid-Cell': {
            borderLeft: 0,
            borderRight: 0,
            padding: '0 20px',
            '-webkit-user-select': 'text',
            '-moz-user-select': 'text',
            '-ms-user-select': 'text',
            'user-select': 'text',
            borderBottom: `1px solid ${theme.colors.placeholders}`,
            '& .react-grid-Cell__value': {
                ...theme.typography.defaultText,
                color: theme.colors.greySoft,
            },
        },
        '& .rdg-selected': {
            border: 0,
        },
        '& .react-grid-Viewport': {
            overflow: 'inherit !important',
        },
        '& .react-grid-Canvas': {
            'scrollbar-color': `${theme.colors.tableHeader} white`,
            '&::-webkit-scrollbar-track': {
                backgroundColor: theme.colors.white,
            },
            '&::-webkit-scrollbar': {
                backgroundColor: theme.colors.white,
                boxShadow: '0 0 4px 0 rgba(0, 0, 0, 0.11)',
                width: 15,
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: theme.colors.tableHeader,
            },
        },
        '& .react-grid-Empty': {
            position: 'relative',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflowY: 'auto',
        },
    },
    loadingView: {
        position: 'absolute',
        overflow: 'visible',
        margin: 0,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
    },
    emptyView: {},
    emptyComponent: {
        padding: 100,
    },
    rowRenderer: {
        position: 'relative',
        '&:hover $actions': {
            display: 'flex',
        },
    },
    actions: {
        display: 'none',
        justifyContent: 'flex-end',
        minWidth: 200,
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        top: 0,
        right: 0,
        zIndex: 2,
        backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0), rgba(250, 251, 252, 0.59) 48%, ${theme.colors.tableHover})`,
        '& > *': {
            margin: '0 10px',
        },
    },
});
