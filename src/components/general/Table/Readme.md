Default:

```jsx
import Icon from '../../general/Icon';
import Text from '../../typography/Text';

const columns = [
    { label: 'Description', id: 'label' },
    { label: 'value', id: 'value' },
    { label: 'Featured', id: 'isFeatured' },
];

const rows = [
    {
        label: <Text color="neutral700">Cell1</Text>,
        value: 1,
        isFeatured: <Icon name="starBorder" />,
    },
    {
        value: 2,
        label: <Text color="neutral700">Cell2</Text>,
        isFeatured: <Icon name="starBorder" />,
    },
    {
        value: 4,
        label: <Text color="neutral700">Cell3</Text>,
        isFeatured: <Icon name="star" />,
    },
];

<div>
    <Table columns={columns} rows={rows} />
</div>;
```

With headers:

```jsx
import Icon from '../../general/Icon';
import Text from '../../typography/Text';

const columns = [
    { label: 'Description', id: 'label' },
    { label: 'value', id: 'value' },
    { label: 'Featured', id: 'isFeatured' },
];

const rows = [
    {
        label: <Text>Cell1</Text>,
        value: 3,
        isFeatured: <Icon name="starBorder" />,
    },
    {
        value: 5,
        label: 'Cell2',
        isFeatured: <Icon name="starBorder" />,
    },
    {
        value: 7,
        label: 'Cell3',
        isFeatured: <Icon name="star" />,
    },
];

<div>
    <Table columns={columns} rows={rows} withHeaders />
</div>;
```

### Component tree

---

-   root - root element
-   [Text](#/Forms?id=text)
