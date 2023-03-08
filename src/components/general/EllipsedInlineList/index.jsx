import React, { memo, useCallback, useEffect, useMemo, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { getOverrides, useClasses } from '../../../utils/overrides';
import { createUseStyles } from '../../../utils/styles';
import Text from '../../typography/Text';
import PostComponent from './components/PostComponent';

import styles from './styles';

const useStyles = createUseStyles(styles, 'EllipsedInlineList');

const EllipsedInlineList = ({
    className: classNameProp,
    classes: classesProp,
    items: list,
    overrides: overridesProp,
    postComponent: customPostComponent,
    separator = ',\u0020',
}) => {
    const [isTruncated, setIsTruncated] = useState(false);
    const [overflowCount, setOverflowCount] = useState(0);

    const containerRef = useRef();
    const resizeObserver = useRef(null);

    const classes = useClasses(useStyles, classesProp);
    const override = getOverrides(overridesProp, EllipsedInlineList.overrides);

    const handleEllipsis = useCallback(() => {
        if (!containerRef.current) return;
        
        const container = containerRef.current;
        const containerWidth = container.offsetWidth;
        const items = container.children;
        let itemsWidth = 0;
        let overflowItemsCount = 0;

        for (let i = 0; i < items.length; i++) {
            itemsWidth += items[i].offsetWidth;
            if (itemsWidth > containerWidth) {
                overflowItemsCount = items.length - i;
                break;
            }
        }

        setOverflowCount(overflowItemsCount);
        setIsTruncated(overflowItemsCount > 0);
    }, []);

    useEffect(() => {
        handleEllipsis();

        resizeObserver.current = new ResizeObserver(handleEllipsis);
        resizeObserver.current.observe(containerRef.current);

        return () => {
            if (resizeObserver.current) {
                resizeObserver.current.disconnect();
            }
        };
    }, [handleEllipsis]);

    const containerProps = useMemo(
        () => ({
            className: classNames(classes.root, classNameProp),
            ...override.root,
        }),
        [classNameProp, classes.root, override.root],
    );

    const listProps = useMemo(
        () => ({
            ref: containerRef,
            className: classes.list,
            isTruncated: true,
            ...override.List,
        }),
        [classes.list, override.List],
    );

    const countProps = useMemo(
        () => ({
            className: classes.count,
            color: 'orange500',
            count: overflowCount,
            ...override.Count,
        }),
        [classes.count, override.Count, overflowCount],
    );

    const FinalPostComponent = customPostComponent || PostComponent;

    return (
        <div {...containerProps}>
            <Text {...listProps}>
                {list.map((item, index) => (
                    <span key={index}>
                        {item}
                        {index === list.length - 1 ? '' : separator}
                    </span>
                ))}
            </Text>
            {isTruncated && <FinalPostComponent {...countProps} />}
        </div>
    );
};

EllipsedInlineList.overrides = ['root', 'List', 'Count'];

EllipsedInlineList.defaultProps = {
    separator: ',\u0020',
};

EllipsedInlineList.propTypes = {
    className: PropTypes.string,
    separator: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    overrides: PropTypes.object,
    postComponent: PropTypes.elementType,
};

export default memo(EllipsedInlineList);
