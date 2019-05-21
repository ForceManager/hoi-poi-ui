import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import AnimateHeight from 'react-animate-height';

import Icon from '../../general/Icon';
import { getOverrides } from '../../../utils/overrides';
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

    // Overrides
    const override = getOverrides(overridesProp, Section.overrides);

    // Classes
    const rootClassName = classnames(classes.root, {}, classNameProp);
    const iconClasses = classnames(classes.icon, {
        [classes.collapsed]: !isOpen,
    });

    const onToggle = useCallback(() => open(!isOpen), [isOpen]);

    return (
        <div className={rootClassName} {...override.root}>
            <div className={classes.header} onClick={onToggle} {...override.header}>
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

Section.overrides = ['root', 'header', 'title', 'react-animate-height'];

Section.defaultProps = {
    overrides: {},
};

Section.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    title: PropTypes.string,
};

export default React.memo(withStyles(styles, { name: 'Section' })(Section));
