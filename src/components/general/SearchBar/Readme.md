Default Multi:

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

Default Single with Search:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
const onBlurSearch = (value) => console.log(value);
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
    <SearchBar placeholder="Search" loadOptions={loadOptions} onBlurSearch={onBlurSearch} />
</div>;
```

Default Single with Search and Default Search Text:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
const onBlurSearch = (value) => console.log(value);
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
    <SearchBar
        placeholder="Search"
        loadOptions={loadOptions}
        onBlurSearch={onBlurSearch}
        inputValue="lorem"
    />
</div>;
```

Default Single with Search and Default Option Value:

```jsx
import { useState } from 'react';

const [state, setState] = useState({
    label: 'Lorem ipsum 1',
    value: 'lorem-ipsum-1',
});
const onChange = (value) => setState(value);
const onBlurSearch = (value) => console.log(value);
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
    <SearchBar
        placeholder="Search"
        loadOptions={loadOptions}
        onBlurSearch={onBlurSearch}
        value={state}
    />
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
    <SearchBar placeholder="Search" loadOptions={loadOptions} />
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

Allow Multiple-Types:

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
        allowMultipleTypes
    />
</div>;
```

Without DropdownIndicator:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
const onBlurSearch = (value) => console.log(value);

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

<div>
    <SearchBar
        placeholder="Search"
        hideDropdownIndicator={true}
        onBlurSearch={onBlurSearch}
        onChange={onChange}
        options={options}
    />
</div>;
```

Simple Search:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
const onBlurSearch = (value) => console.log(value);

<div>
    <SearchBar
        placeholder="Search"
        useAsSimpleSearch={true}
        onBlurSearch={onBlurSearch}
        onChange={onChange}
    />
</div>;
```

Simple Search with Default Search:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
const onBlurSearch = (value) => console.log(value);

<div>
    <SearchBar
        placeholder="Search"
        onBlurSearch={onBlurSearch}
        onChange={onChange}
        useAsSimpleSearch={true}
        inputValue="last search"
    />
</div>;
```

### Component tree

---

All props will pass to principal select

-   root - root container
-   typeDivider
-   TypeSelector - secondary select
