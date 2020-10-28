import React, { memo, useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AnimateHeight from 'react-animate-height';

import Icon from '../../general/Icon';
import Text from '../../typography/Text';
import { getOverrides, useClasses } from '../../../utils/overrides';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Section');

const Section = memo(
    ({
        isOpen: isOpenProp,
        children,
        classes: classesProp,
        overrides: overridesProp,
        className: classNameProp,
        title,
        isExpandable,
        defaultOpen,
        onChange,
        ...props
    }) => {
        const classes = useClasses(useStyles, classesProp);
        const [isOpen, open] = useState(onChange ? isOpenProp : defaultOpen);

        useEffect(() => {
            if (onChange) open(isOpenProp);
        }, [isOpenProp, onChange]);

        const override = getOverrides(overridesProp, Section.overrides);

        const rootClassName = classnames(classes.root, {}, classNameProp);
        const headerClassName = classnames(classes.header, {
            [classes.isExpandable]: isExpandable,
            [classes.open]: isOpen,
        });

        const onToggle = useCallback(() => {
            onChange && onChange(!isOpen);
            !onChange && open(!isOpen);
        }, [isOpen, onChange]);

        const renderTitle = useMemo(() => {
            if (typeof title === 'string') {
                return (
                    <Text bold type="subtitle" className={classes.Text} {...override.Text}>
                        {title}
                    </Text>
                );
            }
            return title;
        }, [classes.Text, override.Text, title]);

        if (title && isExpandable) {
            return (
                <div className={rootClassName} {...override.root}>
                    <div className={headerClassName} onClick={onToggle} {...override.header}>
                        <div className={classes.icon} {...override.icon}>
                            <Icon name="arrowDropDown" />
                        </div>
                        {renderTitle}
                    </div>
                    <AnimateHeight
                        height={isOpen ? 'auto' : 0}
                        {...override['react-animate-height']}
                    >
                        {children}
                    </AnimateHeight>
                </div>
            );
        } else if (title && !isExpandable) {
            return (
                <div className={rootClassName} {...override.root}>
                    <div className={headerClassName} {...override.header}>
                        {renderTitle}
                    </div>
                    {children}
                </div>
            );
        }
        return (
            <div className={rootClassName} {...override.root}>
                {children}
            </div>
        );
    },
);

Section.overrides = ['root', 'header', 'Text', 'icon', 'react-animate-height'];

Section.defaultProps = {
    isExpandable: true,
    defaultOpen: true,
    overrides: {},
};
Section.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    title: PropTypes.any,
    defaultOpen: PropTypes.bool,
    isExpandable: PropTypes.bool,
};

export default Section;
