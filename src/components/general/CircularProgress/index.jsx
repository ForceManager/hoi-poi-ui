import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';

import {
    CircularProgressbarWithChildren,
    CircularProgressbar,
    buildStyles,
} from 'react-circular-progressbar';

import { getOverrides } from '../../../utils/overrides';

import styles from './styles';

const getColors = (type, colors) =>
    ({
        info: {
            pathColor: colors.secondary,
        },
        success: {
            pathColor: colors.green,
        },
        warning: {
            pathColor: colors.yellow,
        },
        danger: {
            pathColor: colors.red,
        },
    }[type]);

const getSizes = (size, colors) =>
    ({
        small: {
            textSize: 30,
            textColor: colors.greySoft,
        },
        medium: {
            textSize: 25,
            textColor: colors.black,
        },
        large: {
            textSize: 25,
            textColor: colors.black,
        },
    }[size]);

function CircularProgress({
    children,
    className: classNameProp,
    overrides: overridesProp,
    classes,
    theme,
    color,
    value,
    text,
    styles,
    type = 'info',
    size = 'medium',
    minValue = 0,
    maxValue = 100,
    ...props
}) {
    const rootClassName = classnames(
        classes.root,
        {
            [classes[size]]: size,
        },
        classNameProp,
    );

    const override = getOverrides(overridesProp, CircularProgress.overrides);

    const rootProps = {
        ...props,
        className: rootClassName,
    };

    const circularProps = useMemo(
        () => ({
            value,
            minValue,
            maxValue,
            text,
            styles: buildStyles({
                ...getColors(type, theme.colors),
                ...getSizes(size, theme.colors),
                trailColor: theme.colors.greyLight,
                strokeLinecap: 'round',
                backgroundColor: 'none',
                ...styles,
            }),
            strokeWidth: 5,
            ...override.ReactCircularProgressBar,
        }),
        [
            maxValue,
            minValue,
            override.ReactCircularProgressBar,
            size,
            styles,
            text,
            theme.colors,
            type,
            value,
        ],
    );

    return (
        <div {...rootProps} {...override.root}>
            {children && (
                <CircularProgressbarWithChildren {...circularProps}>
                    {children}
                </CircularProgressbarWithChildren>
            )}
            {!children && <CircularProgressbar {...circularProps} />}
        </div>
    );
}

CircularProgress.overrides = ['root', 'CircularProgressBar'];

CircularProgress.propTypes = {
    className: PropTypes.string,
    styles: PropTypes.object,
    children: PropTypes.node,
    value: PropTypes.number,
    text: PropTypes.string,
    maxValue: PropTypes.number,
    color: PropTypes.string,
    type: PropTypes.oneOf(['success', 'warning', 'danger', 'info']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default React.memo(
    withStyles(styles, { name: 'CircularProgress', injectTheme: true })(CircularProgress),
);
