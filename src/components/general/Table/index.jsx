import React, { useCallback, useMemo, memo } from 'react';
// import PropTypes from 'prop-types';
// import classnames from 'classnames';

import { useClasses } from '../../../utils/overrides';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'Table');

function TableConf({ rows = [], columns = [], classesProp = {} }) {
    const classes = useClasses(useStyles, classesProp);

    console.log('heading, rws', columns, rows);

    const renderHeadingRow = useCallback(
        (_cell, cellIndex) => {
            console.log('heading2345::', _cell, cellIndex);
            return (
                <th className={classes.Cell} key={`heading-${cellIndex}`}>
                    {columns[cellIndex].label}
                </th>
            );
        },
        [classes.Cell, columns],
    );

    // renderHeadingRow = (_cell, cellIndex) => {
    //     const { headings } = this.props;

    //     return <Cell key={`heading-${cellIndex}`} content={headings[cellIndex]} header={true} />;
    // };

    // const renderRow = useCallback(
    //     (_row, rowIndex, rows) => {
    //         return (
    //             <tr key={`row-${rowIndex}`}>
    //                 {rows[rowIndex].map((_cell, cellIndex) => {
    //                     return (
    //                         <td className={classes.Cell} key={`${rowIndex}-${cellIndex}`}>
    //                             {rows[rowIndex][cellIndex]}
    //                         </td>
    //                     );
    //                 })}
    //             </tr>
    //         );
    //     },
    //     [classes.Cell],
    // );

    const renderRow2 = useCallback(
        (key, rowIndex) => {
            console.log('rowIndex', rowIndex, Object.values(rowIndex));
            return (
                <tr key={`row-${key}`}>
                    {Object.values(rowIndex).map((field) => (
                        <td className={classes.Cell} key={`${rowIndex}-${key}`}>
                            {field}
                        </td>
                    ))}
                </tr>
            );
        },
        [classes.Cell],
    );

    const theadMarkup = useMemo(
        () => <tr key="heading">{columns.map(renderHeadingRow)}</tr>,
        [columns, renderHeadingRow],
    );

    // const theadMarkup = (
    //     <tr key="heading">
    //         {columns.forEach((column, index) => {
    //             // for (let key in columns) {
    //             console.log(`Headers::: ${column['id']}: ${column['label']}`);
    //             renderHeadingRow(index, column['label']);
    //             // }
    //         })}
    //     </tr>
    // );

    // const tbodyMarkup = rows.map(renderRow);

    const tbodyMarkup = useCallback(
        () =>
            rows.forEach((row, key) => {
                return (
                    <tr key={`row-${key}`}>
                        {Object.values(row).map((field) => (
                            <td className={classes.Cell} key={`${row}-${key}`}>
                                {field}
                            </td>
                        ))}
                    </tr>
                );
                // renderRow2(key, row);
            }),
        [classes.Cell, rows],
    );
    console.log('tbodyMarkup', tbodyMarkup);
    console.log('theadMarkup', theadMarkup);

    return (
        <table className={classes.Table}>
            <thead>{theadMarkup}</thead>
            <tbody>
                <tr key={`row-${1}`}>
                    {rows.forEach((row, key) => {
                        return Object.values(row).map((field) => (
                            <td className={classes.Cell} key={`${row}-${key}`}>
                                {field}
                            </td>
                        ));
                    })}
                </tr>
            </tbody>
        </table>
    );
}

TableConf.overrides = ['root'];

TableConf.defaultProps = {};

TableConf.propTypes = {};

export default memo(TableConf);
