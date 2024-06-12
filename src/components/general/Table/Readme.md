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
        props: {
            onClick: () => console.log('click'),
        },
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

With Scroll No Fixed Header:

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
    {
        value: 9,
        label: 'Cell4',
        isFeatured: <Icon name="starBorder" />,
    },
    {
        value: 14,
        label: 'Cell5',
        isFeatured: <Icon name="starBorder" />,
    },
    {
        value: 1,
        label: 'Cell6',
        isFeatured: <Icon name="star" />,
    },
];

<div style={{ height: '200px' }}>
    <Table columns={columns} rows={rows} withHeaders />
</div>;
```

With Scroll Fixed Header:

```jsx
import Icon from '../../general/Icon';
import Text from '../../typography/Text';

const columns = [
    { label: 'Description', id: 'label', width: '150px' },
    { label: 'value', id: 'value', headerAlign: 'center', align: 'center' },
    { label: 'Featured', id: 'isFeatured' },
];

const rows = [
    {
        label: <Text>Cell1_VeryLongDescriptionAddedHere</Text>,
        value: 3,
        isFeatured: <Icon name="starBorder" />,
    },
    {
        value: 5,
        label: 'Cell2_VeryLongDescription',
        isFeatured: <Icon name="starBorder" />,
    },
    {
        value: 7,
        label: 'Cell3_VeryLongDescription',
        isFeatured: <Icon name="star" />,
    },
    {
        value: 9,
        label: 'Cell4_VeryLongDescription',
        isFeatured: <Icon name="starBorder" />,
    },
    {
        value: 14,
        label: 'Cell5_VeryLongDescription',
        isFeatured: <Icon name="starBorder" />,
    },
    {
        value: 1,
        label: 'Cell6_VeryLongDescription',
        isFeatured: <Icon name="star" />,
    },
];

<div style={{ height: '200px' }}>
    <Table
        columns={columns}
        rows={rows}
        withHeaders
        isHeaderFixed
        isHeaderHighlighted
        isEvenBackground
    />
</div>;
```

### Component tree

---

-   root - root element
-   [Text](#/Forms?id=text)
