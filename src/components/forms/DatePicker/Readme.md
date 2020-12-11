Default:

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
const onChange = (field) => {
    return (e) => {
        setState({ ...state, [field]: e });
    };
};

<div>
    <DatePicker label="Lorem ipsum" onChange={onChange(1)} value={state[1]} />
    <DatePicker
        label="Lorem ipsum"
        hint="Hello!"
        isRequired
        onChange={onChange(2)}
        value={state[2]}
    />
    <DatePicker label="Lorem ipsum" onChange={onChange(3)} value={state[3]} error="I am an error" />
    <DatePicker
        label="Lorem ipsum"
        onChange={onChange(4)}
        value={state[4]}
        info="I am an info message"
    />
    <DatePicker
        label="Lorem ipsum"
        onChange={onChange(5)}
        value={state[5]}
        info="I am an info message"
        error="I am an error"
    />
    <DatePicker label="Lorem ipsum" value={new Date()} isReadOnly />
</div>;
```

Custom formatDate

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
const onChange = (e) => setState({ value: e });
const formatDate = (value, format) => {
    return value;
};
<div>
    <DatePicker
        label="Lorem ipsum"
        formatDate={formatDate}
        onChange={onChange}
        value={state.value}
    />
</div>;
```

### Component tree

---

-   root - root element
-   flatpickrOptions
-   [Input](#/Forms?id=input)
-   [flatpick](https://github.com/flatpickr/flatpickr)
