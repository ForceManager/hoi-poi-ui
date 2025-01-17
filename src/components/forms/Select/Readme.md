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

Single ReadOnly with input value:

```jsx
<div>
    <Select label="Lorem ipsum" placeholder="Select one" inputValue="Lorem ipsum" isReadOnly />
</div>
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
const onChange = (value) => setState({ value });

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

Single with relative Menu display:

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
        useMenuPortal={false}
        menuPosition="absolute"
        overrides={{
            styles: {
                menu: (base) => ({
                    ...base,
                    position: 'relative',
                }),
            },
        }}
    />
</div>;
```

Single with custom dropdown icon:

```jsx
import { useState } from 'react';
import { Icon } from 'hoi-poi-ui';

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
        dropDownIcon={<Icon name="folder" />}
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

Multiple sub-labels:

```jsx
import { useState } from 'react';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
        subLabel: ['lorem-ipsum-1', 'lorem-ipsum-1-1'],
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        subLabel: ['lorem-ipsum-2', 'lorem-ipsum-2-1'],
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
        subLabel: ['lorem-ipsum-3', 'lorem-ipsum-3-1'],
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
        subLabel: ['lorem-ipsum-4', 'lorem-ipsum-4-1'],
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
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 5',
        value: 'lorem-ipsum-5',
    },
    {
        label: 'Lorem ipsum 6',
        value: 'lorem-ipsum-6',
    },
    {
        label: 'Lorem ipsum 7',
        value: 'lorem-ipsum-7',
    },
    {
        label: 'Lorem ipsum 8',
        value: 'lorem-ipsum-8',
    },
    {
        label: 'Lorem ipsum 9',
        value: 'lorem-ipsum-9',
    },
    {
        label: 'Lorem ipsum 10',
        value: 'lorem-ipsum-10',
    },
    {
        label: 'Lorem ipsum 11',
        value: 'lorem-ipsum-11',
    },
    {
        label: 'Lorem ipsum 12',
        value: 'lorem-ipsum-12',
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

Multi with Select All:

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
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 5',
        value: 'lorem-ipsum-5',
    },
    {
        label: 'Lorem ipsum 6',
        value: 'lorem-ipsum-6',
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

const [stateWithout, setStateWithout] = useState([]);

const onChangeWithout = (value) => setStateWithout(value);

const [stateOneValue, setStateOneValue] = useState([
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
]);

const onChangeOneValue = (value) => setStateOneValue(value);

const [stateAllValues, setStateAllValues] = useState([
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 5',
        value: 'lorem-ipsum-5',
    },
    {
        label: 'Lorem ipsum 6',
        value: 'lorem-ipsum-6',
    },
]);

const onChangeAllValues = (value) => setStateAllValues(value);

const optionsGroup = [
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
                isDisabled: true,
            },
            {
                label: 'Dolor amet 3',
                value: 'dolor-amet-3',
            },
            {
                label: 'Dolor amet 4',
                value: 'dolor-amet-4',
                isDisabled: true,
            },
        ],
    },
];

const loadGroupOptions = () =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                resolve(optionsGroup);
            }, 1000),
        [],
    );

const [stateGroupNoValues, setStateGroupNoValues] = useState([]);

const onChangeGroupNoValue = (value) => setStateGroupNoValues(value);

const [stateGroupValues, setStateGroupValues] = useState([
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
]);

const onChangeGroupValue = (value) => setStateGroupValues(value);

<div>
    <Select
        label="Without value"
        placeholder="Select one"
        onChange={onChangeWithout}
        loadOptions={loadOptions}
        value={stateWithout}
        isMulti={true}
        isClearable
        selectAllLabel="Select all"
    />
    <Select
        label="One value"
        placeholder="Select one"
        onChange={onChangeOneValue}
        loadOptions={loadOptions}
        value={stateOneValue}
        isMulti={true}
        isClearable
        selectAllLabel="Select all"
    />
    <Select
        label="All values"
        placeholder="Select one"
        onChange={onChangeAllValues}
        loadOptions={loadOptions}
        value={stateAllValues}
        isMulti={true}
        isClearable
        selectAllLabel="Select all"
    />
    <Select
        label="Groups No Value"
        placeholder="Select one"
        onChange={onChangeGroupNoValue}
        loadOptions={loadGroupOptions}
        value={stateGroupNoValues}
        isMulti={true}
        isClearable
        selectAllLabel="Select all"
    />
    <Select
        label="Groups Value"
        placeholder="Select one"
        onChange={onChangeGroupValue}
        loadOptions={loadGroupOptions}
        value={stateGroupValues}
        isMulti={true}
        isClearable
        selectAllLabel="Select all"
    />
