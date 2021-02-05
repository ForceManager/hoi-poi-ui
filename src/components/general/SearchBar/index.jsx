import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';

import Select from '../../forms/Select';

import styles from './styles';
const useStyles = createUseStyles(styles, 'SearchBar');

function SearchBar({
    classes: classesProp,
    children,
    overrides: overridesProp,
    className: classNameProp,
    loadOptions,
    placeholder,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);

    // Overrides
    const override = getOverrides(overridesProp, SearchBar.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    const rootProps = {
        ...props,
        className: rootClassName,
    };

    return (
        <div {...rootProps} {...override.root}>
            <Select
                placeholder={placeholder}
                loadOptions={loadOptions}
                isFuzzy
                {...override.Select}
            />
        </div>
    );
}

SearchBar.overrides = ['root', 'Select'];

SearchBar.defaultProps = {
    className: '',
    overrides: {},
};

SearchBar.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    placeholder: PropTypes.string,
};

export default React.memo(SearchBar);
