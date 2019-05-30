import React, { useMemo, useRef, useLayoutEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import AnimateHeight from 'react-animate-height';

import Icon from '../../general/Icon';
import { getOverrides } from '../../../utils/overrides';
import styles from './styles';

function Advice({
    children,
    classes,
    className: classNameProp,
    overrides: overridesProp,
    showIcon,
    theme,
    type,
    ...props
}) {
    const [isEllipsisActive, setEllipsisActive] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(true);
    const textEl = useRef(null);
    const textHeight = useRef(null);

    useLayoutEffect(() => {
        const el = textEl.current;
        setEllipsisActive(el.offsetWidth < el.scrollWidth);
        textHeight.current = el.offsetHeight;
    }, [textEl, children, setEllipsisActive]);

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

    return (
        <div {...rootProps} {...override.root}>
            {showIcon && (
                <div className={classes.icon} {...override.icon}>
                    <Icon {...iconProps} />
                </div>
            )}
            <AnimateHeight
                height={isCollapsed ? textHeight.current : 'auto'}
                {...override['react-animate-height']}
            >
                <div className={classes.textContainer} {...override.textContainer}>
                    <span ref={textEl} className={classes.text} {...override.text}>
                        {children}
                    </span>
                    {isEllipsisActive && (
                        <span
                            onClick={toggleCollapsing}
                            className={classes.dropdownIcon}
                            {...override.dropdownIcon}
                        >
                            <Icon name="chevron" size="small" />
                        </span>
                    )}
                </div>
            </AnimateHeight>
        </div>
    );
}

Advice.overrides = [
    'root',
    'icon',
    'textContainer',
    'text',
    'dropdownIcon',
    'react-animate-height',
];

Advice.defaultProps = {
    className: '',
    overrides: {},
    showIcon: false,
    type: 'info',
};

Advice.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overrides: PropTypes.object,
    showIcon: PropTypes.bool,
    type: PropTypes.oneOf(['error', 'info', 'success', 'warning']),
};

export default React.memo(withStyles(styles, { injectTheme: true, name: 'Advice' })(Advice));
