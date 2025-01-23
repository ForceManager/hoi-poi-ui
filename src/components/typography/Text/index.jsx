import React, { forwardRef, useRef, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import Tooltip from '../../utils/Tooltip';

import styles from './styles';

const useStyles = createUseStyles(styles, 'Text');

const Text = forwardRef(
    (
        {
            children,
            useTooltip,
            bold = false,
            medium = false,
            color,
            withDivider,
            isHighlighted,
            classes: classesProp,
            overrides: overridesProp,
            className: classNameProp,
            as = 'span',
            type = 'body',
            isTruncated = false,
            strikethrough = false,
            ...props
        },
        ref,
    ) => {
        const [tooltipContent, setTooltipContent] = useState(null);
        const defaultRef = useRef(null);
        const classes = useClasses(useStyles, classesProp);

        const rootClassName = classnames(classes.root, classNameProp, classes[type], {
            [classes.bold]: bold,
            [classes.medium]: !bold && medium,
            [classes.truncated]: isTruncated,
            [classes.divider]: withDivider,
            [classes.highlighted]: isHighlighted,
            [classes.strikethrough]: strikethrough,
        });

        const override = getOverrides(overridesProp, Text.overrides);

        const rootProps = useMemo(
            () => ({
                ...props,
                ...override.root,
            }),
            [override.root, props],
        );

        useEffect(() => {
            const finalRef = ref || defaultRef;
            if (useTooltip && finalRef.current?.offsetWidth < finalRef.current?.scrollWidth)
                setTooltipContent(<span>{children}</span>);
        }, [children, useTooltip, ref]);

        const style = useMemo(() => (!!color ? { color } : {}), [color]);

        const textContainer = useMemo(() => {
            const Tag = as || 'span';
            return (
                <Tag ref={ref || defaultRef} className={rootClassName} style={style} {...rootProps}>
                    {children}
                </Tag>
            );
        }, [as, children, ref, rootClassName, rootProps, style]);

        if (useTooltip)
            return (
                <Tooltip placement="top" content={tooltipContent}>
                    {textContainer}
                </Tooltip>
            );

        return textContainer;
    },
);

Text.overrides = ['root', 'Loader'];

Text.propTypes = {
    as: PropTypes.oneOf([
        'div',
        'span',
        'strong',
        'em',
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'pre',
        'blockquote',
        'label',
        'li',
    ]),
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
    color: PropTypes.string,
    overrides: PropTypes.object,
    children: PropTypes.node,
    isTruncated: PropTypes.bool,
    bold: PropTypes.bool,
    medium: PropTypes.bool,
    strikethrough: PropTypes.bool,
    useTooltip: PropTypes.bool,
    withDivider: PropTypes.bool,
    isHighlighted: PropTypes.bool,
};

export default React.memo(Text);
