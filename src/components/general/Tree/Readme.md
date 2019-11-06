Default:

```jsx
const nodes = {
    name: 'react-treebeard',
    id: 1,
    toggled: true,
    children: [
        {
            id: 2,
            name: 'example',
            children: [
                { name: 'app.js' },
                { name: 'data.js' },
                { name: 'index.html' },
                { name: 'styles.js' },
                { name: 'webpack.config.js' },
            ],
        },
        {
            id: 3,
            name: 'node_modules',
            children: [],
        },
        {
            id: 4,
            name: 'src',
            children: [
                {
                    name: 'components',
                    id: 5,
                    children: [{ name: 'decorators.js' }, { name: 'treebeard.js' }],
                },
                { name: 'index.js' },
            ],
        },
        {
            id: 6,
            name: 'themes',
            children: [{ name: 'animations.js' }, { name: 'default.js' }],
        },
        { name: 'gulpfile.js' },
        { name: 'index.js' },
        { name: 'package.json' },
    ],
};

<div style={{ height: '300px', overflow: 'auto' }}>
    <Tree nodes={nodes} />
</div>;
```

Can select parents:

```jsx
const nodes = {
    name: 'react-treebeard',
    id: 1,
    toggled: true,
    children: [
        {
            id: 2,
            name: 'example',
            children: [
                { name: 'app.js' },
                { name: 'data.js' },
                { name: 'index.html' },
                { name: 'styles.js' },
                { name: 'webpack.config.js' },
            ],
        },
        {
            id: 3,
            name: 'node_modules',
            children: [],
        },
        {
            id: 4,
            name: 'src',
            children: [
                {
                    name: 'components',
                    id: 5,
                    children: [{ name: 'decorators.js' }, { name: 'treebeard.js' }],
                },
                { name: 'index.js' },
            ],
        },
        {
            id: 6,
            name: 'themes',
            children: [{ name: 'animations.js' }, { name: 'default.js' }],
        },
        { name: 'gulpfile.js' },
        { name: 'index.js' },
        { name: 'package.json' },
    ],
};

<div style={{ height: '300px', overflow: 'auto' }}>
    <Tree nodes={nodes} canSelectParents={true} />
</div>;
```

Disabled nodes

```jsx
const nodes = {
    name: 'react-treebeard',
    id: 1,
    toggled: true,
    children: [
        {
            id: 2,
            name: 'example',
            isDisabled: true,
            children: [
                { name: 'app.js' },
                { name: 'data.js' },
                { name: 'index.html' },
                { name: 'styles.js' },
                { name: 'webpack.config.js' },
            ],
        },
        {
            id: 3,
            name: 'node_modules',
            children: [],
        },
        {
            id: 4,
            name: 'src',
            children: [
                {
                    name: 'components',
                    id: 5,
                    children: [
                        { name: 'decorators.js', isDisabled: true },
                        { name: 'treebeard.js', isDisabled: true },
                    ],
                },
                { name: 'index.js' },
            ],
        },
        {
            id: 6,
            name: 'themes',
            children: [{ name: 'animations.js' }, { name: 'default.js' }],
        },
        { name: 'gulpfile.js', isDisabled: true },
        { name: 'index.js' },
        { name: 'package.json' },
    ],
};

<div style={{ height: '300px', overflow: 'auto' }}>
    <Tree nodes={nodes} canSelectParents={true} />
</div>;
```

Customs:

```jsx
const nodes = {
    name: 'react-treebeard',
    id: 1,
    toggled: true,
    children: [
        {
            id: 2,
            name: 'example',
            children: [
                { name: 'app.js' },
                { name: 'data.js' },
                { name: 'index.html' },
                { name: 'styles.js' },
                { name: 'webpack.config.js' },
            ],
        },
        {
            id: 3,
            name: 'node_modules',
            children: [],
        },
        {
            id: 4,
            name: 'src',
            children: [
                {
                    name: 'components',
                    id: 5,
                    children: [{ name: 'decorators.js' }, { name: 'treebeard.js' }],
                },
                { name: 'index.js' },
            ],
        },
        {
            id: 6,
            name: 'themes',
            children: [{ name: 'animations.js' }, { name: 'default.js' }],
        },
        { name: 'gulpfile.js' },
        { name: 'index.js' },
        { name: 'package.json' },
    ],
};

const customs = {
    NodeItem: (props) => {
        let icon = (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 50 50"
                style={{ marginRight: 10 }}
            >
                <path fill="none" d="M0 0h50v50H0z"></path>
                <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M41 15H28V2"
                ></path>
                <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                    d="M42 49H8V1h20l14 14z"
                ></path>
            </svg>
        );

        if (props.node.children) {
            icon = (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    version="1.1"
                    viewBox="0 0 50 50"
                    xmlSpace="preserve"
                    style={{ marginRight: 10 }}
                >
                    <path fill="none" d="M0 0H50V50H0z"></path>
                    <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M46 15v-4a2 2 0 00-2-2H18c-1.469 0-2.484-4-4-4H3a2 2 0 00-2 2v37a2 2 0 002 2h39a2 2 0 002-2"
                    ></path>
                    <path
                        fill="none"
                        stroke="#000"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        strokeWidth="2"
                        d="M1 44l5-27a2 2 0 012-2h39a2 2 0 012 2l-5 27"
                    ></path>
                </svg>
            );
        }
        return (
            <span style={{ display: 'flex', alignItems: 'center' }}>
                {icon} {props.node.name}
            </span>
        );
    },
};

<div style={{ height: '300px', overflow: 'auto' }}>
    <Tree nodes={nodes} customs={customs} />
</div>;
```

### Component tree

---

-   [root](https://github.com/storybookjs/react-treebeard)
