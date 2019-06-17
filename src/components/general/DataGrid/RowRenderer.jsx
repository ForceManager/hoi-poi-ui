import React, { memo } from 'react';
import withStyles from 'react-jss';
import classnames from 'classnames';

import styles from './styles';

function RowRenderer({
    classes,
    className: classNameProp,
    overrides: overridesProp,
    actions,
    renderBaseRow,
    ...props
}) {
    // Classes
    const rootClassName = classnames(classes.rowRenderer, classNameProp);

    return (
        <div key={props.idx} className={rootClassName}>
            {renderBaseRow(props)}
            <div className={classes.actions}>
                {actions.map((action, index) => (
                    <div key={index}>{action(props)}</div>
                ))}
            </div>
        </div>
    );
}

RowRenderer.defaultProps = {
    actions: [],
};

export default memo(withStyles(styles, { injectTheme: true, name: 'RowRenderer' })(RowRenderer));
