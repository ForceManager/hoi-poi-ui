import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';

import Icon from '../Icon';

import styles from './styles';
const useStyles = createUseStyles(styles, 'IconMultiple');

const SIZES = ['huge', 'big', 'large', 'medium', 'small'];

function IconMultiple({
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    size = 'medium',
    firstIcon,
    firstProps = {},
    secondIcon,
    secondProps = {},
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, IconMultiple.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp, classes[size]);

    const secondSize = useMemo(() => {
        const index = SIZES.findIndex((s) => size === s);
        return SIZES[index + 1] || 'small';
    }, [size]);

    const rootProps = {
        ...props,
        className: rootClassName,
    };

    return (
        <div {...rootProps} {...override.root}>
            <Icon
                name={firstIcon}
                size={size}
                className={classes.FirstIcon}
                {...override.FirstIcon}
                {...firstProps}
            />
            <Icon
                name={secondIcon}
                className={classes.SecondIcon}
                size={secondSize}
                {...override.SecondIcon}
                {...secondProps}
            />
        </div>
    );
}

IconMultiple.overrides = ['root', 'FirstIcon', 'SecondIcon'];

IconMultiple.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overrides: PropTypes.object,
    firstIcon: PropTypes.string.isRequired,
    secondIcon: PropTypes.string.isRequired,
};

export default React.memo(IconMultiple);
