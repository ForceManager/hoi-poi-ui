No Options

```jsx
import { useState, useMemo } from 'react';
import { Button, Chip, Avatar, Text, Icon, Badge } from 'hoi-poi-ui';

const [state, setState] = useState({
    value: null,
});
const onChange = (value) => setState({ value });
const [chipState, setChipState] = useState({
    isFolded: true,
});
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });

const options = [];

<div>
    <SelectWrapper options={options} value={state.value} getIsOpen={getIsOpen} onChange={onChange}>
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
        >
            Select One
        </Chip>
    </SelectWrapper>
</div>;
```

Default:

```jsx
import { useState, useMemo } from 'react';
import { Button, Chip, Avatar, Text, Icon, Badge } from 'hoi-poi-ui';

const [state, setState] = useState({
    value: null,
});
const onChange = (value) => setState({ value });
const [chipState, setChipState] = useState({
    isFolded: true,
});
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });

const options = [
    {
        label: 'Lorem ipsum 1 with a really long label',
        value: 'lorem-ipsum-1',
        className: 'lorem-ipsum--1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        className: 'lorem-ipsum--2',
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
        className: 'lorem-ipsum--3',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
        className: 'lorem-ipsum--4',
    },
];

<div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
    <SelectWrapper options={options} value={state.value} getIsOpen={getIsOpen} onChange={onChange}>
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
        >
            Select One
        </Chip>
    </SelectWrapper>
    <SelectWrapper options={options} value={state.value} onChange={onChange}>
        <Button>Select One</Button>
    </SelectWrapper>
    <SelectWrapper options={options} value={state.value} onChange={onChange}>
        <Avatar
            size="medium"
            src="https://live.staticflickr.com/2862/9899551176_b8c9c7dd30_b.jpg"
            placeholder="/public/placeholder.png"
            alt="image"
        />
    </SelectWrapper>
    <SelectWrapper options={options} value={state.value} onChange={onChange}>
        <Icon name="arrowDropDownCircle" />
    </SelectWrapper>
    <SelectWrapper options={options} value={state.value} onChange={onChange} popoverWide>
        <Text type="subtitle">Select One with wider popover</Text>
    </SelectWrapper>
    <SelectWrapper
        options={options}
        value={state.value}
        onChange={onChange}
        truncateOptions={false}
    >
        <Badge type="error">Lorem ipsum with no truncated options</Badge>
    </SelectWrapper>
</div>;
```

Two Lines:

```jsx
import { useState } from 'react';
import { Chip } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
const [chipState, setChipState] = useState({
    isFolded: true,
});
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });
const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
        subLabel: 'Lorem ipsum 1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        subLabel: 'Lorem ipsum 2',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
        subLabel: 'Lorem ipsum 3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
        subLabel: 'Lorem ipsum 4',
    },
];

<div>
    <SelectWrapper options={options} value={state.value} getIsOpen={getIsOpen} onChange={onChange}>
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
            onRemove={state.value ? onRemove : null}
        >
            Select Multi
        </Chip>
    </SelectWrapper>
</div>;
```

Side label:

```jsx
import { useState } from 'react';
import { Chip } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
const [chipState, setChipState] = useState({
    isFolded: true,
});
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });
const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

const options = [
    {
        label: 'Lorem ipsum 1',
        value: 'lorem-ipsum-1',
        sideLabel: 'ALT + 1',
    },
    {
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        sideLabel: 'ALT + 2',
        isDisabled: true,
    },
    {
        label: 'Lorem ipsum 3',
        value: 'lorem-ipsum-3',
        sideLabel: 'ALT + 3',
    },
    {
        label: 'Lorem ipsum 4',
        value: 'lorem-ipsum-4',
        sideLabel: 'ALT + 4',
    },
];

<div>
    <SelectWrapper options={options} value={state.value} getIsOpen={getIsOpen} onChange={onChange}>
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
            onRemove={state.value ? onRemove : null}
        >
            Select Multi
        </Chip>
    </SelectWrapper>
</div>;
```

Icon:

```jsx
import { useState } from 'react';
import { Chip } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
const [chipState, setChipState] = useState({
    isFolded: true,
});
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });
const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

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

<div>
    <SelectWrapper options={options} value={state.value} getIsOpen={getIsOpen} onChange={onChange}>
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
            onRemove={state.value ? onRemove : null}
        >
            Select Multi
        </Chip>
    </SelectWrapper>
</div>;
```

Custom Icon:

```jsx
import { useState, useMemo } from 'react';
import { Chip } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
const [chipState, setChipState] = useState({
    isFolded: true,
});
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });
const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

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
        label: 'Lorem ipsum 2',
        value: 'lorem-ipsum-2',
        icon: customIcon,
        isDisabled: true,
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
    {
        label: 'Lorem ipsum 5',
        value: 'lorem-ipsum-5',
        iconType: 'route',
    },
];

<div>
    <SelectWrapper options={options} value={state.value} getIsOpen={getIsOpen} onChange={onChange}>
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
            onRemove={state.value ? onRemove : null}
        >
            Select Multi
        </Chip>
    </SelectWrapper>
</div>;
```

