import React, { memo, useEffect, useCallback, useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import InputWrapper from '../components/InputWrapper';
import Input from '../Input';
import SelectWrapper from '../../utils/SelectWrapper';

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
        formatLabel,
        formatDate,
        formatOption,
        ...props
    }) => {
        const override = getOverrides(overridesProp, TimePicker.overrides);
        const classes = useClasses(useStyles, classesProp);

        const rootClassName = classnames(classes.root, {}, classNameProp);

        const [newOptions, setNewOptions] = useState(options || []);
        const [timeValue, setTimeValue] = useState(null);
        const [inputValue, setInputValue] = useState('');
        const innerDateValueRef = useRef(dateValue || new Date());
        const wrapperRef = useRef(null);

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

        const getTimeValue = useCallback(
            (options) => {
                if (!dateValue || !options || options.length === 0) return null;
                if (!dateValue) return null;

                const hours = dateValue.getHours();
                const minutes = dateValue.getMinutes();

                let optionNow = null;

                options.forEach((current, index) => {
                    if (isRequired) {
                        const currentHours = current.value.getHours();
                        const currentMinutes = current.value.getMinutes();
                        const currentTime = `${currentHours}:${currentMinutes}`;
                        const dateTime = `${hours}:${minutes}`;
                        if (dateTime === currentTime) {
                            optionNow = current;
                        }
                    }
                });

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

                if (optionNow) {
                    setTimeValue(optionNow);
                }

                const inputHours = `0${dateValue.getHours()}`.slice(-2);
                const inputMinutes = `0${dateValue.getMinutes()}`.slice(-2);
                setInputValue(`${inputHours}:${inputMinutes}`);
            },
            [dateValue, isRequired, getMinMax, getIfOptionIsOutOfRange, getIfInputDateIsDisabled],
        );

        const getOptionLabel = useCallback(
            (date) => {
                const hours = `0${date.getHours()}`.slice(-2);
                const minutes = `0${date.getMinutes()}`.slice(-2);
                const amPm = hours >= 12 ? 'PM' : 'AM';
                const label = `${hours}:${minutes} ${amPm}`;
                const newLabel = formatLabel ? formatLabel(date, label) : label;
                return newLabel;
            },
            [formatLabel],
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
                let hours;
                let minutes;
                let ampm;
                if (i === 0) {
                    hours = date.getHours();
                    minutes = date.getMinutes();
                    hours = `0${hours}`.slice(-2);
                    minutes = `0${minutes}`.slice(-2);
                    ampm = hours >= 12 ? 'PM' : 'AM';

                    let isDisabled = false;

                    if (minMax) {
                        isDisabled = getIfOptionIsOutOfRange(
                            date,
                            minMax?.minTime || null,
                            minMax?.maxTime || null,
                        );
                    }

                    const newValue = formatDate ? formatDate(date) : date;
                    const label = `${hours}:${minutes} ${ampm}`;
                    const newLabel = formatLabel ? formatLabel(newValue, label) : label;

                    let option = {
                        label: newLabel,
                        value: newValue,
                    };

                    if (formatOption) option = formatOption(option);
                    if (isDisabled) option.isDisabled = isDisabled;

                    datesList.push(option);
                }

                date = new Date(date.getTime() + interval * 60000);
                hours = date.getHours();
                minutes = date.getMinutes();
                hours = `0${hours}`.slice(-2);
                minutes = `0${minutes}`.slice(-2);
                ampm = hours >= 12 ? 'PM' : 'AM';

                let isDisabled = false;

                if (minMax) {
                    isDisabled = getIfOptionIsOutOfRange(
                        date,
                        minMax?.minTime || null,
                        minMax?.maxTime || null,
                    );
                }

                const newValue = formatDate ? formatDate(date) : date;
                const label = `${hours}:${minutes} ${ampm}`;
                const newLabel = formatLabel ? formatLabel(newValue, label) : label;

                let option = {
                    label: newLabel,
                    value: newValue,
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
            formatDate,
            formatLabel,
        ]);

        useEffect(() => {
            if (!options && newOptions?.length === 0) {
                getNewOptions();
            } else {
                getTimeValue(newOptions);
            }
        }, [options, getNewOptions, getTimeValue, newOptions]);

        const handleOnChangeInput = useCallback(
            (value) => {
                if (!value) {
                    setInputValue('');
                    setTimeValue(null);
                    onChange && onChange(null);
                    return;
                }
                setInputValue(value);
            },
            [onChange],
        );

        const onCompleteChange = useCallback(
            (value) => {
                const timeRegEx = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
                if (!timeRegEx.test(value)) {
                    setInputValue('');
                    return;
                }

                const valueArr = value.split(':');
                let finalDate = innerDateValueRef.current;
                finalDate.setHours(valueArr[0], valueArr[1], 0, 0);

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
                    setInputValue('');
                    setTimeValue(null);
                    return;
                }

                setInputValue(value);

                const newTimeValue = {
                    label: getOptionLabel(finalDate),
                    value: finalDate,
                };

                setTimeValue(newTimeValue);
                onChange && onChange(finalDate);
            },
            [onChange, getOptionLabel, getMinMax, getIfInputDateIsDisabled],
        );

        const onBlur = useCallback(
            (value) => {
                onCompleteChange(value);
            },
            [onCompleteChange],
        );

        const onEnter = useCallback(
            (value) => {
                onCompleteChange(value);
            },
            [onCompleteChange],
        );

        const handleOnChange = useCallback(
            (value) => {
                setTimeValue(value);
                onChange && onChange(value?.value || null);
            },
            [onChange],
        );

        const overlayStyles = () => {
            if (wrapperRef?.current) {
                return {
                    overlayStyle: { maxWidth: 'initial' },
                    overlayInnerStyle: { width: wrapperRef.current.firstChild.offsetWidth },
                };
            }
            return {};
        };

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
                ref={wrapperRef}
            >
                <SelectWrapper
                    className=""
                    // placement="bottom"
                    options={newOptions}
                    onChange={handleOnChange}
                    value={timeValue || null}
                    overrides={override.selectWrapper}
                    {...overlayStyles()}
                >
                    <Input
                        placeholder="Write here"
                        onChange={handleOnChangeInput}
                        onBlur={onBlur}
                        onEnter={onEnter}
                        value={inputValue}
                        isFullWidth
                        overrides={override.input}
                        postComponent={<Icon name="accessTime" />}
                    />
                </SelectWrapper>
            </InputWrapper>
        );
    },
);

TimePicker.propTypes = {
    interval: PropTypes.number,
    /** HH:mm:ss */
    minTime: PropTypes.string,
    /** HH:mm:ss */
    maxTime: PropTypes.string,
    isMinTimeNow: PropTypes.bool,
    isMaxTimeNow: PropTypes.bool,
    formatLabel: PropTypes.func,
    formatDate: PropTypes.func,
    formatOption: PropTypes.func,
};

export default TimePicker;
