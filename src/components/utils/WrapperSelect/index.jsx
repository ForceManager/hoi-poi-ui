import React, { memo, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Popover from '../../utils/Popover';
import { getOverrides, useClasses } from '../../../utils/overrides';
import OptionsList from './components/OptionsList';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'WrapperSelect');

const WrapperSelect = memo(
    ({
        children,
        classes: classesProp,
        overrides: overridesProp,
        className: classNameProp,
        placement,
        trigger,
        isMulti,
        options,
        optionsComponent,
        value,
        getIsOpen,
        onOpen,
        onClose,
        onChange,
        checkboxColor,
        checkBoxIsMonotone,
    }) => {
        const override = getOverrides(overridesProp, WrapperSelect.overrides);
        const classes = useClasses(useStyles, classesProp);
        const rootClassName = classnames(classes.root, {}, classNameProp);

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
                    }
                };
            },
            [isMulti, onChange, value, mappedValue],
        );

        const finalOptions =
            optionsComponent ||
            (options && (
                <OptionsList
                    options={options}
                    isMulti={isMulti}
                    classes={classes}
                    override={override}
                    onChange={handleOnChange}
                    value={value}
                    mappedValue={mappedValue}
                    checkboxColor={checkboxColor}
                    checkBoxIsMonotone={checkBoxIsMonotone}
                />
            )) ||
            null;

        const onChangeOpen = useCallback(
            (isVisible) => {
                getIsOpen && getIsOpen(isVisible);
                if (isVisible) {
                    onOpen && onOpen();
                } else {
                    onClose && onClose();
                }
            },
            [getIsOpen, onOpen, onClose],
        );

        return (
            <div className={rootClassName} overrides={override.root}>
                <Popover
                    content={finalOptions}
                    placement={placement}
                    trigger={trigger}
                    className={classes.wrapperPopover}
                    onVisibleChange={onChangeOpen}
                >
                    {children && children}
                </Popover>
            </div>
        );
    },
);

WrapperSelect.overrides = [
    'root',
    'wrapperPopover',
    'optionList',
    'optionListGroup',
    'optionListGroupLabel',
    'option',
    'optionSelect',
    'optionDisabled',
    'optionCheckbox',
    'optionLabelBullet',
    'optionLabelBulletDisabled',
    'optionLabelBulletPrimary',
    'optionLabelBulletDanger',
    'optionLabelBulletSuccess',
];

WrapperSelect.defaultProps = {
    placement: 'bottomLeft',
    trigger: ['click'],
    isMulti: false,
    checkboxColor: 'orange',
    checkBoxIsMonotone: false,
};

WrapperSelect.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    overrides: PropTypes.object,
};

export default WrapperSelect;
