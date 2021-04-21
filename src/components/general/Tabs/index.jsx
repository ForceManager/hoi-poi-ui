import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';

import RCTabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

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
    activeKey,
    position,
    postComponent,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Tabs.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.withPostComponent]: postComponent,
        },
        classNameProp,
    );

    return (
        <div className={rootClassName} {...override.root}>
            <RCTabs
                {...props}
                activeKey={activeKey}
                onChange={onChange}
                renderTabBar={() => <ScrollableInkTabBar />}
                renderTabContent={() => <TabContent />}
                tabBarPosition={position}
                prefixCls="hoi-poi-ui__tabs"
                {...override['rc-tabs']}
            >
                {tabs.map(({ key, title, content }) => (
                    <TabPane key={key} tab={title}>
                        {content}
                    </TabPane>
                ))}
            </RCTabs>
            {postComponent && <div className={classes.postComponent}>{postComponent}</div>}
        </div>
    );
}

Tabs.overrides = ['root', 'rc-tabs'];

Tabs.defaultProps = {
    position: 'top',
    tabs: [],
};

Tabs.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string.isRequired,
            title: PropTypes.string,
            content: PropTypes.node,
        }),
    ),
    activeKey: PropTypes.string,
    onChange: PropTypes.func,
    position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
    postComponent: PropTypes.node,
};

export default memo(Tabs);
