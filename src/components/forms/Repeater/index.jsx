import React, { useState } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import Form from '../../forms/Form';
import FieldControl from '../Form/FieldControl';
import Button from '../../general/Button';
import { getOverrides } from '../../../utils/overrides';
import styles from './styles';

function Repeater({
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
    const [size, setSize] = useState(2);

    // Overrides
    const override = getOverrides(overridesProp, Repeater.overrides);

    // Classes
    const rootClassName = classnames(classes.root, classNameProp);
    const buttonClassNames = classnames(classes.repeaterButton, buttonClassName);
    const RepeaterItemClassNames = classnames(classes.repeaterItem, {
        [classes.separator]: separator,
        [classes.singleItem]: !Array.isArray(schema),
    });

    const rootProps = {
        className: rootClassName,
    };

    const items = [];

    const onClickAdd = () => setSize(size + 1);

    const onClickRemove = (index) => {
        onRemove(index);
        setSize(size - 1);
    };

    const onChangeRepeater = (value, index) => {
        onChange(value, index);
    };

    for (let index = 0; index < size; index++) {
        if (Array.isArray(schema)) {
            items.push(
                <div key={index} className={RepeaterItemClassNames} {...override.RepeaterItem}>
                    <Form
                        overrides={overridesProp}
                        schema={schema}
                        values={values[index]}
                        error={errors}
                        onChange={(value) => onChangeRepeater(value, index)}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        removeSection={remove}
                        onRemoveSection={() => onClickRemove(index)}
                    />
                </div>,
            );
        } else if (typeof schema === 'object') {
            let field = { ...schema };
            field.label = index === 0 ? field.label : '';
            items.push(
                <div key={index} className={RepeaterItemClassNames} {...override.RepeaterItem}>
                    <FieldControl
                        labelMode={schema.labelMode || labelMode}
                        isFullWidth={schema.isFullwidth || isFullwidth}
                        field={field}
                        value={values[index]}
                        error={null}
                        onChange={(value) => onChangeRepeater(value, index)}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        className={schema.className}
                    />
                </div>,
            );
        }
    }

    return (
        <div {...rootProps} {...override.Repeater}>
            <div className={classes.repeaterContainer}>{items}</div>
            <div className={classes.repeaterButtonContainer}>
                {!max || (max && size < max) ? (
                    <Button
                        color="primary"
                        type="squared"
                        className={buttonClassNames}
                        onClick={onClickAdd}
                        {...override.RepeaterButton}
                    >
                        {buttonLabel}
                    </Button>
                ) : null}
            </div>
        </div>
    );
}

Repeater.overrides = ['Repeater', 'RepeaterItem', 'RepeaterButton'];

Repeater.defaultProps = {
    errors: {},
    values: [],
    fields: [],
    separator: false,
    remove: false,
    labelMode: 'horizontal',
    isFullWidth: false,
};

Repeater.propTypes = {
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

export default React.memo(withStyles(styles, { name: 'Repeater' })(Repeater));
