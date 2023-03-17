import React, { memo, forwardRef, useEffect, useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';

import styles from './styles';

const useStyles = createUseStyles(styles, 'Progress');

const Progress = forwardRef(
    (
        {
            animation,
            classes: classesProp,
            className: classNameProp,
            max,
            overrides: overridesProp,
            value,
            ...props
        },
        ref,
    ) => {
        const [percentage, setPercentage] = useState(0);
        const oldPercentage = useRef(0);
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, Progress.overrides);

        useEffect(() => {
            const newPercentage = (value / max) * 100;
            if (newPercentage !== percentage) {
                oldPercentage.current = percentage;
                setPercentage(newPercentage);
            }
        }, [value, max, percentage]);

        const containerProps = useMemo(() => {
            return {
                className: classNames(classes.root, classNameProp, {
                    [classes.low]: percentage < 25,
                    [classes.medium]: percentage >= 25,
                    [classes.high]: percentage >= 50,
                    [classes.higher]: percentage >= 75,
                    [classes.full]: percentage === 100,
                    [classes.animated]: !!animation,
                }),
                'aria-valuenow': value,
                'aria-valueMin': 0,
                'aria-valuemax': max,
                ref,
                role: 'progressbar',
                ...props,
                ...override.root,
            };
        }, [
            animation,
            classNameProp,
            classes.animated,
            classes.full,
            classes.high,
            classes.higher,
            classes.low,
            classes.medium,
            classes.root,
            max,
            override.root,
            percentage,
            props,
            ref,
            value,
        ]);

        const progressProps = useMemo(() => {
            const width = `${percentage}%`;
            const style = !!animation
                ? {
                      width,
                      '--progress-percentage-from': `${oldPercentage.current}%`,
                      '--progress-percentage-to': `${percentage}%`,
                      '--progress-duration': animation.animationDuration || '1s',
                      '--progress-delay': animation.animationDelay || 0,
                      '--progress-timing-function': animation.animationTimingFunction || 'ease',
                  }
                : { width };
            return {
                className: classes.progressBar,
                style,
            };
        }, [animation, percentage, classes.progressBar]);

        return (
            <div {...containerProps}>
                <span {...progressProps}></span>
            </div>
        );
    },
);

Progress.defaultProps = {
    value: 0,
    max: 100,
};

Progress.propTypes = {
    className: PropTypes.string,
    value: PropTypes.number.isRequired,
    max: PropTypes.number,
    overrides: PropTypes.object,
    animation: PropTypes.shape({
        /** Any valid time string that specifies the duration of the animation */
        animationDuration: PropTypes.string,
        /** Any valid time string that specifies the delay of the animation */
        animationDelay: PropTypes.string,
        /** Any valid string that specifies the speed curve of the animation */
        animationTimingFunction: PropTypes.string,
    }),
};

export default memo(Progress);
