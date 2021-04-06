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
        title="or drop files here"
        buttonLabel="Select file"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
    />
</div>;
```

Horizontal label:

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
        labelMode="horizontal"
        multiple={false}
        title="or drop files here"
        buttonLabel="Select file"
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
    />
</div>;
```

Preview Images:

```jsx
import { useState } from 'react';

const [state, setState] = useState([]);
const onDrop = (acceptedFiles) => {
    setState([...state, ...acceptedFiles]);
};

const onCrop = (file, index) => {
    const files = [...state];

    files[index] = file;
    setState(files);
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
        title="Drop files here"
        subtitle="Logo image shouyld be at least 609x81px"
        buttonLabel="Select file"
        onCrop={onCrop}
        onDrop={onDrop}
        onRemove={onRemove}
        files={state}
        multiple
        isFullWidth
        previewImages
        // cropAspect={16 / 9}
        cropImages
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
        title="or drop files here"
        buttonLabel="Select file"
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
        title="or drop files here"
        buttonLabel="Select file"
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
        title="or drop files here"
        buttonLabel="Select file"
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
