import React, { memo, useMemo } from 'react';
import Option from './Option';
import Text from '../../../typography/Text';
import Loader from '../../../general/Loader';

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
    }) => {
        const renderOptions = useMemo(() => {
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
                            key={index}
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
                {isLoading && (
                    <div className={classes.loaderContainer} {...(override.loaderContainer || {})}>
                        <Loader
                            className={classes.Loader}
                            override={override.Loader || {}}
                            size="tiny"
                        />
                    </div>
                )}
                {!isLoading && renderOptions}
            </div>
        );
    },
);

export default OptionsList;
