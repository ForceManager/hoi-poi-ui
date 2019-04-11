import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import RCTooltip from 'rc-tooltip';

import { getOverrides } from 'utils/overrides';
import styles from './styles';

function Popover({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    content,
    placement,
    trigger,
    ...props
}) {
    // Overrides
    const override = getOverrides(overridesProp, Popover.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    const rootProps = {
        prefixCls: 'hoi-poi-popover',
        transitionName: 'hoi-poi-popover--fade',
        trigger,
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

Popover.overrides = ['rc-tooltip'];

Popover.defaultProps = {
    placement: 'top',
    trigger: ['click'],
};

Popover.propTypes = {
    content: PropTypes.any,
    trigger: PropTypes.arrayOf(PropTypes.string),
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

export default React.memo(withStyles(styles, { name: 'Tooltip' })(Popover));
