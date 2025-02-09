import React from 'react';
import Icon from '../../../general/Icon';
import Avatar from '../../../general/Avatar';

export default ({ classes, option, override, getHighlighted }) => {
    let textClasses = [classes.optionLabelText];
    let subtitleClasses = [classes.optionLabelSubtitle];
    let iconClasses = [classes.optionLabelIcon];
    let customIconClasses = [classes.optionLabelCustomIcon];

    if (option.isDisabled) {
        textClasses.push(classes.disabledText);
        subtitleClasses.push(classes.disabledText);
        iconClasses.push(classes.disabledIcon);
        customIconClasses.push(classes.disabledIcon);
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
