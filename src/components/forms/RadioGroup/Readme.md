Default

```jsx
import { useState } from 'react';

let options = [
    {
        label: 'Lorem ipsum',
        value: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem3',
    },
];
const [state, setState] = useState({});
let onChange = (value) => setState({ value });
<RadioGroup label="Lorem ipsum" options={options} onChange={onChange} value={state.value} />;
```

Disabled

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
let options = [
    {
        label: 'Lorem ipsum',
        value: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem3',
    },
];

let onChange = (value) => setState({ value });
<RadioGroup
    label="Lorem ipsum"
    options={options}
    onChange={onChange}
    value={state.value}
    isReadOnly
/>;
```

Default vertical label

```jsx
import { useState } from 'react';

let options = [
    {
        label: 'Lorem ipsum',
        value: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem3',
    },
];
const [state, setState] = useState({});
let onChange = (value) => setState({ value });
<RadioGroup
    label="Lorem ipsum"
    labelMode="vertical"
    options={options}
    onChange={onChange}
    value={state.value}
/>;
```

Mode horizontal

```jsx
import { useState } from 'react';

let options = [
    {
        label: 'Lorem ipsum',
        value: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem3',
    },
];
const [state, setState] = useState({});
let onChange = (value) => setState({ value });
<RadioGroup
    label="Lorem ipsum"
    labelMode="vertical"
    options={options}
    onChange={onChange}
    value={state.value}
    mode="horizontal"
/>;
```

FullWidth

```jsx
import { useState } from 'react';

let options = [
    {
        label:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in auctor neque, sit amet malesuada massa. Proin mattis vestibulum consequat. ',
        value: 'lorem',
    },
    {
        label:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in auctor neque, sit amet malesuada massa. Proin mattis vestibulum consequat.  2',
        value: 'lorem2',
    },
    {
        label:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in auctor neque, sit amet malesuada massa. Proin mattis vestibulum consequat.  3',
        value: 'lorem3',
    },
];
const [state, setState] = useState({});
let onChange = (value) => setState({ value });
<RadioGroup options={options} onChange={onChange} value={state.value} isFullWidth />;
```

### Component tree

---

-   root - root element
-   [Radio](#/Forms?id=radio)
-   radioLabel - label related to one radio
-   radioControl - wrapper with radio label and radio
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
