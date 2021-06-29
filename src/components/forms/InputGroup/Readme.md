Default

```jsx
import { useState } from 'react';

let inputs = [
    {
        label: 'Lorem ipsum',
        name: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        name: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        name: 'lorem3',
    },
];

const [state, setState] = useState({});
let onChange = (value) => setState({ value });
<InputGroup
    label="Lorem ipsum"
    placeholder="Type here"
    inputs={inputs}
    onChange={onChange}
    value={state.value}
    isRequired
/>;
```

Disabled

```jsx
import { useState } from 'react';

let inputs = [
    {
        label: 'Lorem ipsum',
        name: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        name: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        name: 'lorem3',
    },
];
const [state, setState] = useState({});
let onChange = (value) => setState({ value });
<InputGroup
    label="Lorem ipsum"
    inputs={inputs}
    onChange={onChange}
    value={state.value}
    isReadOnly
/>;
```

Focused

```jsx
import { useState } from 'react';

let inputs = [
    {
        label: 'Lorem ipsum',
        name: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        name: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        name: 'lorem3',
    },
];

const [state, setState] = useState({});
let onChange = (value) => setState({ value });
<InputGroup
    label="Lorem ipsum"
    placeholder="Type here"
    inputs={inputs}
    onChange={onChange}
    value={state.value}
    isRequired
    autoFocus
/>;
```

Default vertical label

```jsx
import { useState } from 'react';

let inputs = [
    {
        label: 'Lorem ipsum',
        name: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        name: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        name: 'lorem3',
    },
];
const [state, setState] = useState({});
let onChange = (value) => setState({ value });
<InputGroup
    label="Lorem ipsum"
    labelMode="vertical"
    inputs={inputs}
    onChange={onChange}
    value={state.value}
/>;
```

Full width

```jsx
import { useState } from 'react';

let inputs = [
    {
        label: 'Lorem ipsum',
        name: 'lorem',
    },
    {
        label: 'Lorem ipsum 2',
        name: 'lorem2',
    },
    {
        label: 'Lorem ipsum 3',
        name: 'lorem3',
    },
];
const [state, setState] = useState({});
let onChange = (value) => setState({ value });
<InputGroup
    label="Lorem ipsum"
    labelMode="vertical"
    inputs={inputs}
    onChange={onChange}
    value={state.value}
    isFullWidth={true}
/>;
```

### Component tree

---

-   root - root element
-   [Input](#/Forms?id=input): Affect all inputs
-   [Link](/#/General?id=link)
-   formControl - wrapper with principal input and toggle inputs button
-   inputsControl - wrapper with inputs
-   [Label](#/Forms?id=label)
