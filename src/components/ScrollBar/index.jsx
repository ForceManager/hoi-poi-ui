import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import { getOverrides } from '../../utils/overrides';
import styles from './styles';

function ScrollBar({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    width,
    height,
    autoHide,
    autoHeight,
    autoHeightMin,
    autoHeightMax,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, ScrollBar.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    let style = {};
    if (width) style.width = width;
    if (height) style.height = height;

    const rootProps = {
        style,
        autoHide,
        autoHeight,
        autoHeightMin,
        autoHeightMax,
        ...override['react-custom-scrollbars'],
    };

    return (
        <Scrollbars className={rootClassName} {...rootProps}>
            {children}
        </Scrollbars>
    );
}

ScrollBar.defaultProps = {
    autoHide: true,
};

ScrollBar.propTypes = {
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    autoHide: PropTypes.bool,
    autoHeight: PropTypes.bool,
    autoHeightMin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    autoHeightMax: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default React.memo(withStyles(styles, { name: 'ScrollBar' })(ScrollBar));
