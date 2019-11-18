import React, { useCallback, useRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { AgGridReact } from 'ag-grid-react';
import withStyles from 'react-jss';

import LoadingOverlay from './LoadingOverlay';

import styles from './styles/index';

const defaultOptions = {
    rowHeight: 50,
    headerHeight: 40,
    enableCellTextSelection: true,
    suppressRowClickSelection: true,
    suppressCellSelection: true,
    suppressRowDrag: true,
    suppressMovableColumns: true,
    suppressClickEdit: true,
    suppressScrollOnNewData: true,
    suppressAnimationFrame: true,
    suppressContextMenu: true,
    animateRows: false,
    rowDataChangeDetectionStrategy: 'IdentityCheck',
    defaultColDef: {
        resizable: true,
    },
    columnDefs: [],
    rowData: [],
    reactNext: true,
};

function DataGrid({
    id,
    className,
    classes,
    dataSource,
    isLoading,
    hasError,
    vanillaComponents,
    components,
    onReady,
    infiniteInitialRowCount,
    ...props
}) {
    const rootClassName = classnames(classes.root, className, 'ag-theme-balham');
    const gridRef = useRef(null);
    const gridWidthRef = useRef(0);

    // Main events
    const onGridReady = useCallback(
        (params) => {
            gridRef.current = params;
            onReady && onReady(params);
        },
        [onReady],
    );

    const onGridSizeChanged = useCallback((params) => {
        const clientWidth = gridWidthRef.current;
        gridWidthRef.current = params.clientWidth;
        if (params.clientWidth && clientWidth && params.clientwidth === clientWidth) return;
        params.api.sizeColumnsToFit();
    }, []);

    const onFirstDataRendered = useCallback((params) => {
        if (params && params.api && params.api.sizeColumnsToFit) {
            params.api.sizeColumnsToFit();
        }
    }, []);

    const options = useMemo(() => {
        const options = {
            ...defaultOptions,
            frameworkComponents: {
                loadingOverlay: (...props) => <LoadingOverlay {...props} />,
                ...components,
            },
            components: {
                ...vanillaComponents,
            },
            loadingOverlayComponent: 'loadingOverlay',
            noRowsOverlayComponent: 'noRowsOverlay',
            ...props,
        };

        if (dataSource) {
            options.rowModelType = 'infinite';
            options.datasource = dataSource;
        }

        return options;
    }, [components, dataSource, props, vanillaComponents]);

    useEffect(() => {
        if (
            gridRef &&
            gridRef.current &&
            gridRef.current.api &&
            gridRef.current.api.setInfiniteRowCount
        ) {
            gridRef.current.api.setInfiniteRowCount(infiniteInitialRowCount);
        }
    }, [infiniteInitialRowCount]);

    return (
        <div id={id} className={rootClassName}>
            <AgGridReact
                onGridReady={onGridReady}
                onGridSizeChanged={onGridSizeChanged}
                onFirstDataRendered={onFirstDataRendered}
                infiniteInitialRowCount={infiniteInitialRowCount}
                {...options}
            ></AgGridReact>
        </div>
    );
}

DataGrid.defaultProps = {
    rowData: null,
    vanillaComponents: {},
    components: {},
};

DataGrid.propTypes = {
    className: PropTypes.string,
};

export default React.memo(
    withStyles(styles, {
        name: 'DataGrid',
    })(DataGrid),
);
