Horizontal label:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        placeholder="Drag and drop or click to upload"
        placeholderActive="Drop file to upload"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
    />
</div>;
```

Vertical label:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onRemove = (file) => {
    setState(state.filter((el) => el.lastModified !== file.lastModified));
};

<div>
    <FilePicker
        label="File"
        labelMode="vertical"
        multiple={false}
        placeholder="Drag and drop or click to upload"
        placeholderActive="Drop file to upload"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
    />
</div>;
```

Limit:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        placeholder="Drag and drop or click to upload"
        placeholderActive="Drop file to upload"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        limit={1}
    />
</div>;
```

Accept:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        placeholder="Drag and drop or click to upload"
        placeholderActive="Drop file to upload"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        accept={['application/zip', 'application/vnd.rar']}
    />
</div>;
```

Full Width:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onRemove = (deletedFile) => {
    setState(
        state.filter(
            (file) =>
                !(
                    file.name === deletedFile.name &&
                    file.size === deletedFile.size &&
                    file.type === deletedFile.type
                ),
        ),
    );
};

<div>
    <FilePicker
        label="File"
        placeholder="Drag and drop or click to upload"
        placeholderActive="Drop file to upload"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        isFullWidth={true}
    />
</div>;
```

### Component tree

---

-   root - root element
-   input - Native input
-   error - Error wrapper
-   formControl - Input wrapper excluding label
-   [Label](#/Forms?id=label)
