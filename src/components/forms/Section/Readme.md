```jsx
import { Input } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (e) => setState({ value: e && e.target ? e.target.value : '' });

<div style={{padding: 20, backgroundColor: '#F4F5F6'}}>
    <Section title="Title here">
        <Input
            label="Lorem ipsum"
            placeholder="Write here"
            onChange={onChange}
            value={state.value}
        />
    </Section>
</div>
```

Custom title component

```jsx
import { Icon, Text, Input } from 'hoi-poi-ui';
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (e) => setState({ value: e && e.target ? e.target.value : '' });

const titleComponent = (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Icon name="thickEnabled" />
        <Text style={{ marginLeft: 10 }}>Title here</Text>
    </div>
);

<div style={{padding: 20, backgroundColor: '#F4F5F6'}}>
    <Section title={titleComponent}>
        <Input
            label="Lorem ipsum"
            placeholder="Write here"
            onChange={onChange}
            value={state.value}
        />
    </Section>
</div>
```

Controlled

```jsx
import { useState } from 'react';
import { Button, Input } from 'hoi-poi-ui';

const [isOpen, setIsOpen] = useState({});
const [state, setState] = useState({});

const onOpen = (e) => setIsOpen(!isOpen);
const onChange = (e) => setState({ value: e && e.target ? e.target.value : '' });

<div style={{padding: 16, backgroundColor: '#F4F5F6'}}>
    <Button color="primary" onClick={onOpen} style={{marginBottom: 16}}>
        Toggle Section
    </Button>
    <Section title="Title here" isOpen={isOpen} onChange={onOpen}>
        <Input
            label="Lorem ipsum"
            placeholder="Write here"
            onChange={onChange}
            value={state.value}
        />
    </Section>
</div>;
```