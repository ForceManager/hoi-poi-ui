import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';

import RCTabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/TabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

import styles from './styles';

function Tabs({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    tabs,
    onChange,
    activeKey,
    position,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Tabs.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    return (
        <div className={rootClassName} {...override.root}>
            <RCTabs
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
};

export default React.memo(withStyles(styles, { name: 'Tabs' })(Tabs));
