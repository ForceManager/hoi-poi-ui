import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../../general/Button';
import { getOverrides, useClasses } from '../../../utils/overrides';
import MultiplierControl from './MultiplierControl';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Multiplier');

function Multiplier({
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    schema,
    buttonLabel,
    buttonClassName,
    isReadOnly,
    max,
    onChange,
    onFocus,
    onBlur,
    customFields,
    orientation,
    error = {},
    value = [null],
    separator = false,
    labelMode = 'horizontal',
    isFullWidth = false,
}) {
    const classes = useClasses(useStyles, classesProp);
    // State
    const size = value.length;

    // Overrides
    const override = getOverrides(overridesProp, Multiplier.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp, {
        [classes.isFullWidth]: isFullWidth,
        [classes.vertical]: labelMode === 'vertical',
    });
    const buttonClassNames = classnames(classes.button, buttonClassName);
    const multiplierItemClassNames = classnames(classes.item, {
        [classes.separator]: separator,
        [classes.singleItem]: !Array.isArray(schema),
        [classes.horizontal]: orientation && orientation === 'horizontal',
    });

    const rootProps = {
        className: rootClassName,
        ...override.root,
    };

    const onClickAdd = useCallback(() => {
        const newValues = [...value];
        newValues.push(null);
        onChange && onChange(newValues, null, null, null, null, 'add');
    }, [onChange, value]);

    const onClickRemove = useCallback(
        (schema, index) => {
            const newValues = [...value.slice(0, index), ...value.slice(index + 1)];
            onChange && onChange(newValues, value[index], index, schema, null, 'remove');
        },
        [onChange, value],
    );

    const onChangeMultiplier = useCallback(
        (newValue, schema, index, field) => {
            const newValues = [...value];
            newValues[index] = newValue;
            onChange && onChange(newValues, newValue, index, schema, field);
        },
        [onChange, value],
    );

    const onBlurMultiplier = useCallback(
        (newValue, schema, index, field) => {
            const newValues = [...value];
            newValues[index] = newValue;
            onBlur && onBlur(newValues, newValue, index, schema, field);
        },
        [onBlur, value],
    );

    const type = Array.isArray(schema) ? 'form' : 'field';
    const items = [];

    const showButton = !(max && size >= max) && isReadOnly !== true;

    for (let index = 0; index < value.length; index++) {
        items.push(
            <MultiplierControl
                key={index}
                index={index}
                type={type}
                schema={schema}
                labelMode={schema.labelMode || labelMode}
                isFullWidth={schema.isFullWidth || isFullWidth}
                isReadOnly={isReadOnly || schema.isReadOnly}
                values={value[index]}
                errors={error[index]}
                onChange={onChangeMultiplier}
                onFocus={onFocus}
                onBlur={onBlurMultiplier}
                onRemove={size > 1 ? onClickRemove : undefined}
                className={multiplierItemClassNames}
                customFields={customFields}
                {...override.multiplierControl}
                overrides={override}
                removeIconClassName={classes.removeIcon}
                orientation={orientation}
            />,
        );
    }

    return (
        <div {...rootProps}>
            <div className={classes.container} {...override.container}>
                {items}
            </div>
            {showButton && (
                <div className={classes.buttonContainer} {...override.buttonContainer}>
                    <Button
                        className={buttonClassNames}
                        onClick={onClickAdd}
                        size="small"
                        type="terciary"
                        {...override.button}
                        overrides={override.button}
                    >
                        {buttonLabel}
                    </Button>
                </div>
            )}
        </div>
    );
}

Multiplier.overrides = ['root', 'multiplierControl', 'button'];

Multiplier.propTypes = {
    /** Native form class */
    schema: PropTypes.any,
    className: PropTypes.string,
    name: PropTypes.string,
    labelMode: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    buttonLabel: PropTypes.string,
    buttonClassName: PropTypes.string,
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            labelMode: PropTypes.string,
            isFullWidth: PropTypes.bool,
            name: PropTypes.string,
            type: PropTypes.string,
            placeholder: PropTypes.string,
            hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
            isRequired: PropTypes.bool,
            isReadOnly: PropTypes.bool,
            attrs: PropTypes.object,
            className: PropTypes.string,
        }),
    ),
    max: PropTypes.number,
    separator: PropTypes.bool,
    remove: PropTypes.bool,
    value: PropTypes.array,
    error: PropTypes.any,
    isFullWidth: PropTypes.bool,
    isReadOnly: PropTypes.bool,
    customFields: PropTypes.object,
    orientation: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default React.memo(Multiplier);
