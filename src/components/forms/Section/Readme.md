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
        <Text type="bold" style={{ marginLeft: 10 }}>
            Title here
        </Text>
    </div>
);

<Section title={titleComponent}>
    <p styles={{ padding: 10 }}>Lorem ipsum</p>
</Section>;
```

### Component tree

---

-   root - root element
-   header - header wrapper
-   title - header title text
-   [react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars/blob/master/docs/API.md)
-   [Text](#/Typography?id=text)

'root', 'header', 'title', 'react-animate-height', 'removeIcon'
