import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../../utils/overrides';

import { createUseStyles } from '../../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'FieldBottom');

const Input = memo(
    ({
        children,
        classes: classesProp,
        overrides: overridesProp,
        className: classNameProp,
        isFullWidth,
        error,
        info,
        ...props
    }) => {
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, Input.overrides);
        const rootClassName = classnames(
            classes.root,
            {
                [classes.isFullWidth]: isFullWidth,
            },
            classNameProp,
        );

        if (!error && !info) return null;

        return (
            <div className={rootClassName} {...override.root}>
                {info && (
                    <div className={classes.info} {...override.info}>
                        {info}
                    </div>
                )}
                {error && (
                    <div className={classes.error} {...override.error}>
                        {error}
                    </div>
                )}
            </div>
        );
    },
);

Input.overrides = ['root', 'error', 'info'];

Input.defaultProps = {};

Input.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    info: PropTypes.string,
};

export default Input;
