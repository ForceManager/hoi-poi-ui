import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import Form from '../../forms/Form';
import FieldControl from '../Form/FieldControl';
import Button from '../../general/Button';
import { getOverrides } from '../../../utils/overrides';
import styles from './styles';

function Multiplier({
    overrides: overridesProp,
    className: classNameProp,
    classes,
    schema,
    type,
    name,
    buttonLabel,
    buttonClassName,
    isFullwidth,
    max,
    separator,
    remove,
    values,
    errors,
    onChange,
    onFocus,
    onBlur,
    onRemove,
    labelMode,
    ...props
}) {
    // State
    const [size, setSize] = useState(1);

    // Overrides
    const override = getOverrides(overridesProp, Multiplier.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);
    const buttonClassNames = classnames(classes.multiplierButton, buttonClassName);
    const MultiplierItemClassNames = classnames(classes.multiplierItem, {
        [classes.separator]: separator,
        [classes.singleItem]: !Array.isArray(schema),
    });

    const rootProps = {
        className: rootClassName,
    };

    const onClickAdd = useCallback(() => {
        setSize(size + 1);
    }, [size]);

    const onClickRemove = useCallback(
        (index) => {
            onRemove && onRemove(index);
            setSize(size - 1);
        },
        [size, onRemove],
    );

    const onChangeMultiplier = useCallback(
        (value, index) => {
            onChange && onChange(value, index);
        },
        [onChange],
    );

    const items = [];

    for (let index = 0; index < size; index++) {
        if (Array.isArray(schema)) {
            items.push(
                <Form
                    key={index}
                    overrides={overridesProp}
                    schema={schema}
                    values={values[index]}
                    error={errors}
                    onChange={(value) => onChangeMultiplier(value, index)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    removeSection={remove}
                    onRemoveSection={() => onClickRemove(index)}
                    className={MultiplierItemClassNames}
                    {...override.MultiplierItem}
                />,
            );
        } else if (typeof schema === 'object') {
            let field = { ...schema };
            field.label = index === 0 ? field.label : '';
            items.push(
                <FieldControl
                    key={index}
                    labelMode={schema.labelMode || labelMode}
                    isFullWidth={schema.isFullwidth || isFullwidth}
                    field={field}
                    value={values[index]}
                    error={null}
                    onChange={(value) => onChangeMultiplier(value, index)}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    className={MultiplierItemClassNames}
                    {...override.MultiplierItem}
                />,
            );
        }
    }

    function renderButton() {
        if (max && size >= max) return;
        return (
            <div className={classes.multiplierButtonContainer}>
                <Button
                    color="primary"
                    type="squared"
                    className={buttonClassNames}
                    onClick={onClickAdd}
                    {...override.MultiplierButton}
                >
                    {buttonLabel}
                </Button>
            </div>
        );
    }

    return (
        <div {...rootProps}>
            <div className={classes.multiplierContainer}>{items}</div>
            {renderButton()}
        </div>
    );
}

Multiplier.overrides = ['MultiplierItem', 'MultiplierButton'];

Multiplier.defaultProps = {
    errors: {},
    values: [],
    fields: [],
    separator: false,
    remove: false,
    labelMode: 'horizontal',
    isFullWidth: false,
};

Multiplier.propTypes = {
    /** Native form class */
    schema: PropTypes.any,
    className: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    labelMode: PropTypes.string,
    label: PropTypes.string,
    buttonLabel: PropTypes.string,
    buttonClassName: PropTypes.string,
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            labelMode: PropTypes.string,
            isFullWidth: PropTypes.string,
            name: PropTypes.string,
            type: PropTypes.string,
            placeholder: PropTypes.string,
            hint: PropTypes.string,
            isRequired: PropTypes.bool,
            isReadOnly: PropTypes.bool,
            attrs: PropTypes.object,
            className: PropTypes.string,
        }),
    ),
    max: PropTypes.number,
    separator: PropTypes.bool,
    remove: PropTypes.bool,
    values: PropTypes.array,
    errors: PropTypes.object,
    isFullWidth: PropTypes.bool,
};

export default React.memo(withStyles(styles, { name: 'Multiplier' })(Multiplier));
