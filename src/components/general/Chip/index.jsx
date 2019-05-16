import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';

import Icon from '../../general/Icon';
import styles from './styles';

function Chip({
    children,
    className: classNameProp,
    overrides: overridesProp,
    classes,
    onClose,
    url,
    isShrinked,
    theme,
    ...props
}) {
    const rootClassName = classnames(classes.root, classNameProp);

    const override = getOverrides(overridesProp, Chip.overrides);

    const rootProps = {
        ...props,
        className: rootClassName,
    };

    const matches = useMemo(() => children && children.match(/\b(\w)/g), [children]);

    return (
        <div {...rootProps}>
            <div className={classes.wrapper} {...override.wrapper}>
                {url && (
                    <img
                        {...override.img}
                        className={isShrinked ? classes.shrinkedPicture : classes.picture}
                        {...override.picture}
                        src={url}
                    />
                )}
                {isShrinked && !url && (
                    <span className={classes.shrinked} {...override.shrinked}>
                        {matches}
                    </span>
                )}
                {!isShrinked && (
                    <Fragment>
                        <div className={classes.text} {...override.text}>
                            {children}
                        </div>
                        {onClose && (
                            <Icon
                                {...override.Icon}
                                onClick={onClose}
                                {...override.onClose}
                                className={classes.close}
                                name="close"
                                size="small"
                                color={theme.colors.text.greySoft}
                            />
                        )}
                    </Fragment>
                )}
            </div>
        </div>
    );
}

Chip.overrides = ['wrapper', 'img', 'picture', 'shrinked', 'text', 'Icon', 'onClose'];

Chip.defaultProps = {
    className: '',
    overrides: {},
    isShrinked: false,
    url: '',
};

Chip.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    overrides: PropTypes.object,
    onClose: PropTypes.func,
    isShrinked: PropTypes.bool,
    url: PropTypes.string,
};

export default React.memo(withStyles(styles, { name: 'Chip', injectTheme: true })(Chip));
