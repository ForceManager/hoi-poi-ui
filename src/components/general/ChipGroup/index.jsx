import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { getOverrides } from '../../../utils/overrides';

import Chip from './../Chip';
import styles from './styles';

function ChipGroup({
    className,
    overrides: overridesProp,
    classes,
    label,
    url,
    isShrinked,
    chips,
    ...props
}) {
    const override = getOverrides(overridesProp, ChipGroup.overrides);

    return (
        <div className={classes.root} {...override.root}>
            {chips.map((chip, index) => (
                <Chip key={index} url={chip.url} isShrinked={true}>
                    {chip.label}
                </Chip>
            ))}
        </div>
    );
}

Chip.overrides = ['root'];

ChipGroup.defaultProps = {
    className: '',
    overrides: {},
    chips: [],
};

ChipGroup.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    chips: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            url: PropTypes.string,
        }),
    ),
};

export default React.memo(withStyles(styles, { name: 'ChipGroup', injectTheme: true })(ChipGroup));
