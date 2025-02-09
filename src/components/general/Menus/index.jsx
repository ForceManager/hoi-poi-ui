import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';

import RCMenu, { SubMenu, MenuItem } from 'rc-menu';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Menus');

const SIZES = {
    small: 140,
    medium: 220,
    large: 300,
};

function Menus({
    title,
    icon,
    items,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    classNameMenu,
    triggerAction = 'click',
    size = 'large',
}) {
    const popupSize = SIZES[size];
    const classes = useClasses(useStyles, classesProp, { popupSize });
    // Overrides
    const override = getOverrides(overridesProp, Menus.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);
    const menuClassName = classnames(classes.subMenu, classNameMenu);

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
        popupClassName: menuClassName,
        ...override['rc-menu-sub-menu'],
    };

    return (
        <div className={rootClassName} {...override.root}>
            <RCMenu {...menuProps}>
                <SubMenu key="rc-menu-sub-menu" {...subMenuProps}>
                    {items &&
                        items.map((item, id) => (
                            <Fragment>
                                {!item.divider && (
                                    <MenuItem
                                        key={id}
                                        itemIcon={item.icon}
                                        onClick={item.onClick}
                                        className={
                                            item.infoItem
                                                ? classnames(classes.menuItem, item.className)
                                                : classnames(
                                                      classes.menuItem,
                                                      item.className,
                                                      classes.clickable,
                                                  )
                                        }
                                    >
                                        <div className={classes.menuItemContent}>
                                            {item.title}
                                            {item.description}
                                        </div>
                                    </MenuItem>
                                )}
                                {item.divider && <div className={classes.divider} />}
                            </Fragment>
                        ))}
                </SubMenu>
            </RCMenu>
        </div>
    );
}

Menus.overrides = ['root', 'rc-menu', 'rc-menu-sub-menu'];

Menus.propTypes = {
    title: PropTypes.any,
    icon: PropTypes.object,
    className: PropTypes.string,
    overrides: PropTypes.object,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.any,
            icon: PropTypes.object,
            infoItem: PropTypes.bool /** In order to know if an item is clickable or not */,
            onClick: PropTypes.func,
        }),
    ),
    triggerAction: PropTypes.oneOf(['hover', 'click']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default React.memo(Menus);
