import React, { useState, useCallback, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classnames from 'classnames';
import { Treebeard } from 'react-treebeard';

import { getOverrides } from '../../../utils/overrides';
import Icon from '../Icon';

import styles from './styles';

const Tree = ({
    overrides: overridesProp,
    classes,
    id,
    theme,
    onToggle,
    onSelect,
    nodes,
    customs,
    canSelectParents,
}) => {
    const [data, setData] = useState(nodes);
    const [cursor, setCursor] = useState(false);

    useEffect(() => {
        setData(nodes);
    }, [nodes]);

    const override = getOverrides(overridesProp, Tree.overrides);

    const onToggleNode = useCallback(
        (node, toggled) => {
            if (node.children) node.toggled = toggled;
            setData({ ...data });
            onToggle && onToggle(node);
        },
        [data, onToggle],
    );

    const onSelectNode = useCallback(
        (node) => {
            if (cursor) cursor.active = false;
            if (canSelectParents || (!node.children || !node.children.length)) node.active = true;
            else node.active = false;
            if (cursor && node && data.id !== node.id) data.active = false;
            setData({ ...data });
            setCursor(node);
            onSelect && onSelect(node);
        },
        [canSelectParents, cursor, data, onSelect],
    );

    const treeStyle = useMemo(
        () => ({
            tree: {
                base: {
                    listStyle: 'none',
                    background: 'transparent',
                    margin: 0,
                    padding: 0,
                },
                node: {
                    base: {
                        position: 'relative',
                    },
                    subtree: {
                        listStyle: 'none',
                        paddingLeft: '19px',
                    },
                },
            },
        }),
        [],
    );

    const decorators = useMemo(
        () => ({
            Container: (props) => {
                if (customs.Container) return <customs.Container {...props} />;

                const isSelectable =
                    (canSelectParents || (!props.node.children || !props.node.children.length)) &&
                    !props.node.isDisabled;

                const nodeClasses = classnames(classes.node, {
                    [`HoiPoi__Tree__${id}__node-id-${props.node.id}`]: id && props.node.id,
                    [classes.toggled]: props.node.toggled,
                    [classes.active]: props.node.active,
                    [classes.empty]: !props.node.children || !props.node.children.length,
                    [classes.isDisabled]: props.node.isDisabled,
                    [classes.isSelectable]: isSelectable,
                });

                const NodeIcon = (
                    <div
                        className={classes.nodeIcon}
                        onClick={!props.node.isDisabled ? props.onClick : undefined}
                        {...override.nodeIcon}
                    >
                        {customs.NodeIcon ? (
                            <customs.NodeIcon {...props} />
                        ) : (
                            <Icon name="chevron" size="small" />
                        )}
                    </div>
                );

                const NodeItem = (
                    <div
                        className={classes.nodeItem}
                        onClick={
                            !props.node.isDisabled ? () => onSelectNode(props.node) : undefined
                        }
                        {...override.nodeItem}
                    >
                        {customs.NodeItem ? <customs.NodeItem {...props} /> : props.node.name}
                    </div>
                );

                const Node = customs.Node ? (
                    <customs.Node {...props} NodeIcon={NodeIcon} NodeItem={NodeItem} />
                ) : (
                    <div className={nodeClasses} {...override.node}>
                        {NodeIcon}
                        {NodeItem}
                    </div>
                );

                return Node;
            },
        }),
        [
            customs.Container,
            customs.NodeIcon,
            customs.NodeItem,
            customs.Node,
            canSelectParents,
            classes.node,
            classes.toggled,
            classes.active,
            classes.empty,
            classes.isDisabled,
            classes.isSelectable,
            classes.nodeIcon,
            classes.nodeItem,
            id,
            override.nodeIcon,
            override.nodeItem,
            override.node,
            onSelectNode,
        ],
    );

    return (
        <Treebeard
            data={data}
            onToggle={onToggleNode}
            decorators={decorators}
            style={treeStyle}
            {...override.root}
        />
    );
};

Tree.overrides = ['root', 'node', 'nodeItem', 'nodeIcon'];

Tree.defaultProps = {
    nodes: {},
    customs: {},
};

Tree.propTypes = {
    id: PropTypes.any,
    onToggle: PropTypes.func,
    onSelect: PropTypes.func,
    nodes: PropTypes.shape({
        id: PropTypes.any,
        children: PropTypes.array,
        toggled: PropTypes.bool,
        active: PropTypes.bool,
        isSelectable: PropTypes.bool,
    }),
    canSelectParents: PropTypes.bool,
    customs: PropTypes.shape({
        Container: PropTypes.func,
        Node: PropTypes.func,
        NodeIcon: PropTypes.func,
        NodeItem: PropTypes.func,
    }),
};

export default React.memo(withStyles(styles, { name: 'Tree', injectTheme: true })(Tree));
