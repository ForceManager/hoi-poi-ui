import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RCTooltip from 'rc-tooltip';

import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Tooltip');

function Tooltip({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    content,
    placement,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Tooltip.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    const rootProps = {
        ...props,
        prefixCls: 'hoi-poi-tooltip',
        transitionName: 'hoi-poi-tooltip--fade',
        trigger: ['hover'],
        overlayClassName: rootClassName,
        overlay: content,
        placement,
    };

    return (
        <RCTooltip {...rootProps} {...override.root}>
            {children}
        </RCTooltip>
    );
}

Tooltip.overrides = ['root'];

Tooltip.defaultProps = {
    overrides: {},
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

export default React.memo(Tooltip);
