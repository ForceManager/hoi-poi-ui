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
<CheckboxGroup label="Lorem ipsum" options={options} onChange={onChange} value={state.value} />;
```

Disabled

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
<CheckboxGroup
    label="Lorem ipsum"
    options={options}
    onChange={onChange}
    value={state.value}
    isReadOnly
/>;
```

Some Disabled

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
<CheckboxGroup
    label="Lorem ipsum"
    options={options}
    onChange={onChange}
    value={state.value}
    isReadOnly={[false, true, false]}
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
<CheckboxGroup
    label="Lorem ipsum"
    labelMode="vertical"
    options={options}
    onChange={onChange}
    value={state.value}
/>;
```

Full width

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
<CheckboxGroup options={options} onChange={onChange} value={state.value} isFullWidth />;
```

### Component tree

---

-   root - root element
-   error - Error wrapper
-   [Checkbox](#/Forms?id=checkbox)
-   checkboxLabel - label related to one checkbox
-   checkboxControl - wrapper with checkbox label and checkbox
-   formControl - Input wrapper excluding label
-   error - Error wrapper
-   [Label](#/Forms?id=label)
