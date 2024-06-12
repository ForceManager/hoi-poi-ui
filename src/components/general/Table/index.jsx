import React, { useMemo, memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import Text from '../../typography/Text';

import styles from './styles';

const useStyles = createUseStyles(styles, 'Table');

function Table({
    rows,
    columns,
    classes: classesProp,
    overrides: overridesProp,
    containerClass,
    rowsClass,
    rowClass,
    headerClass,
    cellClass,
    withHeaders,
    loadingComp,
    emptyTable,
    isHeaderFixed,
    getRowStyle,
    getColumnStyle,
    isEvenBackground,
    isOddBackground,
    isHeaderHighlighted,
}) {
    const classes = useClasses(useStyles, classesProp);
    const override = getOverrides(overridesProp, Table.overrides);

    const rootClassName = classnames(classes.root, containerClass, {
        [classes.scrollAll]: !isHeaderFixed,
    });
    const rowsClassName = classnames(classes.rows, rowsClass, {
        [classes.scrollRows]: isHeaderFixed,
        [classes.rowsWithHeader]: withHeaders,
        [classes.evenBackground]: isEvenBackground,
        [classes.oddBackground]: isOddBackground,
    });
    const rowClassName = classnames(classes.row, rowClass);
    const headerClassName = classnames(classes.row, classes.header, headerClass, {
        [classes.headerHighlighted]: isHeaderHighlighted,
    });
    const cellClassName = classnames(classes.cell, cellClass);
    const emptyTableClasses = classnames(classes.row, classes.emptyTable);

    const getInnerColumnStyle = useCallback(
        ({ column, isHeader, index }) => {
            let style = {};
            if (!column.style && !column.width && !getColumnStyle) return {};
            if (column.style) return column.style;
            if (column.width) style = { ...style, width: column.width, flex: 'none' };
            if (getColumnStyle)
                style = { ...style, ...(getColumnStyle({ column, index, isHeader }) || {}) };

            return style;
        },
        [getColumnStyle],
    );

    const showHeaders = useMemo(
        () => (
            <div className={headerClassName} {...override.headerRow}>
                {columns.map((column, key) => {
                    const innerHeaderClassName = classnames(classes.cell, {
                        [classes.alignLeft]: column?.headerAlign === 'left',
                        [classes.alignCenter]: column?.headerAlign === 'center',
                        [classes.alignRight]: column?.headerAlign === 'right',
                    });

                    return (
                        <div
                            key={key}
                            className={innerHeaderClassName}
                            {...override.headerCell}
                            style={getInnerColumnStyle({ column, index: key, isHeader: true })}
                        >
                            <Text bold isTruncated {...override.headerText}>
                                {column.label}
                            </Text>
                        </div>
                    );
                })}
            </div>
        ),
        [
            classes.cell,
            classes.alignLeft,
            classes.alignCenter,
            classes.alignRight,
            headerClassName,
            columns,
            override.headerCell,
            override.headerRow,
            override.headerText,
            getInnerColumnStyle,
        ],
    );

    const showRows = useMemo(() => {
        return rows.map((row, index) => {
            const rowStyle = getRowStyle?.({ row, index }) || {};

            return (
                <div
                    key={index}
                    className={rowClassName}
                    {...row.props}
                    {...override.row}
                    style={rowStyle}
                >
                    {columns.map((column, key) => {
                        const innerCellClassName = classnames(cellClassName, {
                            [classes.alignLeft]: column?.align === 'left',
                            [classes.alignCenter]: column?.align === 'center',
                            [classes.alignRight]: column?.align === 'right',
                        });
                        if (typeof row[column.id] === 'function') {
                            return (
                                <div
                                    key={key}
                                    className={innerCellClassName}
                                    style={getInnerColumnStyle({
                                        column,
                                        index: key,
                                        isHeader: true,
                                    })}
                                    {...override.cell}
                                >
                                    {row[column.id]}
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    key={key}
                                    className={innerCellClassName}
                                    style={getInnerColumnStyle({
                                        column,
                                        index: key,
                                        isHeader: true,
                                    })}
                                    {...override.cell}
                                >
                                    <Text isTruncated {...override.cellText}>
                                        {row[column.id]}
                                    </Text>
                                </div>
                            );
                        }
                    })}
                </div>
            );
        });
    }, [
        classes.alignLeft,
        classes.alignCenter,
        classes.alignRight,
        rows,
        rowClassName,
        override.row,
        override.cell,
        override.cellText,
        columns,
        cellClassName,
        getRowStyle,
        getInnerColumnStyle,
    ]);

    return (
        <div className={rootClassName} {...override.root}>
            {withHeaders && showHeaders}
            {!rows.length && loadingComp && loadingComp}
            {!rows.length && !loadingComp && emptyTable && (
                <div className={emptyTableClasses} {...override.emptyTable}>
                    {emptyTable}
                </div>
            )}
            {!!rows.length && (
                <div className={rowsClassName} {...override.rows}>
                    {showRows}
                </div>
            )}
        </div>
    );
}

Table.overrides = [
    'root',
    'headerRow',
    'headerCell',
    'headerText',
    'row',
    'cell',
    'cellText',
    'emptyTable',
];

Table.defaultProps = {
    rows: [],
    columns: [],
    withHeaders: false,
    emptyTable: 'NO ROWS',
};

Table.propTypes = {
    rows: PropTypes.array,
    /** It should be an array of objects with label/id structure */
    columns: PropTypes.array,
    classes: PropTypes.object,
    overrides: PropTypes.object,
    containerClass: PropTypes.string,
    rowClass: PropTypes.string,
    headerClass: PropTypes.string,
    cellClass: PropTypes.string,
    withHeaders: PropTypes.bool,
    loadingComp: PropTypes.any,
    emptyTable: PropTypes.any,
};

export default memo(Table);
