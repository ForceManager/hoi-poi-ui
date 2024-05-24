import React, { useLayoutEffect, useRef, useState, useMemo } from 'react';
import { components } from 'react-select';
import classnames from 'classnames';

function displayTextWidth(text, font) {
    let canvas =
        displayTextWidth.canvas || (displayTextWidth.canvas = document.createElement('canvas'));
    let context = canvas.getContext('2d');
    context.font = font;
    let metrics = context.measureText(text);
    return metrics.width;
}

export default React.memo(({ children, selectProps, ...props }) => {
    let [values, input] = children;
    const containerRef = useRef();
    const numValues = useRef(values?.length);
    const [showMore, setShowMore] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useLayoutEffect(() => {
        if (containerRef.current?.scrollHeight > containerRef.current?.offsetHeight) {
            setShowMore(true);
        } else {
            setShowMore(false);
        }
        console.log(containerRef.current.offsetHeight, containerRef.current);
    }, [values?.length]);

    console.log(values);

    if (Array.isArray(values)) {
        values?.forEach((value) => {
            console.log(
                containerRef.current.offsetWidth,
                Math.floor(
                    displayTextWidth(value?.props?.data?.label, '12px Roboto') + 4 + 18 + 8 + 4 + 6,
                ),
            );
        });
    }
    return (
        <components.ValueContainer {...props} selectProps={selectProps}>
            <div
                ref={containerRef}
                className={classnames('hoi-poi-select__show-more-container', {
                    'hoi-poi-select__show-more-container--max': showMore && expanded,
                })}
            >
                {values}
                {showMore && !expanded && <span>polllo</span>}
                {input}
            </div>
        </components.ValueContainer>
    );
});
