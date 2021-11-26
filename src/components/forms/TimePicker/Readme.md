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
const [state, setState] = useState(new Date());
const onChange = (value) => setState(value);

<div>
    <TimePicker
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state}
        isRequired={false}
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
        isRequired={true}
    />
</div>;
```

Simple No Options Prop with Start and End:

```jsx
import { useState } from 'react';
import { Icon } from 'hoi-poi-ui';

const interval = 30;
const [start, setStart] = useState(new Date());
const endTime = new Date(new Date().getTime() + 1000 * 60 * interval);
const [end, setEnd] = useState(endTime);

const onChange = (field) => {
    return (value, action) => {
        if (field === 'start') {
            setStart(value, end);
            if (value && value.getTime() >= new Date(end).getTime()) {
                const newTimeMs = value.getTime() + 1000 * 60 * interval;
                setEnd(new Date(newTimeMs));
            }
        }
        if (field === 'end') {
            setEnd(value);
            if (value && value.getTime() <= new Date(start).getTime()) {
                const newTimeMs = value.getTime() - 1000 * 60 * interval;
                setStart(new Date(newTimeMs));
            }
        }
    };
};

<div style={{ display: 'flex' }}>
    <TimePicker
        label="Start Time"
        placeholder="Select one"
        onChange={onChange('start')}
        value={start}
        isRequired={true}
    />
    <div style={{ width: '10px' }} />
    <TimePicker
        label="End Time"
        placeholder="Select one"
        onChange={onChange('end')}
        value={end}
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
```

### Component tree

---

-   [Select](#/Forms?id=select)
-   inputWrapper - Wrapper around Label and input components
