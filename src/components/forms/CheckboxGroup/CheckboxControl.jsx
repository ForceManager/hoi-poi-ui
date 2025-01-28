import React, { Fragment, useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { createUseStyles, useTheme } from '../../../utils/styles';
import Popover from '../../utils/Popover';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Checkbox from '../../general/Checkbox';
import Icon from '../../general/Icon';
import Text from '../../typography/Text';

import styles from './styles';
const useStyles = createUseStyles(styles, 'CheckboxControl');

function CheckboxControl({
    classes: classesProp,
    overrides: overridesProp,
    onChange = () => {},
    value = false,
    option = {},
    isReadOnly = false,
    color,
    error,
}) {
    const classes = useClasses(useStyles, classesProp);
    const theme = useTheme();
    // Overrides
    const override = getOverrides(overridesProp, CheckboxControl.overrides);

    const onChangeCheckbox = useCallback(
        (e) => {
            e.stopPropagation && e.stopPropagation();
            onChange && onChange(option.value, e);
        },
        [onChange, option],
    );

    const infoDetails = useMemo(() => {
        if (!option.hint || (!option.hint.title && !option.hint.body)) return;
        return (
            <Fragment>
                <Text type="button" className={classes.popoverTitle}>
                    {option.hint.title}
                </Text>
                <Text>{option.hint.body}</Text>
            </Fragment>
        );
    }, [classes.popoverTitle, option.hint]);

    return (
        <Fragment>
            <div className={classes.checkboxWrapper} key={option.value}>
                <div
                    className={classes.checkboxControl}
                    onClick={isReadOnly ? undefined : () => onChangeCheckbox(option.value)}
                    {...override.checkboxControl}
                >
                    <Checkbox checked={value} isDisabled={isReadOnly} color={color} />
                    <span className={classes.checkboxLabel} {...override.checkboxLabel}>
                        {option.label}
                    </span>
                </div>
                {option.hint && (
                    <div className={classes.iconContainer}>
                        <Popover
                            className={classes.Popover}
                            placement="left"
                            content={infoDetails}
                            {...override.Popover}
                        >
                            <Icon
                                className={classes.info}
                                color={theme.colors.grey[500]}
                                name="info"
                                size="small"
                            />
                        </Popover>
                    </div>
                )}
            </div>
            {error && (
                <div className={classes.errorPerCheck} {...override.errorPerCheck}>
                    {error}
                </div>
            )}
        </Fragment>
    );
}

CheckboxControl.overrides = ['checkboxLabel', 'checkboxControl'];

CheckboxControl.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onChange: PropTypes.func,
    option: PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string,
        hint: PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.string,
        }),
    }),
    value: PropTypes.bool,
    isReadOnly: PropTypes.bool,
};

export default React.memo(CheckboxControl);
