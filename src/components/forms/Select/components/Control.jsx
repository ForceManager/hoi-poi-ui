import React, { memo } from 'react';
import { components } from 'react-select';
import Icon from '../../../general/Icon';
import { useTheme } from '../../../../utils/styles';

const Control = ({ children, ...props }) => {
    const theme = useTheme();
    const { isFuzzy } = props.selectProps;

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
            {children}
        </components.Control>
    );
};

export default memo(Control);
