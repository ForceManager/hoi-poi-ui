import React, { memo, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import InputWrapper from '../components/InputWrapper';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'FieldGroup');

const FieldGroup = memo(
    ({
        children,
        classes: classesProp,
        overrides: overridesProp,
        className: classNameProp,
        onChange,
        value,
        error,
        inputs,
        inputProps,
        divider,
        dividerText,
        isFullWidth,
        ...props
    }) => {
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, FieldGroup.overrides);

        const rootClassName = classnames(
            classes.root,
            {
                [classes.error]: error,
                [classes.isFullWidth]: isFullWidth,
            },
            classNameProp,
        );

        const onChangeInput = useCallback(
            (newValue, index) => {
                let changedValue = [...value];
                changedValue[index] = newValue?.target?.value || newValue;
                onChange && onChange(changedValue, newValue, index);
            },
            [onChange, value],
        );

        const Inputs = useMemo(() => {
            return inputs.reduce((inputNodes, Input, index) => {
                let props = {};

                if (inputProps && Array.isArray(inputProps) && inputProps[index])
                    props = inputProps[index];
                else if (inputProps) props = inputProps;

                inputNodes.push(
                    <Input
                        key={index}
                        {...props}
                        isFullWidth={isFullWidth}
                        onChange={(v) => onChangeInput(v, index)}
                        value={value[index]}
                    />,
                );

                // Adding dividers
                if (inputs[index + 1] && (divider || dividerText)) {
                    if (divider)
                        inputNodes.push(
                            <div
                                key={`${index}-divider`}
                                className={classes.divider}
                                {...override.divider}
                            >
                                {divider}
                            </div>,
                        );
                    else if (dividerText)
                        inputNodes.push(
                            <div
                                key={`${index}-divider`}
                                className={classes.divider}
                                {...override.divider}
                            >
                                <span className={classes.dividerText} {...override.dividerText}>
                                    {dividerText}
                                </span>
                            </div>,
                        );
                }

                return inputNodes;
            }, []);
        }, [
            classes.divider,
            classes.dividerText,
            divider,
            dividerText,
            inputProps,
            inputs,
            isFullWidth,
            onChangeInput,
            override.divider,
            override.dividerText,
            value,
        ]);

        return (
            <InputWrapper
                {...props}
                error={error}
                isFullWidth={isFullWidth}
                className={rootClassName}
                overrides={overridesProp}
            >
                <div className={classes.rangeWrapper} {...override.rangeWrapper}>
                    {Inputs}
                </div>
            </InputWrapper>
        );
    },
);

FieldGroup.overrides = ['root', 'rangeWrapper', 'divider', 'dividerText'];

FieldGroup.defaultProps = {
    ...InputWrapper.defaultProps,
    onChange: () => {},
    value: [],
    overrides: {},
    inputs: [],
    dividerText: '',
};

FieldGroup.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    isFullWidth: PropTypes.bool,
    /** Info popover */
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.array,
    inputs: PropTypes.oneOfType([PropTypes.array, PropTypes.node]),
    /**An array for individual field customization or and object for apply it to all fields */
    inputProps: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    /** Component for overwrite whole divider */
    divider: PropTypes.any,
    /** Divider text for enable it */
    dividerText: PropTypes.string,
};

export default FieldGroup;
