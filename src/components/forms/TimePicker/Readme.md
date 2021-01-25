Simple:

```jsx
import { useState } from 'react';
import { Icon } from 'hoi-poi-ui';

const options = [
    {
        label: '09:00 am',
        value: '09:00 am',
    },
    {
        label: '09:30 am',
        value: '09:30 am',
        isDisabled: true,
    },
    {
        label: '10:00 am',
        value: '10:00 am',
    },
    {
        label: '10:30 am',
        value: '10:30 am',
    },
];
const [state, setState] = useState({});
const onChange = (value) => setState({ value });

<div>
    <TimePicker
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        filterByKey
        isRequired={true}
    />
</div>;
```

Simple No Options Prop:

```jsx
import { useState } from 'react';
import { Icon } from 'hoi-poi-ui';

const [state, setState] = useState(new Date());
const onChange = (value) => setState(value);

<div>
    <TimePicker
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        value={state}
        filterByKey
        isRequired={true}
    />
</div>;
```

Simple Min and Max Time:

```jsx
import { useState } from 'react';
import { Icon } from 'hoi-poi-ui';

const [state, setState] = useState(new Date());
const onChange = (value) => setState(value);

<div>
    <TimePicker
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        value={state}
        filterByKey
        isRequired={true}
        minTime="11:00:00"
        maxTime="12:10:00"
    />
</div>;
```

Simple Min Time Now:

```jsx
import { useState } from 'react';
import { Icon } from 'hoi-poi-ui';

const [state, setState] = useState(new Date());
const onChange = (value) => setState(value);

<div>
    <TimePicker
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        value={state}
        filterByKey
        isRequired={true}
        isMinTimeNow={true}
    />
</div>;
```

Simple Max Time Now:

```jsx
import { useState } from 'react';
import { Icon } from 'hoi-poi-ui';

const [state, setState] = useState(new Date());
const onChange = (value) => setState(value);

<div>
    <TimePicker
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        value={state}
        filterByKey
        isRequired={true}
        isMaxTimeNow={true}
    />
</div>;
```

Simple Format Label:

```jsx
import { useState } from 'react';
import { Icon } from 'hoi-poi-ui';

const [state, setState] = useState(new Date());
const onChange = (value) => setState(value);

const formatLabel = (date, label) => {
    return `Formatted ${label}`;
};

<div>
    <TimePicker
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        value={state}
        filterByKey
        isRequired={true}
        formatLabel={formatLabel}
    />
</div>;
```

### Component tree

---

-   [Select](#/Forms?id=select)
