import React, { memo, useMemo, useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Popover from '../../utils/Popover';
import { getOverrides, useClasses } from '../../../utils/overrides';
import OptionList from './components/OptionList';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'SelectWrapper');

const SelectWrapper = memo(
    ({
        children,
        classes: classesProp,
        overrides: overridesProp,
        className: classNameProp,
        placement,
        trigger,
        isMulti,
        options,
        loadOptions,
        customOptions,
        value,
        getIsOpen,
        onOpen,
        onClose,
        onChange,
        checkboxColor,
        checkBoxIsMonotone,
        loadingMessage,
        noOptionsPlaceholder,
        truncateOptions,
        popoverWide,
        overlayStyle,
        overlayInnerStyle,
        getPopoverRef,
        closeOnChangeSingle,
    }) => {
        const override = getOverrides(overridesProp, SelectWrapper.overrides);
        const classes = useClasses(useStyles, classesProp);
        const rootClassName = classnames(classes.root, {}, classNameProp);
        const [innerOptions, setInnerOptions] = useState(options || []);
        const [isLoading, setIsLoading] = useState(false);

        useEffect(() => {
            if (!loadOptions && innerOptions?.length !== options?.length) {
                setInnerOptions(options);
            }
        }, [loadOptions, innerOptions, options]);

        const mappedValue = useMemo(() => {
            if (
                !value ||
                (Array.isArray(value) && value.length === 0) ||
                (typeof value === 'object' && Object.keys(value).length === 0)
            ) {
                return {};
            }

            if (Array.isArray(value)) {
                return value.reduce((obj, current) => {
                    obj[current.value] = current;
                    return obj;
                }, {});
            } else if (typeof value === 'object') {
                return { [value.value]: value };
            } else {
                return {};
            }
        }, [value]);

        const handleOnChange = useCallback(
            (option) => {
                return () => {
                    if (!onChange) return;
                    if (isMulti) {
                        let finalValue = [];
                        if (!value) finalValue = [option];
                        else {
                            if (mappedValue[option.value]) {
                                finalValue = value.filter((current) => {
                                    return current.value !== option.value;
                                });
                            } else {
                                finalValue = [...value, option];
                            }
                        }
                        onChange(finalValue);
                    } else {
                        if (value && option.value === value.value) {
                            onChange(null);
                        } else {
                            onChange(option);
                        }
                        if (closeOnChangeSingle) {
                            document.dispatchEvent(new Event('mousedown'));
                        }
                    }
                };
            },
            [isMulti, onChange, value, mappedValue, closeOnChangeSingle],
        );

        const finalOptions = useMemo(() => {
            if (customOptions) {
                return (
                    <div className={classes.customOptions} {...(override.customOptions || {})}>
                        {customOptions}
                    </div>
                );
            } else {
                return (
                    <OptionList
                        options={innerOptions}
                        isMulti={isMulti}
                        classes={classes}
                        override={override}
                        onChange={handleOnChange}
                        value={value}
                        mappedValue={mappedValue}
                        checkboxColor={checkboxColor}
                        checkBoxIsMonotone={checkBoxIsMonotone}
                        isLoading={isLoading}
                        loadingMessage={loadingMessage}
                        noOptionsPlaceholder={noOptionsPlaceholder}
                        truncateOptions={truncateOptions}
                    />
                );
            }
        }, [
            customOptions,
            innerOptions,
            isMulti,
            classes,
            override,
            handleOnChange,
            value,
            mappedValue,
            checkboxColor,
            checkBoxIsMonotone,
            isLoading,
            loadingMessage,
            noOptionsPlaceholder,
            truncateOptions,
        ]);

        const onChangeOpen = useCallback(
            (isOpen) => {
                getIsOpen && getIsOpen(isOpen);
                if (isOpen) {
                    if (loadOptions && innerOptions.length === 0) {
                        setIsLoading(true);
                        loadOptions()
                            .then((result) => {
                                setInnerOptions(result);
                                setIsLoading(false);
                            })
                            .catch(() => {
                                setIsLoading(false);
                            });
                    }
                    onOpen && onOpen();
                } else {
                    onClose && onClose();
                }
            },
            [getIsOpen, onOpen, onClose, innerOptions, loadOptions],
        );

        const popoverClassName = useMemo(
            () => classnames(classes.Popover, { [classes.PopoverWide]: popoverWide }),
            [classes.Popover, classes.PopoverWide, popoverWide],
        );

        return (
            <div className={rootClassName} {...(override.root || {})}>
                <Popover
                    getRef={getPopoverRef}
                    content={finalOptions}
                    placement={placement}
                    trigger={trigger}
                    className={popoverClassName}
                    onVisibleChange={onChangeOpen}
                    overlayStyle={overlayStyle}
                    overlayInnerStyle={{
                        ...overlayInnerStyle,
                        maxHeight: window?.innerHeight - 100,
                        overflowY: 'scroll',
                    }}
                    overrides={override.Popover || {}}
                >
                    {children && children}
                </Popover>
            </div>
        );
    },
);

SelectWrapper.overrides = [
    'root',
    'Popover',
    'loaderContainer',
    'Loader',
    'optionList',
    'noOptions',
    'optionListGroup',
    'optionListGroupLabel',
    'option',
    'optionSelect',
    'optionDisabled',
    'optionCheckbox',
    'optionTwoLines',
    'optionLabel',
    'optionSubLabel',
    'optionLabelBlock',
    'optionLabelBullet',
    'optionLabelBulletDisabled',
    'optionLabelBulletPrimary',
    'optionLabelBulletDanger',
    'optionLabelBulletSuccess',
    'optionLabelIcon',
    'optionLabelCustomIcon',
    'optionLabelAvatar',
    'optionDisabledAvatar',
];

SelectWrapper.defaultProps = {
    placement: 'bottomLeft',
    trigger: ['click'],
    isMulti: false,
    checkboxColor: 'orange',
    checkBoxIsMonotone: false,
    truncateOptions: true,
    popoverWide: false,
    closeOnChangeSingle: true,
};

SelectWrapper.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    overrides: PropTypes.object,
    ladingMessage: PropTypes.string,
    noOptionsPlaceholder: PropTypes.string,
    /** Truncate text label in select options */
    truncateOptions: PropTypes.bool,
    /** Enable popover extra width (344px) */
    popoverWide: PropTypes.bool,
    overlayStyle: PropTypes.object,
    overlayInnerStyle: PropTypes.object,
    getPopoverRef: PropTypes.func,
    /** Enable to close the valuelist after changing the selection */
    closeOnChangeSingle: PropTypes.bool,
};

export default SelectWrapper;
