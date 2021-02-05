Default:

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

### Component tree

---

-   root - root element
