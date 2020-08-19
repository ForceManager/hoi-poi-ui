Horizontal label:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (files) => {
    setState([...state, ...files]);
};

const onRemove = (file) => {
    console.log('onRemove', file);
    setState(state.filter((el) => el.lastModified !== file.lastModified));
};

<div>
    <FilePicker
        label="File"
        placeholder="Drag and drop or click to upload"
        placeholderActive="Drop file to upload"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        limit={3}
    />
</div>;
```

<!-- Vertical label:

```jsx
import { useState } from 'react';

const [state, setState] = useState({});
const onChange = (field) => {
    return (e) => {
        setState({ ...state, [field]: e && e.target ? e.target.value : '' });
    };
};

<div>
    <FilePicker
        labelMode="vertical"
        label="Lorem ipsum"
        placeholder="Write here"
        onChange={onChange(3)}
        value={state[3]}
    />
</div>;
``` -->

### Component tree

---

-   root - root element
-   input - Native input
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
