import React, { Fragment, useMemo } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { getOverrides } from '../../../utils/overrides';

import Icon from '../../general/Icon';
import Text from '../../Typography/Text';
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
        <div {...rootProps} {...override.root}>
            <div className={classes.wrapper} {...override.wrapper}>
                {url && (
                    <img
                        className={isShrinked ? classes.shrinkedPicture : classes.picture}
                        src={url}
                        {...override.img}
                    />
                )}
                {isShrinked && !url && (
                    <Text className={classes.shrinked} {...override.shrinked}>
                        {matches}
                    </Text>
                )}
                {!isShrinked && (
                    <Fragment>
                        <Text className={classes.Text} {...override.Text}>
                            {children}
                        </Text>
                        {onClose && (
                            <Icon
                                onClick={onClose}
                                className={classes.close}
                                name="close"
                                size="small"
                                color={theme.colors.text.greySoft}
                                {...override.Icon}
                            />
                        )}
                    </Fragment>
                )}
            </div>
        </div>
    );
}

Chip.overrides = ['root', 'wrapper', 'img', 'shrinked', 'Text', 'Icon', 'onClose'];

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
