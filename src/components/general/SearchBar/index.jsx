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
    keepInputValue,
    forceBlurOnEnter,
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
                <div className={classes.typeDivider} {...override.typeDivider} />
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
                        small: classes.typeSmall,
                    }}
                    {...override.TypeDivider}
                />
            </>
        );
    }, [
        classes.typeDivider,
        classes.typeSelector,
        classes.typeSelectorInput,
        classes.typeSelectorWithValue,
        classes.typeSingleValue,
        classes.typeSmall,
        onChangeType,
        override.TypeDivider,
        override.typeDivider,
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
                keepInputValue={keepInputValue}
                forceBlurOnEnter={forceBlurOnEnter}
                {...props}
            />
        </div>
    );
}

SearchBar.overrides = ['root', 'typeDivider', 'TypeSelector'];

SearchBar.defaultProps = {
    className: '',
    overrides: {},
    keepInputValue: true,
    forceBlurOnEnter: true,
};

SearchBar.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChangeType: PropTypes.func,
    typeOptions: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.any,
            isDisabled: PropTypes.bool,
            src: PropTypes.string,
            icon: PropTypes.element,
            iconType: PropTypes.string,
            subLabel: PropTypes.string,
        }),
    ),
    type: PropTypes.any,
};

export default React.memo(SearchBar);
