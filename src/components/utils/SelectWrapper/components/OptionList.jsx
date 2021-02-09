import React, { memo, useMemo } from 'react';
import Option from './Option';
import Text from '../../../typography/Text';

const OptionsList = memo(
    ({
        options,
        isMulti,
        classes,
        override,
        onChange,
        mappedValue,
        checkboxColor,
        checkBoxIsMonotone,
    }) => {
        const renderOptions = useMemo(() => {
            return options.map((current) => {
                if (current?.options?.length > 0) {
                    return (
                        <div
                            className={classes.optionListGroup}
                            {...(override.optionListGroup || {})}
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
                            {current.options.map((item) => {
                                return (
                                    <Option
                                        option={item}
                                        isMulti={isMulti}
                                        classes={classes}
                                        override={override}
                                        isSelected={mappedValue[item.value]}
                                        onChange={onChange}
                                        checkboxColor={checkboxColor}
                                        checkBoxIsMonotone={checkBoxIsMonotone}
                                    />
                                );
                            })}
                        </div>
                    );
                } else {
                    return (
                        <Option
                            option={current}
                            isMulti={isMulti}
                            classes={classes}
                            override={override}
                            isSelected={mappedValue[current.value]}
                            onChange={onChange}
                            checkboxColor={checkboxColor}
                            checkBoxIsMonotone={checkBoxIsMonotone}
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
        ]);

        return (
            <div className={classes.optionList} {...(override.optionList || {})}>
                {renderOptions}
            </div>
        );
    },
);

export default OptionsList;
