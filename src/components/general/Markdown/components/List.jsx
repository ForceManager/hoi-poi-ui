import React, { memo, useMemo } from 'react';
import ListComponent from '../../List';

const List = ({ items, ...otherProps }) => {
    const listProps = useMemo(() => {
        const finalItems = items
            .filter((item) => item.type === 'li')
            .map((item) => item.props.children[0]);
        return { items: finalItems, ...otherProps };
    }, [items, otherProps]);

    return <ListComponent items={items} {...listProps} />;
};

export default memo(List);
