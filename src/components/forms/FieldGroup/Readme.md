Text Field:

```jsx
import { useState } from 'react';
import Input from '../Input';

const [values, setValues] = useState([]);

<div>
    <FieldGroup label="Label" inputs={[Input, Input]} onChange={setValues} value={values} />
</div>;
```

Horizontal:

```jsx
import { useState } from 'react';
import Input from '../Input';

const [values, setValues] = useState([]);

<div>
    <FieldGroup
        label="Horizontal Label"
        labelMode="horizontal"
        inputs={[Input, Input]}
        onChange={setValues}
        value={values}
        isFullWidth
    />
</div>;
```

Full width:

```jsx
import { useState } from 'react';
import Input from '../Input';

const [values, setValues] = useState([]);

<div>
    <FieldGroup
        label="Label"
        inputs={[Input, Input]}
        onChange={setValues}
        value={values}
        isFullWidth
    />
</div>;
```

With dividers:

```jsx
import { useState } from 'react';
import Input from '../Input';

const [values, setValues] = useState([]);

<div>
    <FieldGroup
        label="Label"
        inputs={[Input, Input]}
        onChange={setValues}
        value={values}
        dividerText="-"
    />
</div>;
```

Custom divider:

```jsx
import { useState } from 'react';
import Input from '../Input';
import Icon from '../../general/Icon';

const [values, setValues] = useState([]);

<div>
    <FieldGroup
        label="Label"
        inputs={[Input, Input]}
        onChange={setValues}
        value={values}
        divider={<Icon name="arrowRight" />}
    />
</div>;
```

Multiple fields:

```jsx
import { useState } from 'react';
import Input from '../Input';
import Icon from '../../general/Icon';

const [values, setValues] = useState([]);

<div>
    <FieldGroup
        label="Label"
        inputs={[Input, Input, Input, Input, Input, Input]}
        onChange={setValues}
        value={values}
        isFullWidth
    />
    <FieldGroup
        label="Label"
        inputs={[Input, Input, Input, Input, Input, Input]}
        onChange={setValues}
        value={values}
        isFullWidth
        divider={<Icon name="arrowRight" />}
    />
</div>;
```

Customizing props:

```jsx
import { useState, useEffect, useRef, useCallback } from 'react';
import Input from '../Input';

const [values, setValues] = useState([]);
const inputRefs = useRef([]);

const setFocus = useCallback((index) => {
    inputRefs.current[index] && inputRefs.current[index].focus();
}, []);

useEffect(() => {
    setFocus(0);
}, [setFocus]);

const onChange = useCallback(
    (values, value, index) => {
        setValues(values);
        if (value === '') {
            setFocus(index - 1);
        } else {
            setFocus(index + 1);
        }
    },
    [setFocus],
);

const onKeyDown = (e) => {
    const index = parseInt(e.target.name, 10);
    if (e.keyCode === 8 && event.target.value === '') {
        setFocus(index - 1);
        e.preventDefault();
    } else if (e.keyCode !== 8 && event.target.value !== '') {
        setFocus(index + 1);
        e.preventDefault();
    }
};

const onFocus = (value, e) => {
    if (e.keyCode === 8 && event.target.value === '') {
        setFocus(e.target.name);
    }
};

const getRef = useCallback((index) => {
    return (ref) => {
        inputRefs.current[index] = ref;
    };
}, []);

<div>
    <FieldGroup
        label="Label"
        inputs={[Input, Input, Input, Input, Input, Input]}
        inputProps={{ placeholder: 'Write here' }}
        onChange={setValues}
        value={values}
        isFullWidth
    />
    <FieldGroup
        label="Label"
        inputs={[Input, Input, Input, Input, Input, Input]}
        inputProps={[
            { placeholder: 'Field 1' },
            { placeholder: 'Field 2' },
            { placeholder: 'Field 3' },
            { placeholder: 'Field 4' },
            { placeholder: 'Field 5' },
            { placeholder: 'Field 6' },
        ]}
        onChange={setValues}
        value={values}
        isFullWidth
    />
    <FieldGroup
        label="Label"
        inputs={[Input, Input, Input, Input, Input, Input]}
        inputProps={[
            {
                onKeyDown,
                onFocus,
                maxLength: 1,
                type: 'integer',
                hideClear: true,
                getRef: getRef(0),
                name: '0',
            },
            {
                onKeyDown,
                onFocus,
                maxLength: 1,
                type: 'integer',
                hideClear: true,
                getRef: getRef(1),
                name: '1',
            },
            {
                onKeyDown,
                onFocus,
                maxLength: 1,
                type: 'integer',
                hideClear: true,
                getRef: getRef(2),
                name: '2',
            },
            {
                onKeyDown,
                onFocus,
                maxLength: 1,
                type: 'integer',
                hideClear: true,
                getRef: getRef(3),
                name: '3',
            },
            {
                onKeyDown,
                onFocus,
                maxLength: 1,
                type: 'integer',
                hideClear: true,
                getRef: getRef(4),
                name: '4',
            },
            {
                onKeyDown,
                onFocus,
                maxLength: 1,
                type: 'integer',
                hideClear: true,
                getRef: getRef(5),
                name: '5',
            },
        ]}
        onChange={onChange}
        value={values}
        isFullWidth
    />
</div>;
```

With diferent inputs:

```jsx
import { useState } from 'react';
import Input from '../Input';
import Select from '../../forms/Select';
import DatePicker from '../../forms/DatePicker';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];
const [values, setValues] = useState([]);

<div>
    <FieldGroup
        label="Label"
        inputs={[Input, Select, DatePicker]}
        inputProps={[
            { placeholder: 'Type' },
            { placeholder: 'Select one', options },
            { placeholder: 'Select date' },
        ]}
        onChange={setValues}
        value={values}
        isFullWidth
    />
</div>;
```

### Component tree

---

∫

-   root - root element
-   infor - Info text wrapper
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
-   inputWrapper - Wrapper around Label and input components
-   rangeWrapper - Wrapper around all fields
-   divider - Divider wrapper
-   dividerText - divider text span