</div>;
```

Single With Custom Colors:

```jsx
import { useState } from 'react';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: '1',
    },
    {
        label: 'Lorem ipsum 2',
        value: '2',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 3',
        value: '3',
    },
    {
        label: 'Lorem ipsum 4',
        value: '4',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 5',
        value: '5',
    },
];

const [state, setState] = useState([
    {
        label: 'Lorem ipsum 1',
        value: '1',
    },
]);

const onChange = (value) => setState({ value });

<Select
    label="Lorem ipsum"
    placeholder="Select one"
    onChange={onChange}
    options={options}
    value={state.value}
    isMulti={false}
    isClearable={true}
    overrides={{
        option: {
            getStyles: ({ data }) => {
                return {
                    color: 'red',
                    cursor: 'pointer',
                    '&:hover': {
                        color: 'blue',
                    },
                };
            },
        },
    }}
/>;
```

Multi With Custom Colors:

```jsx
import { useState } from 'react';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: '1',
    },
    {
        label: 'Lorem ipsum 2',
        value: '2',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 3',
        value: '3',
    },
    {
        label: 'Lorem ipsum 4',
        value: '4',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 5',
        value: '5',
    },
];
const [state, setState] = useState([
    {
        label: 'Lorem ipsum 1',
        value: '1',
    },
]);

const onChange = (value) => setState({ value });
const primary = {
    1: '#FF521B',
    2: '#820B8A',
    3: '#7261A3',
    4: '#4F5D75',
    5: '#395756',
};
const secondary = {
    1: '#FC9E4F',
    2: '#AF9AB2',
    3: '#8C7EB4',
    4: '#637492',
    5: '#496F6E',
};

const getCanChange = (data, action) => {
    if (action.action === 'deselect-option' && data.length === 0) return false;
    return true;
};

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        isMulti={true}
        isClearable={true}
        getCanChange={getCanChange}
        overrides={{
            multiValue: {
                getStyles: ({ data }) => {
                    return {
                        backgroundColor: primary[data.value],
                        '&:hover': {
                            backgroundColor: secondary[data.value],
                        },
                    };
                },
            },
            multiValueLabel: {
                getStyles: ({ data }) => {
                    return {
                        color: 'white',
                    };
                },
            },
            multiValueRemove: {
                getStyles: ({ data }) => {
                    let showClose = true;

                    if (state.value.length > 1) showClose = true;
                    else if (state.value.length > 0 && state.value[0].value === data.value) {
                        showClose = false;
                    }
                    return {
                        display: showClose ? 'flex' : 'none',
                        '& svg path': {
                            fill: 'white',
                        },
                        '&:hover': {
                            backgroundColor: 'initial',
                            '& svg path': {
                                fill: 'white',
                            },
                        },
                    };
                },
            },
            clearIndicator: {
                getStyles: () => {
                    return {
                        display: 'none',
                    };
                },
            },
            indicatorSeparator: {
                getStyles: () => {
                    return {
                        display: 'none',
                    };
                },
            },
            optionLabel: {
                getIsDisabled: (data, isDisabled) => {
                    if (isDisabled && typeof isDisabled === 'boolean') return isDisabled;
                    if (
                        state.value &&
                        state.value.length === 1 &&
                        state.value[0].value === data.value
                    ) {
                        return true;
                    }
                    return false;
                },
            },
        }}
    />
