import React, { memo, useMemo } from 'react';
import classNames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';

const useStyles = createUseStyles(styles, 'Divider');

const Divider = ({
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    ...props
}) => {
    const classes = useClasses(useStyles, classesProp);
    const override = getOverrides(overridesProp, Divider.overrides);

    const rootProps = useMemo(
        () => ({
            ...props,
            className: classNames(classes.root, classNameProp),
        }),
        [classNameProp, classes.root, props],
    );

    return <div {...rootProps} {...override.root} />;
};

export default memo(Divider);
