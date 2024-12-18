import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../../general/Checkbox';
import Text from '../../../typography/Text';
import Icon from '../../../general/Icon';
import Avatar from '../../../general/Avatar';
import { useTheme } from '../../../../utils/styles';

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
        isTruncated = true,
    }) => {
        const theme = useTheme();
        let rootClasses = [classes.option, option.className];
        if (option.isDisabled) rootClasses.push(classes.optionDisabled);
        if (option.subLabel) rootClasses.push(classes.optionTwoLines);
        if (isSelected) rootClasses.push(classes.optionSelected);
        let bulletClasses = [classes.optionLabelBullet];
        let iconClasses = [classes.optionLabelIcon];
        let customIconClasses = [classes.optionLabelCustomIcon];

        if (option.isDisabled) {
            bulletClasses.push(classes.optionLabelBulletDisabled);
            iconClasses.push(classes.optionDisabledIcon);
            customIconClasses.push(classes.optionDisabledIcon);
        } else if (option.type) {
            if (option.type === 'primary') bulletClasses.push(classes.optionLabelBulletPrimary);
            if (option.type === 'danger') bulletClasses.push(classes.optionLabelBulletDanger);
            if (option.type === 'success') bulletClasses.push(classes.optionLabelBulletSuccess);
        }

        return (
            <div
                className={rootClasses.join(' ')}
                {...(override.option || {})}
                onClick={!option.isDisabled ? onChange(option) : undefined}
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
                {!isMulti && option.iconType && (
                    <Icon
                        className={iconClasses.join(' ')}
                        name={option.iconType}
                        color={option.iconColor || null}
                        size="medium"
                        {...override.optionLabelIcon}
                    />
                )}
                {!isMulti && option.icon && (
                    <div
                        className={customIconClasses.join(' ')}
                        {...override.optionLabelCustomIcon}
                    >
                        {option.icon}
                    </div>
                )}
                {!isMulti && option.src && (
                    <div className={classes.optionLabelAvatar} {...override.optionLabelAvatar}>
                        {option.isDisabled && (
                            <div
                                className={classes.optionDisabledAvatar}
                                {...override.optionDisabledAvatar}
                            />
                        )}
                        <Avatar
                            size="small"
                            src={option.src}
                            placeholder={option.placeholder || ''}
                            alt={option.alt}
                        />
                    </div>
                )}
                {!option.subLabel && !option.sideLabel && (
                    <div className={classes.optionLabel} {...(override.optionLabel || {})}>
                        <Text type="body" isTruncated={isTruncated}>
                            {option.label}
                        </Text>
                    </div>
                )}
                {!isMulti && option.subLabel && (
                    <div
                        className={classes.optionLabelBlock}
                        {...(override.optionLabelBlock || {})}
                    >
                        <div className={classes.optionLabel} {...(override.optionLabel || {})}>
                            <Text type="body" isTruncated={isTruncated}>
                                {option.label}
                            </Text>
                        </div>
                        <div
                            className={classes.optionSubLabel}
                            {...(override.optionSubLabel || {})}
                        >
                            <Text type="caption" isTruncated={isTruncated} color={T}>
                                {option.subLabel}
                            </Text>
                        </div>
                    </div>
                )}
                {!isMulti && option.sideLabel && (
                    <div
                        className={classes.optionSideLabelBlock}
                        {...(override.optionSideLabelBlock || {})}
                    >
                        <div className={classes.optionLabel} {...(override.optionLabel || {})}>
                            <Text isTruncated={isTruncated}>{option.label}</Text>
                        </div>
                        <div
                            className={classes.optionSideLabel}
                            {...(override.optionSideLabel || {})}
                        >
                            <Text
                                isTruncated={isTruncated}
                                color={theme.colors.utility.textDisabled}
                            >
                                {option.sideLabel}
                            </Text>
                        </div>
                    </div>
                )}
            </div>
        );
    },
);

Option.propTypes = {
    option: PropTypes.array,
    isMulti: PropTypes.bool,
    classes: PropTypes.object,
    override: PropTypes.object,
    isSelected: PropTypes.bool,
    onChange: PropTypes.func,
    checkboxColor: PropTypes.string,
    checkBoxIsMonotone: PropTypes.bool,
    isTruncated: PropTypes.string,
};

export default Option;
