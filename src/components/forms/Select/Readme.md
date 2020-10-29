No Options:

```jsx
import { useState } from 'react';

const options = [];
const [state, setState] = useState({});
const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        filterByKey
    />
</div>;
```

Single ReadOnly:

```jsx
import { useState } from 'react';

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
const [state, setState] = useState({ value: options[0] });
const onChange = (value) => setState(value);

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        filterByKey
        isReadOnly={true}
    />
</div>;
```

Single with error and info message:

```jsx
import { useState } from 'react';

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
const [state, setState] = useState({});
const onChange = (value) => setState(value);

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        filterByKey
        error="Error message"
        info="Info message"
    />
</div>;
```

Single:

```jsx
import { useState } from 'react';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        isDisabled: true,
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
const [state, setState] = useState({});
const onChange = (value) => setState({ value });

<div>
    <Select
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

Single Icon:

```jsx
import { useState } from 'react';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
        iconType: 'route',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        iconType: 'route',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
        iconType: 'route',
        iconColor: 'orange',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
        iconType: 'route',
    },
];
const [state, setState] = useState({});
const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        filterByKey
    />
</div>;
```

Single Custom Icon:

```jsx
import { useState, useMemo } from 'react';

const customIcon = useMemo(() => {
    return (
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 15.625v2.617l4.337-2.617H18a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6.625a2 2 0 002 2h4zm-2 6.16v-4.16H6a4 4 0 01-4-4V7a4 4 0 014-4h12a4 4 0 014 4v6.625a4 4 0 01-4 4h-3.106L8 21.785z"
                fill="red"
            />
        </svg>
    );
});

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
        icon: customIcon,
    },
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
        icon: customIcon,
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        iconType: 'route',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
        iconType: 'route',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
        iconType: 'route',
    },
];
const [state, setState] = useState({});
const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        filterByKey
    />
</div>;
```

Single Avatar:

```jsx
import { useState, useMemo } from 'react';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
    },
];
const [state, setState] = useState({});
const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        filterByKey
    />
</div>;
```

Single Two Lines:

```jsx
import { useState } from 'react';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
        subLabel: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        subLabel: 'lorem-ipsum-2',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
        subLabel: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
        subLabel: 'lorem-ipsum-4',
    },
];
const [state, setState] = useState({});
const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        filterByKey
    />
</div>;
```

Multi ReadOnly:

```jsx
import { useState } from 'react';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        isDisabled: true,
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
const [state, setState] = useState({ value: [options[0], options[1]] });
const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        isMulti={true}
        isClearable
        isReadOnly
    />
</div>;
```

Multi:

```jsx
import { useState } from 'react';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        isDisabled: true,
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
const [state, setState] = useState([
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
]);
const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        isMulti={true}
        isClearable
    />
</div>;
```

MultiBullets:

```jsx
import { useState } from 'react';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        type: 'success',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
        type: 'success',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
        type: 'primary',
    },
    {
        label: 'Lorem ipsum 5',
        value: 'lorem-ipsum-5',
        type: 'danger',
    },
];
const [state, setState] = useState([
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
]);
const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        isMulti={true}
        isClearable
        isFullWidth={true}
    />
</div>;
```

Grouped options:

```jsx
import { useState } from 'react';

const options = [
    {
        label: 'Lorem ipsum',
        options: [
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
        ],
    },
    {
        label: 'Dolor amet',
        options: [
            {
                label: 'Dolor amet 1',
                value: 'dolor-amet-1',
            },
            {
                label: 'Dolor amet 2',
                value: 'dolor-amet-2',
            },
            {
                label: 'Dolor amet 3',
                value: 'dolor-amet-3',
            },
            {
                label: 'Dolor amet 4',
                value: 'dolor-amet-4',
            },
        ],
    },
];
const [state, setState] = useState({});
const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        menuIsOpen={true}
        isFullWidth={true}
    />
