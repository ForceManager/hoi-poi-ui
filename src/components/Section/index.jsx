import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import AnimateHeight from 'react-animate-height';

import Icon from '../Icon';
import { getOverrides } from '../../utils/overrides';
import styles from './styles';

function Section({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    title,
    ...props
}) {
    const [isOpen, open] = useState(true);

    const rootProps = {
        onClick: useCallback(() => open(!isOpen), [isOpen]),
    };

    // Overrides
    const override = getOverrides(overridesProp, Section.overrides);

    // Classes
    const rootClassName = classnames(classes.root, {}, classNameProp);
    const iconClasses = classnames(classes.icon, {
        [classes.collapsed]: !isOpen,
    });

    return (
        <div className={rootClassName} {...rootProps}>
            <div className={classes.header} {...override.header}>
                <span className={classes.title} {...override.title}>
                    {title}
                </span>
                <div className={iconClasses} {...override.icon}>
                    <Icon name="chevron" size="small" />
                </div>
            </div>
            <AnimateHeight height={isOpen ? 'auto' : 0} {...override['react-animate-height']}>
                {children}
            </AnimateHeight>
        </div>
    );
}

Section.overrides = ['header', 'title', 'react-animate-height'];

Section.propTypes = {
    title: PropTypes.string,
};

export default React.memo(withStyles(styles, { name: 'Section' })(Section));
