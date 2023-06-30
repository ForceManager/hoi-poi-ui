import React, { memo, useCallback, useEffect, useMemo, useState, Fragment } from 'react';
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
    ...props
}) {
    const [state, setState] = useState({
        tabs: [],
        activeKey: null,
    });
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

    return (
        <div className={rootClassName} {...override.root}>
            <RCTabs {...tabsProps}>
                {state.tabs.map(({ key, title, content, fixed }) => {
                    const finalTitle =
                        editable && (state.tabs.length > 1 || alwaysShowCloseTab) ? (
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
                        ) : (
                            title
                        );
                    return (
                        <TabPane key={key} tab={finalTitle}>
                            {content}
                        </TabPane>
                    );
                })}
            </RCTabs>
            {postComponent && <div className={classes.postComponent}>{postComponent}</div>}
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
