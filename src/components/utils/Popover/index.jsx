import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RCTooltip from 'rc-tooltip';

import { getOverrides, useClasses } from '../../../utils/overrides';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Popover');

function Popover({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    content,
    getRef,
    getContentRef,
    placement = 'top',
    trigger = ['click'],
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Popover.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    const rootProps = {
        ref: (ref) => getRef && getRef(ref),
        prefixCls: 'hoi-poi-popover',
        transitionName: 'hoi-poi-popover--fade',
        trigger,
        overlayClassName: rootClassName,
        overlay: getContentRef ? <div ref={(ref) => getContentRef(ref)}>{content}</div> : content,
        placement,
        ...props,
    };

    return (
        <RCTooltip {...rootProps} {...override.root}>
            {children}
        </RCTooltip>
    );
}

Popover.overrides = ['root'];

Popover.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
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
    getRef: PropTypes.func,
    getContentRef: PropTypes.func,
};

export default React.memo(Popover);
