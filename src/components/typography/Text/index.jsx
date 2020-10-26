import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { getOverrides, useClasses } from '../../../utils/overrides';

import { createUseStyles } from '../../../utils/styles';
import styles from './styles';
const useStyles = createUseStyles(styles, 'Text');

function Text({
    children,
    isTruncated,
    type,
    bold,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    ...props
}) {
    const classes = useClasses(useStyles, classesProp);
    //Overrides
    const rootClassName = classnames(classes.root, classNameProp, classes[type], {
        [classes.bold]: bold,
        [classes.truncated]: isTruncated,
    });

    const override = getOverrides(overridesProp, Text.overrides);

    const rootProps = {
        ...props,
        ...override.root,
    };

    return (
        <span className={rootClassName} {...rootProps}>
            {children}
        </span>
    );
}

Text.overrides = ['root', 'Loader'];

Text.defaultProps = {
    type: 'body',
    className: '',
    overrides: {},
    isTruncated: false,
};

Text.propTypes = {
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
    overrides: PropTypes.object,
    children: PropTypes.node,
    isTruncated: PropTypes.bool,
    bold: PropTypes.bool,
};

export default React.memo(Text);
