import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import ReactDataGrid from 'react-data-grid';

import { getOverrides } from '../../../utils/overrides';
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

    return (
        <div {...rootProps} {...override.root}>
            <ReactDataGrid
                columns={columns}
                rowGetter={rowGetter}
                rowsCount={count}
                headerRowHeight={headerRowHeight}
                rowHeight={rowHeight}
                {...override['react-data-grid']}
            />
        </div>
    );
}

DataGrid.overrides = ['root', 'react-data-grid'];

DataGrid.defaultProps = {
    className: '',
    overrides: {},
    columns: [],
    rows: [],
    count: 0,
    headerRowHeight: 40,
    rowHeight: 40,
    isLoading: false,
};

DataGrid.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    overrides: PropTypes.object,
    headerRowHeight: PropTypes.number,
    rowHeight: PropTypes.number,
    isLoading: PropTypes.bool,
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
    count: PropTypes.number.isRequired,
};

export default memo(withStyles(styles, { injectTheme: true, name: 'DataGrid' })(DataGrid));
