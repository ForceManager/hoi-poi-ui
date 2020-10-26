import React from 'react';
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
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, Stepper.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);
    const stepClassNames = (step, i) => {
        return classnames({
            [classes.completed]: step.isCompleted,
            [classes.active]: i === currentStep,
        });
    };

    const isHighlighted = (step, i) => {
        return step.isCompleted || i === currentStep;
    };

    function getIcon(i) {
        let content = i + 1;
        if (steps[i] && steps[i].isCompleted) {
            content = <Icon name="tick" size="small" color="white" />;
        }

        return (
            <span onClick={isHighlighted(steps[i], i) ? () => onClick(i) : undefined}>
                <Text className={classes.icon}>{content}</Text>
            </span>
        );
    }

    return (
        <div className={rootClassName} {...override.root}>
            <Steps current={currentStep}>
                {steps.map((step, i) => (
                    <Steps.Step
                        className={stepClassNames(step, i)}
                        key={i}
                        icon={getIcon(i)}
                        title={
                            <span onClick={isHighlighted(step, i) ? () => onClick(i) : undefined}>
                                <Text bold={isHighlighted(step, i)}>{step.title}</Text>
                            </span>
                        }
                    />
                ))}
            </Steps>
        </div>
    );
}

Stepper.overrides = ['root', 'rc-steps'];

Stepper.defaultProps = {
    steps: [],
    currentStep: 1,
};

Stepper.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    steps: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
        }),
    ),
    currentStep: PropTypes.number,
    onClick: PropTypes.func,
};

export default React.memo(Stepper);
