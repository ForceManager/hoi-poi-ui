import React, { useMemo, useRef, useLayoutEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Collapse } from 'react-collapse';

import Button from '../Button';
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
    dismissText,
    onDismiss,
    showIcon = false,
    showCollapse = true,
    type = 'default',
    defaultCollapsed = true,
    isDismissable = false,
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
                    color: theme.colors.semantic.negative500,
                };
            case 'success':
                return {
                    ...properties,
                    name: 'thickEnabled',
                    color: theme.colors.semantic.positive600,
                };
            case 'warning':
                return {
                    ...properties,
                    name: 'warningRounded',
                    color: theme.colors.semantic.focusCustom600,
                };
            case 'info':
                return {
                    ...properties,
                    name: 'infoOutlined',
                    color: theme.colors.semantic.info600,
                };
            case 'default':
            default:
                return {
                    ...properties,
                    name: 'infoOutlined',
                    color: theme.colors.textLight.secondary,
                };
        }
    }, [
        theme.colors.semantic.info600,
        theme.colors.semantic.positive600,
        theme.colors.textLight.secondary,
        theme.colors.semantic.negative500,
        theme.colors.semantic.focusCustom600,
        type,
    ]);

    const toggleCollapsing = useCallback(() => {
        setIsOpened(!isOpened);
    }, [isOpened]);

    const showCollapsingIcon = isEllipsisActive || title;

    return (
        <div {...rootProps}>
            <div className={classes.wrap}>
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
                                    <Icon name="arrowDropDown" />
                                </span>
                            )}
                        </div>
                    </Collapse>
                )}
            </div>
            {isDismissable && (
                <Button
                    className={classes.dismiss}
                    onClick={onDismiss}
                    type="terciary"
                    size="small"
                >
                    {dismissText}
                </Button>
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

Advice.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.any,
    className: PropTypes.string,
    overrides: PropTypes.object,
    showIcon: PropTypes.bool,
    showCollapse: PropTypes.bool,
    defaultCollapsed: PropTypes.bool,
    type: PropTypes.oneOf(['default', 'error', 'info', 'success', 'warning']),
    isDismissable: PropTypes.bool,
    dismissText: PropTypes.string,
    onDismiss: PropTypes.func,
};

export default React.memo(Advice);
