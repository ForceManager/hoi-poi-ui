import React, { memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';

import Steps from 'rc-steps';
import Text from '../../typography/Text';
import Icon from '../../general/Icon';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Stepper');

function Stepper({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    currentStep,
    steps,
    onClick,
    withoutLabels = false,
    labelPlacement = 'horizontal',
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Stepper.overrides);

    // Classes
    const rootClassName = useMemo(
        () => classnames(classes.root, classNameProp, { [classes.withoutLabels]: withoutLabels }),
        [classNameProp, classes.root, classes.withoutLabels, withoutLabels],
    );
    const stepClassNames = useCallback(
        (step, i) =>
            classnames({
                [classes.completed]: step.isCompleted,
                [classes.active]: i === currentStep,
            }),
        [classes.active, classes.completed, currentStep],
    );

    const isHighlighted = useCallback(
        (step, i) => step.isCompleted || i === currentStep,
        [currentStep],
    );

    const getIcon = useCallback(
        (i) => {
            let content = i + 1;
            if (steps[i] && steps[i].isCompleted) {
                content = <Icon name="check" size="medium" color="white" />;
            }

            const highlighted = isHighlighted(steps[i], i);

            return (
                <span onClick={highlighted ? () => onClick(i) : undefined}>
                    <Text type="body1" className={classes.icon}>
                        {content}
                    </Text>
                </span>
            );
        },
        [classes.icon, isHighlighted, onClick, steps],
    );

    return (
        <div className={rootClassName} {...override.root}>
            <Steps current={currentStep} labelPlacement={labelPlacement} {...props}>
                {steps.map((step, i) => {
                    const highlighted = isHighlighted(step, i);
                    const stepProps = {
                        className: stepClassNames(step, i),
                        key: `step-${i}`,
                        icon: getIcon(i),
                        onClick: highlighted ? () => onClick(i) : undefined,
                        title: withoutLabels ? undefined : (
                            <Text bold={highlighted}>{step.title}</Text>
                        ),
                    };
                    return <Steps.Step {...stepProps} />;
                })}
            </Steps>
        </div>
    );
}

Stepper.overrides = ['root', 'rc-steps'];

Stepper.defaultProps = {
    steps: [],
    currentStep: 1,
    labelPlacement: 'horizontal',
    withoutLabels: false,
};

Stepper.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            isCompleted: PropTypes.bool,
        }),
    ),
    currentStep: PropTypes.number,
    onClick: PropTypes.func,
    labelPlacement: PropTypes.string,
    withoutLabels: PropTypes.bool,
};

export default memo(Stepper);
