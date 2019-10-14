Simple with text:

```jsx
<div>
    <div style={{ display: 'flex' }}>
        <CircularProgress value={10} size="small" text="10%" />
        <CircularProgress value={50} size="medium" text="50%" />
        <CircularProgress value={75} size="large" text="75%" />
    </div>
    <br />
    <div style={{ display: 'flex' }}>
        <CircularProgress value={10} type="success" size="small" text="10%" />
        <CircularProgress value={50} type="success" size="medium" text="50%" />
        <CircularProgress value={75} type="success" size="large" text="75%" />
    </div>
    <br />
    <div style={{ display: 'flex' }}>
        <CircularProgress value={10} type="warning" size="small" text="10%" />
        <CircularProgress value={50} type="warning" size="medium" text="50%" />
        <CircularProgress value={75} type="warning" size="large" text="75%" />
    </div>
    <br />
    <div style={{ display: 'flex' }}>
        <CircularProgress value={10} type="danger" size="small" text="10%" />
        <CircularProgress value={50} type="danger" size="medium" text="50%" />
        <CircularProgress value={75} type="danger" size="large" text="75%" />
    </div>
</div>
```

Custom content

```jsx
import { Text } from 'hoi-poi-ui';

<div>
    <div style={{ display: 'flex' }}>
        <CircularProgress value={75} type="success" size="large">
            <Text>Good!</Text>
        </CircularProgress>
    </div>
</div>;
```

### Component tree

---

-   root - root element
-   [CircularProgressBar](https://github.com/kevinsqi/react-circular-progressbar)
