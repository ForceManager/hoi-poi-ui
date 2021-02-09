import React, { memo } from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';
import { useTheme } from '../../../../utils/styles';

const Control = ({ children, ...props }) => {
    const theme = useTheme();
    const { isFuzzy, beforeControl, afterControl, onMouseDown } = props.selectProps;

    props.innerProps.onMouseDown = onMouseDown;

    return (
        <components.Control {...props}>
            {isFuzzy && (
                <Icon
                    className="hoi-poi-select__search-indicator"
                    name="searchRaw"
                    size="raw"
                    color={theme.colors.neutral600}
                />
            )}
            {beforeControl && beforeControl}
            {children}
            {afterControl && afterControl}
        </components.Control>
    );
};

export default memo(Control);
