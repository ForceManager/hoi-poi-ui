import React, { memo } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DragWrapperTab = memo(({ id, children, moveTab, findTab }) => {
    const originalIndex = findTab(id).index;
    const [, drag] = useDrag(
        () => ({
            type: 'TAB',
            item: { id, originalIndex },
            collect: (monitor) => ({
                isDragging: monitor.isDragging(),
            }),
        }),
        [id, originalIndex, moveTab],
    );
    const [, drop] = useDrop(
        () => ({
            accept: 'TAB',
            hover({ id: draggedId }) {
                if (draggedId !== id) {
                    const { index: overIndex } = findTab(id);
                    moveTab(draggedId, overIndex);
                }
            },
        }),
        [findTab, moveTab],
    );
    return (
        <div key={id} ref={(node) => drag(drop(node))} className="hoi-poi-ui__tabs-tab-draggable">
            {children}
        </div>
    );
});

export default DragWrapperTab;
