Simple:

```jsx
import { useState } from 'react';
import { Icon } from 'hoi-poi-ui';

let date = new Date();

const options = [
    {
        label: '09:00',
        value: new Date(date.setHours(9, 0, 0, 0)),
    },
    {
        label: '09:30',
        value: new Date(date.setHours(9, 30, 0, 0)),
        isDisabled: true,
    },
    {
        label: '10:00',
        value: new Date(date.setHours(10, 0, 0, 0)),
    },
    {
        label: '10:30',
        value: new Date(date.setHours(10, 30, 0, 0)),
    },
];
const [state, setState] = useState();
const onChange = (value) => setState(value);

<div>
    <TimePicker
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state}
        isRequired={true}
    />
</div>;
```

<!--
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
        isRequired={true}
        formatLabel={formatLabel}
        isFullWidth
    />
</div>;
``` -->

### Component tree

---

-   [Input](#/Forms?id=input)
-   [SelectWrapper](#/Utils?id=selectWrapper)
