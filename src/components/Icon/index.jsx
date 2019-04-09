import React from 'react';
import PropTypes from 'prop-types';
import withStyles, { withTheme } from 'react-jss';
import classnames from 'classnames';

import { getOverrides } from '../../utils/overrides';
import styles from './styles';

import Chevron from './icons/Chevron';
const ICONS = {
    chevron: Chevron,
};

function Icon({
    name,
    color,
    theme,
    size,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    ...props
}) {
    let SelectedIcon = ICONS[name];
    if (!SelectedIcon) return null;

    // Overrides
    const override = getOverrides(overridesProp, Icon.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classes[size], classNameProp);

    return (
        <span className={rootClassName} {...override.wrapper}>
            <SelectedIcon color={color || theme.colors.icons} {...override.icon} />
        </span>
    );
}

Icon.overrides = ['wrapper', 'icon'];

Icon.defaultProps = {
    size: 'medium',
};

Icon.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large', 'big']),
    name: PropTypes.string,
    color: PropTypes.string,
};

export default React.memo(withStyles(styles, { name: 'Icon' })(withTheme(Icon)));
