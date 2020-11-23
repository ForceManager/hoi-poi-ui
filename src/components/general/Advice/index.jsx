import React, { useMemo, useRef, useLayoutEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Collapse } from 'react-collapse';

import Icon from '../Icon';
import Text from '../../typography/Text';
import { getOverrides, useClasses } from '../../../utils/overrides';

import { createUseStyles, useTheme } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Advice');

function Advice({
    children,
    classes: classesProp,
    className: classNameProp,
    overrides: overridesProp,
    title,
    showIcon,
    showCollapse,
    type,
    defaultCollapsed,
    ...props
}) {
    const theme = useTheme();
    const classes = useClasses(useStyles, classesProp);
    const [isEllipsisActive, setEllipsisActive] = useState(false);
    const [isOpened, setIsOpened] = useState(!defaultCollapsed);
    const textEl = useRef(null);

    useLayoutEffect(() => {
        if (title) return;
        const el = textEl.current;
        setEllipsisActive(el.offsetWidth < el.scrollWidth);

        // Handling resize windows
        const handleResize = () => setEllipsisActive(el.offsetWidth < el.scrollWidth);
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [textEl, children, setEllipsisActive, title]);

    // Overrides
    const override = getOverrides(overridesProp, Advice.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes[type]]: type,
            [classes.isOpened]: isOpened,
        },
        classNameProp,
    );

    const rootProps = {
        ...props,
        className: rootClassName,
    };

    const iconProps = useMemo(() => {
        const properties = { size: 'medium' };
        switch (type) {
            case 'error':
                return {
                    ...properties,
                    name: 'warningOutline',
                    color: theme.colors.red500,
                };
            case 'success':
                return {
                    ...properties,
                    name: 'thickEnabled',
                    color: theme.colors.green700,
                };
            case 'warning':
                return {
                    ...properties,
                    name: 'warningRounded',
                    color: theme.colors.yellow700,
                };
            case 'info':
                return {
                    ...properties,
                    name: 'infoOutlined',
                    color: theme.colors.aqua700,
                };
            case 'default':
            default:
                return {
                    ...properties,
                    name: 'infoOutlined',
                    color: theme.colors.neutral700,
                };
        }
    }, [
        theme.colors.aqua700,
        theme.colors.green700,
        theme.colors.neutral700,
        theme.colors.red500,
        theme.colors.yellow700,
        type,
    ]);

    const toggleCollapsing = useCallback(() => {
        setIsOpened(!isOpened);
    }, [isOpened]);

    const showCollapsingIcon = isEllipsisActive || title;

    return (
        <div {...rootProps}>
            {showIcon && (
                <div className={classes.icon} {...override.icon}>
                    <Icon {...iconProps} />
                </div>
            )}

            {!showCollapse && (
                <Text
                    className={classes.Text}
                    {...override.Text}
                    overrides={{ root: { ref: textEl } }}
                >
                    {children}
                </Text>
            )}

            {showCollapse && (
                <Collapse isOpened={isOpened || false} {...override['react-collapse']}>
                    <div className={classes.collapseContainer} {...override.collapseContainer}>
                        <div className={classes.textContainer} {...override.textContainer}>
                            <Text
                                isTruncated={!isOpened}
                                className={classes.Text}
                                bold={!!title}
                                {...override.Text}
                                overrides={{ root: { ref: textEl } }}
                            >
                                {!title && children}
                                {title && title}
                            </Text>
                            {title && (
                                <div className={classes.withTitleContainer}>
                                    <Text
                                        className={classes.Text}
                                        {...override.Text}
                                        overrides={{ root: { ref: textEl } }}
                                    >
                                        {children}
                                    </Text>
                                </div>
                            )}
                        </div>
                        {showCollapsingIcon && (
                            <span
                                onClick={toggleCollapsing}
                                className={classes.dropdownIcon}
                                {...override.dropdownIcon}
                            >
                                <Icon name="arrowDropDown" size="large" />
                            </span>
                        )}
                    </div>
                </Collapse>
            )}
        </div>
    );
}

Advice.overrides = [
    'root',
    'icon',
    'textContainer',
    'collapseContainer',
    'Text',
    'dropdownIcon',
    'react-collapse',
];

Advice.defaultProps = {
    className: '',
    overrides: {},
    showIcon: false,
    showCollapse: true,
    type: 'default',
    defaultCollapsed: true,
};

Advice.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.any,
    className: PropTypes.string,
    overrides: PropTypes.object,
    showIcon: PropTypes.bool,
    showCollapse: PropTypes.bool,
    defaultCollapsed: PropTypes.bool,
    type: PropTypes.oneOf(['default', 'error', 'info', 'success', 'warning']),
};

export default React.memo(Advice);
