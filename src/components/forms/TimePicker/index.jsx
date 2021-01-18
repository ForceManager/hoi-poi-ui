import React, { memo, useEffect, useCallback, useState } from 'react';
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
        loadOptions,
        interval = 30,
        onChange,
        minTime, // HH:mm:ss
        maxTime, // HH:mm:ss
        formatLabel,
        formatDate,
        formatOption,
        ...props
    }) => {
        const override = getOverrides(overridesProp, TimePicker.overrides);
        const classes = useClasses(useStyles, classesProp);

        const rootClassName = classnames(
            classes.root,
            {
                [classes.isFullWidth]: isFullWidth,
            },
            classNameProp,
        );

        const [newOptions, setNewOptions] = useState(options || []);
        const [timeValue, setTimeValue] = useState(null);

        const getMinMax = useCallback(() => {
            const date = new Date();
            if (!minTime && !maxTime) return null;
            const minAttrs = (minTime && minTime.split(':')) || null;
            const maxAttrs = (maxTime && maxTime.split(':')) || null;
            let newMinTime;
            let newMaxTime;

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
        }, [maxTime, minTime]);

        const getIfOptionIsDisabled = useCallback((date, minTime, maxTime) => {
            if (!minTime && !maxTime) return false;
            const dateInMiliseconds = date.getTime();

            if (minTime && dateInMiliseconds < minTime.getTime()) return true;
            if (maxTime && dateInMiliseconds > maxTime.getTime()) return true;
            return false;
        }, []);

        const getTimeValue = useCallback(
            (options) => {
                if (!dateValue || !options || options.length === 0) return null;
                if (!dateValue) return null;
                let closestTimeIndex = 0;
                let lastDiff;
                const dateValueNow = new Date();
                const hours = dateValue.getHours();
                const minutes = dateValue.getMinutes();
                const seconds = dateValue.getSeconds();
                dateValueNow.setHours(hours, minutes, seconds);
                options.forEach((current, index) => {
                    if (isRequired) {
                        const diff = Math.abs(current.value.getTime() - dateValueNow.getTime());
                        if (isNaN(lastDiff)) {
                            lastDiff = diff;
                            closestTimeIndex = index;
                        } else if (!isNaN(lastDiff) && lastDiff > diff) {
                            lastDiff = diff;
                            closestTimeIndex = index;
                        }
                    }
                });
                setTimeValue(options[closestTimeIndex]);
            },
            [dateValue, isRequired],
        );

        const getNewOptions = useCallback(() => {
            const today = new Date();
            let date = new Date(today.setHours(0, 0, 0, 0));
            let iterations = 1440 / interval;
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
                        isDisabled = getIfOptionIsDisabled(date, minMax.minTime, minMax.maxTime);
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
                    isDisabled = getIfOptionIsDisabled(date, minMax.minTime, minMax.maxTime);
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
            getIfOptionIsDisabled,
            getMinMax,
            formatOption,
            formatDate,
            formatLabel,
        ]);

        useEffect(() => {
            if (!options) {
                getNewOptions();
            }
        }, [options, getNewOptions]);

        const handleOnChange = useCallback(
            (value) => {
                setTimeValue(value);
                onChange && onChange(value?.value || null);
            },
            [onChange],
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
                    dropDownIcon={<Icon name="clock" />}
                    options={newOptions}
                    value={timeValue}
                    hideSelectedOptions={false}
                    isSearchable={false}
                    onChange={handleOnChange}
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
    formatLabel: PropTypes.func,
    formatDate: PropTypes.func,
    formatOption: PropTypes.func,
};

export default TimePicker;
