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
        cropAspect={16 / 9}
        cropImages
    />
</div>;
```

Upload progress:

```jsx
import { useState } from 'react';

const file = new File([''], 'file.txt', { type: 'text/plain', lastModified: Date.now() });
const [files, setFiles] = useState(
    [file].map((file) =>
        Object.assign(file, {
            id: Date.now(),
        }),
    ),
);
const [filesData, setFilesData] = useState({});

const uploadFilesData = (data) => {
    setFilesData({ ...filesData, ...data });
};

const uploadFile = (file) =>
    new Promise((resolve, reject) => {
        let progress = 0;
        let interval = setInterval(function () {
            uploadFilesData({
                [file.id]: {
                    loading: true,
                    progress,
                    error: false,
                },
            });
            progress = progress + 10;
        }, 300);
        setTimeout(() => {
            clearInterval(interval);
            if (Math.random() < 0.5) resolve();
            else reject();
        }, 3000);
    });

const onDrop = (acceptedFiles) => {
    const acceptedFilesData = acceptedFiles.reduce(
        (acc, el) => ({ ...acc, [el.id]: { loading: true, progress: 0, error: false } }),
        {},
    );
    const newFiles = [...files, ...acceptedFiles];

    setFiles(newFiles);
    setFilesData({ ...filesData, ...acceptedFilesData });
    acceptedFiles.forEach((file) => {
        uploadFile(file)
            .then(() => {
                setFilesData({
                    ...filesData,
                    [file.id]: {
                        loading: false,
                        progress: null,
                        error: false,
                    },
                });
            })
            .catch(() => {
                setFilesData({
                    ...filesData,
                    [file.id]: {
                        loading: false,
                        progress: null,
                        error: true,
                    },
                });
            });
    });
};

const onRemove = (deletedFile) => {
    if (filesData[deletedFile.id]) {
        const newFilesData = { ...filesData };
        delete newFilesData[deletedFile.id];
        setFilesData(newFilesData);
    }
    setFiles(files.filter((file) => !(file.id === deletedFile.id)));
};

<div>
    <FilePicker
        label="File"
        title="Drop file here"
        subtitle="Only one file at time"
        buttonLabel="Select file"
        onDrop={onDrop}
        onRemove={onRemove}
        files={files}
        filesData={filesData}
        isFullWidth
        previewImages
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
