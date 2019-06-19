import React, { memo } from 'react';
import withStyles from 'react-jss';
import classnames from 'classnames';
import Text from '../../typography/Text';

import styles from './styles';

function EmptyView({
    children,
    classes,
    className: classNameProp,
    overrides: overridesProp,
    isLoading,
    hasError,
    errorComponent,
    emptyComponent,
    ...props
}) {
    // Classes
    const rootClassName = classnames(classes.emptyView, classNameProp);

    const rootProps = {
        className: rootClassName,
        ...props,
    };

    let el = emptyComponent || <Text className={classes.emptyComponent}>No data available</Text>;
    if (hasError) el = errorComponent || <Text className={classes.emptyComponent}>Error</Text>;
    if (isLoading) el = null;
    return <div {...rootProps}>{el}</div>;
}

EmptyView.defaultProps = {};

EmptyView.propTypes = {};

export default memo(withStyles(styles, { injectTheme: true, name: 'EmptyView' })(EmptyView));
