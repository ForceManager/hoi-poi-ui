Default

```jsx
import { useState } from 'react';
import { Text } from 'hoi-poi-ui';

const children = (
    <Text style={{ backgroundColor: 'white', padding: 10, borderRadius: 5 }}>Children</Text>
);

let options = [
    {
        icon: 'addAccount',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet',
        value: 'lorem',
    },
    {
        icon: 'accountDetails',
        title: 'Lorem ipsum 2',
        text: 'Lorem ipsum dolor sit amet 2',
        value: 'lorem2',
    },
    {
        icon: 'accountCheckin',
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
        icon: 'addAccount',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet',
        value: 'lorem',
    },
    {
        icon: 'accountDetails',
        title: 'Lorem ipsum 2',
        text: 'Lorem ipsum dolor sit amet 2',
        value: 'lorem2',
    },
    {
        icon: 'accountCheckin',
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
        icon: 'addAccount',
        title: 'Lorem ipsum',
        text: 'Lorem ipsum dolor sit amet',
        value: 'lorem',
    },
    {
        icon: 'accountDetails',
        title: 'Lorem ipsum 2',
        text: 'Lorem ipsum dolor sit amet 2',
        value: 'lorem2',
        isReadOnly: true,
    },
    {
        icon: 'accountCheckin',
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
-   [Radio](#/Forms?id=radio)
-   radioLabel - label related to one radio
-   radioControl - wrapper with radio label and radio
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
