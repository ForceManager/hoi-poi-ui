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

        const getTimeValue = useCallback(
            (options) => {
                if (!dateValue || !options || options.length === 0) return null;
                let closestTimeIndex = 0;
                let lastDiff;
                options.forEach((current, index) => {
                    if (isRequired && dateValue) {
                        const diff = Math.abs(current.value.getTime() - dateValue.getTime());
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
                    datesList.push({
                        label: `${hours}:${minutes} ${ampm}`,
                        value: date,
                    });
                }
                date = new Date(date.getTime() + interval * 60000);
                hours = date.getHours();
                minutes = date.getMinutes();
                hours = `0${hours}`.slice(-2);
                minutes = `0${minutes}`.slice(-2);
                ampm = hours >= 12 ? 'PM' : 'AM';
                datesList.push({
                    label: `${hours}:${minutes} ${ampm}`,
                    value: date,
                });
            }

            getTimeValue(datesList);
            setNewOptions(datesList);
        }, [interval, getTimeValue]);

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

export default TimePicker;