</div>;
```

Multi with num selected fields:

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
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 5',
        value: 'lorem-ipsum-5',
    },
    {
        label: 'Lorem ipsum 6',
        value: 'lorem-ipsum-6',
    },
    {
        label: 'Lorem ipsum 7',
        value: 'lorem-ipsum-7',
    },
    {
        label: 'Lorem ipsum 8',
        value: 'lorem-ipsum-8',
    },
    {
        label: 'Lorem ipsum 9',
        value: 'lorem-ipsum-9',
    },
    {
        label: 'Lorem ipsum 10',
        value: 'lorem-ipsum-10',
    },
    {
        label: 'Lorem ipsum 11',
        value: 'lorem-ipsum-11',
    },
    {
        label: 'Lorem ipsum 12',
        value: 'lorem-ipsum-12',
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
        showNumSelected
    />
</div>;
```

Multi with bullets:

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

Multi with icons:

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
        iconType: 'pin',
        iconColor: 'blue',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        iconType: 'fields',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
        iconType: 'rocket',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
        icon: customIcon,
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

Multi without chips

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
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 5',
        value: 'lorem-ipsum-5',
    },
    {
        label: 'Lorem ipsum 6',
        value: 'lorem-ipsum-6',
    },
    {
        label: 'Lorem ipsum 7',
        value: 'lorem-ipsum-7',
    },
    {
        label: 'Lorem ipsum 8',
        value: 'lorem-ipsum-8',
    },
    {
        label: 'Lorem ipsum 9',
        value: 'lorem-ipsum-9',
    },
    {
        label: 'Lorem ipsum 10',
        value: 'lorem-ipsum-10',
    },
    {
        label: 'Lorem ipsum 11',
        value: 'lorem-ipsum-11',
    },
    {
        label: 'Lorem ipsum 12',
        value: 'lorem-ipsum-12',
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
        hideMultivalueChips
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

const optionsGroup = [
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
                isDisabled: true,
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
                isDisabled: true,
            },
        ],
    },
];

const [stateGroupValues, setStateGroupValues] = useState([
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
]);

const onChangeGroupValue = (value) => setStateGroupValues(value);

const [stateGroupValuesAll, setStateGroupValuesAll] = useState([
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
]);

const onChangeGroupValueAll = (value) => setStateGroupValuesAll(value);

<div>
    <Select
        label="Single"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        menuIsOpen={true}
        isFullWidth={true}
    />
    <Select
        label="Multi"
        placeholder="Select one"
        onChange={onChangeGroupValue}
        options={optionsGroup}
        value={stateGroupValues}
        isMulti={true}
        isClearable
        isFullWidth={true}
    />
    <Select
        label="Multi With Select All"
        placeholder="Select one"
        onChange={onChangeGroupValueAll}
        options={optionsGroup}
        value={stateGroupValuesAll}
        isMulti={true}
        selectAllLabel="Select All"
        isClearable
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

Async load with grouped options:

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

const groupOptions = (options) => {
    const odd = {
        label: 'Odd',
        options: [],
    };
    const even = {
        label: 'Even',
        options: [],
    };
    options.forEach((current, index) => {
        if ((index + 1) % 2 === 0) even.options.push(current);
        else odd.options.push(current);
    });
    const finalOptions = [odd, even];
    return finalOptions;
};

const loadOptions = () =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                const groupedOptions = groupOptions(options);
                resolve(groupedOptions);
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
        highlightMatch
    />
</div>;
```

Async load grouped options with fuzzy style:

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

const groupOptions = (options) => {
    const odd = {
        label: 'Odd',
        options: [],
    };
    const even = {
        label: 'Even',
        options: [],
    };
    options.forEach((current, index) => {
        if ((index + 1) % 2 === 0) even.options.push(current);
        else odd.options.push(current);
    });
    const finalOptions = [odd, even];
    return finalOptions;
};

const loadOptions = (text, cb) =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                const newOptions = options.filter((current) => {
                    return current.value.includes(text);
                });

                const groupedOptions = groupOptions(newOptions);
                resolve(groupedOptions);
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

Async load multiple options with fuzzy style and default search:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
let options = [];
let total = 100;
for (let i = 0; i < total; i++) {
    options.push({
        label: `Lorem ipsum ${i}`,
        value: `lorem ipsum ${i}`,
        src: 'https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg',
        placeholder: '/public/placeholder.png',
        alt: 'image',
        subLabel: `Lorem sublabel ${i}`,
    });
}

const loadOptions = (text, cb) =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                const newOptions = options.filter((current) => {
                    return current.value.includes(text.trim().toLowerCase());
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
        defaultSearch="11"
        value={state.value}
        isFuzzy
        isMulti
        highlightMatch
        showMediaInSelectedValues
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

Select with custom actions

```jsx
import { useState, useMemo } from 'react';
import Switch from '../Switch';
import Text from '../../typography/Text';

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
const [isChecked, setIsChecked] = useState(false);
const onChange = (value) => setState({ value });

