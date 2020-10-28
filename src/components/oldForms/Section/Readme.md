```jsx
<Section title="Title here">
    <p styles={{ padding: 10 }}>Lorem ipsum</p>
</Section>
```

Custom title component

```jsx
import { Icon, Text } from 'hoi-poi-ui';
const titleComponent = (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Icon name="thickEnabled" />
        <Text style={{ marginLeft: 10 }}>Title here</Text>
    </div>
);

<Section title={titleComponent}>
    <p styles={{ padding: 10 }}>Lorem ipsum</p>
</Section>;
```

Controlled

```jsx
import { useState } from 'react';
import { Button } from 'hoi-poi-ui';

const [isOpen, setIsOpen] = useState({});
const onChange = (e) => setIsOpen(!isOpen);

<div>
    <Button color="primary" onClick={onChange}>
        Toggle Section
    </Button>
    <Section title="Title here" isOpen={isOpen} onChange={onChange}>
        <p styles={{ padding: 10 }}>Lorem ipsum</p>
    </Section>
</div>;
```

### Component tree

---

-   root - root element
-   header - header wrapper
-   title - header title text
-   [react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars/blob/master/docs/API.md)
-   [Text](#/Typography?id=text)

'root', 'header', 'title', 'react-animate-height', 'removeIcon'
