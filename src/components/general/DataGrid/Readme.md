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

Empty:

Component can be customized with `emptyComponent`

```jsx
import { Link } from 'hoi-poi-ui';

const columns = [
    { key: 'id', name: 'ID', frozen: true, resizable: true },
    { key: 'title', name: 'Title', resizable: true },
    { key: 'subtitle', name: 'Subtitle' },
    { key: 'url', name: 'Url', formatter: ({ value }) => <Link href={value}>{value}</Link> },
];

const rows = [];

<DataGrid columns={columns} rows={rows} count={rows.length} />;
```

Error:

Component can be customized with `errorComponent`

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

<DataGrid columns={columns} rows={rows} count={rows.length} hasError={true} />;
```

Loading:

Component can be customized with `loadingComponent`

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

<DataGrid columns={columns} rows={rows} count={rows.length} isLoading={true} />;
```

With actions:

```jsx
import { Link, Icon } from 'hoi-poi-ui';

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

const actions = [
    () => <Icon onClick={() => console.log('Edit')} name="edit" />,
    () => <Icon onClick={() => console.log('Edit')} name="close" />,
];

<DataGrid columns={columns} rows={rows} count={rows.length} actions={actions} />;
```

### Component tree

---

-   root - root element container
-   [react-data-grid](https://github.com/adazzle/react-data-grid)
-   loadingView - loading container
-   emptyView - error and empty view container
-   rowRenderer - row renderer container if actions is passed
