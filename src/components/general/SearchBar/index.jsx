import React, { useMemo, useCallback, useRef } from 'react';
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
    inputValue,
    keepInputValueOnBlur,
    forceBlurOnEnter,
    allowMultipleTypes,
    selectedTypesLiteral,
    selectedTypesPlaceholder,
    onBlurSearch,
    useAsSimpleSearch,
    hideDropdownIndicator,
    isMulti,
    customOption,
    customTypeOption,
    hideSelectedOptions,
    shouldSetValueOnChange,
    focusDefaultOption,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    const actionsControlRef = useRef([]);

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
            [classes.typeSelectorWithValue]: !!type && !allowMultipleTypes,
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
                    isMulti={allowMultipleTypes}
                    customOption={customTypeOption}
                    showNumSelected={allowMultipleTypes}
                    numSelectedLiteral={selectedTypesLiteral}
                    placeholder={selectedTypesPlaceholder}
                    autoComplete="nope" // must be an invalid value
                    role="representation"
                    classes={{
                        inputComponents: classes.typeSelectorInput,
                        singleValue: classes.typeSingleValue,
                        small: classes.typeSmall,
                    }}
                    {...override.TypeSelector}
                />
            </>
        );
    }, [
        onChangeType,
        classes.typeSelector,
        classes.typeSelectorWithValue,
        classes.typeDivider,
        classes.typeSelectorInput,
        classes.typeSingleValue,
        classes.typeSmall,
        type,
        allowMultipleTypes,
        override.typeDivider,
        override.TypeSelector,
        typeOptions,
        props.size,
        customTypeOption,
        selectedTypesLiteral,
        selectedTypesPlaceholder,
    ]);

    // handleOnBlurSearch can be triggered in two differen scenarios
    // those scenarios are on blur through onInputCange and on press enter via onKeyDown
    const handleOnBlurSearch = useCallback(
        (value, action) => {
            if (action.action && typeof action.action === 'string') {
                actionsControlRef.current.push(action.action);
                setTimeout(() => {
                    if (action.action === 'input-blur') {
                        if (!actionsControlRef.current.includes('set-value')) {
                            onBlurSearch && onBlurSearch(value);
                        }
                        actionsControlRef.current = [];
                    }
                });
            }
        },
        [onBlurSearch],
    );

    return (
        <div {...rootProps} {...override.root}>
            <Select
                loadOptions={loadOptions}
                isFuzzy
                afterControl={TypeSelector}
                isFullWidth
                keepInputValueOnBlur={keepInputValueOnBlur || useAsSimpleSearch}
                forceBlurOnEnter={forceBlurOnEnter}
                useAsSimpleSearch={useAsSimpleSearch}
                hideDropdownIndicator={hideDropdownIndicator}
                onBlurSearch={handleOnBlurSearch}
                isMulti={isMulti}
                customOption={customOption}
                inputValue={inputValue}
                hideSelectedOptions={hideSelectedOptions}
                shouldSetValueOnChange={isMulti ? true : shouldSetValueOnChange}
                focusDefaultOption={focusDefaultOption}
                withoutFilter
                autoComplete="nope" // must be an invalid value
                role="representation"
                {...override.Select}
                {...props}
            />
        </div>
    );
}

SearchBar.overrides = ['root', 'typeDivider', 'TypeSelector', 'Select'];

SearchBar.defaultProps = {
    className: '',
    overrides: {},
    keepInputValueOnBlur: true,
    forceBlurOnEnter: true,
    allowMultipleTypes: false,
    selectedTypesLiteral: '%@ Selected',
    selectedTypesPlaceholder: 'Selected...',
    hideSelectedOptions: false,
    shouldSetValueOnChange: false,
    focusDefaultOption: true,
};

SearchBar.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChangeType: PropTypes.func,
    /** Allow multiple types selection */
    allowMultipleTypes: PropTypes.bool,
    selectedTypesLiteral: PropTypes.string,
    selectedTypesPlaceholder: PropTypes.string,
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
    inputValue: PropTypes.string,
    keepInputValueOnBlur: PropTypes.bool,
    forceBlurOnEnter: PropTypes.bool,
    onBlurSearch: PropTypes.func,
    /** It allows using the Select as a simple input for search uses */
    useAsSimpleSearch: PropTypes.bool,
    hideDropdownIndicator: PropTypes.bool,
    isMulti: PropTypes.bool,
    /** Function to customize the option row */
    customOption: PropTypes.func,
    /** Function to customize the option row in the optionType selector */
    customTypeOption: PropTypes.func,
    hideSelectedOptions: PropTypes.bool,
    /** If false, the selected value won't be set as selected. Useful if your goal is just to pick an option without showing it on the input */
    shouldSetValueOnChange: PropTypes.bool,
    /** Enable/disable focusing first option of the select */
    focusDefaultOption: PropTypes.bool,
};

export default React.memo(SearchBar);
