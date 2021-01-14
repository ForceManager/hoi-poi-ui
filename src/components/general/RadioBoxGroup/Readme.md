Default

```jsx
import { useState } from 'react';
import { Text } from 'hoi-poi-ui';

const children = (
    <Text style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}>Children</Text>
);

let options = [
    {
        icon: 'accountsAdd',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet',
        value: 'lorem',
    },
    {
        icon: 'accountsEdit',
        title: 'Lorem ipsum 2',
        text: 'Lorem ipsum dolor sit amet 2',
        value: 'lorem2',
    },
    {
        icon: 'accountDetails',
        title: 'Lorem ipsum 3',
        text: 'Lorem ipsum dolor sit amet 3',
        value: 'lorem3',
        children,
    },
];
const [state, setState] = useState({});
let onChange = (value) => setState({ value });
<RadioBoxGroup label="Lorem ipsum" options={options} onChange={onChange} value={state.value} />;
```

All disabled

```jsx
import { useState } from 'react';

let options = [
    {
        icon: 'accountsAdd',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet',
        value: 'lorem',
    },
    {
        icon: 'accountsEdit',
        title: 'Lorem ipsum 2',
        text: 'Lorem ipsum dolor sit amet 2',
        value: 'lorem2',
    },
    {
        icon: 'accountDetails',
        title: 'Lorem ipsum 3',
        text: 'Lorem ipsum dolor sit amet 3',
        value: 'lorem3',
    },
];
const [state, setState] = useState({});
let onChange = (value) => setState({ value });
<RadioBoxGroup
    label="Lorem ipsum"
    options={options}
    onChange={onChange}
    value={state.value}
    isReadOnly
/>;
```

One option disabled

```jsx
import { useState } from 'react';

let options = [
    {
        icon: 'accountsAdd',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet',
        value: 'lorem',
    },
    {
        icon: 'accountsEdit',
        title: 'Lorem ipsum 2',
        text: 'Lorem ipsum dolor sit amet 2',
        value: 'lorem2',
        isReadOnly: true,
    },
    {
        icon: 'accountDetails',
        title: 'Lorem ipsum 3',
        text: 'Lorem ipsum dolor sit amet 3',
        value: 'lorem3',
    },
];
const [state, setState] = useState({});
let onChange = (value) => setState({ value });
<RadioBoxGroup label="Lorem ipsum" options={options} onChange={onChange} value={state.value} />;
```

### Component tree

---

-   root - root element
-   [RadioBox](#/General?id=radiobox)
-   radioBoxControl - wrapper with radioBox
