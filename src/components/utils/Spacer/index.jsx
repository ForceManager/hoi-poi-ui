import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';

const Spacer = ({ x = 0, y = 0, overrides: overridesProp, className: classNameProp }) => {
    // Overrides
    const override = getOverrides(overridesProp, Spacer.overrides);

    // Classes
    const rootClassName = classnames(classNameProp);

    const style = {
        margin: `${y * 4}px ${x * 4}px`,
    };

    return <div className={rootClassName} style={style} {...override.root} />;
};

Spacer.overrides = ['root'];

Spacer.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
};

export default memo(Spacer);
