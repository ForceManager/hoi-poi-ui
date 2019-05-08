import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';

import Icon from '../../general/Icon';
import styles from './styles';

function Chip({
    children,
    className: classNameProp,
    overrides,
    classes,
    onClose,
    url,
    isShrinked,
    theme,
    isOwner,
    ...props
}) {
    const rootClassName = classnames(classes.root, classNameProp, classes.flexStart);

    const rootProps = {
        ...props,
        className: rootClassName,
    };

    const shrinkedPicture = classes.shrinkedPicture;
    const picture = classes.picture;
    const matches = children.match(/\b(\w)/g);

    return (
        <div {...rootProps}>
            <div className={classes.wrapper}>
                {url && (
                    <img
                        className={isShrinked ? shrinkedPicture : picture}
                        src={url}
                        alt={'Profile'}
                    />
                )}
                {!isShrinked && (
                    <Fragment>
                        <div className={classes.text}>{children}</div>
                        {onClose && (
                            <Icon
                                onClick={onClose}
                                className={classes.close}
                                name="close"
                                size="small"
                                color="#b5bdc5"
                            />
                        )}
                    </Fragment>
                )}
                {isShrinked && !url && (
                    <Fragment>
                        <div className={classes.shrinked}>{matches}</div>
                    </Fragment>
                )}
            </div>
        </div>
    );
}

Chip.defaultProps = {
    className: '',
    overrides: {},
    isShrinked: false,
    url: false,
};

Chip.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overrides: PropTypes.object,
    onClose: PropTypes.func,
};

export default React.memo(withStyles(styles, { name: 'Chip', injectTheme: true })(Chip));
