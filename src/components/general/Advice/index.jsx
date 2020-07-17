import React, { useMemo, useRef, useLayoutEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AnimateHeight from 'react-animate-height';

import Icon from '../../general/Icon';
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
    const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
    const textEl = useRef(null);
    const textHeight = useRef(null);

    useLayoutEffect(() => {
        if (title) return;
        const el = textEl.current;
        setEllipsisActive(el.offsetWidth < el.scrollWidth);
        textHeight.current = el.offsetHeight;

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
            [classes.isCollapsed]: isCollapsed,
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
                    name: 'warning',
                    color: theme.colors.red,
                };
            case 'success':
                return {
                    ...properties,
                    name: 'thickEnabled',
                    color: theme.colors.green,
                };
            case 'warning':
                return {
                    ...properties,
                    name: 'warningRounded',
                    color: theme.colors.yellow,
                };
            case 'info':
            default:
                return {
                    ...properties,
                    name: 'info',
                    color: theme.colors.secondary,
                };
        }
    }, [theme.colors.green, theme.colors.red, theme.colors.secondary, theme.colors.yellow, type]);

    const toggleCollapsing = useCallback(() => {
        setIsCollapsed(!isCollapsed);
    }, [isCollapsed]);

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
                <AnimateHeight
                    height={isCollapsed ? textHeight.current || 20 : 'auto'}
                    {...override['react-animate-height']}
                >
                    <div className={classes.textContainer} {...override.textContainer}>
                        <Text
                            isTruncated={isCollapsed}
                            className={classes.Text}
                            {...override.Text}
                            overrides={{ root: { ref: textEl } }}
                        >
                            {!title && children}
                            {title && title}
                        </Text>
                        {showCollapsingIcon && (
                            <span
                                onClick={toggleCollapsing}
                                className={classes.dropdownIcon}
                                {...override.dropdownIcon}
                            >
                                <Icon name="chevron" size="small" />
                            </span>
                        )}
                    </div>
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
                </AnimateHeight>
            )}
        </div>
    );
}

Advice.overrides = [
    'root',
    'icon',
    'textContainer',
    'Text',
    'dropdownIcon',
    'react-animate-height',
];

Advice.defaultProps = {
    className: '',
    overrides: {},
    showIcon: false,
    showCollapse: true,
    type: 'info',
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
    type: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
};

export default React.memo(Advice);
