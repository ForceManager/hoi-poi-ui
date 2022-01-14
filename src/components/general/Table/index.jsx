import React, { useMemo, memo } from 'react';
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
    rowClass,
    headerClass,
    cellClass,
    withHeaders,
    loadingComp,
    emptyTable,
}) {
    const classes = useClasses(useStyles, classesProp);
    const override = getOverrides(overridesProp, Table.overrides);

    const rootClassName = classnames(classes.root, containerClass);
    const rowClassName = classnames(classes.row, rowClass);
    const headerClassName = classnames(classes.row, headerClass);
    const cellClassName = classnames(classes.cell, cellClass);
    const emptyTableClasses = classnames(classes.row, classes.emptyTable);

    const showHeaders = useMemo(
        () => (
            <div className={headerClassName} {...override.headerRow}>
                {columns.map((column, key) => {
                    return (
                        <div key={key} className={classes.cell} {...override.headerCell}>
                            {column.label}
                        </div>
                    );
                })}
            </div>
        ),
        [classes.cell, headerClassName, columns, override.headerCell, override.headerRow],
    );

    const showRows = useMemo(() => {
        return rows.map((row, key) => {
            return (
                <div key={key} className={rowClassName} {...row.props} {...override.row}>
                    {columns.map((column, key) => {
                        if (typeof row[column.id] === 'function') {
                            return (
                                <div key={key} className={cellClassName} {...override.cell}>
                                    {row[column.id]}
                                </div>
                            );
                        } else {
                            return (
                                <div key={key} className={cellClassName} {...override.cell}>
                                    <Text>{row[column.id]}</Text>
                                </div>
                            );
                        }
                    })}
                </div>
            );
        });
    }, [rows, rowClassName, override.row, override.cell, columns, cellClassName]);

    return (
        <div className={rootClassName} {...override.root}>
            {withHeaders && showHeaders}
            {!rows.length && loadingComp && loadingComp}
            {!rows.length && !loadingComp && emptyTable && (
                <div className={emptyTableClasses} {...override.emptyTable}>
                    {emptyTable}
                </div>
            )}
            {!!rows.length && showRows}
        </div>
    );
}

Table.overrides = ['root', 'headerRow', 'headerCell', 'row', 'cell', 'emptyTable'];

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
