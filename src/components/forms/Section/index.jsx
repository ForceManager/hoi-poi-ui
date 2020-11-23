import React, { memo, useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AnimateHeight from 'react-animate-height';

import Icon from '../../general/Icon';
import BadgeNotification from '../../general/BadgeNotification';
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
        activeFields,
        ...props
    }) => {
        const classes = useClasses(useStyles, classesProp);
        const [isOpen, setIsOpen] = useState(onChange ? isOpenProp : defaultOpen);

        useEffect(() => {
            if (onChange) setIsOpen(isOpenProp);
        }, [isOpenProp, onChange]);

        const override = getOverrides(overridesProp, Section.overrides);

        const rootClassName = classnames(classes.root, {}, classNameProp);
        const headerClassName = classnames(classes.header, {
            [classes.isExpandable]: isExpandable,
            [classes.open]: isOpen,
            [classes.headerActiveFields]: !!activeFields,
        });

        const onToggle = useCallback(() => {
            onChange && onChange(!isOpen);
            !onChange && setIsOpen(!isOpen);
        }, [isOpen, onChange]);

        const renderTitle = useMemo(() => {
            if (typeof title === 'string') {
                return (
                    <div className={classes.textContainer} {...override.textContainer}>
                        <Text bold type="subtitle" className={classes.Text} {...override.Text}>
                            {title}
                        </Text>
                    </div>
                );
            }
            return title;
        }, [classes.Text, classes.textContainer, override.Text, override.textContainer, title]);

        const newActiveFields = useMemo(() => {
            if (!activeFields || isOpen) return null;
            return (
                <BadgeNotification
                    size="small"
                    className={classes.BadgeNotification}
                    {...override.BadgeNotification}
                >
                    {activeFields}
                </BadgeNotification>
            );
        }, [classes, override, activeFields, isOpen]);

        if (title && isExpandable) {
            return (
                <div className={rootClassName} {...override.root}>
                    <div className={headerClassName} onClick={onToggle} {...override.header}>
                        <div className={classes.headerContent} {...override.headerContent}>
                            <div className={classes.titleContainer} {...override.titleContainer}>
                                <div className={classes.icon} {...override.icon}>
                                    <Icon name="arrowDropDown" />
                                </div>
                                {renderTitle}
                            </div>
                            {newActiveFields}
                        </div>
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
                        <div className={classes.headerContent} {...override.headerContent}>
                            <div className={classes.titleContainer} {...override.titleContainer}>
                                {renderTitle}
                            </div>
                            {newActiveFields}
                        </div>
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

Section.overrides = ['root', 'header', 'Text', 'BadgeNotification', 'icon', 'react-animate-height'];

Section.defaultProps = {
    isExpandable: true,
    defaultOpen: true,
    overrides: {},
};
Section.propTypes = {
    className: PropTypes.string,
    title: PropTypes.any,
    defaultOpen: PropTypes.bool,
    isExpandable: PropTypes.bool,
    activeFields: PropTypes.number,
    onChange: PropTypes.func,
    overrides: PropTypes.shape({
        root: PropTypes.object,
        header: PropTypes.object,
        Text: PropTypes.object,
        icon: PropTypes.object,
    }),
};

export default Section;
