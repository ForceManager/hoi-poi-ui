import React, { memo, useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import Text from '../../typography/Text';

import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles, useTheme } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'List');

const List = forwardRef(
    (
        {
            bullet,
            classes: classesProp,
            className,
            items,
            type,
            overrides: overridesProp,
            unStyled,
        },
        ref,
    ) => {
        const classes = useClasses(useStyles, classesProp);
        const override = getOverrides(overridesProp, List.overrides);
        const theme = useTheme();

        const ListComponent = useMemo(() => (type === 'ordered' ? 'ol' : 'ul'), [type]);

        const rootProps = useMemo(
            () => ({
                className: classNames(className, classes.root, {
                    [classes.unStyled]: unStyled || !!bullet,
                }),
                ref,
                ...override.root,
            }),
            [bullet, className, classes.root, classes.unStyled, override.root, ref, unStyled],
        );

        const listItemProps = useMemo(
            () => ({
                className: classNames(classes.listItem, { [classes.withCustomBullet]: !!bullet }),
                ...override.listItem,
            }),
            [classes.listItem, classes.withCustomBullet, bullet, override.listItem],
        );

        const textProps = useMemo(
            () => ({
                className: classes.text,
                ...override.Text,
            }),
            [classes.text, override.Text],
        );

        const iconProps = useMemo(
            () => ({
                className: classes.bullet,
                name: bullet,
                color: theme.colors.orange500,
                ...override.Icon,
            }),
            [bullet, classes.bullet, override.Icon, theme.colors.orange500],
        );

        const listItems = useMemo(
            () =>
                items.map((item, idx) => (
                    <li key={idx} {...listItemProps}>
                        {bullet && !unStyled && <Icon {...iconProps} />}
                        <Text {...textProps}>{item}</Text>
                    </li>
                )),
            [bullet, iconProps, items, listItemProps, textProps, unStyled],
        );

        return <ListComponent {...rootProps}>{listItems}</ListComponent>;
    },
);

List.overrides = ['root', 'listItem', 'Text', 'Icon'];

List.defaultProps = {
    type: 'unordered',
    unStyled: false,
};

List.propTypes = {
    classes: PropTypes.object,
    className: PropTypes.string,
    /** Any valid icon name available in the hoi-poi library */
    bullet: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    overrides: PropTypes.object,
    type: PropTypes.oneOf(['unordered', 'ordered', 'unstyled']),
    unStyled: PropTypes.bool,
};

export default memo(List);
