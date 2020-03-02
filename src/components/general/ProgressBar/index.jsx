import React from 'react';
import PropTypes from 'prop-types';

import { useTheme } from '../../../utils/styles';

import { Circle, Line } from 'rc-progress';

function ProgressBar({ type, ...props }) {
    const theme = useTheme();
    const Component = type === 'circle' ? Circle : Line;
    return (
        <Component
            prefixCls="hoi-poi-ui"
            strokeColor={theme.colors.primary}
            trailColor={theme.colors.placeholders}
            {...props}
        />
    );
}

ProgressBar.defaultProps = {
    type: 'line',
    percent: 0,
    prefixCls: 'rc-progress',
    strokeLinecap: 'round',
    strokeWidth: 0.555555555555556,
};

const mixedType = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

ProgressBar.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf(['line', 'circle']),
    percent: PropTypes.oneOfType([mixedType, PropTypes.arrayOf(mixedType)]),
    strokeColor: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.object])),
        PropTypes.object,
    ]),
    strokeWidth: mixedType,
    style: PropTypes.object,
    trailColor: PropTypes.string,
    trailWidth: mixedType,
};

export default React.memo(ProgressBar);
