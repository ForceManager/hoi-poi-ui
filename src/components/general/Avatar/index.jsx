import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import getImage from './getImage';

import styles from './styles';

function Avatar({
    className,
    classes,
    size,
    url,
    alt,
    placeholder,
    successCallback,
    errorCallback,
    ...props
}) {
    const rootClassName = classnames(classes.root, classes[size], className);
    const rootProps = {
        ...props,
        className: rootClassName,
    };

    const image = getImage(
        url,
        placeholder,
        alt,
        () => {
            successCallback && successCallback();
        },
        () => {
            errorCallback && errorCallback();
        },
    ).outerHTML;
    return <div {...rootProps} dangerouslySetInnerHTML={{ __html: image }}></div>;
}

Avatar.defaultProps = {
    size: 'medium',
};

Avatar.propTypes = {
    url: PropTypes.string,
    placeholder: PropTypes.string,
    alt: PropTypes.string,
    successCallback: PropTypes.func,
    errorCallback: PropTypes.func,
    size: PropTypes.oneOf(['tiny', 'small', 'medium', 'large', 'big', 'huge']),
};

export default React.memo(withStyles(styles, { name: 'Avatar' })(Avatar));
