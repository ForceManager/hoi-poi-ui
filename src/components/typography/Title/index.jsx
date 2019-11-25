import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Text from '../Text';
import { getOverrides, useClasses } from '../../../utils/overrides';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Title');

function Title({
    children,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    //Overrides
    const rootClassName = classnames(classes.root, classNameProp);

    const override = getOverrides(overridesProp, Title.overrides);

    const rootProps = {
        ...props,
        className: rootClassName,
        ...override.root,
    };

    return (
        <Text type="bold" {...rootProps}>
            <h1 className={classes.textTitle}>{children}</h1>
        </Text>
    );
}

Title.overrides = ['root'];

Title.defaultProps = {
    className: '',
    overrides: {},
};

Title.propTypes = {
    className: PropTypes.string,
    overrides: PropTypes.object,
    children: PropTypes.node.isRequired,
};

export default React.memo(Title);
