import React, { useCallback, forwardRef, memo } from 'react';
import ScrollBar from '../../../../../utils/ScrollBar';

const CustomScrollbars = ({ onScroll, forwardedRef, style, children }) => {
    const refSetter = useCallback(
        (scrollbarsRef) => {
            if (scrollbarsRef) {
                forwardedRef(scrollbarsRef.view);
            } else {
                forwardedRef(null);
            }
        },
        [forwardedRef],
    );

    return (
        <ScrollBar ref={refSetter} style={{ ...style, paddingRight: 10, overflow: 'hidden' }} onScroll={onScroll}>
            {children}
        </ScrollBar>
    );
};

const CustomScrollbarsVirtualList = forwardRef((props, ref) => (
    <CustomScrollbars {...props} forwardedRef={ref} />
));

export default memo(CustomScrollbarsVirtualList);
