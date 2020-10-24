Vertical label:

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
const onChange = (field) => {
    return (e) => {
        setState({ [field]: e });
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
    <DatePicker
        label="Lorem ipsum Lorem ipsum Lorem ipsum"
        hint="Hello!"
        isRequired
        onChange={onChange(3)}
        value={state[3]}
    />
    <DatePicker label="Lorem ipsum" onChange={onChange(4)} value={state[4]} error="I am an error" />
    <DatePicker
        label="Lorem ipsum"
        info="I am an info message"
        onChange={onChange(5)}
        value={state[5]}
    />
    <DatePicker
        label="Lorem ipsum"
        info="I am an info message"
        error="I am an error2"
        onChange={onChange(6)}
        value={state[6]}
    />
    <DatePicker label="Lorem ipsum" value={new Date()} isReadOnly />
    <DatePicker label="Lorem ipsum" onChange={onChange(7)} value={state[7]} isFullWidth />
</div>;
```

Type time

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
const onChange = (e) => {
    console.log(e);
    setState({ value: e });
};
<div>
    <DatePicker label="Lorem ipsum" type="time" onChange={onChange} value={state.value} />
</div>;
```

Output string

```jsx
import { useState } from 'react';
const [state, setState] = useState({});
const onChange = (e) => {
    console.log(e);
    setState({ value: e });
};
<div>
    <DatePicker
        label="Lorem ipsum"
        type="time"
        onChange={onChange}
        value={state.value}
        outputType="string"
    />
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

Data time with custom format

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
        type="datetime"
        formatDate={formatDate}
        onChange={onChange}
        value={state.value}
    />
</div>;
```

### Component tree

---

-   root - root element
-   input - Native input
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
