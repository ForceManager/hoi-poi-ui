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

MaxDate and MinDate

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
const onChange = (field) => {
    return (e) => {
        setState({ ...state, [field]: e });
    };
};

const today = new Date();
const tomorrow = new Date(today);
const yesterday = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);
yesterday.setDate(yesterday.getDate() - 1);
tomorrow.setHours(0, 0, 0, 0);
yesterday.setHours(0, 0, 0, 0);

const fpOptions1 = {
    minDate: yesterday,
    maxDate: tomorrow,
};

const fpOptions2 = {
    minDate: tomorrow,
};

const fpOptions3 = {
    maxDate: yesterday,
};

<div>
    <DatePicker label="Lorem ipsum" onChange={onChange(1)} value={state[1]} {...fpOptions1} />
    <DatePicker label="Lorem ipsum" onChange={onChange(2)} value={state[2]} {...fpOptions2} />
    <DatePicker label="Lorem ipsum" onChange={onChange(3)} value={state[3]} {...fpOptions3} />
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

Custom Component

```jsx
import { useState } from 'react';
import CustomComponent from './CustomComponent';
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
        customComponent={CustomComponent}
    />
</div>;
```

### Component tree

---

-   root - root element
-   flatpickrOptions
-   [Input](#/Forms?id=input)
-   [flatpick](https://github.com/flatpickr/flatpickr)
