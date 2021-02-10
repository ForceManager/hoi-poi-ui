Default:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',0
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];

const loadOptions = (text, cb) =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                const newOptions = options.filter((current) => {
                    return current.value.includes(text);
                });
                resolve(newOptions);
            }, 1000),
        [],
    );

<div>
    <SearchBar placeholder="Search" loadOptions={loadOptions} />
</div>;
```

Multi:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];

const loadOptions = (text, cb) =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                const newOptions = options.filter((current) => {
                    return current.value.includes(text);
                });
                resolve(newOptions);
            }, 1000),
        [],
    );

<div>
    <SearchBar placeholder="Search" loadOptions={loadOptions} isMulti />
</div>;
```

Small:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];

const loadOptions = (text, cb) =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                const newOptions = options.filter((current) => {
                    return current.value.includes(text);
                });
                resolve(newOptions);
            }, 1000),
        [],
    );

<div>
    <SearchBar placeholder="Search" loadOptions={loadOptions} size="small" />
</div>;
```

Advanced:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });

const [type, setType] = useState();
const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];

const loadOptions = (text, cb) =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                const newOptions = options.filter((current) => {
                    return current.value.includes(text);
                });
                resolve(newOptions);
            }, 1000),
        [],
    );

const typeOptions = [
    {
        label: 'All',
        value: 'all',
    },
    {
        label: 'Only name',
        value: 'only-name',
    },
    {
        label: 'Lorem ipsum',
        value: 'lorem-ipsum',
    },
    {
        label: 'Lorem ipsum dolor amet',
        value: 'lorem-ipsum-dolor-amet',
    },
];

<div>
    <SearchBar
        placeholder="Search"
        loadOptions={loadOptions}
        typeOptions={typeOptions}
        type={type}
        onChangeType={setType}
    />
    <SearchBar
        placeholder="Search"
        loadOptions={loadOptions}
        typeOptions={typeOptions}
        type={type}
        onChangeType={setType}
        size="small"
    />
</div>;
```

### Component tree

---

All props will pass to principal select

-   root - root container
-   typeDivider
-   TypeSelector - secondary select