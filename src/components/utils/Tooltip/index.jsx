import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import RCTooltip from 'rc-tooltip';

import { getOverrides } from '../../../utils/overrides';
import styles from './styles';

function Tooltip({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    content,
    placement,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Tooltip.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    const rootProps = {
        prefixCls: 'hoi-poi-tooltip',
        transitionName: 'hoi-poi-tooltip--fade',
        trigger: ['hover'],
        overlayClassName: rootClassName,
        overlay: content,
        placement,
    };

    return (
        <RCTooltip {...rootProps} {...override['rc-tooltip']}>
            {children}
        </RCTooltip>
    );
}

Tooltip.overrides = ['rc-tooltip'];

Tooltip.defaultProps = {
    placement: 'top',
};

Tooltip.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    content: PropTypes.any,
    placement: PropTypes.oneOf([
        'top',
        'topLeft',
        'topRight',
        'bottom',
        'bottomLeft',
        'bottomRight',
        'left',
        'leftTop',
        'leftBottom',
        'right',
        'rightTop',
        'rightBottom',
    ]),
};

export default React.memo(withStyles(styles, { name: 'Tooltip' })(Tooltip));
