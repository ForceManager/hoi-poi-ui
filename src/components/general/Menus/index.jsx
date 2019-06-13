import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';

import RCMenu, { SubMenu, MenuItem } from 'rc-menu';

import styles from './styles';

function Menus({
    title,
    icon,
    items,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    triggerAction,
}) {
    // Overrides
    const override = getOverrides(overridesProp, Menus.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    const menuProps = {
        mode: 'horizontal',
        className: classes.menu,
        triggerSubMenuAction: triggerAction,
        ...override['rc-menu'],
    };

    const subMenuProps = {
        title: (
            <Fragment>
                {icon && icon}
                {title && title}
            </Fragment>
        ),
        popupClassName: classes.subMenu,
    };

    const menuItemProps = {
        className: classes.menuItem,
    };

    return (
        <div className={rootClassName} {...override.root}>
            <RCMenu {...menuProps}>
                <SubMenu {...subMenuProps}>
                    {items &&
                        items.map((item, id) => (
                            <MenuItem
                                key={id}
                                itemIcon={item.icon}
                                onClick={item.onClick}
                                {...menuItemProps}
                            >
                                {item.title}
                            </MenuItem>
                        ))}
                </SubMenu>
            </RCMenu>
        </div>
    );
}

Menus.overrides = ['root', 'rc-menu'];

Menus.defaultProps = {
    triggerAction: 'click',
};

Menus.propTypes = {
    title: PropTypes.any,
    icon: PropTypes.object,
    className: PropTypes.string,
    overrides: PropTypes.object,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.any,
            icon: PropTypes.object,
            onClick: PropTypes.func,
        }),
    ),
    triggerAction: PropTypes.oneOf(['hover', 'click']),
};

export default React.memo(withStyles(styles, { name: 'Menus' })(Menus));
