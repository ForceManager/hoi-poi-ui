SectionForm Simple

```jsx
import { Input } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });

<div style={{ padding: 20, backgroundColor: '#F4F5F6' }}>
    <SectionForm title="Title here">
        <Input
            label="Lorem ipsum"
            placeholder="Write here"
            onChange={onChange}
            value={state.value}
        />
    </SectionForm>
</div>;
```

SectionForm With ActiveFields

```jsx
import { Input } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({ value: 'Lorem ipsum', activeFields: 1 });
const onChange = (value) => {
    setState({ value, activeFields: value ? 1 : 0 });
};

<div style={{ padding: 20, backgroundColor: '#F4F5F6' }}>
    <SectionForm title="Title here" activeFields={state.activeFields} defaultOpen={false}>
        <Input
            label="Lorem ipsum"
            placeholder="Write here"
            onChange={onChange}
            value={state.value}
        />
    </SectionForm>
</div>;
```

Removable Section With ActiveFields

```jsx
import { Input } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({ value: 'Lorem ipsum', activeFields: 1 });
const onChange = (value) => {
    setState({ value, activeFields: value ? 1 : 0 });
};

const onRemove = () => console.log('Remove');

<div style={{ padding: 20, backgroundColor: '#F4F5F6' }}>
    <SectionForm
        title="Title here"
        activeFields={state.activeFields}
        onRemove={onRemove}
        defaultOpen={false}
    >
        <Input
            label="Lorem ipsum"
            placeholder="Write here"
            onChange={onChange}
            value={state.value}
        />
    </SectionForm>
</div>;
```

Section Not Expandable

```jsx
import { Input } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({ value: 'Lorem ipsum', activeFields: 1 });
const onChange = (value) => {
    setState({ value, activeFields: value ? 1 : 0 });
};

<div style={{ padding: 20, backgroundColor: '#F4F5F6' }}>
    <SectionForm
        title="Title here"
        activeFields={state.activeFields}
        defaultOpen={false}
        isExpandable={false}
    >
        <Input
            label="Lorem ipsum"
            placeholder="Write here"
            onChange={onChange}
            value={state.value}
        />
    </SectionForm>
</div>;
```

Custom title component

```jsx
import { Icon, Text, Input } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });

const titleComponent = (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Icon name="thickEnabled" />
        <Text style={{ marginLeft: 10 }}>Title here</Text>
    </div>
);

<div style={{ padding: 20, backgroundColor: '#F4F5F6' }}>
    <SectionForm title={titleComponent}>
        <Input
            label="Lorem ipsum"
            placeholder="Write here"
            onChange={onChange}
            value={state.value}
        />
    </SectionForm>
</div>;
```

Controlled

```jsx
import { useState } from 'react';
import { Button, Input } from 'hoi-poi-ui';

const [isOpen, setIsOpen] = useState({});
const [state, setState] = useState({});

const onOpen = (e) => setIsOpen(!isOpen);
const onChange = (value) => setState({ value });

<div style={{ padding: 16, backgroundColor: '#F4F5F6' }}>
    <Button color="primary" onClick={onOpen} style={{ marginBottom: 16 }}>
        Toggle Section
    </Button>
    <SectionForm title="Title here" isOpen={isOpen} onChange={onOpen}>
        <Input
            label="Lorem ipsum"
            placeholder="Write here"
            onChange={onChange}
            value={state.value}
        />
    </SectionForm>
</div>;
```

With header pre/post component

```jsx
import { Input, Icon } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });

<div style={{ padding: 20, backgroundColor: '#F4F5F6' }}>
    <SectionForm
        title="Title here"
        headerPreComponent={<Icon name="apps" />}
        headerPostComponent={<Icon name="apps" />}
    >
        <Input
            label="Lorem ipsum"
            placeholder="Write here"
            onChange={onChange}
            value={state.value}
        />
    </SectionForm>
</div>;
```

With remove icon

```jsx
import { Input, Icon } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (value) => setState({ value });

<div style={{ padding: 20, backgroundColor: '#F4F5F6' }}>
    <SectionForm title="Title here" onRemove={() => console.log('remove')} isExpandable={false}>
        <Input
            label="Lorem ipsum"
            placeholder="Write here"
            onChange={onChange}
            value={state.value}
        />
    </SectionForm>
</div>;
```

### Component tree

---

-   root - root element
-   [react-animate-height](https://github.com/Stanko/react-animate-height)
-   [Text](#/Typography?id=text)
-   [BadgeNotification](#/General?id=badgenotification)
-   textContainer
-   header
-   icon