</div>;
```

Async load options:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
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
const loadOptions = () =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                resolve(options);
            }, 1000),
        [],
    );

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        loadOptions={loadOptions}
        onChange={onChange}
        value={state.value}
    />
</div>;
```

Async load options with fuzzy style:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
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
const loadOptions = (text, cb) =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                const newOptions = options.filter((current) => {
                    return current.value.includes(text);
                });
                resolve(newOptions);
            }, 1000),
        [],
    );

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Search"
        loadOptions={loadOptions}
        onChange={onChange}
        value={state.value}
        isFuzzy
    />
</div>;
```

Async load multiple options with fuzzy style:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
let options = [];
let total = 100;
for (let i = 0; i < total; i++) {
    options.push({
        label: `Lorem ipsum ${i}`,
        value: `lorem-ipsum-${i}`,
    });
}

const loadOptions = (text, cb) =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                const newOptions = options.filter((current) => {
                    return current.value.includes(text);
                });
                resolve(newOptions);
            }, 1000),
        [],
    );

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Search"
        loadOptions={loadOptions}
        onChange={onChange}
        value={state.value}
        isFuzzy
        isMulti
    />
</div>;
```

Select With Actions:

```jsx
import { useState, useMemo } from 'react';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
    },
];
const [state, setState] = useState({});
const onChange = (value) => setState({ value });

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        actions={[
            {
                label: 'Create new lorem ipsum',
                onClick: () => console.log('click'),
                iconType: 'plus',
            },
            {
                label: 'Create new lorem ipsum',
                onClick: () => console.log('click'),
                isLink: true,
            },
            {
                label: 'Create new lorem ipsum',
                onClick: () => console.log('click'),
                icon: (
                    <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 15.625v2.617l4.337-2.617H18a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6.625a2 2 0 002 2h4zm-2 6.16v-4.16H6a4 4 0 01-4-4V7a4 4 0 014-4h12a4 4 0 014 4v6.625a4 4 0 01-4 4h-3.106L8 21.785z"
                            fill="red"
                        />
                    </svg>
                ),
            },
            {
                label: 'Create a new dolor ipsum',
                onClick: () => console.log('click'),
            },
        ]}
    />
</div>;
```

### Component tree

---

-   root - root element
-   inputWrapper - Wrapper around Label and input components
-   info - Info text wrapper
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
-   [react-select](https://github.com/JedWatson/react-select)
-   inputComponents
-   control - Field wrapper
-   controlFocused - Field wrapper focused
-   indicatorsContainer - Field icons wrapper
-   clearIndicator - Clear icon
-   indicatorSeparator - Separator line
-   dropdownIndicator - Dropdown icon
-   noOptionsMessage
-   loadingMessage
-   valueContainer - Input wrapper
-   valueContainerDisabled - Input wrapper disabled
-   placeholder
-   placeholderDisabled
-   multiValue - Value element in isMulti type field
-   multipleValueLabel - Label of the element
-   multipleValueLabelDisabled - Label of the element disabled
-   multipleValueRemove - Element remove icon
-   multipleValueRemoveDisabled - Element remove icon disabled
-   menu - Menu element in react-select
-   options - Options wrapper by block
-   optionsDisabled - Disabled option
-   optionLabel
-   optionLabelIcon
-   optionLabelCustomIcon
-   optionLabelAvatar
-   disabledAvatar
-   disabledText - Styles for disabled text
-   disabledIcon
-   label - Label of the value
-   subLabel - SubLabel of the value in two lines option
-   optionLabelBlock - Value wrapper in two lines option (contains optionLabelText and optionLabelSublabel)
-   optionLabelText - Label wrapper in two lines option
-   optionLabelSubLabel - Sublabel wrapper in two lines option
-   actionContainer - Actions wrapper
-   action - Action wrapper
-   actionIcon - Action icon
-   actionText - Action text
-   actionTextWithIcon - Action
