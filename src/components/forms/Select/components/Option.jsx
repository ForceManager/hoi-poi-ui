import React from 'react';
import { components } from 'react-select';
import Divider from '../../../general/Divider';
import classnames from 'classnames';

export default ({ className, override, isSelectAllFocused }) => {
    return React.memo(({ children, ...props }) => {
        const { isSelected } = props;
        const { optionFocusDisabledClassName } = props.selectProps.optionProps;

        return !props?.data?.divider ? (
            components.Option && (
                <components.Option
                    {...props}
                    className={classnames(className, {
                        [optionFocusDisabledClassName]: isSelectAllFocused && !isSelected,
                    })}
                    {...override.option}
                >
                    {children}
                </components.Option>
            )
        ) : (
            <Divider />
        );
    });
};