Avatar:

```jsx
import { useState } from 'react';
import { Chip } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
const [chipState, setChipState] = useState({
    isFolded: true,
});
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });
const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

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

<div>
    <SelectWrapper options={options} value={state.value} getIsOpen={getIsOpen} onChange={onChange}>
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
            onRemove={state.value ? onRemove : null}
        >
            Select Multi
        </Chip>
    </SelectWrapper>
</div>;
```

Groups:

```jsx
import { useState } from 'react';
import { Chip } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
const [chipState, setChipState] = useState({
    isFolded: true,
});
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });
const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

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
    <SelectWrapper options={options} value={state.value} getIsOpen={getIsOpen} onChange={onChange}>
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
            onRemove={state.value ? onRemove : null}
        >
            Select One
        </Chip>
    </SelectWrapper>
</div>;
```

Multi:

```jsx
import { useState } from 'react';
import { Chip } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
const [chipState, setChipState] = useState({
    isFolded: true,
});
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });
const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

const options = [
    {
        label: 'Lorem ipsum 1 with a very long label',
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
    },
    {
        label: 'Lorem ipsum 10',
        value: 'lorem-ipsum-10',
    },
];

<div>
    <SelectWrapper
        options={options}
        isMulti={true}
        value={state.value}
        getIsOpen={getIsOpen}
        onChange={onChange}
    >
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
            onRemove={state.value ? onRemove : null}
        >
            Select Multi
        </Chip>
    </SelectWrapper>
</div>;
```

Multi With Bullets:

```jsx
import { useState } from 'react';
import { Chip } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
const [chipState, setChipState] = useState({
    isFolded: true,
});
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });
const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

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

<div>
    <SelectWrapper
        options={options}
        isMulti={true}
        value={state.value}
        getIsOpen={getIsOpen}
        onChange={onChange}
    >
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
            onRemove={state.value ? onRemove : null}
        >
            Select Multi
        </Chip>
    </SelectWrapper>
</div>;
```

Groups Multi:

```jsx
import { useState } from 'react';
import { Chip } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
const [chipState, setChipState] = useState({
    isFolded: true,
});
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });
const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

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
    <SelectWrapper
        options={options}
        isMulti={true}
        value={state.value}
        getIsOpen={getIsOpen}
        onChange={onChange}
    >
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
            onRemove={state.value ? onRemove : null}
        >
            Select Multi
        </Chip>
    </SelectWrapper>
</div>;
```

Async load options:

```jsx
import { useState } from 'react';
import { Chip } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });
const [chipState, setChipState] = useState({
    isFolded: true,
});
const getIsOpen = (isOpen) => setChipState({ isFolded: !isOpen });
const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

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

const loadOptions = () =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                resolve(options);
            }, 2000),
        [],
    );

<div>
    <SelectWrapper
        loadOptions={loadOptions}
        value={state.value}
        getIsOpen={getIsOpen}
        onChange={onChange}
    >
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
            onRemove={state.value ? onRemove : null}
        >
            Select Multi
        </Chip>
    </SelectWrapper>
</div>;
```

Custom Component Options:

```jsx
import { useState } from 'react';
import { Button, SwitchInput } from 'hoi-poi-ui';

const [state, setState] = useState({});

const onChange = (value) => setState({ value });

<div>
    <SelectWrapper
        customOptions={
            <SwitchInput
                label="Lorem Ipsum"
                labelMode="horizontal"
                onChange={onChange}
                value={state.value}
                info="Info text here"
                error="Error text here"
            />
        }
    >
        <Button>Activate</Button>
    </SelectWrapper>
</div>;
```

#### **Special Examples**

SelectWrapper using Select Single as customOption with default open dropdown list and custom focus control:

###### a) The popover will be closed after making a selection

