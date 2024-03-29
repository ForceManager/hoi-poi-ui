import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';

import Label from '../Label';
import Checkbox from '../../general/Checkbox';
import Text from '../../typography/Text';
import Link from '../../typography/Link';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'CheckboxInput');

function CheckboxInput({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    onChange,
    id,
    name,
    value,
    label,
    labelMode,
    hint,
    error,
    isRequired,
    isReadOnly,
    isFullWidth,
    isBulk,
    bulkEditLabel,
    bulkCancelLabel,
    onBulkEdit,
    onBulkCancel,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    // State
    const [bulkEditable, setBulkEditable] = useState(false);
    // Overrides
    const override = getOverrides(overridesProp, CheckboxInput.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.isReadOnly]: isReadOnly,
            [classes[labelMode]]: labelMode,
            [classes.errored]: error,
            [classes.isFullWidth]: isFullWidth,
            [classes.withBulk]: bulkEditable,
            [classes.withErrorBulk]: error && bulkEditable,
        },
        classNameProp,
    );

    const rootProps = {
        className: rootClassName,
    };

    const labelProps = {
        className: classes.Label,
        isRequired,
        hint,
        ...override.Label,
    };

    const onClickBulkEdit = useCallback(() => {
        setBulkEditable(true);
        onBulkEdit && onBulkEdit();
    }, [onBulkEdit]);

    const onClickBulkCancel = useCallback(() => {
        setBulkEditable(false);
        onBulkCancel && onBulkCancel();
    }, [onBulkCancel]);

    const onCheck = useCallback(() => {
        onChange && onChange(!value);
    }, [onChange, value]);

    const checkboxProps = {
        id,
        name,
        className: classes.checkbox,
        checked: !!value,
        onChange: onCheck,
        isDisabled: isReadOnly,
        classes: classesProp,
        ...override.Checkbox,
    };

    return (
        <div {...rootProps} {...override.root}>
            {label && <Label {...labelProps}>{label}</Label>}
            {isBulk && !bulkEditable && (
                <Text className={classes.bulkEdit} onClick={onClickBulkEdit}>
                    {bulkEditLabel}
                </Text>
            )}
            {(!isBulk || (isBulk && bulkEditable)) && (
                <div className={classes.formControl} {...override.formControl}>
                    <Checkbox {...checkboxProps} />
                    {error && (
                        <div className={classes.error} {...override.error}>
                            {error}
                        </div>
                    )}
                    {bulkEditable && (
                        <Link className={classes.bulkCancel} onClick={onClickBulkCancel}>
                            {bulkCancelLabel}
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}

CheckboxInput.overrides = ['root', 'Checkbox', 'error', 'formControl', 'Label'];

CheckboxInput.defaultProps = {
    labelMode: 'horizontal',
    onChange: () => {},
    value: '',
    isReadOnly: false,
    override: {},
};

CheckboxInput.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    /** Native input id */
    id: PropTypes.string,
    /** Native input name */
    name: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string,
    labelMode: PropTypes.oneOf(['horizontal', 'vertical']),
    /** Info popover */
    hint: PropTypes.string,
    /** Error will be displayed below the component with style changes */
    error: PropTypes.string,
    isRequired: PropTypes.bool,
    isReadOnly: PropTypes.bool,
};

export default React.memo(CheckboxInput);