const onChangeChecked = (focus) => {
    setIsChecked(!isChecked);
};

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Select one"
        onChange={onChange}
        options={options}
        value={state.value}
        actions={[
            {
                onClick: onChangeChecked,
                component: (
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            pointerEvents: 'none',
                        }}
                    >
                        <Text>Toggle me</Text>
                        <Switch checked={isChecked} />
                    </div>
                ),
            },
            {
                component: (
                    <div
                        style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                        onClick={onChangeChecked}
                    >
                        <Text>Toggle me</Text>
                        <Switch checked={isChecked} />
                    </div>
                ),
            },
        ]}
    />
</div>;
```

Select only text:

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
        onlyText
    />
</div>;
```

Custom Option:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
const options = [
    {
        label: 'Lorem ipsum 1',
        label2: 'Lorem-ipsum-1',
        label3: 'Lorem-ipsum-1',
        value: 'lorem-ipsum-1',
    },
    {
        label: 'Lorem ipsum 2',
        label2: 'Lorem-ipsum-2',
        label3: 'Lorem-ipsum-2',
        value: 'lorem-ipsum-2',
    },
    {
        label: 'Lorem ipsum 3',
        label2: 'Lorem-ipsum-3',
        label3: 'Lorem-ipsum-3',
        value: 'lorem-ipsum-3',
    },
    {
        label: 'Lorem ipsum 4',
        label2: 'Lorem-ipsum-4',
        label3: 'Lorem-ipsum-4',
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

const customOption = (option) => {
    return (
        <div>
            <div>{option.label}</div>
            <div>{option.label2}</div>
            <div>{option.label3}</div>
        </div>
    );
};

const onKeyDown = (e) => {
    if (e.key === 'Enter') {
        console.log('Enter key has been pushed and input value is:', e.target.value);
    }
};

<div>
    <Select
        label="Lorem ipsum"
        placeholder="Search"
        loadOptions={loadOptions}
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={state.value}
        isFuzzy
        customOption={customOption}
        isMulti
    />
</div>;
```

With Dividers:

```jsx
import { useState } from 'react';

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
    },
    {
        divider: true,
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
        divider: true,
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
    {
        divider: true,
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

Overriding native components:

```jsx
import { useState, useMemo } from 'react';

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
const onChange = (value) => setState({ value });
const componentOverride = useMemo(() => {
    return {
        MultiValue: (props) => {
            return <span>{props.data.label}</span>;
        },
    };
}, []);

<div>
    <Select
        label="Lorem ipsum"
        onChange={onChange}
        options={options}
        value={state.value}
        isMulti
        componentOverride={componentOverride}
    />
</div>;
```

Avoid cache:

```jsx
import { useState, useMemo } from 'react';

const options = [
    [
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
    [
        {
            label: 'Lorem ipsum 5',
            value: 'lorem-ipsum-5',
        },
        {
            label: 'Lorem ipsum 6',
            value: 'lorem-ipsum-6',
        },
        {
            label: 'Lorem ipsum 7',
            value: 'lorem-ipsum-7',
        },
        {
            label: 'Lorem ipsum 8',
            value: 'lorem-ipsum-8',
        },
    ],
];

const [state, setState] = useState({});
const onChange = (value) => setState({ value });
const loadOptions = () =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                const randomIndex = Math.round(Math.random());
                resolve(options[randomIndex]);
            }, 1000),
        [],
    );

<div>
    <Select
        label="Lorem ipsum"
        onChange={onChange}
        loadOptions={loadOptions}
        cacheOptions={false}
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

```

```
