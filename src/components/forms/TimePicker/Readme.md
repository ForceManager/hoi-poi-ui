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

### Component tree

---

-   [Select](#/Forms?id=select)
