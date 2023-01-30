import React, { forwardRef, memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Scrollbars } from 'react-custom-scrollbars';
import { getOverrides } from '../../../utils/overrides';

const ScrollBar = forwardRef(
    (
        {
            children,
            overrides: overridesProp,
            className: classNameProp,
            width,
            height,
            autoHide,
            autoHeight,
            autoHeightMin,
            autoHeightMax,
            ...props
        },
        ref,
    ) => {
        // Overrides
        const override = getOverrides(overridesProp, ScrollBar.overrides);

        // Classes
        const rootClassName = classnames(classNameProp);

        let style = {};
        if (width) style.width = width;
        if (height) style.height = height;

        const rootProps = {
            style,
            autoHide,
            autoHeight,
            autoHeightMin,
            autoHeightMax,
            ref,
            ...props,
            ...override.root,
        };

        return (
            <Scrollbars className={rootClassName} {...rootProps}>
                {children}
            </Scrollbars>
        );
    },
);

ScrollBar.overrides = ['root'];

ScrollBar.defaultProps = {
    overrides: {},
    autoHide: true,
};

ScrollBar.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    autoHide: PropTypes.bool,
    autoHeight: PropTypes.bool,
    autoHeightMin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    autoHeightMax: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default memo(ScrollBar);
