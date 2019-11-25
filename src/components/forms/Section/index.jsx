import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AnimateHeight from 'react-animate-height';

import Icon from '../../general/Icon';
import Text from '../../typography/Text';
import { getOverrides, useClasses } from '../../../utils/overrides';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Section');

function Section({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    title,
    isExpandable,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const [isOpen, open] = useState(true);

    // Overrides
    const override = getOverrides(overridesProp, Section.overrides);

    // Classes
    const rootClassName = classnames(classes.root, {}, classNameProp);
    const headerClassName = classnames(classes.header, {
        [classes.isExpandable]: isExpandable,
    });
    const iconClasses = classnames(classes.icon, {
        [classes.collapsed]: !isOpen,
    });

    const onToggle = useCallback(() => open(!isOpen), [isOpen]);

    if (title && isExpandable) {
        return (
            <div className={rootClassName} {...override.root}>
                <div className={headerClassName} onClick={onToggle} {...override.header}>
                    <Text type="bold" className={classes.Text} {...override.Text}>
                        {title}
                    </Text>
                    <div className={iconClasses} {...override.icon}>
                        <Icon name="chevron" size="small" />
                    </div>
                </div>
                <AnimateHeight height={isOpen ? 'auto' : 0} {...override['react-animate-height']}>
                    {children}
                </AnimateHeight>
            </div>
        );
    } else if (title && !isExpandable) {
        return (
            <div className={rootClassName}>
                <div className={headerClassName} {...override.header}>
                    <Text type="bold" className={classes.Text} {...override.Text}>
                        {title}
                    </Text>
                </div>
                {children}
            </div>
        );
    }
    return <div className={rootClassName}>{children}</div>;
}

Section.overrides = ['root', 'header', 'Text', 'react-animate-height'];

Section.defaultProps = {
    isExpandable: true,
    overrides: {},
};
Section.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    title: PropTypes.string,
    isExpandable: PropTypes.bool,
};

export default React.memo(Section);
