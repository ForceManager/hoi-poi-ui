Default:

```jsx
import { useState, useMemo } from 'react';
import { Button, Chip, Avatar } from 'hoi-poi-ui';

const [state, setState] = useState({
    value: null,
});
const [chipState, setChipState] = useState({
    isFolded: true,
});

const onChange = (value) => setState({ value });
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });
const onRemove = () => setState({});

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
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
    },
];

console.log(state);

<div style={{ display: 'flex', alignItems: 'center' }}>
    <WrapperSelect options={options} value={state.value} onChange={onChange}>
        <Button>Select One</Button>
    </WrapperSelect>
    <span> </span>
    <WrapperSelect options={options} getIsOpen={getIsOpen} value={state.value} onChange={onChange}>
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
            onRemove={state.value ? onRemove : null}
        >
            Select One
        </Chip>
    </WrapperSelect>
    <span> </span>
    <WrapperSelect options={options} value={state.value} onChange={onChange}>
        <Avatar
            size="medium"
            src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
            placeholder="/public/placeholder.png"
            alt="image"
        />
    </WrapperSelect>
</div>;
```

Groups:

```jsx
import { useState } from 'react';
import { Button } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });

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
                isDisabled: true,
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

<div>
    <WrapperSelect options={options} value={state.value} onChange={onChange}>
        <Button>Select One</Button>
    </WrapperSelect>
</div>;
```

Multi:

```jsx
import { useState } from 'react';
import { Button } from 'hoi-poi-ui';

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
        type: 'success',
    },
    {
        label: 'Lorem ipsum 10',
        value: 'lorem-ipsum-10',
        type: 'danger',
    },
];

<div>
    <WrapperSelect options={options} isMulti={true} value={state.value} onChange={onChange}>
        <Button>Select Multi</Button>
    </WrapperSelect>
</div>;
```

Groups Multi:

```jsx
import { useState } from 'react';
import { Button } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });

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
                isDisabled: true,
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

<div>
    <WrapperSelect options={options} isMulti={true} value={state.value} onChange={onChange}>
        <Button>Select Multi</Button>
    </WrapperSelect>
</div>;
```

Custom Component Options:

```jsx
import { useState } from 'react';
import { Button } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });

<div>
    <WrapperSelect optionsComponent={<div>Hola</div>} value={state.value} onChange={onChange}>
        <Button>Activate</Button>
    </WrapperSelect>
</div>;
```
