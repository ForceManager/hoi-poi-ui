Menus with click:

```jsx
import { Menus, Icon, Text } from 'hoi-poi-ui';

const items = [
    {
        title: <Text bold>Bruce Wayne</Text>,
        infoItem: true,
        icon: <Icon name="emptyAvatar" size="medium" color="#a9b1b9" />,
    },
    {
        title: <Text>Edit</Text>,
        icon: <Icon name="info" color="#a9b1b9" />,
        onClick: () => console.log('edit'),
    },
    {
        title: <Text>Delete</Text>,
        icon: <Icon name="info" color="#a9b1b9" />,
        onClick: () => console.log('delete'),
    },
];

<Menus title={<Text>Click me</Text>} icon={<Icon name="threeDots" />} items={items} />;
```

Menus with hower:

```jsx
import { Menus, Icon, Text } from 'hoi-poi-ui';

const items = [
    {
        title: <Text>Create</Text>,
        icon: <Icon name="info" />,
        onClick: () => console.log('create'),
    },
    {
        title: <Text>Edit</Text>,
        icon: <Icon name="info" />,
        onClick: () => console.log('edit'),
    },
    {
        title: <Text>Delete</Text>,
        icon: <Icon name="info" />,
        onClick: () => console.log('delete'),
    },
];

<Menus title={<Text>Hover me</Text>} items={items} triggerAction="hover" />;
```

Small:

```jsx
import { Menus, Icon, Text } from 'hoi-poi-ui';

const items = [
    {
        title: <Text>Create</Text>,
        icon: <Icon name="info" />,
        onClick: () => console.log('create'),
    },
    {
        title: <Text>Edit</Text>,
        icon: <Icon name="info" />,
        onClick: () => console.log('edit'),
    },
    {
        title: <Text>Delete</Text>,
        icon: <Icon name="info" />,
        onClick: () => console.log('delete'),
    },
];

<Menus title={<Text>Click me</Text>} icon={<Icon name="threeDots" />} items={items} size="small" />;
```
