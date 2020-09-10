import React, { useRef, useCallback, useMemo } from 'react';
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

// Safari fix
(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!isSafari) return;
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
    type,
    outputType,
    lang,
    isReadOnly,
    ...props
}) {
    const flatpickrRef = useRef();
    const classes = useClasses(useStyles, classesProp);

    // Overrides
    const override = getOverrides(overridesProp, DatePicker.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);

    const flatpickrOptions = useMemo(() => {
        const defaultDateFormats = { date: 'Y-m-d', datetime: 'Y-m-d H:i:S', time: 'H:i' };
        return {
            enableTime: type !== 'date',
            noCalendar: type === 'time',
            dateFormat: dateFormat || defaultDateFormats[type],
            formatDate,
            locale: flatpickrl10n[lang],
            clickOpens: !isReadOnly,
            time_24hr: true,
            ...override.flatpickrOptions,
        };
    }, [dateFormat, formatDate, isReadOnly, lang, override.flatpickrOptions, type]);

    const onReady = useCallback(
        (_, __, fp) => {
            fp.calendarContainer.classList.add(classes.container);
        },
        [classes.container],
    );

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

    const onOpenCalendar = useCallback((e) => {
        e.stopPropagation();
        flatpickrRef.current.flatpickr.open();
    }, []);

    const flatpickrRender = useCallback(
        ({ className, value }, ref) => {
            const formatValue =
                value && outputType === 'object'
                    ? formatDate
                        ? formatDate(value, flatpickrOptions.dateFormat)
                        : flatpickr.formatDate(value, flatpickrOptions.dateFormat)
                    : value;
            const inputClasses =
                value && !isReadOnly ? { postCloseComponent: classes.close } : null;
            return (
                <Input
                    {...props}
                    value={formatValue}
                    className={className}
                    isReadOnly={isReadOnly}
                    onChange={isReadOnly ? undefined : onInputChange}
                    classes={inputClasses}
                    overrides={{ input: { ref } }}
                    postComponent={
                        <Icon
                            onClick={onOpenCalendar}
                            className={type === 'time' ? classes.clockIcon : classes.calendarIcon}
                            name={type === 'time' ? 'clock' : 'calendar'}
                        />
                    }
                />
            );
        },
        [
            classes.calendarIcon,
            classes.clockIcon,
            classes.close,
            flatpickrOptions.dateFormat,
            formatDate,
            isReadOnly,
            onInputChange,
            onOpenCalendar,
            outputType,
            props,
            type,
        ],
    );

    const key = `flatpickr-${name || 'anon'}--${isReadOnly ? 'read-only' : 'active'}`;
    return (
        <div className={rootClassName}>
            <Flatpickr
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
        </div>
    );
}

DatePicker.overrides = [
    'root',
    'input',
    'error',
    'info',
    'formControl',
    'Label',
    'flatpickr',
    'flatpickrOptions',
];

DatePicker.defaultProps = {
    labelMode: 'horizontal',
    type: 'date',
    outputType: 'object',
    onChange: () => {},
    value: '',
    dateFormat: '',
    lang: 'en',
    isReadOnly: false,
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
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    /** Info will be displayed below the component with style changes */
    info: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    type: PropTypes.oneOf(['date', 'datetime', 'time']),
    outputType: PropTypes.oneOf(['object', 'string']),
    lang: PropTypes.string,
    /** default to flatpickr format tokens */
    dateFormat: PropTypes.string,
    /** Custom formatDate function */
    formatDate: PropTypes.func,
};

export default React.memo(DatePicker);
