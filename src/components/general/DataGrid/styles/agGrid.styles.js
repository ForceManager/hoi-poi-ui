export default (theme) => ({
    '& .ag-hidden': {
        display: 'none !important',
    },
    '& .ag-invisible': {
        visibility: 'hidden !important',
    },
    '& .ag-faded': {
        opacity: '0.3',
    },
    '& .ag-width-half': {
        display: 'inline-block',
        width: '50% !important',
    },
    '& .ag-unselectable': {
        userSelect: 'none !important',
    },
    '& .ag-selectable': {
        userSelect: 'text !important',
    },
    '& .ag-select-agg-func-popup': {
        position: 'absolute',
    },
    '& .ag-input-wrapper': {
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        lineHeight: 'normal',
        position: 'relative',
        overflow: 'hidden',
    },
    '& .ag-shake-left-to-right': {
        animationDirection: 'alternate',
        animationDuration: '0.2s',
        animationIterationCount: 'infinite',
        animationName: 'ag-shake-left-to-right',
    },
    '& .ag-root-wrapper': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    '& .ag-root-wrapper.ag-layout-normal': {
        height: '100%',
    },
    '& .ag-root-wrapper .ag-watermark': {
        position: 'absolute',
        bottom: 10,
        right: 25,
        opacity: '0.5',
        transition: 'opacity 1s ease-out 3s',
    },
    '& .ag-root-wrapper .ag-watermark:before': {
        content: "''",
        backgroundImage:
            'url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDk0cHgiIGhlaWdodD0iMjM5cHgiIHZpZXdCb3g9IjAgMCA0OTQgMjM5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+TG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0wLjYxMjg0OTkzMSwxMDggTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgQzAuNjEyODQ5OTMxLDYyLjEwMDY1MzYgMy40NzE4MzM3OCw1Ny4xNDg3NDgzIDguMTEyODQ5OTMsNTQuNDY5MjU2NCBMOTguMzA2NDI1LDIuMzk1OTcxNTcgTDk4LjMwNjQyNSwyLjM5NTk3MTU3IEMxMDIuOTQ3NDQxLC0wLjI4MzUyMDM1OCAxMDguNjY1NDA5LC0wLjI4MzUyMDM1OCAxMTMuMzA2NDI1LDIuMzk1OTcxNTcgTDExMy4zMDY0MjUsMi4zOTU5NzE1NyBMMjAzLjUsNTQuNDY5MjU2NCBMMjAzLjUsNTQuNDY5MjU2NCBDMjA4LjE0MTAxNiw1Ny4xNDg3NDgzIDIxMSw2Mi4xMDA2NTM2IDIxMSw2Ny40NTk2Mzc0IEwyMTEsMTM4IEwxODEsMTM4IEwxODAuOTk3MDQxLDkzLjk5OTk5OTggTDE4MC45OTYwMzIsOTMuOTk5OTk5OSBDMTgwLjk5NTQ3NSw4NS43MTYxMjI2IDE3NC4yNzk5MDksNzkuMDAxMDA4NyAxNjUuOTk2MDMyLDc5LjAwMTAwODcgTDEyMiw3OC45OTk5OTk5IEMxMTMuNzE1NzI5LDc4Ljk5OTk5OTkgMTA3LDg1LjcxNTcyODYgMTA3LDkzLjk5OTk5OTkgTDEwNywxMzYuMDE1NjIzIEwxMDcsMTM2LjAxNTYyMyBDMTA3LDE0NC4yOTk4OTUgMTEzLjcxNTcyOSwxNTEuMDE1NjIzIDEyMiwxNTEuMDE1NjIzIEwxNjgsMTUxLjAxNTYyMyBMMTY4LDE2MyBDMTY4LDE2NC42NTY4NTQgMTY2LjY1Njg1NCwxNjYgMTY1LDE2NiBMMTIwLDE2NiBMMTIwLDE3OSBMMTY1Ljk5NjAzMiwxNzkgTDE2NS45OTYwMzIsMTc4Ljk5Nzg3NyBDMTc0LjI3OTQ3NCwxNzguOTk3ODc3IDE4MC45OTQ4NiwxNzIuMjgzNDQyIDE4MC45OTYwMzIsMTY0IEwxODEsMTUwLjk2MDU1NCBMMjExLDE1MC45NjA1NTQgTDIxMSwxNzEuNjA2MjA3IEwyMTEsMTcxLjYwNjIwNyBDMjExLDE3Ni45NjUxOTEgMjA4LjE0MTAxNiwxODEuOTE3MDk2IDIwMy41LDE4NC41OTY1ODggTDExMy4zMDY0MjUsMjM2LjY2OTg3MyBMMTEzLjMwNjQyNSwyMzYuNjY5ODczIEMxMDguNjY1NDA5LDIzOS4zNDkzNjUgMTAyLjk0NzQ0MSwyMzkuMzQ5MzY1IDk4LjMwNjQyNSwyMzYuNjY5ODczIEw4LjExMjg0OTkzLDE4NC41OTY1ODggTDguMTEyODQ5OTMsMTg0LjU5NjU4OCBDMy40NzE4MzM3OCwxODEuOTE3MDk2IDAuNjEyODQ5OTMxLDE3Ni45NjUxOTEgMC42MTI4NDk5MzEsMTcxLjYwNjIwNyBMMC42MTI4NDk5MzEsMTIxIEwyNywxMjEgTDI3LDEzNiBDMjcsMTQ0LjI4NDI3MSAzMy43MTU3Mjg3LDE1MSA0MiwxNTEgTDQyLDE1MSBMMTAwLDE1MSBMMTAwLDk0IEMxMDAsODUuNzE1NzI4OCA5My4yODQyNzEyLDc5IDg1LDc5IEwyNyw3OSBMMjcsOTIgTDg0LDkyIEM4NS42NTY4NTQyLDkyIDg3LDkzLjM0MzE0NTggODcsOTUgTDg3LDk1IEw4NywxMDggTDAuNjEyODQ5OTMxLDEwOCBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkxvZ28iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDc3LDU1IEw0OTQsNTUgTDQ5NCwxNTEgTDQzNSwxNTEgQzQyNi43MTU3MjksMTUxIDQyMCwxNDQuMjg0MjcxIDQyMCwxMzYgTDQyMCw5NiBDNDIwLDg3LjcxNTcyODggNDI2LjcxNTcyOSw4MSA0MzUsODEgTDQzNSw4MSBMNDc3LDgxIEw0NzcsNTUgWiBNNDQwLDk4IEM0MzguMzQzMTQ2LDk4IDQzNyw5OS4zNDMxNDU4IDQzNywxMDEgTDQzNywxMzEgQzQzNywxMzIuNjU2ODU0IDQzOC4zNDMxNDYsMTM0IDQ0MCwxMzQgTDQ3NywxMzQgTDQ3Nyw5OCBMNDQwLDk4IFoiIGlkPSJkIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTYuMDAwMDAwLCA1NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTYiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMCAyNiAxNyAyNiAxNyA5NiAwIDk2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC03IiBmaWxsPSIjRTExRjIyIiBwb2ludHM9IjAgMS4xMzY4NjgzOGUtMTMgMTcgMS4xMzY4NjgzOGUtMTMgMTcgMTcgMCAxNyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzEsMTUxIEwzNDgsMTUxIEwzNDgsMTAxIEwzNDgsMTAxIEMzNDgsOTkuMzQzMTQ1OCAzNDkuMzQzMTQ2LDk4IDM1MSw5OCBMMzg5LDk4IEwzODksODEgTDM0Niw4MSBMMzQ2LDgxIEMzMzcuNzE1NzI5LDgxIDMzMSw4Ny43MTU3Mjg4IDMzMSw5NiBMMzMxLDE1MSBaIiBpZD0iciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzI0LDg2IEwzMjQsNzYgTDMyNCw3NiBDMzI0LDY3LjcxNTcyODggMzE3LjI4NDI3MSw2MSAzMDksNjEgTDI0OSw2MSBMMjQ5LDYxIEMyNDAuNzE1NzI5LDYxIDIzNCw2Ny43MTU3Mjg4IDIzNCw3NiBMMjM0LDEzNiBMMjM0LDEzNiBDMjM0LDE0NC4yODQyNzEgMjQwLjcxNTcyOSwxNTEgMjQ5LDE1MSBMMzA5LDE1MSBMMzA5LDE1MSBDMzE3LjI4NDI3MSwxNTEgMzI0LDE0NC4yODQyNzEgMzI0LDEzNiBMMzI0LDEwMCBMMjg3LDEwMCBMMjg3LDExNyBMMzA3LDExNyBMMzA3LDEzMSBMMzA3LDEzMSBDMzA3LDEzMi42NTY4NTQgMzA1LjY1Njg1NCwxMzQgMzA0LDEzNCBMMjU0LDEzNCBMMjU0LDEzNCBDMjUyLjM0MzE0NiwxMzQgMjUxLDEzMi42NTY4NTQgMjUxLDEzMSBMMjUxLDgxIEwyNTEsODEgQzI1MSw3OS4zNDMxNDU4IDI1Mi4zNDMxNDYsNzggMjU0LDc4IEwzMDQsNzggTDMwNCw3OCBDMzA1LjY1Njg1NCw3OCAzMDcsNzkuMzQzMTQ1OCAzMDcsODEgTDMwNyw4NiBMMzI0LDg2IFoiIGlkPSJHIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJhZyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRTExRjIyIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJnIiBmaWxsPSIjRTExRjIyIiB4PSIxMjAiIHk9IjkyIiB3aWR0aD0iNDgiIGhlaWdodD0iNDYiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDAsMTIxIEw4NywxMjEgTDg3LDEzOCBMNDMsMTM4IEw0MywxMzggQzQxLjM0MzE0NTgsMTM4IDQwLDEzNi42NTY4NTQgNDAsMTM1IEw0MCwxMjEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRTExRjIyIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==)',
        filter: 'invert(50%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '110px 60px',
        display: 'block',
        height: 60,
        width: 110,
    },
    '& .ag-root-wrapper .ag-watermark .ag-watermark-text': {
        opacity: '0.5',
        fontWeight: 'bold',
        fontFamily: 'Impact',
        fontSize: 19,
    },
    '& .ag-root-wrapper-body': {
        display: 'flex',
        flexDirection: 'row',
    },
    '& .ag-root-wrapper-body.ag-layout-normal': {
        flex: '1 1 auto',
        height: '0',
        minHeight: '0',
    },
    '& .ag-root': {
        cursor: 'default',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        '& ::-webkit-scrollbar': {
            width: 17,
            height: 17,
        },
        '& ::-webkit-scrollbar-thumb': {
            borderRadius: 10,
            background: theme.colors.placeholders,
            backgroundClip: 'content-box',
            border: '4px solid rgba(0, 0, 0, 0)',
        },
        '& ::-webkit-scrollbar-thumb:window-inactive': {
            borderRadius: 10,
            background: theme.colors.placeholders,
            backgroundClip: 'content-box',
            border: '4px solid rgba(0, 0, 0, 0)',
        },
    },
    '& .ag-root.ag-layout-normal, & .ag-root.ag-layout-auto-height': {
        overflow: 'hidden',
        flex: '1 1 auto',
        width: '0',
    },
    '& .ag-root.ag-layout-normal': {
        height: '100%',
    },
    '& .ag-header-viewport, & .ag-floating-top-viewport, & .ag-body-viewport, & .ag-pinned-left-cols-viewport, & .ag-center-cols-viewport, & .ag-pinned-right-cols-viewport, & .ag-floating-bottom-viewport, & .ag-body-horizontal-scroll-viewport, & .ag-virtual-list-viewport': {
        position: 'relative',
        height: '100%',
        minWidth: 0,
        overflow: 'hidden',
        flex: '1 1 auto',
    },
    '& .ag-header-viewport .ag-header-cell::after': {
        borderRight: '0 !important',
    },
    '& .ag-body-viewport': {
        position: 'relative', // added from the original
        display: 'flex',
    },
    '& .ag-body-viewport.ag-layout-normal': {
        overflowY: 'auto',
    },
    '& .ag-body-viewport:not(.ag-layout-print).ag-force-vertical-scroll': {
        overflowY: 'scroll',
    },
    '& .ag-pinned-left-cols-viewport, & .ag-pinned-right-cols-viewport': {
        flexGrow: '1000',
    },
    '& .ag-center-cols-viewport': {
        width: '100%',
        overflowX: 'auto',
        // position: 'relative',
        // overflow: 'hidden',
    },
    '& .ag-body-horizontal-scroll-viewport': {
        overflowX: 'scroll',
    },
    '& .ag-virtual-list-viewport': {
        overflow: 'auto',
        width: '100%',
    },
    '& .ag-header-container, & .ag-floating-top-container, & .ag-body-container, & .ag-pinned-right-cols-container, & .ag-center-cols-container, & .ag-pinned-left-cols-container, & .ag-floating-bottom-container, & .ag-body-horizontal-scroll-container, & .ag-full-width-container, & .ag-floating-bottom-full-width-container, & .ag-virtual-list-container': {
        position: 'relative',
    },
    '& .ag-header-container, & .ag-floating-top-container, & .ag-floating-bottom-container': {
        height: '100%',
        whiteSpace: 'nowrap',
    },
    '& .ag-body-viewport .ag-center-cols-clipper': {
        minHeight: '100%',
    },
    '& .ag-body-viewport.ag-layout-auto-height .ag-center-cols-clipper, & .ag-body-viewport.ag-layout-auto-height .ag-center-cols-container': {
        minHeight: 50,
    },
    '& .ag-body-viewport .ag-center-cols-container': {
        display: 'block',
    },
    '& .ag-body-viewport.ag-layout-print': {
        flex: 'none',
    },
    '& .ag-body-viewport.ag-layout-print .ag-center-cols-clipper': {
        minWidth: '100%',
    },
    '& .ag-pinned-right-cols-container': {
        display: 'block',
    },
    '& .ag-body-horizontal-scroll-container': {
        height: '100%',
    },
    '& .ag-full-width-container, & .ag-floating-top-full-width-container, & .ag-floating-bottom-full-width-container': {
        position: 'absolute',
        top: 0,
        left: 0,
        pointerEvents: 'none',
    },
    '& .ag-full-width-container': {
        width: '100%',
    },
    '& .ag-floating-bottom-full-width-container, & .ag-floating-top-full-width-container': {
        display: 'inline-block',
        overflow: 'hidden',
        height: '100%',
        width: '100%',
    },
    '& .ag-virtual-list-container': {
        overflow: 'hidden',
    },
    '& .ag-center-cols-clipper': {
        flex: '1',
        minWidth: '0',
        overflow: 'hidden',
    },
    '& .ag-body-horizontal-scroll': {
        minHeight: 0,
        minWidth: '0',
        width: '100%',
        display: 'flex',
        position: 'relative',
    },
    '& .ag-layout-print .ag-body-horizontal-scroll': {
        display: 'none',
    },
    '& .ag-horizontal-left-spacer, & .ag-horizontal-right-spacer': {
        height: '100%',
        minWidth: '0',
        flexGrow: '1000',
        overflowX: 'auto',
        '&::-webkit-scrollbar-thumb': {
            borderRadius: 10,
            background: theme.colors.placeholders,
            backgroundClip: 'content-box',
        },
        '&::-webkit-scrollbar-thumb:window-inactive': {
            background: theme.colors.placeholders,
        },
    },
    '& .ag-horizontal-left-spacer.ag-scroller-corner, & .ag-horizontal-right-spacer.ag-scroller-corner': {
        overflowX: 'hidden',
    },
    '& .ag-header, & .ag-pinned-left-header, & .ag-pinned-right-header': {
        display: 'inline-block',
        overflow: 'hidden',
    },
    '& .ag-header .ag-header-cell-sortable, & .ag-pinned-left-header .ag-header-cell-sortable, & .ag-pinned-right-header .ag-header-cell-sortable': {
        cursor: 'pointer',
    },
    '& .ag-header': {
        display: 'flex',
        width: '100%',
        whiteSpace: 'nowrap',
    },
    '& .ag-header-icon': {
        display: 'flex',
    },
    '& .ag-pinned-left-header': {
        height: '100%',
    },
    '& .ag-pinned-right-header': {
        height: '100%',
    },
    '& .ag-header-row': {
        position: 'absolute',
        overflow: 'hidden',
    },
    '& .ag-header-overlay': {
        display: 'block',
        position: 'absolute',
    },
    '& .ag-header-cell': {
        display: 'inline-flex',
        alignItems: 'center',
        position: 'absolute',
        height: '100%',
        overflow: 'hidden',
        lineHeight: '1.5',
    },
    '& .ag-header-group-cell-label, & .ag-header-cell-label': {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        alignItems: 'center',
        textOverflow: 'ellipsis',
        height: '100%',
    },
    '& .ag-header-cell-label .ag-header-cell-text': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    '& .ag-numeric-header .ag-header-cell-label': {
        flexDirection: 'row-reverse',
    },
    '& .ag-header-group-text': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    '& .ag-header-cell-resize': {
        position: 'absolute',
        zIndex: '1',
        height: '100%',
        width: 4,
    },
    '& .ag-header-expand-icon': {
        paddingLeft: 4,
    },
    '& .ag-header-select-all': {
        display: 'flex',
        lineHeight: '1',
    },
    '& .ag-column-moving .ag-cell': {
        transition: 'left 0.2s',
    },
    '& .ag-column-moving .ag-header-cell': {
        transition: 'left 0.2s',
    },
    '& .ag-column-moving .ag-header-group-cell': {
        transition: 'left 0.2s, width 0.2s',
    },
    '& .ag-column-panel': {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        flex: '1 1 auto',
    },
    '& .ag-column-select-panel': {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        flexGrow: '4',
        flexShrink: '1',
        flexBasis: '0',
    },
    '& .ag-column-select-panel .ag-primary-cols-header-panel': {
        display: 'flex',
        flex: 'none',
    },
    '& .ag-column-select-panel .ag-primary-cols-header-panel .ag-column-name-filter': {
        flex: '1 1 auto',
    },
    '& .ag-column-select-panel .ag-primary-cols-header-panel .ag-primary-cols-filter-wrapper': {
        flex: '1 1 auto',
    },
    '& .ag-column-select-panel .ag-primary-cols-header-panel .ag-primary-cols-filter-wrapper input': {
        width: '100%',
    },
    '& .ag-column-select-panel .ag-primary-cols-list-panel': {
        flex: '1 1 auto',
        overflow: 'auto',
    },
    '& .ag-column-drop': {
        display: 'inline-flex',
        alignItems: 'center',
        overflow: 'auto',
        width: '100%',
    },
    '& .ag-column-drop .ag-column-drop-list': {
        display: 'flex',
        alignItems: 'center',
    },
    '& .ag-column-drop .ag-column-drop-list .ag-column-drop-cell': {
        display: 'flex',
        alignItems: 'center',
    },
    '& .ag-column-drop .ag-column-drop-list .ag-column-drop-cell .ag-column-drop-cell-text': {
        overflow: 'hidden',
        flex: '1 1 auto',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    '& .ag-column-drop.ag-column-drop-vertical': {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        flex: '1 1 0',
        alignItems: 'stretch',
    },
    '& .ag-column-drop.ag-column-drop-vertical > div': {
        display: 'flex',
    },
    '& .ag-column-drop.ag-column-drop-vertical .ag-column-drop-list': {
        alignItems: 'stretch',
        flexGrow: '1',
        flexDirection: 'column',
        overflowX: 'auto',
    },
    '& .ag-column-drop.ag-column-drop-vertical .ag-column-drop-empty-message': {
        display: 'block',
    },
    '& .ag-column-drop.ag-column-drop-horizontal': {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    '& .ag-row-animation .ag-row': {
        transition:
            'transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s, -webkit-transform 0.4s',
    },
    '& .ag-row-no-animation .ag-row': {
        transition: 'background-color 0.1s',
    },
    '& .ag-row': {
        whiteSpace: 'nowrap',
        width: '100%',
    },
    '& .ag-row-position-absolute': {
        position: 'absolute',
    },
    '& .ag-row-position-relative': {
        position: 'relative',
    },
    '& .ag-full-width-row': {
        overflow: 'hidden',
        pointerEvents: 'all',
    },
    '& .ag-row-inline-editing': {
        zIndex: '1',
    },
    '& .ag-row-dragging': {
        zIndex: '2',
    },
    '& .ag-stub-cell': {
        display: 'flex',
        alignItems: 'center',
    },
    '& .ag-cell': {
        display: 'inline-block',
        overflow: 'hidden',
        position: 'absolute',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    '& .ag-cell-wrapper': {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    '& .ag-cell-wrapper.ag-row-group': {
        alignItems: 'flex-start',
    },
    '& .ag-cell-wrapper .ag-cell-value, & .ag-cell-wrapper .ag-group-value': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    '& .ag-full-width-row.ag-row-group .ag-cell-wrapper': {
        alignItems: 'center',
    },
    '& .ag-cell-with-height': {
        height: '100%',
    },
    '& .ag-group-cell-entire-row': {
        display: 'inline-block',
        height: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
    },
    '& .ag-footer-cell-entire-row': {
        display: 'inline-block',
        height: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        width: '100%',
    },
    '& .ag-cell-inline-editing': {
        zIndex: '1',
    },
    '& .ag-cell-inline-editing .ag-cell-edit-input, & .ag-cell-inline-editing .ag-input-text-wrapper': {
        height: '100%',
        width: '100%',
        lineHeight: 'normal',
    },
    '& .ag-set-filter-item': {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    '& .ag-filter .ag-filter-checkbox': {
        pointerEvents: 'none',
    },
    '& .ag-filter .ag-filter-body-wrapper': {
        display: 'flex',
        flexDirection: 'column',
    },
    '& .ag-filter .ag-filter-filter': {
        flex: '1 1 auto',
    },
    '& .ag-floating-filter-full-body .ag-react-container, & .ag-floating-filter-body .ag-react-container': {
        height: '100%',
    },
    '& .ag-floating-filter-body': {
        display: 'flex',
        flex: '1 1 auto',
        height: 20,
    },
    '& .ag-floating-filter-body input': {
        margin: '0',
        flex: '1 1 auto',
    },
    '& .ag-floating-filter-full-body': {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    '& .ag-floating-filter-full-body > div': {
        flex: '1 1 auto',
    },
    '& .ag-floating-filter-full-body input': {
        margin: '0',
        width: '100%',
    },
    '& .ag-floating-filter-full-body input[type="range"]': {
        height: '100%',
    },
    '& .ag-floating-filter': {
        display: 'inline-block',
        position: 'absolute',
    },
    '& .ag-floating-filter-input': {
        width: '100%',
    },
    '& .ag-floating-filter-input:-moz-read-only': {
        backgroundColor: '#eee',
    },
    '& .ag-floating-filter-input:read-only': {
        backgroundColor: '#eee',
    },
    '& .ag-floating-filter-menu': {
        position: 'absolute',
        userSelect: 'none',
    },
    '& .ag-floating-filter-button': {
        display: 'flex',
        flex: 'none',
    },
    '& .ag-dnd-ghost': {
        display: 'flex',
        alignItems: 'center',
        background: '#e5e5e5',
        border: '1px solid black',
        cursor: 'move',
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        fontSize: 14,
        lineHeight: '1.4',
        overflow: 'hidden',
        padding: 3,
        position: 'absolute',
        textOverflow: 'ellipsis',
        userSelect: 'none',
        zIndex: '10',
    },
    '& .ag-dnd-ghost-icon': {
        padding: 2,
    },
    '& .ag-overlay': {
        height: '100%',
        left: '0',
        pointerEvents: 'none',
        position: 'absolute',
        top: '0',
        width: '100%',
    },
    '& .ag-overlay-panel': {
        display: 'flex',
        height: '100%',
        pointerEvents: 'none',
        width: '100%',
    },
    '& .ag-overlay-wrapper': {
        display: 'flex',
        flex: 'none',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        '& .ag-react-container': {
            display: 'none',
            '&:first-child': {
                display: 'block !important',
            },
        },
    },
    '& .ag-overlay-wrapper.ag-overlay-loading-wrapper': {
        pointerEvents: 'all',
    },
    '& .ag-overlay-no-rows-wrapper.ag-layout-auto-height': {
        paddingTop: 30,
    },
    '& .ag-popup > div': {
        zIndex: '5',
    },
    '& .ag-popup-backdrop': {
        height: '100%',
        left: '0',
        position: 'fixed',
        top: '0',
        width: '100%',
    },
    '& .ag-popup-editor': {
        position: 'absolute',
        userSelect: 'none',
        zIndex: '1',
    },
    '& .ag-virtual-list-item': {
        position: 'absolute',
        width: '100%',
    },
    '& .ag-virtual-list-item span:empty:not(.ag-icon)': {
        borderLeft: '1px solid transparent',
    },
    '& .ag-floating-top': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        position: 'relative',
        display: 'flex',
    },
    '& .ag-pinned-left-floating-top': {
        display: 'inline-block',
        overflow: 'hidden',
        position: 'relative',
        minWidth: 0,
        flexGrow: '1000',
    },
    '& .ag-pinned-right-floating-top': {
        display: 'inline-block',
        overflow: 'hidden',
        position: 'relative',
        minWidth: 0,
        flexGrow: '1000',
    },
    '& .ag-floating-bottom': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '100%',
        position: 'relative',
        display: 'flex',
    },
    '& .ag-pinned-left-floating-bottom': {
        display: 'inline-block',
        overflow: 'hidden',
        position: 'relative',
        minWidth: 0,
        flexGrow: '1000',
    },
    '& .ag-pinned-right-floating-bottom': {
        display: 'inline-block',
        overflow: 'hidden',
        position: 'relative',
        minWidth: 0,
        flexGrow: '1000',
    },
    '& .ag-dialog': {
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        overflow: 'hidden',
    },
    '& .ag-dialog .ag-resizer': {
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: '1',
    },
    '& .ag-dialog .ag-resizer.ag-resizer-topLeft': {
        top: '0',
        left: '0',
        height: 5,
        width: 5,
        cursor: 'nwse-resize',
    },
    '& .ag-dialog .ag-resizer.ag-resizer-top': {
        top: '0',
        left: 5,
        right: 5,
        height: 5,
        cursor: 'ns-resize',
    },
    '& .ag-dialog .ag-resizer.ag-resizer-topRight': {
        top: '0',
        right: '0',
        height: 5,
        width: 5,
        cursor: 'nesw-resize',
    },
    '& .ag-dialog .ag-resizer.ag-resizer-right': {
        top: 5,
        right: '0',
        bottom: 5,
        width: 5,
        cursor: 'ew-resize',
    },
    '& .ag-dialog .ag-resizer.ag-resizer-bottomRight': {
        bottom: '0',
        right: '0',
        height: 5,
        width: 5,
        cursor: 'nwse-resize',
    },
    '& .ag-dialog .ag-resizer.ag-resizer-bottom': {
        bottom: '0',
        left: 5,
        right: 5,
        height: 5,
        cursor: 'ns-resize',
    },
    '& .ag-dialog .ag-resizer.ag-resizer-bottomLeft': {
        bottom: '0',
        left: '0',
        height: 5,
        width: 5,
        cursor: 'nesw-resize',
    },
    '& .ag-dialog .ag-resizer.ag-resizer-left': {
        left: '0',
        top: 5,
        bottom: 5,
        width: 5,
        cursor: 'ew-resize',
    },
    '& .ag-dialog .ag-dialog-title-bar': {
        display: 'flex',
        flex: 'none',
        alignItems: 'center',
        cursor: 'default',
    },
    '& .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-title': {
        flex: '1 1 auto',
    },
    '& .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons': {
        display: 'flex',
    },
    '& .ag-dialog .ag-dialog-title-bar .ag-dialog-title-bar-buttons .ag-dialog-button': {
        cursor: 'pointer',
        height: '100%',
        width: '100%',
        backgroundSize: 'contain',
    },
    '& .ag-dialog .ag-dialog-content-wrapper': {
        display: 'flex',
        flex: '1 1 auto',
        position: 'relative',
        overflow: 'hidden',
    },
    '& .ag-dialog .ag-dialog-content-wrapper > div': {
        width: '100%',
        height: '100%',
    },
    '& .ag-dialog .ag-message-box': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    '& .ag-dialog .ag-message-box .ag-message-box-content': {
        display: 'flex',
        flex: '1 1 auto',
        justifyContent: 'center',
        alignItems: 'center',
    },
    '& .ag-dialog .ag-message-box .ag-message-box-button-bar': {
        display: 'flex',
        justifyContent: 'center',
    },
    '& .ag-tooltip': {
        position: 'absolute',
        pointerEvents: 'none',
        zIndex: '99999',
    },
    '& .ag-chart-tooltip': {
        position: 'absolute',
        userSelect: 'none',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
        zIndex: '99999',
        border: '1px solid gray',
        font: '12px Verdana, sans-serif',
        padding: 7,
        color: 'black',
        background: 'rgba(244, 244, 244, 0.9)',
        boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.3)',
    },
    '& .ag-chart-tooltip .title': {
        fontWeight: 'bold',
    },
    '& .ag-value-slide-out': {
        marginRight: 5,
        opacity: '1',
        transition: 'opacity 3s, margin-right 3s',
        transitionTimingFunction: 'linear',
    },
    '& .ag-value-slide-out-end': {
        marginRight: 10,
        opacity: '0',
    },
    '& .ag-opacity-zero': {
        opacity: '0 !important',
    },
    '& .ag-menu': {
        maxHeight: '100%',
        overflowY: 'auto',
        position: 'absolute',
        userSelect: 'none',
    },
    '& .ag-menu-column-select-wrapper': {
        height: 265,
        overflow: 'auto',
        width: 200,
    },
    '& .ag-menu-list': {
        display: 'table',
    },
    '& .ag-menu-option, & .ag-menu-separator': {
        display: 'table-row',
    },
    '& .ag-menu-option > span, & .ag-menu-separator > span': {
        display: 'table-cell',
        verticalAlign: 'middle',
    },
    '& .ag-menu-option-text': {
        whiteSpace: 'nowrap',
    },
    '& .ag-menu-column-select-wrapper .ag-column-select-panel': {
        height: '100%',
    },
    '& .ag-rich-select': {
        cursor: 'default',
        outline: 'none',
    },
    '& .ag-rich-select .ag-rich-select-value': {
        display: 'flex',
        alignItems: 'center',
    },
    '& .ag-rich-select .ag-rich-select-value > span': {
        flex: '1 1 auto',
    },
    '& .ag-rich-select .ag-rich-select-value .ag-icon': {
        order: '1',
    },
    '& .ag-rich-select .ag-rich-select-list .ag-virtual-list-item': {
        display: 'flex',
    },
    '& .ag-rich-select .ag-rich-select-list .ag-virtual-list-item .ag-rich-select-row': {
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'center',
        whiteSpace: 'nowrap',
    },
    '& .ag-paging-panel': {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
    },
    '& .ag-paging-page-summary-panel': {
        display: 'flex',
        alignItems: 'center',
    },
    '& .ag-paging-page-summary-panel .ag-disabled': {
        pointerEvents: 'none',
    },
    '& .ag-tool-panel-wrapper': {
        display: 'flex',
        overflowY: 'auto',
        cursor: 'default',

        userSelect: 'none',
        width: 200,
    },
    '& .ag-tool-panel-wrapper .ag-filter-toolpanel-header': {
        cursor: 'pointer',
    },
    '& .ag-column-tool-panel-column, & .ag-column-tool-panel-column-group': {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    },
    '& .ag-column-tool-panel-column .ag-column-tool-panel-column, & .ag-column-tool-panel-column .ag-column-tool-panel-column-group, & .ag-column-tool-panel-column-group .ag-column-tool-panel-column, & .ag-column-tool-panel-column-group .ag-column-tool-panel-column-group': {
        flex: '1 1 auto',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    '& .ag-column-select-checkbox': {
        display: 'flex',
    },
    '& .ag-tool-panel-horizontal-resize': {
        cursor: 'col-resize',
        height: '100%',
        position: 'absolute',
        top: '0',
        width: 5,
        zIndex: '1',
    },
    '& .ag-rtl .ag-tool-panel-horizontal-resize': {
        transform: 'translateX(3px)',
    },
    '& .ag-ltr .ag-tool-panel-horizontal-resize': {
        transform: 'translateX(-3px)',
    },
    '& .loading-filter': {
        backgroundColor: '#e6e6e6',
        height: '100%',
        padding: 5,
        position: 'absolute',
        top: 34,
        width: '100%',
        zIndex: '1',
    },
    '& .ag-details-row': {
        height: '100%',
        width: '100%',
    },
    '& .ag-details-grid': {
        height: '100%',
        width: '100%',
    },
    '& .ag-header-group-cell': {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        overflow: 'hidden',
        position: 'absolute',
        textOverflow: 'ellipsis',
    },
    '& .ag-cell-label-container': {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        width: '100%',
    },
    '& .ag-numeric-header .ag-cell-label-container': {
        flexDirection: 'row',
    },
    '& .ag-group-component': {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    },
    '& .ag-group-component .ag-group-component-label': {
        position: 'absolute',
        top: -10,
    },
    '& .ag-group-component .ag-group-item': {
        display: 'flex',
        alignItems: 'center',
        flex: '1 1 auto',
    },
    '& .ag-side-bar': {
        display: 'flex',
        flexDirection: 'row-reverse',
    },
    '& .ag-side-bar .ag-side-buttons div button': {
        display: 'block',
        whiteSpace: 'nowrap',
        outline: 'none',
        cursor: 'pointer',
    },
    '& .ag-side-bar .ag-side-buttons div button span:not(.ag-icon)': {
        writingMode: 'vertical-lr',
    },
    '& .ag-side-bar .panel-container': {
        width: 180,
    },
    '& .ag-side-bar.full-width .panel-container': {
        width: 200,
    },
    '& .ag-rtl .ag-side-bar .ag-side-buttons button span:not(.ag-icon)': {
        writingMode: 'vertical-rl',
    },
    '& .ag-status-bar': {
        display: 'flex',
        justifyContent: 'space-between',
        overflow: 'hidden',
    },
    '& .ag-status-bar .ag-status-panel': {
        display: 'inline-flex',
    },
    '& .ag-status-bar-left': {
        display: 'inline-flex',
    },
    '& .ag-status-bar-center': {
        display: 'inline-flex',
    },
    '& .ag-status-bar-right': {
        display: 'inline-flex',
    },
    '& .ag-ltr .ag-toolpanel-indent-1': {
        paddingLeft: 10,
    },
    '& .ag-rtl .ag-toolpanel-indent-1': {
        paddingRight: 10,
    },
    '& .ag-ltr .ag-row-group-indent-1': {
        paddingLeft: 10,
    },
    '& .ag-rtl .ag-row-group-indent-1': {
        paddingRight: 10,
    },
    '& .ag-ltr .ag-toolpanel-indent-2': {
        paddingLeft: 20,
    },
    '& .ag-rtl .ag-toolpanel-indent-2': {
        paddingRight: 20,
    },
    '& .ag-ltr .ag-row-group-indent-2': {
        paddingLeft: 20,
    },
    '& .ag-rtl .ag-row-group-indent-2': {
        paddingRight: 20,
    },
    '& .ag-ltr .ag-toolpanel-indent-3': {
        paddingLeft: 30,
    },
    '& .ag-rtl .ag-toolpanel-indent-3': {
        paddingRight: 30,
    },
    '& .ag-ltr .ag-row-group-indent-3': {
        paddingLeft: 30,
    },
    '& .ag-rtl .ag-row-group-indent-3': {
        paddingRight: 30,
    },
    '& .ag-ltr .ag-toolpanel-indent-4': {
        paddingLeft: 40,
    },
    '& .ag-rtl .ag-toolpanel-indent-4': {
        paddingRight: 40,
    },
    '& .ag-ltr .ag-row-group-indent-4': {
        paddingLeft: 40,
    },
    '& .ag-rtl .ag-row-group-indent-4': {
        paddingRight: 40,
    },
    '& .ag-ltr .ag-toolpanel-indent-5': {
        paddingLeft: 50,
    },
    '& .ag-rtl .ag-toolpanel-indent-5': {
        paddingRight: 50,
    },
    '& .ag-ltr .ag-row-group-indent-5': {
        paddingLeft: 50,
    },
    '& .ag-rtl .ag-row-group-indent-5': {
        paddingRight: 50,
    },
    '& .ag-ltr .ag-toolpanel-indent-6': {
        paddingLeft: 60,
    },
    '& .ag-rtl .ag-toolpanel-indent-6': {
        paddingRight: 60,
    },
    '& .ag-ltr .ag-row-group-indent-6': {
        paddingLeft: 60,
    },
    '& .ag-rtl .ag-row-group-indent-6': {
        paddingRight: 60,
    },
    '& .ag-ltr .ag-toolpanel-indent-7': {
        paddingLeft: 70,
    },
    '& .ag-rtl .ag-toolpanel-indent-7': {
        paddingRight: 70,
    },
    '& .ag-ltr .ag-row-group-indent-7': {
        paddingLeft: 70,
    },
    '& .ag-rtl .ag-row-group-indent-7': {
        paddingRight: 70,
    },
    '& .ag-ltr .ag-toolpanel-indent-8': {
        paddingLeft: 80,
    },
    '& .ag-rtl .ag-toolpanel-indent-8': {
        paddingRight: 80,
    },
    '& .ag-ltr .ag-row-group-indent-8': {
        paddingLeft: 80,
    },
    '& .ag-rtl .ag-row-group-indent-8': {
        paddingRight: 80,
    },
    '& .ag-ltr .ag-toolpanel-indent-9': {
        paddingLeft: 90,
    },
    '& .ag-rtl .ag-toolpanel-indent-9': {
        paddingRight: 90,
    },
    '& .ag-ltr .ag-row-group-indent-9': {
        paddingLeft: 90,
    },
    '& .ag-rtl .ag-row-group-indent-9': {
        paddingRight: 90,
    },
    '& .ag-ltr .ag-toolpanel-indent-10': {
        paddingLeft: 100,
    },
    '& .ag-rtl .ag-toolpanel-indent-10': {
        paddingRight: 100,
    },
    '& .ag-ltr .ag-row-group-indent-10': {
        paddingLeft: 100,
    },
    '& .ag-rtl .ag-row-group-indent-10': {
        paddingRight: 100,
    },
    '& .ag-ltr .ag-toolpanel-indent-11': {
        paddingLeft: 110,
    },
    '& .ag-rtl .ag-toolpanel-indent-11': {
        paddingRight: 110,
    },
    '& .ag-ltr .ag-row-group-indent-11': {
        paddingLeft: 110,
    },
    '& .ag-rtl .ag-row-group-indent-11': {
        paddingRight: 110,
    },
    '& .ag-ltr .ag-toolpanel-indent-12': {
        paddingLeft: 120,
    },
    '& .ag-rtl .ag-toolpanel-indent-12': {
        paddingRight: 120,
    },
    '& .ag-ltr .ag-row-group-indent-12': {
        paddingLeft: 120,
    },
    '& .ag-rtl .ag-row-group-indent-12': {
        paddingRight: 120,
    },
    '& .ag-ltr .ag-toolpanel-indent-13': {
        paddingLeft: 130,
    },
    '& .ag-rtl .ag-toolpanel-indent-13': {
        paddingRight: 130,
    },
    '& .ag-ltr .ag-row-group-indent-13': {
        paddingLeft: 130,
    },
    '& .ag-rtl .ag-row-group-indent-13': {
        paddingRight: 130,
    },
    '& .ag-ltr .ag-toolpanel-indent-14': {
        paddingLeft: 140,
    },
    '& .ag-rtl .ag-toolpanel-indent-14': {
        paddingRight: 140,
    },
    '& .ag-ltr .ag-row-group-indent-14': {
        paddingLeft: 140,
    },
    '& .ag-rtl .ag-row-group-indent-14': {
        paddingRight: 140,
    },
    '& .ag-ltr .ag-toolpanel-indent-15': {
        paddingLeft: 150,
    },
    '& .ag-rtl .ag-toolpanel-indent-15': {
        paddingRight: 150,
    },
    '& .ag-ltr .ag-row-group-indent-15': {
        paddingLeft: 150,
    },
    '& .ag-rtl .ag-row-group-indent-15': {
        paddingRight: 150,
    },
    '& .ag-ltr .ag-toolpanel-indent-16': {
        paddingLeft: 160,
    },
    '& .ag-rtl .ag-toolpanel-indent-16': {
        paddingRight: 160,
    },
    '& .ag-ltr .ag-row-group-indent-16': {
        paddingLeft: 160,
    },
    '& .ag-rtl .ag-row-group-indent-16': {
        paddingRight: 160,
    },
    '& .ag-ltr .ag-toolpanel-indent-17': {
        paddingLeft: 170,
    },
    '& .ag-rtl .ag-toolpanel-indent-17': {
        paddingRight: 170,
    },
    '& .ag-ltr .ag-row-group-indent-17': {
        paddingLeft: 170,
    },
    '& .ag-rtl .ag-row-group-indent-17': {
        paddingRight: 170,
    },
    '& .ag-ltr .ag-toolpanel-indent-18': {
        paddingLeft: 180,
    },
    '& .ag-rtl .ag-toolpanel-indent-18': {
        paddingRight: 180,
    },
    '& .ag-ltr .ag-row-group-indent-18': {
        paddingLeft: 180,
    },
    '& .ag-rtl .ag-row-group-indent-18': {
        paddingRight: 180,
    },
    '& .ag-ltr .ag-toolpanel-indent-19': {
        paddingLeft: 190,
    },
    '& .ag-rtl .ag-toolpanel-indent-19': {
        paddingRight: 190,
    },
    '& .ag-ltr .ag-row-group-indent-19': {
        paddingLeft: 190,
    },
    '& .ag-rtl .ag-row-group-indent-19': {
        paddingRight: 190,
    },
    '& .ag-ltr .ag-toolpanel-indent-20': {
        paddingLeft: 200,
    },
    '& .ag-rtl .ag-toolpanel-indent-20': {
        paddingRight: 200,
    },
    '& .ag-ltr .ag-row-group-indent-20': {
        paddingLeft: 200,
    },
    '& .ag-rtl .ag-row-group-indent-20': {
        paddingRight: 200,
    },
    '& .ag-ltr .ag-toolpanel-indent-21': {
        paddingLeft: 210,
    },
    '& .ag-rtl .ag-toolpanel-indent-21': {
        paddingRight: 210,
    },
    '& .ag-ltr .ag-row-group-indent-21': {
        paddingLeft: 210,
    },
    '& .ag-rtl .ag-row-group-indent-21': {
        paddingRight: 210,
    },
    '& .ag-ltr .ag-toolpanel-indent-22': {
        paddingLeft: 220,
    },
    '& .ag-rtl .ag-toolpanel-indent-22': {
        paddingRight: 220,
    },
    '& .ag-ltr .ag-row-group-indent-22': {
        paddingLeft: 220,
    },
    '& .ag-rtl .ag-row-group-indent-22': {
        paddingRight: 220,
    },
    '& .ag-ltr .ag-toolpanel-indent-23': {
        paddingLeft: 230,
    },
    '& .ag-rtl .ag-toolpanel-indent-23': {
        paddingRight: 230,
    },
    '& .ag-ltr .ag-row-group-indent-23': {
        paddingLeft: 230,
    },
    '& .ag-rtl .ag-row-group-indent-23': {
        paddingRight: 230,
    },
    '& .ag-ltr .ag-toolpanel-indent-24': {
        paddingLeft: 240,
    },
    '& .ag-rtl .ag-toolpanel-indent-24': {
        paddingRight: 240,
    },
    '& .ag-ltr .ag-row-group-indent-24': {
        paddingLeft: 240,
    },
    '& .ag-rtl .ag-row-group-indent-24': {
        paddingRight: 240,
    },
    '& .ag-ltr .ag-toolpanel-indent-25': {
        paddingLeft: 250,
    },
    '& .ag-rtl .ag-toolpanel-indent-25': {
        paddingRight: 250,
    },
    '& .ag-ltr .ag-row-group-indent-25': {
        paddingLeft: 250,
    },
    '& .ag-rtl .ag-row-group-indent-25': {
        paddingRight: 250,
    },
    '& .ag-ltr .ag-toolpanel-indent-26': {
        paddingLeft: 260,
    },
    '& .ag-rtl .ag-toolpanel-indent-26': {
        paddingRight: 260,
    },
    '& .ag-ltr .ag-row-group-indent-26': {
        paddingLeft: 260,
    },
    '& .ag-rtl .ag-row-group-indent-26': {
        paddingRight: 260,
    },
    '& .ag-ltr .ag-toolpanel-indent-27': {
        paddingLeft: 270,
    },
    '& .ag-rtl .ag-toolpanel-indent-27': {
        paddingRight: 270,
    },
    '& .ag-ltr .ag-row-group-indent-27': {
        paddingLeft: 270,
    },
    '& .ag-rtl .ag-row-group-indent-27': {
        paddingRight: 270,
    },
    '& .ag-ltr .ag-toolpanel-indent-28': {
        paddingLeft: 280,
    },
    '& .ag-rtl .ag-toolpanel-indent-28': {
        paddingRight: 280,
    },
    '& .ag-ltr .ag-row-group-indent-28': {
        paddingLeft: 280,
    },
    '& .ag-rtl .ag-row-group-indent-28': {
        paddingRight: 280,
    },
    '& .ag-ltr .ag-toolpanel-indent-29': {
        paddingLeft: 290,
    },
    '& .ag-rtl .ag-toolpanel-indent-29': {
        paddingRight: 290,
    },
    '& .ag-ltr .ag-row-group-indent-29': {
        paddingLeft: 290,
    },
    '& .ag-rtl .ag-row-group-indent-29': {
        paddingRight: 290,
    },
    '& .ag-ltr .ag-toolpanel-indent-30': {
        paddingLeft: 300,
    },
    '& .ag-rtl .ag-toolpanel-indent-30': {
        paddingRight: 300,
    },
    '& .ag-ltr .ag-row-group-indent-30': {
        paddingLeft: 300,
    },
    '& .ag-rtl .ag-row-group-indent-30': {
        paddingRight: 300,
    },
    '& .ag-ltr .ag-toolpanel-indent-31': {
        paddingLeft: 310,
    },
    '& .ag-rtl .ag-toolpanel-indent-31': {
        paddingRight: 310,
    },
    '& .ag-ltr .ag-row-group-indent-31': {
        paddingLeft: 310,
    },
    '& .ag-rtl .ag-row-group-indent-31': {
        paddingRight: 310,
    },
    '& .ag-ltr .ag-toolpanel-indent-32': {
        paddingLeft: 320,
    },
    '& .ag-rtl .ag-toolpanel-indent-32': {
        paddingRight: 320,
    },
    '& .ag-ltr .ag-row-group-indent-32': {
        paddingLeft: 320,
    },
    '& .ag-rtl .ag-row-group-indent-32': {
        paddingRight: 320,
    },
    '& .ag-ltr .ag-toolpanel-indent-33': {
        paddingLeft: 330,
    },
    '& .ag-rtl .ag-toolpanel-indent-33': {
        paddingRight: 330,
    },
    '& .ag-ltr .ag-row-group-indent-33': {
        paddingLeft: 330,
    },
    '& .ag-rtl .ag-row-group-indent-33': {
        paddingRight: 330,
    },
    '& .ag-ltr .ag-toolpanel-indent-34': {
        paddingLeft: 340,
    },
    '& .ag-rtl .ag-toolpanel-indent-34': {
        paddingRight: 340,
    },
    '& .ag-ltr .ag-row-group-indent-34': {
        paddingLeft: 340,
    },
    '& .ag-rtl .ag-row-group-indent-34': {
        paddingRight: 340,
    },
    '& .ag-ltr .ag-toolpanel-indent-35': {
        paddingLeft: 350,
    },
    '& .ag-rtl .ag-toolpanel-indent-35': {
        paddingRight: 350,
    },
    '& .ag-ltr .ag-row-group-indent-35': {
        paddingLeft: 350,
    },
    '& .ag-rtl .ag-row-group-indent-35': {
        paddingRight: 350,
    },
    '& .ag-ltr .ag-toolpanel-indent-36': {
        paddingLeft: 360,
    },
    '& .ag-rtl .ag-toolpanel-indent-36': {
        paddingRight: 360,
    },
    '& .ag-ltr .ag-row-group-indent-36': {
        paddingLeft: 360,
    },
    '& .ag-rtl .ag-row-group-indent-36': {
        paddingRight: 360,
    },
    '& .ag-ltr .ag-toolpanel-indent-37': {
        paddingLeft: 370,
    },
    '& .ag-rtl .ag-toolpanel-indent-37': {
        paddingRight: 370,
    },
    '& .ag-ltr .ag-row-group-indent-37': {
        paddingLeft: 370,
    },
    '& .ag-rtl .ag-row-group-indent-37': {
        paddingRight: 370,
    },
    '& .ag-ltr .ag-toolpanel-indent-38': {
        paddingLeft: 380,
    },
    '& .ag-rtl .ag-toolpanel-indent-38': {
        paddingRight: 380,
    },
    '& .ag-ltr .ag-row-group-indent-38': {
        paddingLeft: 380,
    },
    '& .ag-rtl .ag-row-group-indent-38': {
        paddingRight: 380,
    },
    '& .ag-ltr .ag-toolpanel-indent-39': {
        paddingLeft: 390,
    },
    '& .ag-rtl .ag-toolpanel-indent-39': {
        paddingRight: 390,
    },
    '& .ag-ltr .ag-row-group-indent-39': {
        paddingLeft: 390,
    },
    '& .ag-rtl .ag-row-group-indent-39': {
        paddingRight: 390,
    },
    '& .ag-ltr .ag-toolpanel-indent-40': {
        paddingLeft: 400,
    },
    '& .ag-rtl .ag-toolpanel-indent-40': {
        paddingRight: 400,
    },
    '& .ag-ltr .ag-row-group-indent-40': {
        paddingLeft: 400,
    },
    '& .ag-rtl .ag-row-group-indent-40': {
        paddingRight: 400,
    },
    '& .ag-ltr .ag-toolpanel-indent-41': {
        paddingLeft: 410,
    },
    '& .ag-rtl .ag-toolpanel-indent-41': {
        paddingRight: 410,
    },
    '& .ag-ltr .ag-row-group-indent-41': {
        paddingLeft: 410,
    },
    '& .ag-rtl .ag-row-group-indent-41': {
        paddingRight: 410,
    },
    '& .ag-ltr .ag-toolpanel-indent-42': {
        paddingLeft: 420,
    },
    '& .ag-rtl .ag-toolpanel-indent-42': {
        paddingRight: 420,
    },
    '& .ag-ltr .ag-row-group-indent-42': {
        paddingLeft: 420,
    },
    '& .ag-rtl .ag-row-group-indent-42': {
        paddingRight: 420,
    },
    '& .ag-ltr .ag-toolpanel-indent-43': {
        paddingLeft: 430,
    },
    '& .ag-rtl .ag-toolpanel-indent-43': {
        paddingRight: 430,
    },
    '& .ag-ltr .ag-row-group-indent-43': {
        paddingLeft: 430,
    },
    '& .ag-rtl .ag-row-group-indent-43': {
        paddingRight: 430,
    },
    '& .ag-ltr .ag-toolpanel-indent-44': {
        paddingLeft: 440,
    },
    '& .ag-rtl .ag-toolpanel-indent-44': {
        paddingRight: 440,
    },
    '& .ag-ltr .ag-row-group-indent-44': {
        paddingLeft: 440,
    },
    '& .ag-rtl .ag-row-group-indent-44': {
        paddingRight: 440,
    },
    '& .ag-ltr .ag-toolpanel-indent-45': {
        paddingLeft: 450,
    },
    '& .ag-rtl .ag-toolpanel-indent-45': {
        paddingRight: 450,
    },
    '& .ag-ltr .ag-row-group-indent-45': {
        paddingLeft: 450,
    },
    '& .ag-rtl .ag-row-group-indent-45': {
        paddingRight: 450,
    },
    '& .ag-ltr .ag-toolpanel-indent-46': {
        paddingLeft: 460,
    },
    '& .ag-rtl .ag-toolpanel-indent-46': {
        paddingRight: 460,
    },
    '& .ag-ltr .ag-row-group-indent-46': {
        paddingLeft: 460,
    },
    '& .ag-rtl .ag-row-group-indent-46': {
        paddingRight: 460,
    },
    '& .ag-ltr .ag-toolpanel-indent-47': {
        paddingLeft: 470,
    },
    '& .ag-rtl .ag-toolpanel-indent-47': {
        paddingRight: 470,
    },
    '& .ag-ltr .ag-row-group-indent-47': {
        paddingLeft: 470,
    },
    '& .ag-rtl .ag-row-group-indent-47': {
        paddingRight: 470,
    },
    '& .ag-ltr .ag-toolpanel-indent-48': {
        paddingLeft: 480,
    },
    '& .ag-rtl .ag-toolpanel-indent-48': {
        paddingRight: 480,
    },
    '& .ag-ltr .ag-row-group-indent-48': {
        paddingLeft: 480,
    },
    '& .ag-rtl .ag-row-group-indent-48': {
        paddingRight: 480,
    },
    '& .ag-ltr .ag-toolpanel-indent-49': {
        paddingLeft: 490,
    },
    '& .ag-rtl .ag-toolpanel-indent-49': {
        paddingRight: 490,
    },
    '& .ag-ltr .ag-row-group-indent-49': {
        paddingLeft: 490,
    },
    '& .ag-rtl .ag-row-group-indent-49': {
        paddingRight: 490,
    },
    '& .ag-ltr': {
        direction: 'ltr',
    },
    '& .ag-ltr .ag-body, & .ag-ltr .ag-floating-top, & .ag-ltr .ag-floating-bottom, & .ag-ltr .ag-header, & .ag-ltr .ag-body-viewport, & .ag-ltr .ag-body-horizontal-scroll': {
        flexDirection: 'row',
    },
    '& .ag-ltr .ag-header-cell-resize': {
        right: -4,
    },
    '& .ag-ltr .ag-pinned-right-header .ag-header-cell-resize': {
        left: -4,
    },
    '& .ag-rtl': {
        direction: 'rtl',
    },
    '& .ag-rtl .ag-body, & .ag-rtl .ag-floating-top, & .ag-rtl .ag-floating-bottom, & .ag-rtl .ag-header, & .ag-rtl .ag-body-viewport, & .ag-rtl .ag-body-horizontal-scroll': {
        flexDirection: 'row-reverse',
    },
    '& .ag-rtl .ag-header-cell-resize': {
        left: -4,
    },
    '& .ag-rtl .ag-pinned-left-header .ag-header-cell-resize': {
        right: -4,
    },
    '@media print': {
        '& .ag-body-viewport': {
            display: 'block',
        },
        '& .ag-row': {
            pageBreakInside: 'avoid',
        },
    },
    '& .ag-chart': {
        position: 'relative',
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
    },
    '& .ag-chart .ag-chart-canvas-wrapper': {
        flex: '1 1 auto',
    },
    '& .ag-chart .ag-chart-canvas-wrapper canvas': {
        display: 'block',
    },
    '& .ag-chart .ag-chart-menu': {
        position: 'absolute',
        top: 10,
        right: 20,
        width: 24,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        opacity: '0',
        pointerEvents: 'none',
    },
    '& .ag-chart-tabbed-menu > div': {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
    },
    '& .ag-chart-tabbed-menu .ag-tab-header': {
        flex: 'none',
    },
    '& .ag-chart-tabbed-menu .ag-tab-body': {
        display: 'flex',
        flex: '1 1 auto',
        alignItems: 'stretch',
        overflow: 'hidden',
        padding: '0',
    },
    '& .ag-chart-tabbed-menu .ag-tab-body > div': {
        flex: '1 1 auto',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings': {
        overflowX: 'hidden',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper': {
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column-reverse',
        overflow: 'hidden',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar': {
        width: '100%',
        display: 'flex',
        height: 30,
        alignItems: 'center',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: '1 1 auto',
        height: '100%',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item': {
        opacity: '0.2',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item.ag-selected': {
        opacity: '1',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn, & .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn': {
        position: 'relative',
        flex: 'none',
        height: 24,
        width: 24,
        lineHeight: '24px',
        fontSize: 24,
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-prev-btn button, & .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-nav-bar .ag-chart-settings-next-btn button': {
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        cursor: 'pointer',
        opacity: '0',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-wrapper': {
        position: 'absolute',
        top: '0',
        left: '0',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '100%',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-wrapper.ag-animating, & .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-wrapper.ag-animating': {
        transition: 'left 0.3s',
        transitionTimingFunction: 'ease-in-out',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail': {
        cursor: 'pointer',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-wrapper .ag-chart-settings-mini-wrapper .ag-chart-mini-thumbnail canvas': {
        display: 'block',
    },
    '& .ag-chart-tabbed-menu .ag-chart-data-wrapper': {
        width: '100%',
        height: '100%',
        overflow: 'auto',
        position: 'relative',
        userSelect: 'none',
    },
    '& .ag-chart .ag-chart-menu > span': {
        opacity: '0.5',
        lineHeight: '24px',
        fontSize: 24,
        width: 24,
        height: 24,
        margin: '2px 0',
        cursor: 'pointer',
    },
    '& .ag-chart .ag-chart-menu > span:hover': {
        borderRadius: 5,
    },
    '& .ag-chart:hover .ag-chart-menu:not(.ag-has-popup)': {
        opacity: '1',
        pointerEvents: 'all',
    },
    '& .ag-chart:hover .ag-chart-menu:not(.ag-has-popup):hover > span': {
        opacity: '1',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-mini-wrapper > div': {
        margin: 5,
        borderRadius: 5,
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar': {
        padding: '0 10px',
        userSelect: 'none',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector': {
        padding: '0 10px',
    },
    '& .ag-chart-tabbed-menu .ag-chart-settings .ag-chart-settings-nav-bar .ag-nav-card-selector .ag-nav-card-item': {
        cursor: 'pointer',
    },
    '@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)': {
        '& .ag-chart-tabbed-menu .ag-chart-settings-mini-wrapper': {
            justifyContent: 'center',
        },
    },
});
