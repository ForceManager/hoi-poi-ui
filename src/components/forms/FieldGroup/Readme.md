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
import { useState } from 'react';
import Input from '../Input';

const [values, setValues] = useState([]);

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

With error:

```jsx
import { useState } from 'react';
import Input from '../Input';

const [values, setValues] = useState([]);

<div>
    <FieldGroup
        label="Label"
        inputs={[Input, Input, Input, Input, Input, Input]}
        onChange={setValues}
        value={values}
        isFullWidth
        error="I am an error"
    />
</div>;
```

With different errors:

```jsx
import { useState } from 'react';
import Input from '../Input';
import Icon from '../../general/Icon';

const [values, setValues] = useState([]);

<div>
    <FieldGroup
        label="Label"
        inputs={[Input, Input, Input]}
        inputProps={[{ error: 'I am an error' }, { error: null }, { error: 'I am another error' }]}
        onChange={setValues}
        value={values}
        isFullWidth
        error="I am a general error"
        divider={<Icon name="arrowRight" />}
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
