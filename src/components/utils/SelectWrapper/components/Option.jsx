import React, { memo } from 'react';
import Checkbox from '../../../general/Checkbox';
import Text from '../../../typography/Text';

const Option = memo(
    ({
        option,
        isMulti,
        classes,
        override,
        isSelected,
        onChange,
        checkboxColor,
        checkBoxIsMonotone,
    }) => {
        let rootClasses = [classes.option];
        if (option.isDisabled) rootClasses.push(classes.optionDisabled);
        if (isSelected) rootClasses.push(classes.optionSelected);
        let bulletClasses = [classes.optionLabelBullet];

        if (option.isDisabled) {
            bulletClasses.push(classes.optionLabelBulletDisabled);
        } else if (option.type) {
            if (option.type === 'primary') bulletClasses.push(classes.optionLabelBulletPrimary);
            if (option.type === 'danger') bulletClasses.push(classes.optionLabelBulletDanger);
            if (option.type === 'success') bulletClasses.push(classes.optionLabelBulletSuccess);
        }

        return (
            <div
                className={rootClasses.join(' ')}
                {...(override.option || {})}
                onClick={!option.isDisabled && onChange(option)}
            >
                {isMulti && (
                    <Checkbox
                        className={classes.optionCheckbox}
                        override={override.optionCheckbox || {}}
                        color={checkboxColor}
                        isMonotone={checkBoxIsMonotone}
                        isDisabled={option.isDisabled}
                        checked={isSelected}
                    />
                )}
                {option.type && (
                    <div
                        className={bulletClasses.join(' ')}
                        {...(override.optionLabelBullet || {})}
                    />
                )}
                <div className={classes.optionLabel} {...(override.optionLabel || {})}>
                    <Text type="body" isTruncated>
                        {option.label}
                    </Text>
                </div>
            </div>
        );
    },
);

export default Option;
