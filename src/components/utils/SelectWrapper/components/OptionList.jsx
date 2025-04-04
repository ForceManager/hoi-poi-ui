import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import Text from '../../../typography/Text';
import { useTheme } from '../../../../utils/styles';

const OptionsList = memo(
    ({
        isLoading,
        options,
        isMulti,
        classes,
        override,
        onChange,
        mappedValue,
        checkboxColor,
        checkBoxIsMonotone,
        loadingMessage,
        noOptionsPlaceholder,
        truncateOptions,
    }) => {
        const theme = useTheme();

        const renderOptions = useMemo(() => {
            if (!options || options.length === 0) {
                return (
                    <div className={classes.noOptions} {...(override.noOptions || {})}>
                        <Text type="body" color={theme.colors.utility.textSecondary}>
                            {noOptionsPlaceholder || 'No options'}
                        </Text>
                    </div>
                );
            }

            return options.map((current, index) => {
                if (current?.options?.length > 0) {
                    return (
                        <div
                            className={classes.optionListGroup}
                            {...(override.optionListGroup || {})}
                            key={index}
                        >
                            {current.label && (
                                <div
                                    className={classes.optionListGroupLabel}
                                    {...(override.optionListGroupLabel || {})}
                                >
                                    <Text type="subtitle" isTruncated>
                                        {current.label}
                                    </Text>
                                </div>
                            )}
                            {current.options.map((item, itemIndex) => {
                                return (
                                    <Option
                                        key={itemIndex}
                                        option={item}
                                        isMulti={isMulti}
                                        classes={classes}
                                        override={override}
                                        isSelected={mappedValue[item.value]}
                                        onChange={onChange}
                                        checkboxColor={checkboxColor}
                                        checkBoxIsMonotone={checkBoxIsMonotone}
                                        isTruncated={truncateOptions}
                                    />
                                );
                            })}
                        </div>
                    );
                } else {
                    return (
                        <Option
                            key={index}
                            option={current}
                            isMulti={isMulti}
                            classes={classes}
                            override={override}
                            isSelected={mappedValue[current.value]}
                            onChange={onChange}
                            checkboxColor={checkboxColor}
                            checkBoxIsMonotone={checkBoxIsMonotone}
                            isTruncated={truncateOptions}
                        />
                    );
                }
            });
        }, [
            options,
            isMulti,
            classes,
            override,
            mappedValue,
            onChange,
            checkboxColor,
            checkBoxIsMonotone,
            noOptionsPlaceholder,
            truncateOptions,
            theme,
        ]);

        return (
            <div className={classes.optionList} {...(override.optionList || {})}>
                {isLoading && (
                    <div className={classes.loaderContainer} {...(override.loaderContainer || {})}>
                        <Text type="body" color={theme.colors.utility.textSecondary}>
                            {loadingMessage || 'Loading...'}
                        </Text>
                    </div>
                )}
                {!isLoading && renderOptions}
            </div>
        );
    },
);

OptionsList.propTypes = {
    isLoading: PropTypes.bool,
    options: PropTypes.array,
    isMulti: PropTypes.bool,
    classes: PropTypes.object,
    override: PropTypes.object,
    onChange: PropTypes.func,
    mappedValue: PropTypes.object,
    checkboxColor: PropTypes.string,
    checkBoxIsMonotone: PropTypes.bool,
    loadingMessage: PropTypes.string,
    noOptionsPlaceholder: PropTypes.string,
    truncateOptions: PropTypes.bool,
};

export default OptionsList;
