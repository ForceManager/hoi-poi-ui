import React from 'react';
import Checkbox from '../../../general/Checkbox';

export default ({ option, value, classes, override, getHighlighted }) => {
    const isSelected = value ? !!value.find((item) => item.value === option.value) : false;
    let bulletClasses = [classes.optionLabelBullet];
    let textClasses = [classes.optionLabelText];

    if (option.isDisabled) {
        bulletClasses.push(classes.optionLabelBulletDisabled);
    } else if (option.type) {
        if (option.type === 'primary') bulletClasses.push(classes.optionLabelBulletPrimary);
        if (option.type === 'danger') bulletClasses.push(classes.optionLabelBulletDanger);
        if (option.type === 'success') bulletClasses.push(classes.optionLabelBulletSuccess);
    }

    if (option.isDisabled) {
        textClasses.push(classes.disabledText);
    }

    return (
        <div className={classes.optionLabel} {...override.optionLabel}>
            <Checkbox
                className={classes.optionLabelCheckbox}
                checked={isSelected}
                color="orange"
                isDisabled={option.isDisabled || false}
                {...override.optionLabelCheckbox}
            />
            {option.type && (
                <div className={bulletClasses.join(' ')} {...override.optionLabelBullet} />
            )}
            <div className={textClasses.join(' ')} {...override.optionLabelText}>
                {(getHighlighted && getHighlighted(option)) || option.label}
            </div>
        </div>
    );
};