```jsx
import { useState, useRef } from 'react';
import { Chip, Select } from 'hoi-poi-ui';

const [state, setState] = useState({});
const newSelectRef = useRef(null);
const popoverRef = useRef(null);

const onChange = (value) => {
    setState({ value });
    if (popoverRef && popoverRef.current) {
        popoverRef.current.setPopupVisible(false);
    }
};

const [chipState, setChipState] = useState({
    isFolded: true,
});

const getIsOpen = (isOpen) => {
    setChipState({ isFolded: !isOpen });
    if (newSelectRef && newSelectRef.current) {
        if (isOpen)
            setTimeout(() => {
                newSelectRef.current.focus();
            }, 50);
    }
};

const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

const getSelectRef = (ref) => {
    if (ref) newSelectRef.current = ref;
};

const getPopoverRef = (ref) => {
    if (ref) popoverRef.current = ref;
};

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

const loadOptions = () =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                resolve(options);
            }, 1000),
        [],
    );

<div>
    <SelectWrapper
        getIsOpen={getIsOpen}
        getPopoverRef={getPopoverRef}
        customOptions={
            <Select
                label="Lorem ipsum"
                placeholder="Search"
                loadOptions={loadOptions}
                onChange={onChange}
                value={state.value}
                isFullWidth
                highlightMatch
                getRef={getSelectRef}
                forceStartFocused={true}
                forceMenuIsOpen={true}
                useMenuPortal={false}
                menuPosition="absolute"
                autoFocus={true}
                overrides={{
                    styles: {
                        menu: (base) => ({
                            ...base,
                            position: 'relative',
                        }),
                    },
                }}
            />
        }
    >
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
        >
            Select One
        </Chip>
    </SelectWrapper>
</div>;
```

###### b) The popover will remain open after making a selection

```jsx
import { useState, useRef } from 'react';
import { Chip, Select } from 'hoi-poi-ui';

const [state, setState] = useState({});
const newSelectRef = useRef(null);

const onChange = (value) => {
    setState({ value });
    if (newSelectRef && newSelectRef.current) {
        setTimeout(() => {
            newSelectRef.current.focus();
        }, 50);
    }
};

const [chipState, setChipState] = useState({
    isFolded: true,
});

const getIsOpen = (isOpen) => {
    setChipState({ isFolded: !isOpen });
    if (newSelectRef && newSelectRef.current) {
        if (isOpen)
            setTimeout(() => {
                newSelectRef.current.focus();
            }, 50);
    }
};

const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

const getSelectRef = (ref) => {
    if (ref) newSelectRef.current = ref;
};

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

const loadOptions = () =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                resolve(options);
            }, 1000),
        [],
    );

<div>
    <SelectWrapper
        getIsOpen={getIsOpen}
        customOptions={
            <Select
                label="Lorem ipsum"
                placeholder="Search"
                loadOptions={loadOptions}
                onChange={onChange}
                value={state.value}
                isFullWidth
                highlightMatch
                getRef={getSelectRef}
                forceStartFocused={true}
                forceMenuIsOpen={true}
                useMenuPortal={false}
                menuPosition="absolute"
                autoFocus={true}
                overrides={{
                    styles: {
                        menu: (base) => ({
                            ...base,
                            position: 'relative',
                        }),
                    },
                }}
            />
        }
    >
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
        >
            Select One
        </Chip>
    </SelectWrapper>
</div>;
```

SelectWrapper using Select Multi as customOption with default open dropdown list and custom focus control:

```jsx
import { useState, useRef } from 'react';
import { Chip, Select } from 'hoi-poi-ui';

const [state, setState] = useState({});
const newSelectRef = useRef(null);
const popoverRef = useRef(null);

const onChange = (value) => {
    if (value.length > 0) setState({ value });
    else setState({});
};

const [chipState, setChipState] = useState({
    isFolded: true,
});

const getIsOpen = (isOpen) => {
    setChipState({ isFolded: !isOpen });
    if (newSelectRef && newSelectRef.current) {
        if (isOpen)
            setTimeout(() => {
                newSelectRef.current.focus();
            }, 50);
    }
};

const onRemove = (e) => {
    e.stopPropagation();
    setState({});
};

const getSelectRef = (ref) => {
    if (ref) newSelectRef.current = ref;
};

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

const loadOptions = () =>
    new Promise(
        (resolve, reject) =>
            setTimeout(() => {
                resolve(options);
            }, 1000),
        [],
    );

<div>
    <SelectWrapper
        getIsOpen={getIsOpen}
        customOptions={
            <Select
                label="Lorem ipsum"
                placeholder="Search"
                loadOptions={loadOptions}
                onChange={onChange}
                value={state.value}
                isMulti
                isFullWidth
                highlightMatch
                getRef={getSelectRef}
                forceStartFocused={true}
                forceMenuIsOpen={true}
                useMenuPortal={false}
                menuPosition="absolute"
                autoFocus={true}
                overrides={{
                    styles: {
                        menu: (base) => ({
                            ...base,
                            position: 'relative',
                        }),
                    },
                }}
            />
        }
    >
        <Chip
            isFolded={chipState.isFolded}
            isUnfolded={!chipState.isFolded}
            isFilled
            isActive={state.value ? !!state.value : false}
        >
            Select One
        </Chip>
    </SelectWrapper>
</div>;
```

### Component tree

---

-   root - root element
-   [Popover](#/Utils?id=popover)
-   optionList - options wrapper
-   option - option
-   [Text](#/General?id=text)
-   [Icon](#/General?id=icon)
-   [Avatar](#/General?id=avatar)
-   [Checkbox](#/General?id=checkbox)
-   [Loader](#/General?id=loader)
