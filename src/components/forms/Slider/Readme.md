Default:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });

<div>
    <Slider label="Lorem ipsum" onChange={onChange} value={state.value} />
</div>;
```

Percentage tip:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
<div>
    <Slider label="Lorem ipsum" onChange={onChange} value={state.value} isPercentage isFullWidth />
</div>;
```

Custom tip:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
<div>
    <Slider
        label="Lorem ipsum"
        onChange={onChange}
        value={state.value}
        tipFormatter={(v) => `${v}$`}
        isFullWidth
    />
</div>;
```

Custom max/min/step:

```jsx
import { useState } from 'react';

const [state, setState] = useState(5000);

const onChange = (value) => setState({ value });
<div>
    <Slider
        label="Lorem ipsum"
        onChange={onChange}
        value={state.value}
        max={10000}
        min={5000}
        step={100}
    />
</div>;
```

Range handler:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
<div>
    <Slider label="Lorem ipsum" onChange={onChange} value={state.value} isRange />
</div>;
```

Bottom info & error

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
<div>
    <Slider
        label="Lorem ipsum"
        onChange={onChange}
        value={state.value}
        isReadOnly
        isPercentage
        showValue
        error="Error text here"
        info="Info text here"
    />
</div>;
```

Reversed Slider

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });

<div>
    <Slider label="Lorem ipsum" onChange={onChange} value={state.value} reverse />
</div>;
```

Dynamic (toggles between Slider & Range components depending on condition)

```jsx
import { useMemo, useState } from 'react';
import { Select } from 'hoi-poi-ui';

const options = [
    {
        label: 'Less Than',
        value: 'LessThan',
    },
    {
        label: 'In Range',
        value: 'InRange',
    },
    {
        label: 'Greater Than',
        value: 'GreaterThan',
    },
];

const [state, setState] = useState({
    isRange: true,
    operator: {
        label: 'In Range',
        value: 'InRange',
    },
    value: [0, 100],
});

const onChange = (value) => {
    let newValue;
    const currentValue = state.value;
    switch (state.operator.value) {
        case 'LessThan':
            newValue = [value, currentValue[1]];
            break;
        case 'GreaterThan':
            newValue = [currentValue[0], value];
            break;
        default:
            newValue = value;
    }
    setState({ ...state, value: newValue });
};

const onToggle = (payload) => {
    setState({
        ...state,
        isRange: payload.value === 'InRange',
        operator: payload,
    });
};

const getValue = useMemo(() => {
    switch (state.operator.value) {
        case 'LessThan':
            return state.value[0];
        case 'GreaterThan':
            return state.value[1];
        default:
            return state.value;
    }
}, [state]);

<div>
    <Select
        label="Operator"
        value={state.operator}
        options={options}
        onChange={onToggle}
        isClearable={false}
    />
    <Slider
        onChange={onChange}
        value={getValue}
        isRange={state.isRange}
        reverse={state.operator.value === 'GreaterThan'}
    />
</div>;
```

### Component tree

---

-   root - root element
-   [rc-slider](https://github.com/react-component/slider/)
-   infor - Info text wrapper
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
-   inputWrapper - Wrapper around Label and input components
-   overlay - Dragged component (tip)
-   overlayLabel - Dragged component label (tip)
-   overlayHandler - Handler component style and props
