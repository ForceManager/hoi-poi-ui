import React, { memo, useCallback, useEffect, useMemo, useState, Fragment, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RCTabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import Icon from '../Icon';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';

import styles from './styles';

const useStyles = createUseStyles(styles, 'Tabs');

function Tabs({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    tabs,
    onChange,
    onClose,
    activeKey,
    position,
    postComponent,
    vertical,
    editable,
    alwaysShowCloseTab,
    containerElement,
    popoverOffsetCorrection,
    ...props
}) {
    const [state, setState] = useState({
        tabs: [],
        activeKey: null,
    });
    const [popoverComponent, setPopoverComponent] = useState(null);
    const [popoverStyles, setPopoverStyles] = useState({});
    const tabRef = useRef(null);
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Tabs.overrides);

    useEffect(() => {
        setState({ activeKey, tabs });
    }, [activeKey, tabs]);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.withPostComponent]: postComponent,
            [classes.vertical]: vertical,
        },
        classNameProp,
    );

    const handleChange = useCallback(
        (key) => {
            setState((state) => ({ ...state, activeKey: key }));
            onChange && onChange(key);
        },
        [onChange],
    );

    const handleClose = useCallback(
        (event, key) => {
            event.stopPropagation();

            let { activeKey, tabs } = state;
            let foundIndex = 0;

            const finalTabs = tabs.filter((tab, index) => {
                if (tab.key !== key) return true;
                foundIndex = index;
                return false;
            });

            if (activeKey === key) {
                if (!!foundIndex) foundIndex--;
                activeKey = finalTabs[foundIndex]?.key;
            }

            setState((state) => ({ ...state, activeKey, tabs: finalTabs }));
            onClose && onClose({ key, activeKey, tabs: finalTabs });
        },
        [onClose, state],
    );

    const tabsProps = useMemo(
        () => ({
            ...props,
            activeKey: state.activeKey,
            onChange: handleChange,
            renderTabBar: () => <ScrollableInkTabBar />,
            renderTabContent: () => <TabContent />,
            tabBarPosition: position,
            prefixCls: 'hoi-poi-ui__tabs',
            ...override['rc-tabs'],
        }),
        [handleChange, override, position, props, state.activeKey],
    );

    const getParentNode = useCallback((target) => {
        let parentNode = null;
        if (target.classList.contains('[class*="HoiPoi__Tabs__tabWithPopover"]')) {
            parentNode = target?.parentNode || null;
        } else if (target.closest('[class*="HoiPoi__Tabs__tabWithPopover"]')) {
            parentNode = target?.closest('[class*="HoiPoi__Tabs__tabWithPopover"]') || null;
            parentNode = parentNode?.parentNode || null;
        }
        return parentNode;
    }, []);

    const getAbsolutePosition = useCallback((element) => {
        const rect = element.getBoundingClientRect();

        return {
            top: rect.top,
            bottom: rect.bottom,
            left: rect.left,
            right: rect.right,
        };
    }, []);

    const onMouseOver = useCallback(
        (e, popoverContent, popoverWidth) => {
            e.stopPropagation();
            const element = tabRef.current || null;
            if (!element) return;
            const popover = element.querySelector('[class*="HoiPoi__Tabs__popover"]');
            if (!popover) return;

            let parentNode = null;

            parentNode = getParentNode(e.target);
            if (!parentNode) return;

            const { left, right } = getAbsolutePosition(parentNode);

            let tabWidth = right - left;
            let offsetToTabCenter = tabWidth / 2;

            let positionToTabCenter = left + offsetToTabCenter;
            const pixelsToPopoverCenter = popoverWidth / 2;
            let offsetToBorderLeft = null;

            let popoverStyles = {
                display: 'block',
                top: `${element.offsetTop + element.offsetHeight}px`,
            };

            if (containerElement) {
                const containerElementPosition = getAbsolutePosition(containerElement);
                let halfPopover = popoverWidth / 2;
                const shadowOffset = 14;
                if (left - containerElementPosition.left < halfPopover) {
                    offsetToBorderLeft = left - containerElementPosition.left;
                    popoverStyles.left =
                        positionToTabCenter -
                        containerElementPosition.left -
                        offsetToBorderLeft +
                        shadowOffset;
                } else if (containerElementPosition.right - right < halfPopover) {
                    popoverStyles.left =
                        right - containerElementPosition.left - offsetToTabCenter - popoverWidth;
                } else {
                    let finalOffsetCorrection = popoverOffsetCorrection || 0;
                    positionToTabCenter =
                        positionToTabCenter - containerElementPosition.left - finalOffsetCorrection;
                    popoverStyles.left = positionToTabCenter - pixelsToPopoverCenter;
                }
            } else {
                popoverStyles.left = positionToTabCenter - pixelsToPopoverCenter;
            }

            setPopoverComponent(popoverContent);
            setPopoverStyles(popoverStyles);
        },
        [getParentNode, getAbsolutePosition, containerElement, popoverOffsetCorrection],
    );

    const onMouseOut = useCallback((e) => {
        e.stopPropagation();
        setPopoverComponent(null);
        setPopoverStyles({ display: 'none' });
    }, []);

    const onClickForPopover = useCallback((e) => {
        setPopoverComponent(null);
        setPopoverStyles({ display: 'none' });
    }, []);

    return (
        <div className={rootClassName} {...override.root} ref={tabRef}>
            <RCTabs {...tabsProps}>
                {state.tabs.map(({ key, title, content, fixed, popoverContent, popoverWidth }) => {
                    let finalTitle = null;
                    if (popoverContent && state.activeKey !== key) {
                        finalTitle = (
                            <div
                                className={classes.tabWithPopover}
                                onMouseOver={(e) => onMouseOver(e, popoverContent, popoverWidth)}
                                onMouseOut={(e) => onMouseOut(e)}
                                onClick={onClickForPopover}
                            >
                                {title}
                                {!fixed && (
                                    <Icon
                                        name="close"
                                        size="small"
                                        onClick={(e) => handleClose(e, key)}
                                        {...override.close}
                                    />
                                )}
                            </div>
                        );
                    } else if (editable && (state.tabs.length > 1 || alwaysShowCloseTab)) {
                        finalTitle = (
                            <Fragment>
                                {title}
                                {!fixed && (
                                    <Icon
                                        name="close"
                                        size="small"
                                        onClick={(e) => handleClose(e, key)}
                                        {...override.close}
                                    />
                                )}
                            </Fragment>
                        );
                    } else finalTitle = title;

                    return (
                        <TabPane key={key} tab={finalTitle}>
                            {content}
                        </TabPane>
                    );
                })}
            </RCTabs>
            {postComponent && <div className={classes.postComponent}>{postComponent}</div>}
            <div className={classes.popover} style={popoverStyles}>
                {popoverComponent}
            </div>
        </div>
    );
}

Tabs.overrides = ['root', 'rc-tabs', 'close'];

Tabs.defaultProps = {
    position: 'top',
    tabs: [],
    editable: false,
    alwaysShowCloseTab: false,
};

Tabs.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
            content: PropTypes.node,
        }),
    ),
    activeKey: PropTypes.string,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    postComponent: PropTypes.node,
    editable: PropTypes.bool,
    alwaysShowCloseTab: PropTypes.bool,
};

export default memo(Tabs);
