Menus with click:

```jsx
import { Menus, Icon } from 'hoi-poi-ui';

const items = [
    {
        title: 'Create',
        icon: <Icon name="info" />,
        onClick: () => console.log('create'),
    },
    {
        title: 'Edit',
        icon: <Icon name="info" />,
        onClick: () => console.log('edit'),
    },
    {
        title: 'Delete',
        icon: <Icon name="info" />,
        onClick: () => console.log('delete'),
    },
];

<Menus title="Menus" icon={<Icon name="threeDots" />} items={items} />;
```

Menus with hower:

```jsx
import { Menus, Icon } from 'hoi-poi-ui';

const items = [
    {
        title: 'Create',
        icon: <Icon name="info" />,
        onClick: () => console.log('create'),
    },
    {
        title: 'Edit',
        icon: <Icon name="info" />,
        onClick: () => console.log('edit'),
    },
    {
        title: 'Delete',
        icon: <Icon name="info" />,
        onClick: () => console.log('delete'),
    },
];

<Menus title="Hover me" items={items} triggerSubMenuAction="hover" />;
```
