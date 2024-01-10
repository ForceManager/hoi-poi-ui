import React, { memo, useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { getOverrides, useClasses } from '../../../utils/overrides';

import Text from '../../typography/Text';
import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'TitleDivider');

const TitleDivider = ({
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    type,
    children,
    ...props
}) => {
    const classes = useClasses(useStyles, classesProp);
    const override = getOverrides(overridesProp, TitleDivider.overrides);

    const rootProps = useMemo(
        () => ({
            ...props,
            className: classNames(classes.root, classNameProp),
        }),
        [classNameProp, classes.root, props],
    );

    return (
        <div {...rootProps} {...override.root}>
            <Text type={type} className={classes.text} {...override.Text}>
                {children}
            </Text>
        </div>
    );
};

TitleDivider.overrides = ['root', 'Text'];

TitleDivider.defaultProps = {
    type: 'subtitle',
    className: '',
    overrides: {},
};

TitleDivider.propTypes = {
    className: PropTypes.string,
    type: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle',
        'body1',
        'body',
        'button',
        'caption',
        'captionMedium',
        'badges',
        'overline',
    ]),
};

export default memo(TitleDivider);
