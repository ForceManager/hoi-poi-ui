import React, { memo, useMemo } from 'react';
import ListComponent from '../../List';

const List = ({ items, ...otherProps }) => {
    const listProps = useMemo(() => {
        const finalItems = items
            .filter((item) => item.type === 'li')
            .map((item) => item?.props?.children || null);
        return { items: finalItems, ...otherProps };
    }, [items, otherProps]);

    return <ListComponent {...listProps} />;
};

export default memo(List);
