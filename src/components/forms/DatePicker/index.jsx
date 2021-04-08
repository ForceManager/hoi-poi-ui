import React, { useRef, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Flatpickr from 'react-flatpickr';
import flatpickr from 'flatpickr';
import flatpickrl10n from 'flatpickr/dist/l10n';

import { getOverrides, useClasses } from '../../../utils/overrides';
import Input from '../Input';
import Icon from '../../general/Icon';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'DatePicker');

// Old browser and Safari fix fix
(() => {
    if (document.getElementById('flatpickr')) return;
    const styleTag = document.createElement('style');
    styleTag.id = 'flatpickr';
    const headTag = document.getElementsByTagName('head')[0];
    headTag.insertBefore(styleTag, headTag.childNodes[0]);
})();

function DatePicker({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    name,
    dateFormat,
    formatDate,
    onChange,
    value,
    outputType,
    lang,
    isReadOnly,
    isFullWidth,
    calendarButtonLabel,
    placeholder,
    minDate,
    maxDate,
    ...props
}) {
    const flatpickrRef = useRef();
    const todayButtonRef = useRef();
    const classes = useClasses(useStyles, classesProp);

    // Overrides
    const override = getOverrides(overridesProp, DatePicker.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isFullWidth]: isFullWidth,
        },
        classNameProp,
    );

    const flatpickrOptions = useMemo(() => {
        return {
            dateFormat: dateFormat || 'd M Y',
            formatDate,
            locale: flatpickrl10n[lang],
            clickOpens: !isReadOnly,
            time_24hr: true,
            minDate,
            maxDate,
            disableMobile: true,
            ...override.flatpickrOptions,
        };
    }, [dateFormat, formatDate, isReadOnly, lang, maxDate, minDate, override.flatpickrOptions]);

    const onChangeDate = useCallback(
        (date) => {
            const formattedDate =
                outputType === 'string'
                    ? flatpickr.formatDate(date[0], flatpickrOptions.dateFormat)
                    : date[0];
            onChange && onChange(formattedDate, name);
        },
        [flatpickrOptions.dateFormat, name, onChange, outputType],
    );

    // Remove handler
    const onInputChange = useCallback(() => {
        onChange && onChange(undefined, name);
    }, [name, onChange]);

    const shouldDisableToday = useMemo(() => {
        if (minDate || maxDate) {
            const today = new Date();
            if (minDate && minDate.getTime() > today.getTime()) return true;
            if (maxDate && maxDate.getTime() < today.getTime()) return true;
        }
        return false;
    }, [minDate, maxDate]);

    const todayClicked = useCallback(() => {
        if (shouldDisableToday) return;
        const today = new Date(new Date().setHours(0, 0, 0, 0));
        onChangeDate([today]);
        flatpickrRef.current.flatpickr.close();
    }, [onChangeDate, shouldDisableToday]);

    const onReady = useCallback(
        (_, __, fp) => {
            fp.calendarContainer.classList.add(classes.container);
            if (fp.rContainer) {
                const div = document.createElement('div');
                const classNames = [classes.todayContainer];
                if (shouldDisableToday) classNames.push(classes.todayContainerDisabled);
                div.className = classNames.join(' ');
                div.addEventListener('click', todayClicked);
                div.innerHTML = calendarButtonLabel;
                todayButtonRef.current = {
                    element: div,
                    function: todayClicked,
                };
                fp.rContainer.appendChild(div);
            }
        },
        [
            classes.container,
            classes.todayContainer,
            classes.todayContainerDisabled,
            shouldDisableToday,
            todayClicked,
            calendarButtonLabel,
        ],
    );

    useEffect(() => {
        if (todayButtonRef.current) {
            todayButtonRef.current.element.removeEventListener(
                'click',
                todayButtonRef.current.function,
            );
            todayButtonRef.current.element.addEventListener('click', todayClicked);
            todayButtonRef.current.function = todayClicked;
        }
    }, [classes.todayContainer, classes.todayContainerDisabled, todayClicked]);

    useEffect(() => {
        if (todayButtonRef.current) {
            const classNames = [classes.todayContainer];
            if (shouldDisableToday) classNames.push(classes.todayContainerDisabled);
            todayButtonRef.current.element.className = classNames.join(' ');
        }
    }, [classes.todayContainer, classes.todayContainerDisabled, shouldDisableToday]);

    const onClick = useCallback((e) => {
        setTimeout(() => flatpickrRef.current.flatpickr.open());
    }, []);

    const inputOverride = useMemo(
        () => ({
            formControl: {
                onClick: !isReadOnly ? onClick : undefined,
            },
        }),
        [isReadOnly, onClick],
    );

    const flatpickrRender = useCallback(
        ({ className, value }, ref) => {
            const formatValue =
                value && outputType === 'object'
                    ? formatDate
                        ? formatDate(value, flatpickrOptions.dateFormat)
                        : flatpickr.formatDate(value, flatpickrOptions.dateFormat)
                    : value;
            return (
                <Input
                    {...props}
                    value={formatValue}
                    className={className}
                    isReadOnly={isReadOnly}
                    isFullWidth={isFullWidth}
                    onChange={isReadOnly ? undefined : onInputChange}
                    overrides={{ input: { ref }, ...inputOverride }}
                    placeholder={placeholder}
                    postComponent={
                        !isReadOnly && (
                            <div className={classes.calendarIcon} onClick={onClick}>
                                <Icon name="calendar" />
                            </div>
                        )
                    }
                />
            );
        },
        [
            classes.calendarIcon,
            flatpickrOptions.dateFormat,
            formatDate,
            inputOverride,
            isFullWidth,
            isReadOnly,
            onClick,
            onInputChange,
            outputType,
            placeholder,
            props,
        ],
    );

    const key = `flatpickr-${name || 'anon'}--${isReadOnly ? 'read-only' : 'active'}`;

    return (
        <Flatpickr
            className={rootClassName}
            ref={flatpickrRef}
            key={key}
            options={flatpickrOptions}
            render={flatpickrRender}
            overrides={overridesProp}
            value={value}
            onReady={onReady}
            onChange={isReadOnly ? undefined : onChangeDate}
            {...override.flatpickr}
        />
    );
}

DatePicker.overrides = ['root', 'input', 'flatpickr', 'flatpickrOptions'];

DatePicker.defaultProps = {
    labelMode: 'vertical',
    outputType: 'object',
    onChange: () => {},
    value: '',
    dateFormat: '',
    lang: 'en',
    isReadOnly: false,
    calendarButtonLabel: 'Today',
    placeholder: 'Select date',
    override: {},
};

DatePicker.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onEnter: PropTypes.func,
    /** Native input id */
    id: PropTypes.string,
    /** Native input name */
    name: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    isFullWidth: PropTypes.bool,
    /** Info popover */
    hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Error will be displayed below the component with style changes */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    outputType: PropTypes.oneOf(['object', 'string']),
    placeholder: PropTypes.string,
    lang: PropTypes.string,
    /** default to flatpickr format tokens */
    dateFormat: PropTypes.string,
    /** Custom formatDate function */
    formatDate: PropTypes.func,
    /** Custom text for Today's button */
    calendarButtonLabel: PropTypes.string,
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
};

export default React.memo(DatePicker);
