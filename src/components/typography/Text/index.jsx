import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import defaultTheme from '../../../utils/styles/defaultTheme';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import Tooltip from '../../utils/Tooltip';

import styles from './styles';

const useStyles = createUseStyles(styles, 'Text');

function Text({
    children,
    isTruncated,
    useTooltip,
    type,
    bold,
    color,
    classes: classesProp,
    overrides: overridesProp,
    className: classNameProp,
    ...props
}) {
    const [tooltipContent, setTooltipContent] = useState(null);
    const ref = useRef(null);
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

    const style = {};
    if (color && defaultTheme.colors[color]) style.color = defaultTheme.colors[color];

    useEffect(() => {
        if (useTooltip && ref.current?.offsetWidth < ref.current?.scrollWidth)
            setTooltipContent(<span>{children}</span>);
    }, [children, useTooltip]);

    if (useTooltip)
        return (
            <Tooltip placement="top" content={tooltipContent}>
                <span ref={ref} className={rootClassName} {...rootProps} style={style}>
                    {children}
                </span>
            </Tooltip>
        );

    return (
        <span className={rootClassName} {...rootProps} style={style}>
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
    color: PropTypes.oneOf([
        'neutralBase',
        'neutral100',
        'neutral200',
        'neutral300',
        'neutral400',
        'neutral500',
        'neutral600',
        'neutral700',
        'neutral800',
        'neutral900',
        'red100',
        'red200',
        'red400',
        'red500',
        'red600',
        'red700',
        'red900',
        'orange100',
        'orange200',
        'orange400',
        'orange500',
        'orange600',
        'orange700',
        'orange900',
        'green100',
        'green200',
        'green400',
        'green500',
        'green600',
        'green700',
        'green900',
        'blue100',
        'blue200',
        'blue400',
        'blue500',
        'blue600',
        'blue700',
        'blue900',
        'purple100',
        'purple200',
        'purple400',
        'purple500',
        'purple600',
        'purple700',
        'purple900',
        'aqua100',
        'aqua200',
        'aqua400',
        'aqua500',
        'aqua600',
        'aqua700',
        'aqua900',
        'yellow100',
        'yellow200',
        'yellow400',
        'yellow500',
        'yellow600',
        'yellow700',
        'yellow900',
        'turquoise100',
        'turquoise200',
        'turquoise400',
        'turquoise500',
        'turquoise600',
        'turquoise700',
        'turquoise900',
    ]),
    overrides: PropTypes.object,
    children: PropTypes.node,
    isTruncated: PropTypes.bool,
    bold: PropTypes.bool,
    useTooltip: PropTypes.bool,
};

export default React.memo(Text);
