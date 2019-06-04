Default:

```jsx
import { Link } from 'hoi-poi-ui';

const columns = [
    { key: 'id', name: 'ID', frozen: true, resizable: true },
    { key: 'title', name: 'Title', resizable: true },
    { key: 'subtitle', name: 'Subtitle' },
    { key: 'url', name: 'Url', formatter: ({ value }) => <Link href={value}>{value}</Link> },
];

const rows = [
    {
        id: 1,
        title: 'Lorem',
        subtitle: 'Ipsum',
        url: 'https://lipsum.com',
    },
    {
        id: 2,
        title: 'Lorem',
        subtitle: 'Ipsum',
        url: 'https://lipsum.com',
    },
    {
        id: 3,
        title: 'Lorem',
        subtitle: 'Ipsum',
        url: 'https://lipsum.com',
    },
    {
        id: 4,
        title: 'Lorem',
        subtitle: 'Ipsum',
        url: 'https://lipsum.com',
    },
];

<DataGrid columns={columns} rows={rows} count={rows.length} />;
```

### Component tree

---

-   root - root element
