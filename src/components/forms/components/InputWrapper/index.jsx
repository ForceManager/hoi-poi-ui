import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../../utils/overrides';

import Label from '../../Label';
import FieldBottom from '../FieldBottom';

import { createUseStyles } from '../../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'InputWrapper');

const InputWrapper = memo(
    ({
        children,
        classes: classesProp,
        overrides: overridesProp,
        className: classNameProp,
        label,
        labelMode,
        isFullWidth,
        placeholder,
        hint,
        error,
        info,
        isRequired,
        ...props
    }) => {
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, InputWrapper.overrides);

        const rootClassName = classnames(
            classes.root,
            {
                [classes[labelMode]]: labelMode,
                [classes.isFullWidth]: isFullWidth,
                [classes.error]: error,
            },
            classNameProp,
        );

        const fieldBottomClass = classnames({
            [classes.fieldBottom]: label && labelMode === 'horizontal',
        });

        return (
            <div className={rootClassName} {...override.root}>
                <div className={classes.inputWrapper}>
                    {label && (
                        <Label
                            className={classes.Label}
                            isRequired={isRequired}
                            hint={hint}
                            {...override.Label}
                        >
                            {label}
                        </Label>
                    )}
                    <div className={classes.formControl} {...override.formControl}>
                        {children}
                    </div>
                </div>
                <FieldBottom
                    className={fieldBottomClass}
                    info={info}
                    error={error}
                    overrides={overridesProp}
                    isFullWidth={isFullWidth}
                />
            </div>
        );
    },
);

InputWrapper.overrides = ['root', 'error', 'info', 'formControl', 'Label', 'inputWrapper'];

InputWrapper.defaultProps = {
    labelMode: 'vertical',
    overrides: {},
};

InputWrapper.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    isFullWidth: PropTypes.bool,
    /** Info popover */
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Error will be displayed below the component with style changes */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    isRequired: PropTypes.bool,
};

export default InputWrapper;
