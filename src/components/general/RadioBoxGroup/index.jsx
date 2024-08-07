import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';

import RadioBoxControl from './RadioBoxControl';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'RadioBoxGroup');

const RadioBoxGroup = ({
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    onBlur,
    onChange = () => {},
    value = null,
    options = [],
    isReadOnly = false,
    ...props
}) => {
    const classes = useClasses(useStyles, classesProp);
    // Overrides
    const override = getOverrides(overridesProp, RadioBoxGroup.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
        },
        classNameProp,
    );

    return (
        <div className={rootClassName} {...override.root}>
            {options.map((option) => (
                <RadioBoxControl
                    key={option.value}
                    overrides={overridesProp}
                    isReadOnly={isReadOnly}
                    option={option}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    {...props}
                />
            ))}
        </div>
    );
};

RadioBoxGroup.overrides = ['root', 'RadioBox', 'radioBoxControl'];

RadioBoxGroup.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string,
            value: PropTypes.string,
        }),
    ),
    value: PropTypes.string,
    isReadOnly: PropTypes.bool,
};

export default memo(RadioBoxGroup);
