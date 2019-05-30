import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import Button from '../../general/Button';
import { getOverrides } from '../../../utils/overrides';
import MultiplierControl from './MultiplierControl';
import styles from './styles';

function Multiplier({
    overrides: overridesProp,
    className: classNameProp,
    classes,
    schema,
    name,
    buttonLabel,
    buttonClassName,
    isFullWidth,
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
    const rootClassName = classnames(classes.root, classNameProp, {
        [classes.isFullWidth]: isFullWidth,
    });
    const buttonClassNames = classnames(classes.button, buttonClassName);
    const multiplierItemClassNames = classnames(classes.item, {
        [classes.separator]: separator,
        [classes.singleItem]: !Array.isArray(schema),
    });

    const rootProps = {
        className: rootClassName,
        ...override.root,
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

    const type = Array.isArray(schema) ? 'form' : 'field';
    const items = [];

    for (let index = 0; index < size; index++) {
        items.push(
            <MultiplierControl
                key={index}
                index={index}
                type={type}
                schema={schema}
                labelMode={schema.labelMode || labelMode}
                isFullWidth={schema.isFullWidth || isFullWidth}
                values={values[index]}
                errors={errors}
                onChange={onChangeMultiplier}
                onFocus={onFocus}
                onBlur={onBlur}
                onRemove={onClickRemove}
                className={multiplierItemClassNames}
                {...override.multiplierControl}
                overrides={override}
            />,
        );
    }

    const showButton = !(max && size >= max);

    return (
        <div {...rootProps}>
            <div className={classes.container} {...override.container}>
                {items}
            </div>
            {showButton && (
                <div className={classes.buttonContainer} {...override.buttonContainer}>
                    <Button
                        color="primary"
                        type="squared"
                        className={buttonClassNames}
                        onClick={onClickAdd}
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
