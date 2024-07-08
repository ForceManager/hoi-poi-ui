import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import Text from '../../typography/Text';
import Icon from '../Icon';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Breadcrumbs');

function Breadcrumbs({
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    onClick,
    items,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);

    // Overrides
    const override = getOverrides(overridesProp, Breadcrumbs.overrides);

    // Classes
    const rootClassName = classnames(
        classes.root,
        {
            [classes.clickables]: !!onClick,
        },
        classNameProp,
    );

    const rootProps = {
        ...props,
        className: rootClassName,
    };

    const onClickItem = useCallback(
        (item) => {
            onClick && onClick(item);
        },
        [onClick],
    );

    const breadcrumbItems = useMemo(() => {
        if (!items) return null;
        return items.reduce((arr, item, idx) => {
            if (item) {
                const isLast = idx === items.length - 1;
                arr.push(
                    <div
                        key={item.id || idx}
                        className={classes.item}
                        onClick={isLast ? undefined : () => onClickItem(item)}
                        {...override.item}
                    >
                        <Text {...override.Text}>{item.text}</Text>
                    </div>,
                );
            }

            if (idx < items.length - 1) {
                const dividerClass = classnames(classes.item, classes.divider);
                arr.push(
                    <div
                        key={`divider-${idx}`}
                        className={dividerClass}
                        {...override.item}
                        {...override.divider}
                    >
                        <Icon name="arrowRightRaw" size="raw"></Icon>
                    </div>,
                );
            }

            return arr;
        }, []);
    }, [
        classes.divider,
        classes.item,
        items,
        onClickItem,
        override.Text,
        override.divider,
        override.item,
    ]);

    return (
        <div {...rootProps} {...override.root}>
            {breadcrumbItems}
        </div>
    );
}

Breadcrumbs.overrides = ['root', 'item', 'divider'];

Breadcrumbs.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    onClick: PropTypes.func,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            text: PropTypes.string.isRequired,
        }),
    ),
};

export default React.memo(Breadcrumbs);
