import React, { memo } from 'react';
import { useDrop } from 'react-dnd';

const DragWrapperContainer = memo(({ children }) => {
    const [, drop] = useDrop(() => ({ accept: 'TAB' }));
    return <div ref={drop}>{children}</div>;
});

export default DragWrapperContainer;
