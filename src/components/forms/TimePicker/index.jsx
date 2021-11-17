import React, { memo, useEffect, useCallback, useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import InputWrapper from '../components/InputWrapper';
import Select from '../Select';
import { filterKeyValue } from '../Select/utils';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'TimePicker');

const TimePicker = memo(
    ({
        error,
        classes: classesProp,
        overrides: overridesProp,
        className: classNameProp,
        label,
        labelMode,
        isFullWidth,
        hint,
        info,
        isRequired,
        options,
        value: dateValue,
        loadOptions, //declared here to prevent passing it via props
        interval = 30,
        onChange,
        minTime, // HH:mm:ss
        maxTime, // HH:mm:ss
        isMinTimeNow,
        isMaxTimeNow,
        formatOption,
        dropDownIcon,
        ...props
    }) => {
        const override = getOverrides(overridesProp, TimePicker.overrides);
        const classes = useClasses(useStyles, classesProp);

        const rootClassName = classnames(classes.root, {}, classNameProp);

        const [newOptions, setNewOptions] = useState(options || []);
        const [timeValue, setTimeValue] = useState(null);
        const [inputValue, setInputValue] = useState('');
        const innerDateValueRef = useRef(dateValue || new Date());
        const isSelectionRef = useRef(false);
        const inputValueControlRef = useRef('');
        const shouldFilterRef = useRef(false);

        const getMinMax = useCallback(() => {
            const date = new Date();
            let newMinTime;
            let newMaxTime;
            if (!minTime && !maxTime && !isMinTimeNow && !isMaxTimeNow) return null;

            if (isMinTimeNow || isMaxTimeNow) {
                if (isMinTimeNow) newMinTime = date;
                if (isMaxTimeNow) newMaxTime = date;

                return {
                    minTime: newMinTime,
                    maxTime: newMaxTime,
                };
            }

            const minAttrs = (minTime && minTime.split(':')) || null;
            const maxAttrs = (maxTime && maxTime.split(':')) || null;

            if (minAttrs) {
                newMinTime = new Date(date.setHours(minAttrs[0], minAttrs[1], minAttrs[2] || '00'));
            }

            if (maxAttrs) {
                newMaxTime = new Date(date.setHours(maxAttrs[0], maxAttrs[1], maxAttrs[2] || '00'));
            }

            return {
                minTime: newMinTime,
                maxTime: newMaxTime,
            };
        }, [maxTime, minTime, isMinTimeNow, isMaxTimeNow]);

        const getIfOptionIsOutOfRange = useCallback((date, minTime, maxTime) => {
            if (!minTime && !maxTime) return false;

            const dateInMiliseconds = date.getTime();

            if (minTime && dateInMiliseconds < minTime.getTime()) return true;
            if (maxTime && dateInMiliseconds > maxTime.getTime()) return true;
            return false;
        }, []);

        const getIfInputDateIsDisabled = useCallback(
            (date, options) => {
                let finalOptions = [];

                if (options) finalOptions = options;
                else if (newOptions && newOptions.length !== 0) finalOptions = newOptions;

                if (!finalOptions || finalOptions.length === 0) return false;

                if (finalOptions?.length) {
                    const disabledTimes = finalOptions.reduce((arr, current) => {
                        if (current.isDisabled && current.value) arr.push(current.value.getTime());
                        return arr;
                    }, []);

                    if (disabledTimes.includes(date.getTime())) return true;
                }
            },
            [newOptions],
        );

        const getTimeLabel = useCallback((date) => {
            const hours = `0${date.getHours()}`.slice(-2);
            const minutes = `0${date.getMinutes()}`.slice(-2);
            const label = `${hours}:${minutes}`;
            return label;
        }, []);

        const getTimeValue = useCallback(
            (options) => {
                if (!dateValue || !options || options.length === 0) return null;
                if (!dateValue) return null;

                const minMax = getMinMax();

                const isDisabled =
                    getIfOptionIsOutOfRange(
                        dateValue,
                        minMax?.minTime || null,
                        minMax?.maxTime || null,
                    ) ||
                    getIfInputDateIsDisabled(dateValue) ||
                    false;

                if (isDisabled) return;

                const hours = dateValue.getHours();
                const minutes = dateValue.getMinutes();

                let timeOption = null;

                if (isRequired) {
                    options.forEach((current, index) => {
                        const currentHours = current.value.getHours();
                        const currentMinutes = current.value.getMinutes();
                        const currentTime = `${currentHours}:${currentMinutes}`;
                        const dateTime = `${hours}:${minutes}`;
                        if (dateTime === currentTime) {
                            timeOption = current;
                        }
                    });
                    if (!timeOption) {
                        timeOption = {
                            label: getTimeLabel(dateValue),
                            value: dateValue,
                        };
                    }
                }

                if (timeOption) {
                    setTimeValue(timeOption);
                } else if (dateValue) {
                    const initialOption = {
                        label: getTimeLabel(dateValue),
                        value: dateValue,
                    };
                    setTimeValue(initialOption);
                }

                const valueLabel = getTimeLabel(dateValue);
                setInputValue(valueLabel);
            },
            [
                dateValue,
                isRequired,
                getMinMax,
                getIfOptionIsOutOfRange,
                getIfInputDateIsDisabled,
                getTimeLabel,
            ],
        );

        const getNewOptions = useCallback(() => {
            const today = new Date();
            let date = new Date(today.setHours(0, 0, 0, 0));
            const minutesInADay = 24 * 60;
            let iterations = minutesInADay / interval;
            iterations = iterations % 2 === 0 ? iterations - 1 : iterations;
            let datesList = [];
            const minMax = getMinMax() || null;

            for (let i = 0; i < iterations; i++) {
                if (i === 0) {
                    let isDisabled = false;

                    if (minMax) {
                        isDisabled = getIfOptionIsOutOfRange(
                            date,
                            minMax?.minTime || null,
                            minMax?.maxTime || null,
                        );
                    }

                    const newLabel = getTimeLabel(date);

                    let option = {
                        label: newLabel,
                        value: date,
                    };

                    if (formatOption) option = formatOption(option);
                    if (isDisabled) option.isDisabled = isDisabled;

                    datesList.push(option);
                }

                date = new Date(date.getTime() + interval * 60000);

                let isDisabled = false;

                if (minMax) {
                    isDisabled = getIfOptionIsOutOfRange(
                        date,
                        minMax?.minTime || null,
                        minMax?.maxTime || null,
                    );
                }

                const newLabel = getTimeLabel(date);

                let option = {
                    label: newLabel,
                    value: date,
                };

                if (formatOption) option = formatOption(option);
                if (isDisabled) option.isDisabled = isDisabled;

                datesList.push(option);
            }

            getTimeValue(datesList);
            setNewOptions(datesList);
        }, [
            interval,
            getTimeValue,
            getIfOptionIsOutOfRange,
            getMinMax,
            formatOption,
            getTimeLabel,
        ]);

        useEffect(() => {
            if (!options && newOptions?.length === 0) {
                getNewOptions();
            } else {
                getTimeValue(newOptions);
            }
        }, [options, getNewOptions, getTimeValue, newOptions]);

        const customOnChange = useCallback(
            ({ value, action, setNewValue, setNewInputValue }) => {
                if (action?.action === 'clear') {
                    setNewInputValue('');
                    setNewValue(null);
                    inputValueControlRef.current = '';
                    onChange && onChange(null);
                    shouldFilterRef.current = true;
                } else if (value) {
                    if (action?.action === 'select-option') isSelectionRef.current = true;
                    setNewInputValue(value.label);
                    setNewValue(value);
                    inputValueControlRef.current = value.label;
                    onChange && onChange(value.value);
                    shouldFilterRef.current = false;
                }
            },
            [onChange],
        );

        const customFilter = useCallback((option, rawInput) => {
            if (!shouldFilterRef.current) return true;
            return filterKeyValue(option, rawInput);
        }, []);

        const customOnChangeInput = useCallback(
            ({ value, inputValue, action, setNewValue, setNewInputValue }) => {
                if (action?.action === 'input-change') {
                    if ((!inputValue && !value) || (!inputValue && value)) {
                        setNewInputValue('');
                        setNewValue(null);
                        onChange && onChange(null);
                        inputValueControlRef.current = '';
                    } else {
                        setNewInputValue(inputValue);
                        inputValueControlRef.current = inputValue;
                    }
                    if (!shouldFilterRef.current) shouldFilterRef.current = true;
                } else if (action?.action === 'input-blur') {
                    if (isSelectionRef.current) {
                        isSelectionRef.current = false;
                        return;
                    }

                    let finalDate = null;
                    const timeRegEx = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g;
                    if (timeRegEx.test(inputValueControlRef.current)) {
                        const valueArr = inputValueControlRef.current.split(':');
                        finalDate = innerDateValueRef.current;
                        finalDate.setHours(valueArr[0], valueArr[1], 0, 0);
                    }

                    if (inputValueControlRef.current) {
                        if (!finalDate) {
                            setNewInputValue('');
                            setNewValue(null);
                            onChange && onChange(null);
                            shouldFilterRef.current = true;
                        } else {
                            const minMax = getMinMax() || null;

                            const isValueDisabled =
                                getIfInputDateIsDisabled(
                                    finalDate,
                                    minMax?.minTime || null,
                                    minMax?.maxTime || null,
                                ) ||
                                getIfInputDateIsDisabled(finalDate) ||
                                false;

                            if (isValueDisabled) {
                                setNewInputValue('');
                                setNewValue(null);
                                onChange && onChange(null);
                                shouldFilterRef.current = true;
                                return;
                            }

                            const newTimeValue = {
                                label: getTimeLabel(finalDate),
                                value: finalDate,
                            };

                            setNewValue(newTimeValue);
                            onChange && onChange(finalDate);
                            shouldFilterRef.current = false;
                        }
                    }
                }
            },
            [getIfInputDateIsDisabled, getMinMax, getTimeLabel, onChange],
        );

        const iconDropDown = useMemo(() => {
            if (dropDownIcon) return dropDownIcon;
            return <Icon className={classes.clockIcon} name="clock" />;
        }, [dropDownIcon, classes.clockIcon]);

        return (
            <InputWrapper
                {...props}
                error={error}
                className={rootClassName}
                overrides={overridesProp}
                label={label}
                labelMode={labelMode}
                isFullWidth={isFullWidth}
                hint={hint}
                info={info}
                isRequired={isRequired}
            >
                <Select
                    overrides={override.timePicker}
                    dropDownIcon={iconDropDown}
                    options={newOptions}
                    value={timeValue}
                    inputValue={inputValue}
                    hideSelectedOptions={false}
                    isSearchable={true}
                    isFullWidth={isFullWidth}
                    keepInputValueOnBlur={true}
                    keepValueOnInputChange={true}
                    customOnChange={customOnChange}
                    customOnChangeInput={customOnChangeInput}
                    customFilter={customFilter}
                    menuShouldScrollIntoView={true}
                    {...props}
                />
            </InputWrapper>
        );
    },
);

TimePicker.propTypes = {
    /** Interval time between values in the list */
    interval: PropTypes.number,
    /** HH:mm:ss */
    minTime: PropTypes.string,
    /** HH:mm:ss */
    maxTime: PropTypes.string,
    isMinTimeNow: PropTypes.bool,
    isMaxTimeNow: PropTypes.bool,
    formatOption: PropTypes.func,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.object, //Date
            isDisabled: PropTypes.bool,
        }),
    ),
    /** Custom dropDown icon */
    dropDownIcon: PropTypes.element,
};

export default TimePicker;
