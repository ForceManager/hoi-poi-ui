import React from 'react';
import PropTypes from 'prop-types';
import { getOverrides, useClasses } from '../../../utils/overrides';

import Chip from './../Chip';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'ChipGrou');

function ChipGroup({
    className,
    classes: classesProp,
    overrides: overridesProp,
    label,
    url,
    isShrinked,
    chips,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
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

export default React.memo(ChipGroup);
