import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import styles from './styles';

import Text from '../Text';
import { getOverrides } from '../../../utils/overrides';

function Title({
    children,
    overrides: overridesProp,
    className: classNameProp,
    classes,
    ...props
}) {
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

export default React.memo(withStyles(styles, { name: 'Title' })(Title));
