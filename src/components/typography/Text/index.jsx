import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getOverrides, useClasses } from '../../../utils/overrides';
import Loader from '../../general/Loader';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Text');

const LOADERS_SIZE = {
    small: 'mini',
    medium: 'tiny',
    large: 'small',
    big: 'medium',
};

function Text({
    children,
    isTruncated,
    size,
    type,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    isLoading,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    //Overrides
    const rootClassName = classnames(classes.root, classes[type], classes[size], classNameProp, {
        [classes.truncated]: isTruncated,
        [classes.isLoading]: isLoading,
    });

    const override = getOverrides(overridesProp, Text.overrides);

    const rootProps = {
        ...props,
        ...override.root,
    };

    const loaderSize = LOADERS_SIZE[size];

    return (
        <span className={rootClassName} {...rootProps}>
            {isLoading && (
                <Loader size={loaderSize} className={classes.Loader} {...override.Loader} />
            )}
            {children}
        </span>
    );
}

Text.overrides = ['root', 'Loader'];

Text.defaultProps = {
    type: 'normal',
    size: 'medium',
    className: '',
    overrides: {},
    isTruncated: false,
};

Text.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['bold', 'normal', 'light']),
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big']),
    overrides: PropTypes.object,
    children: PropTypes.node,
    isTruncated: PropTypes.bool,
    isLoading: PropTypes.bool,
};

export default React.memo(Text);
