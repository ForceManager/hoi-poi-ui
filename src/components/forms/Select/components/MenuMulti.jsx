import React from 'react';
import Checkbox from '../../../general/Checkbox';
import Icon from '../../../general/Icon';

export default ({ option, value, classes, override, getHighlighted }) => {
    const isSelected = value ? !!value?.find((item) => item.value === option.value) : false;
    let bulletClasses = [classes.optionLabelBullet];
    let textClasses = [classes.optionLabelText];
    let iconClasses = [classes.optionLabelIcon];
    let customIconClasses = [classes.optionLabelCustomIcon];

    let isDisabled = option.isDisabled;
    if (override.optionLabel && override.optionLabel.getIsDisabled)
        isDisabled = override.optionLabel.getIsDisabled(option, isDisabled);

    if (isDisabled) {
        bulletClasses.push(classes.optionLabelBulletDisabled);
    } else if (option.type) {
        if (option.type === 'primary') bulletClasses.push(classes.optionLabelBulletPrimary);
        if (option.type === 'danger') bulletClasses.push(classes.optionLabelBulletDanger);
        if (option.type === 'success') bulletClasses.push(classes.optionLabelBulletSuccess);
    }

    if (isDisabled) {
        textClasses.push(classes.disabledText);
        if (option.iconType) iconClasses.push(classes.disabledIcon);
        if (option.customIcon) customIconClasses.push(classes.disabledIcon);
    }

    return (
        <div className={classes.optionLabel} {...override.optionLabel}>
            <Checkbox
                className={classes.optionLabelCheckbox}
                checked={isSelected}
                color="orange"
                isDisabled={isDisabled || false}
                {...override.optionLabelCheckbox}
            />
            {option.type && (
                <div className={bulletClasses.join(' ')} {...override.optionLabelBullet} />
            )}
            {option.iconType && (
                <Icon
                    className={iconClasses.join(' ')}
                    name={option.iconType}
                    color={option.iconColor || null}
                    size="medium"
                    {...override.optionLabelIcon}
                />
            )}
            {option.icon && (
                <div className={customIconClasses.join(' ')} {...override.optionLabelCustomIcon}>
                    {option.icon}
                </div>
            )}
            <div className={textClasses.join(' ')} {...override.optionLabelText}>
                {(getHighlighted && getHighlighted(option)) || option.label}
            </div>
        </div>
    );
};
