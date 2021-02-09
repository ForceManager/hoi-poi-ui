import React, { useMemo } from 'react';
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
    onChangeType,
    typeOptions,
    type,
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

    const TypeSelector = useMemo(() => {
        if (!onChangeType) return null;
        const typeClassname = classnames(classes.typeSelector, {
            [classes.typeSelectorWithValue]: !!type,
        });
        return (
            <>
                <Select
                    className={typeClassname}
                    onChange={onChangeType}
                    options={typeOptions}
                    value={type}
                    onlyText
                    size={props.size}
                    dropdownWidth="250px"
                    isSearchable={false}
                    classes={{
                        inputComponents: classes.typeSelectorInput,
                        singleValue: classes.typeSingleValue,
                    }}
                />
            </>
        );
    }, [
        classes.typeSelector,
        classes.typeSelectorInput,
        classes.typeSelectorWithValue,
        classes.typeSingleValue,
        onChangeType,
        props.size,
        type,
        typeOptions,
    ]);

    return (
        <div {...rootProps} {...override.root}>
            <Select
                loadOptions={loadOptions}
                isFuzzy
                afterControl={TypeSelector}
                isFullWidth
                {...props}
            />
        </div>
    );
}

SearchBar.overrides = ['root'];

SearchBar.defaultProps = {
    className: '',
    overrides: {},
};

SearchBar.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
};

export default React.memo(SearchBar);
