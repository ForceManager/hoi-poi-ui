import React, { memo, forwardRef, useCallback, useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';

import styles from './styles';

const useStyles = createUseStyles(styles, 'Progress');

const Progress = forwardRef(
    (
        {
            classes: classesProp,
            className: classNameProp,
            value,
            max,
            overrides: overridesProp,
            ...props
        },
        ref,
    ) => {
        const [width, setWidth] = useState(0);
        const prevValueRef = useRef();

        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, Progress.overrides);

        useEffect(() => {
            prevValueRef.current = value;
        });

        const handleAnimate = useCallback(() => {
            if (width < value) {
                setWidth((prevWidth) => prevWidth + 1);
                requestAnimationFrame(handleAnimate);
            }
        }, [value, width]);

        useEffect(() => {
            const prevValue = prevValueRef.current;

            if (prevValue < value) {
                handleAnimate();
            } else {
                setWidth(value);
            }
        }, [handleAnimate, value, width]);

        const progressProps = useMemo(() => {
            const percentage = (width / max) * 100;

            console.log(percentage);

            return {
                className: classNames(classes.root, classNameProp, {
                    [classes.low]: percentage < 25,
                    [classes.medium]: percentage >= 25,
                    [classes.high]: percentage >= 50,
                    [classes.higher]: percentage >= 75,
                    [classes.full]: percentage === 100,
                }),
                value: width,
                max,
                ref,
                ...props,
                ...override.root,
            };
        }, [
            classNameProp,
            classes.full,
            classes.high,
            classes.higher,
            classes.low,
            classes.medium,
            classes.root,
            max,
            override.root,
            props,
            ref,
            width,
        ]);

        return <progress {...progressProps} />;
    },
);

Progress.defaultProps = {
    value: 0,
    max: 100,
};

Progress.propTypes = {
    className: PropTypes.string,
    value: PropTypes.number,
    max: PropTypes.number,
    overrides: PropTypes.object,
};

export default memo(Progress);
