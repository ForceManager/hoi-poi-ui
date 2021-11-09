import React, { memo, useEffect, useCallback, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Icon from '../../general/Icon';
import InputWrapper from '../components/InputWrapper';
import Select from '../Select';

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
        ...props
    }) => {
        const override = getOverrides(overridesProp, TimePicker.overrides);
        const classes = useClasses(useStyles, classesProp);

        const rootClassName = classnames(classes.root, {}, classNameProp);

        const [newOptions, setNewOptions] = useState(options || []);
        const [timeValue, setTimeValue] = useState(null);
        const [inputValue, setInputValue] = useState('');
        const innerDateValueRef = useRef(dateValue || new Date());

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

                setTimeValue(timeOption);

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

        const handleOnChange = useCallback(
            (value) => {
                if (!value) {
                    setInputValue('');
                    setTimeValue(null);
                    onChange && onChange(null);
                    return;
                }

                const valueLabel = getTimeLabel(value.value);
                setInputValue(valueLabel);
                onChange && onChange(value.value);
            },
            [onChange, getTimeLabel],
        );

        const onCompleteChange = useCallback(
            (value) => {
                if (!value) return;
                const timeRegEx = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/g;

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

                const valueLabel = getTimeLabel(finalDate);
                setInputValue(valueLabel);

                const newTimeValue = {
                    label: getTimeLabel(finalDate),
                    value: finalDate,
                };

                setTimeValue(newTimeValue);
                onChange && onChange(finalDate);
            },
            [onChange, getTimeLabel, getMinMax, getIfInputDateIsDisabled],
        );

        const handleOnBlur = useCallback(
            (value) => {
                onCompleteChange(value);
            },
            [onCompleteChange],
        );

        const handleOnEnter = useCallback(
            (value) => {
                onCompleteChange(value);
            },
            [onCompleteChange],
        );

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
                    dropDownIcon={<Icon className={classes.clockIcon} name="clock" />}
                    options={newOptions}
                    value={timeValue}
                    inputValue={inputValue}
                    hideSelectedOptions={false}
                    isSearchable={true}
                    onChange={handleOnChange}
                    onBlurSearch={handleOnBlur}
                    onEnter={handleOnEnter}
                    isFullWidth={isFullWidth}
                    keepInputValueOnBlur={true}
                    {...props}
                />
            </InputWrapper>
        );
    },
);

TimePicker.propTypes = {
    interval: PropTypes.number,
    minTime: PropTypes.string,
    /** HH:mm:ss */
    maxTime: PropTypes.string,
    /** HH:mm:ss */
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
};

export default TimePicker;
