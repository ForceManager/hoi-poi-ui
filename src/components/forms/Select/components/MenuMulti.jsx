import React from 'react';
import Checkbox from '../../../general/Checkbox';
import Icon from '../../../general/Icon';
import Avatar from '../../../general/Avatar';

export default ({ option, value, classes, override, getHighlighted }) => {
    const isSelected = value ? !!value?.find((item) => item.value === option.value) : false;
    let bulletClasses = [classes.optionLabelBullet];
    let textClasses = [classes.optionLabelText];
    let iconClasses = [classes.optionLabelIcon];
    let customIconClasses = [classes.optionLabelCustomIcon];
    let subtitleClasses = [classes.optionLabelSubtitle];

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
        subtitleClasses.push(classes.disabledText);
        if (option.iconType) iconClasses.push(classes.disabledIcon);
        if (option.customIcon) customIconClasses.push(classes.disabledIcon);
    }

    const renderSubLabels = () => {
        if (!option.subLabel) return null;
        const finalSublabels = Array.isArray(option.subLabel) ? option.subLabel : [option.subLabel];
        return (
            <div className={classes.optionLabelBlock} {...override.optionLabelBlock}>
                <div className={textClasses.join(' ')} {...override.optionLabelText}>
                    {(getHighlighted && getHighlighted(option)) || option.label}
                </div>
                {finalSublabels.map((subLabel, index) => (
                    <div
                        key={`subLabel-${index}`}
                        className={subtitleClasses.join(' ')}
                        {...override.optionLabelSubLabel}
                    >
                        {subLabel}
                    </div>
                ))}
            </div>
        );
    };

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
            {option.src && (
                <div className={classes.optionLabelAvatar} {...override.optionLabelAvatar}>
                    {option.isDisabled && (
                        <div className={classes.disabledAvatar} {...override.disabledAvatar} />
                    )}
                    <Avatar
                        size={option.subLabel ? 'big' : 'small'}
                        src={option.src}
                        placeholder={option.placeholder || ''}
                        alt={option.alt}
                    />
                </div>
            )}
            {!option.subLabel && (
                <div className={textClasses.join(' ')} {...override.optionLabelText}>
                    {(getHighlighted && getHighlighted(option)) || option.label}
                </div>
            )}
            {renderSubLabels()}
        </div>
    );
};
