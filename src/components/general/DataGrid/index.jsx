import React, { memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import ReactDataGrid from 'react-data-grid';

import { getOverrides } from '../../../utils/overrides';
import Loader from '../Loader';
import EmptyView from './EmptyView';
import RowRenderer from './RowRenderer';
import styles from './styles';

function DataGrid({
    children,
    classes,
    className: classNameProp,
    overrides: overridesProp,
    columns,
    headerRowHeight,
    rowHeight,
    rows,
    count,
    isLoading,
    hasError,
    loadingComponent,
    emptyComponent,
    errorComponent,
    actions,
    ...props
}) {
    const rowGetter = useCallback((i) => rows[i], [rows]);

    // Overrides
    const override = getOverrides(overridesProp, DataGrid.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    const rootProps = {
        ...props,
        className: rootClassName,
    };

    const emptyRowsView = useMemo(
        () => () => (
            <EmptyView
                hasError={hasError}
                emptyComponent={emptyComponent}
                errorComponent={errorComponent}
                isLoading={isLoading}
                {...override.emptyView}
            />
        ),
        [emptyComponent, errorComponent, hasError, isLoading, override.emptyView],
    );

    const rowRenderer = useMemo(
        () => (props) => <RowRenderer actions={actions} {...props} {...override.rowRenderer} />,
        [actions, override.rowRenderer],
    );

    const dataGridProps = {
        columns,
        rowGetter,
        rowsCount: hasError ? 0 : count,
        headerRowHeight,
        rowHeight,
        emptyRowsView,
        ...override['react-data-grid'],
    };

    if (actions) {
        dataGridProps.rowRenderer = rowRenderer;
    }

    return (
        <div {...rootProps} {...override.root}>
            <ReactDataGrid {...dataGridProps} />
            {isLoading && (
                <div className={classes.loadingView} {...override.loadingView}>
                    {emptyComponent || <Loader size="huge" />}
                </div>
            )}
        </div>
    );
}

DataGrid.overrides = ['root', 'react-data-grid', 'loadingView', 'emptyView', 'rowRenderer'];

DataGrid.defaultProps = {
    className: '',
    overrides: {},
    columns: [],
    rows: [],
    count: 0,
    headerRowHeight: 40,
    rowHeight: 40,
    isLoading: false,
    hasError: false,
};

DataGrid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    overrides: PropTypes.object,
    headerRowHeight: PropTypes.number,
    rowHeight: PropTypes.number,
    isLoading: PropTypes.bool,
    hasError: PropTypes.bool,
    emptyComponent: PropTypes.node,
    errorComponent: PropTypes.node,
    loadingComponent: PropTypes.node,
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.node.isRequired,
            key: PropTypes.string.isRequired,
            // If not specified, it will be determined automatically based on grid width and specified widths of other columns
            width: PropTypes.number,
            resizable: PropTypes.bool,
            sortable: PropTypes.bool,
            sortDescendingFirst: PropTypes.bool,
            headerRenderer: PropTypes.node,
            formatter: PropTypes.none,
            frozen: PropTypes.bool,
        }),
    ),
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
    actions: PropTypes.arrayOf(PropTypes.any),
    count: PropTypes.number.isRequired,
};

export default memo(withStyles(styles, { injectTheme: true, name: 'DataGrid' })(DataGrid));
